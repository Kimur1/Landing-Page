import React from "react";

export const MyNavbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				Navbar
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight"
				id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Service
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
