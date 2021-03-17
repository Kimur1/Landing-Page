import React from "react";
import { MyNavbar } from "./Navbar";
import { MyJumbotron } from "./Jumbotron";
import { MyCard } from "./Card";
import { MyFooter } from "./Footer";

//Create component
export function Home() {
	return (
		<div>
			<MyNavbar />
			<MyJumbotron />
			<div className="container">
				<div className="row">
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</div>
			</div>
			<MyFooter />
		</div>
	);
}
