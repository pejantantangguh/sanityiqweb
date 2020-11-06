import { GoogleApiWrapper } from "google-maps-react";
import react, { Component } from "react";

export class MapContainer extends Component {
	render() {
		return (
			<>
				<p> Hello World</p>
			</>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: AIzaSyC2fOX0fXwfCJZILU - EZvMGrylCt7lmoJ0,
})(MapContainer);
