import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
const { store }= useContext(Context);

	return (
		<nav className="navbar navbar-light">
			<div className='container-fluid justify-content-betwen'>
				<Link to="/">
					<img
					src="https://purodiseno.lat/wp-content/uploads/2022/05/STAR-WARS.jpg" 
					alt="Star Wars Logo" 
					className="navbar-logo"
					/>
				</Link>


				<p className='navbar-text text-center mx-auto star-wars-text'>
					Hace mucho tiempo, en una <br />galaxia lejana, muy lejana....

				</p>

				<Link to="/favoritos">
					<button className="btn btn-primary">
						Favoritos: {store.favorites ? store.favorites.length : 0}</button>
				</Link>
			</div>
		</nav>
	);
};
