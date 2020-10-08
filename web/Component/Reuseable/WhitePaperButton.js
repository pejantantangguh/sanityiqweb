import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import Link from "next/link";

const styles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "35px",
      textAlign: "left",
    },
  },
  green: {
    textAlign: "left",
    fontWeight: 600,
    background: "rgb(55, 158, 50);",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  greenButton: {
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230, 0, 1) 100% )",
    width: "15rem",
    textDecoration: "none",
    borderRadius: "10px",
    margin: "20px 0",
    color: "#fff",
  },
}));

const WhitePaperButton = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.green} variant="h3" gutterBottom={true}>
          Your solution for large shops
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          The largest print shops, especially those printing diverse types of print products, need
          more than a print Management Information System (MIS). They need a complete Management
          Workflow System (MWS) capable of managing everything from quotes to inventory while
          providing a clear view into the manufacturing processes for each type of print job. Many
          shops develop a workflow at a point in time, but as the business grows, print capacity
          grows with the addition of new devices, and staff grows to support the growth, the
          workflow infrastructure is patched and augmented, but not rebuilt to the proper scale.
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          When it’s time to look at something new to manage the process of moving print from the
          point of sale to the point of delivery it’s time to look for one that is efficient, scales
          with the business, optimizes print manufacturing and adds new capabilities to
          differentiate the business. That solution is printIQ. Developed by people who understand
          print management, this cloud-based solution meets the needs of large shops regardless of
          the print technology. It opens the door to configuring a true print manufacturing workflow
          that goes beyond a traditional print MIS.
        </Typography>
        <Link href="/pdf/whitepaper/Managing-Your-Print-Production-L.pdf">
          <a>
            <Button className={classes.greenButton} variant="contained" type="submit">
              Large shop guides
            </Button>
          </a>
        </Link>
        <Typography className={classes.green} variant="h3" gutterBottom={true}>
          Your solution for mid-size shops
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          Mid-sized print franchises, commercial printers, in-plants and specialty print shops share
          common challenges when it comes to bringing in new technology to solve the challenges of
          getting work on-board and through the production process. Over time carefully designed
          best practices to optimize each activity tend to give way as software is upgraded, new
          equipment comes in, new staff are hired, and processes are overlaid with email, phone
          calls and sticky notes attached to job travelers. The work doesn’t flow as smoothly,
          putting the business at risk.
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          When the work doesn’t flow, it’s time to look at something new to manage the process of
          moving print from the point of sale to the point of delivery. An effective solution that
          is efficient, scales with the business, optimizes print manufacturing and adds new
          capabilities to differentiate the business is printIQ. Developed by people who understand
          print management, this cloud-based solution meets the needs of mid-size businesses, is
          easy to integrate with new and existing software solutions and opens the door to
          configuring a true print manufacturing workflow that goes beyond a traditional print
          Management Information System (MIS).
        </Typography>
        <Link href="/pdf/whitepaper/Managing-Your-Print-Production-M.pdf">
          <a>
            <Button className={classes.greenButton} variant="contained" type="submit">
              Medium shop guides
            </Button>
          </a>
        </Link>
        <Typography className={classes.green} variant="h3" gutterBottom={true}>
          Your Solution For Small Shops
        </Typography>
        <Typography variant="body1" gutterBottom={true}>
          Every print shop faces some common challenges when it comes to managing the process of
          moving print from the point of sale to the point of delivery. Both small in-house printing
          operations (or “in-plants”) and small print‑for‑pay (or “PSPs”) face the same issues as
          their larger counterparts, but they often have fewer resources and less dedicated support.
          The best practice is to adopt workflow processes and solutions that help to automate,
          focus on efficiency, and decrease their operational costs while increasing throughput and
          freeing up employees to work on more productive tasks.
        </Typography>

        <Link href="/pdf/whitepaper/Managing-Your-Print-Production-S.pdf">
          <a>
            <Button className={classes.greenButton} variant="contained" type="submit">
              Small shop guides
            </Button>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default WhitePaperButton;
