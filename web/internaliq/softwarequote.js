Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
		c = isNaN((c = Math.abs(c))) ? 4 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return (
		s +
		(j ? i.substr(0, j) + t : "") +
		i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
		(c
			? d +
			  Math.abs(n - i)
					.toFixed(c)
					.slice(2)
			: "")
	);
};

if (model.CustomerTierName.indexOf("<") > -1) {
	var teirSplit = model.CustomerTierName.split("<");
	if (teirSplit.length > 1) {
		model.CustomerSize = teirSplit[0].trim();
		model.CustomerUserLimit = parseInt(teirSplit[1]);
		model.CustomerIsSmall =
			model.CustomerSize == "Extra Small" || model.CustomerSize == "Small";
	}
}

for (var i = 0; i < model.Products.length; i++) {
	var product = model.Products[i];
	product.isFirstProduct = i === 0;
	product.breakdownColumns = product.Quantities[0].Breakdown;

	model.FromText = "your Account Manager";
	if (model.AccountManagerName === model.AMQuoteName) {
		model.FromText = "me";
	}

	var maxDisplayedDeliveries = 3;
	product.FinishingName = product.FinishingName.substring(
		(/^[\s,]+/.exec(product.FinishingName) || "").toString().length,
		product.FinishingName.length
	);

	product.deliverycount = product.Deliveries.length;
	product.excedingMaxDeliveryCount =
		product.Deliveries.length > maxDisplayedDeliveries;
	product.extraRowsText =
		"Total of " +
		(product.Deliveries.length - maxDisplayedDeliveries).toString() +
		" additional delivery address" +
		(product.Deliveries.length - maxDisplayedDeliveries > 1 ? "es" : "") +
		", please refer to the online quote for further details";

	for (var count = 0; count < product.Deliveries.length; count++) {
		var del = product.Deliveries[count];
		del.visable = count < maxDisplayedDeliveries;
	}
	// Reporting group to get all information and put it in table
	for (var j = 0; j < product.Quantities.length; j++) {
		var ParentsToProcess = [];
		var ParentOperations = [];
		var NonParentOperations = [];
		var RegularOperations = [];
		var DiscountParents = [];
		var ReportingGroups = [];
		var SiteParentOperations = [];

		var quantity = product.Quantities[j];
		var currency = quantity.CurCode;

		for (var k = 0; k < quantity.ReportingGroups.length; k++) {
			var repGroups = quantity.ReportingGroups[k];
			for (var l = 0; l < repGroups.Operations.length; l++) {
				var op = repGroups.Operations[l];
				if (op.IsParent) {
					ParentsToProcess.push(op);
				} else {
					if (
						ReportingGroups.filter(function (rg) {
							return rg.name == repGroups.Name;
						}).length == 0
					) {
						ReportingGroups.push({
							name: repGroups.Name,
							order: repGroups.ReportingCodeOrder,
							rawCost: 0,
							formattedCost: "Not Set",
						});
					}
					if (!op.IsParent && op.ParentFinishingKey == null) {
						//Regular operation
						if (RegularOperations.length == 0) {
							op.StartOfAdditionals = true;
						}
						RegularOperations.push(op);
					} else {
						NonParentOperations.push(op);
					}
				}
			}
		}

		ReportingGroups = ReportingGroups.sort(function (a, b) {
			if (a.order > b.order) {
				return 1;
			} else if (a.order < b.order) {
				return -1;
			} else {
				return 0;
			}
		});

		var TotalDays = 0;
		var TotalOnSiteDays = 0;

		var reportingGroupTotalsClone = JSON.stringify(ReportingGroups);
		var reportingGroupTotals = JSON.parse(reportingGroupTotalsClone);

		var ImplementationGroups = [];
		var hasSites = false;
		var TotalSites = 0;

		for (m = 0; m < ParentsToProcess.length; m++) {
			var parent = ParentsToProcess[m];
			var IsCore = false;
			if (
				parent.ShortName == "printIQ Enterprise License" ||
				parent.ShortName == "printIQ Enterprise License SAAS"
			) {
				IsCore = true;
			}
			var children = NonParentOperations.filter(function (o) {
				return o.ParentFinishingKey == parent.FinishingKey;
			});
			parent.Children = children;
			var groupsClone = JSON.stringify(ReportingGroups);
			parent.ReportingGroups = JSON.parse(groupsClone);
			var days = 0;
			var OnSiteDays = 0;
			var purchaseType = null;
			for (n = 0; n < children.length; n++) {
				var child = children[n];
				if (IsCore && child.ShortName == "CORE IMP") {
					// || child.ShortName == "CORE SAAS")) {
					if (ImplementationGroups.length == 0) {
						child.StartOfImp = true;
					}
					ImplementationGroups.push(child);
				} else if (
					IsCore &&
					child.ShortName == "CORE SW DISCOUNT" &&
					child.Cost !== 0
				) {
					parent.HasDiscount = true;
					parent.DiscountOp = child;
				} else {
					if (
						IsCore &&
						(child.ShortName == "CORE SW" || child.ShortName == "CORE SAAS")
					) {
						parent.Name = parent.Name + " (" + child.ComponentReference + ")";
					}
					if (child.ShortName.indexOf("TBC") > -1) {
						parent.hasTBCOps = true;
						parent.TBCOp = child;
						continue;
					}
					var group = parent.ReportingGroups.filter(function (r) {
						return (
							(child.ReportingGroup == null && r.Name == "Unnassigned") ||
							child.ReportingGroup == r.name
						);
					});
					if (group.length) {
						group = group[0];
						group.rawCost += child.Cost;
					}
					if (
						child.ComponentDesc2 !== null &&
						child.ComponentDesc2.indexOf("|") > -1
					) {
						var split = child.ComponentDesc2.split("|");
						if (!isNaN(split[0]) && !isNaN(split[1])) {
							days += parseInt(split[0]);
							OnSiteDays += parseInt(split[1]);
						}
					} else if (
						child.ComponentDesc2 !== null &&
						!isNaN(child.ComponentDesc2)
					) {
						days += parseInt(child.ComponentDesc2);
					}
					if (child.ComponentDesc1 !== null) {
						if (
							!(
								parent.ShortName.indexOf("SITE") > -1 &&
								child.ShortName.indexOf("IMP") > -1
							)
						) {
							if (purchaseType == null) {
								purchaseType = child.ComponentDesc1.trim();
							} else if (purchaseType.trim() !== child.ComponentDesc1.trim()) {
								purchaseType = "multiple - check setup";
							}
						}
					}
				}
			}

			parent.ImpDays = days;
			parent.HasImpDays = days > 0;
			parent.OnSiteImpDays = OnSiteDays;
			parent.HasOnSiteDays = OnSiteDays > 0;
			parent.PurchaseType = purchaseType == null ? "not set" : purchaseType;
			TotalDays += days;
			TotalOnSiteDays += OnSiteDays;

			for (o = 0; o < parent.ReportingGroups.length; o++) {
				var RG = parent.ReportingGroups[o];
				reportingGroupTotals[o].rawCost += RG.rawCost;
				RG.formattedCost = PrintIQ.Common.formatCurrency(
					RG.rawCost,
					quantity.CurCode,
					true
				);
			}
		}

		var SetupChildAsParent = function (op, IsTBC) {
			var groupsClone = JSON.stringify(ReportingGroups);
			op.ReportingGroups = JSON.parse(groupsClone);
			var group = op.ReportingGroups.filter(function (r) {
				return (
					(op.ReportingGroup == null && r.Name == "Unnassigned") ||
					op.ReportingGroup == r.name
				);
			});
			if (group.length) {
				group = group[0];
				group.rawCost += op.Cost;
				group.MakeTBCIfZero = IsTBC;
			}
			if (op.ComponentDesc2 !== null && op.ComponentDesc2.indexOf("|") > -1) {
				var split = op.ComponentDesc2.split("|");
				if (!isNaN(split[0]) && !isNaN(split[1])) {
					op.ImpDays = parseInt(split[0]);
					op.HasImpDays = op.ImpDays > 0;
					op.OnSiteImpDays = parseInt(split[1]);
					op.HasOnSiteDays = op.OnSiteImpDays > 0;
					TotalDays += parseInt(split[0]);
					TotalOnSiteDays += parseInt(split[1]);
				}
			} else if (op.ComponentDesc2 !== null && !isNaN(op.ComponentDesc2)) {
				op.ImpDays = parseInt(op.ComponentDesc2);
				op.OnSiteImpDays = 0;
				op.HasOnSiteDays = false;
				TotalDays += parseInt(op.ComponentDesc2);
			} else {
				if (IsTBC && op.ComponentDesc2 == "TBC") {
					op.ImpDays = "TBC";
					op.HasOnSiteDays = false;
				} else if (op.ComponentDesc2 == "Hide") {
					op.ImpDays = "";
					op.HasImpDays = false;
					op.OnSiteImpDays = "";
					op.HasOnSiteDays = false;
				} else {
					op.ImpDays = "not set";
				}
			}
			if (op.ComponentDesc1 !== null) {
				op.PurchaseType = op.ComponentDesc1;
			} else {
				op.PurchaseType = "not set";
			}

			for (o = 0; o < op.ReportingGroups.length; o++) {
				var RG = op.ReportingGroups[o];
				reportingGroupTotals[o].rawCost += RG.rawCost;
				if (
					typeof RG.MakeTBCIfZero !== "undefined" &&
					RG.MakeTBCIfZero &&
					RG.rawCost == 0
				) {
					RG.formattedCost = "TBC";
				} else {
					RG.formattedCost = PrintIQ.Common.formatCurrency(
						RG.rawCost,
						quantity.CurCode,
						true
					);
				}
			}
		};

		for (q = 0; q < ImplementationGroups.length; q++) {
			var ImpOp = ImplementationGroups[q];
			SetupChildAsParent(ImpOp, false);
		}

		for (r = 0; r < ParentsToProcess.length; r++) {
			var parent = ParentsToProcess[r];
			if (parent.ShortName.indexOf("SITE") > -1) {
				hasSites = true;
				if (SiteParentOperations.length == 0) {
					parent.StartOfSites = true;
				}
				SiteParentOperations.push(parent);
				var SiteImpFilter = parent.Children.filter(function (c) {
					return c.ShortName.indexOf("IMP") > -1;
				});
				if (SiteImpFilter.length) {
					var SiteImpOp = SiteImpFilter[0];
					SetupChildAsParent(SiteImpOp, true);
					SiteParentOperations.push(SiteImpOp);
					parent.ImpDays = "";
					parent.OnSiteImpDays = "";
					parent.HasOnSiteDays = false;

					var SiteSWFilter = parent.Children.filter(function (c) {
						return (
							c.ShortName.indexOf("SW") > -1 || c.ShortName.indexOf("SAAS") > -1
						);
					});
					if (SiteSWFilter.length) {
						var SiteSW = SiteSWFilter[0];
						if (SiteSW.ParameterValue !== null) {
							parent.NumberSites = SiteSW.ParameterValue;
							if (TotalSites !== "TBC") {
								TotalSites += SiteSW.ParameterValue;
							}
						} else {
							parent.NumberSites = "TBC";
							TotalSites = "TBC";
						}
					}
				}
			} else if (parent.hasTBCOps) {
				var TBCOp = parent.TBCOp;
				SetupChildAsParent(TBCOp, true);
				ParentOperations.push(parent);
				ParentOperations.push(TBCOp);
			} else if (parent.HasDiscount) {
				var DiscountOp = parent.DiscountOp;
				SetupChildAsParent(DiscountOp, true);
				ParentOperations.push(parent);
				ParentOperations.push(DiscountOp);
			} else if (parent.ShortName.indexOf("DISCOUNT") > -1) {
				DiscountParents.push(parent);
			} else {
				if (parent.ShortName.indexOf("3PTY") > -1) {
					parent.ImpDays = "";
					parent.OnSiteImpDays = "";
				}
				if (parent.ShortName.indexOf("IQ STORE") > -1) {
					var SWChild = parent.Children.filter(function (c) {
						return c.ShortName.indexOf("SW") > -1;
					});
					if (SWChild.length) {
						parent.Name = SWChild[0].Name;
					}
				}
				ParentOperations.push(parent);
			}
		}

		ParentOperations = ParentOperations.concat(ImplementationGroups);
		ParentOperations = ParentOperations.concat(SiteParentOperations);

		for (u = 0; u < RegularOperations.length; u++) {
			var op = RegularOperations[u];
			if (op.ShortName.indexOf("MAIL") > -1) {
				SetupChildAsParent(op, true);
			} else {
				SetupChildAsParent(op, false);
			}

			if (op.ComponentDesc2 == "Hide") {
				op.ImpDays = "";
				op.HasImpDays = false;
				op.OnSiteImpDays = "";
				op.HasOnSiteDays = false;
			}

			if (op.ParameterValue !== null) {
				if (op.ShortName.indexOf("ONSITE") > -1) {
					op.ImpDays = 0;
					op.HasImpDays = false;
					op.OnSiteImpDays = op.ParameterValue;
					TotalOnSiteDays += op.ParameterValue;
					op.HasOnSiteDays = true;
				} else if (op.ShortName.indexOf("REMOTE") > -1) {
					op.ImpDays = op.ParameterValue;
					TotalDays += op.ParameterValue;
					op.HasImpDays = true;
					op.HasOnSiteDays = false;
				}
			}
		}

		ParentOperations = ParentOperations.concat(RegularOperations);

		for (p = 0; p < reportingGroupTotals.length; p++) {
			var RGT = reportingGroupTotals[p];
			RGT.formattedCost = PrintIQ.Common.formatCurrency(
				RGT.rawCost,
				quantity.CurCode,
				true
			);
		}

		var reportingGroupTotalsWithoutDiscounts = JSON.parse(
			JSON.stringify(reportingGroupTotals)
		);

		for (v = 0; v < DiscountParents.length; v++) {
			var op = DiscountParents[v];
			op.ImpDays = "";
			op.OnSiteImpDays = "";
			op.HasOnSiteDays = false;
			op.HasImpDays = false;
			for (w = 0; w < reportingGroupTotalsWithoutDiscounts.length; w++) {
				var RG = reportingGroupTotalsWithoutDiscounts[w];
				var parentRG = op.ReportingGroups[w];
				RG.rawCost -= parentRG.rawCost;
				RG.formattedCost = PrintIQ.Common.formatCurrency(
					RG.rawCost,
					quantity.CurCode,
					true
				);
			}
		}

		quantity.ParentOps = ParentOperations;
		quantity.SiteParentOps = ParentOperations;
		quantity.ChildReportingGroups = ReportingGroups;
		quantity.DiscountOperations = DiscountParents;
		quantity.HasDiscounts = DiscountParents.length > 0;
		quantity.ReportingGroupTotals = reportingGroupTotals;
		quantity.ReportingGroupTotalsNoDiscounts = reportingGroupTotalsWithoutDiscounts;
		quantity.TotalDays = TotalDays;
		quantity.TotalOnSiteDays = TotalOnSiteDays;
		quantity.HasOnSiteDays = TotalOnSiteDays > 0;
		quantity.HasSites = hasSites;
		quantity.TotalSites = TotalSites;
	}
}
