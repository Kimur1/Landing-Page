import React from "react";

export const MyCard = () => {
	return (
		<div className="card" style={{ width: "14rem" }}>
			<img className="card-img-top" src="..." alt="Card image here" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					{" "}
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				</p>
				<a href="#" class="btn btn-primary">
					Go Find More
				</a>
			</div>
		</div>
	);
};
