//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<i class="far fa-clock"></i>
					</div>
					<div className="col">{props.digitSix % 10}</div>
					<div className="col">{props.digitFive % 10}</div>
					<div className="col">{props.digitFour % 10}</div>
					<div className="col">{props.digitThree % 10}</div>
					<div className="col">{props.digitTwo % 10}</div>
					<div className="col">{props.digitOne % 10}</div>
				</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function () {
	let six = Math.floor(counter / 100000);
	let five = Math.floor(counter / 10000);
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	//render your react application
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
