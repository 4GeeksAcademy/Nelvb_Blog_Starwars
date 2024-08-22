import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Star Wars blog</h1>
			<p>
				Bienvenido al blog de Star Wars
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
