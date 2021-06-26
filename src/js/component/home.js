import React from "react";

let Bar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
