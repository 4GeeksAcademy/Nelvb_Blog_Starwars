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
					src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" 
					alt="Star Wars Logo" 
					className="navbar-logo"
					/>
				</Link>


				<p className='navbar-text text-center mx-auto star-wars-text'>
					Hace mucho tiempo, en una galaxia lejana, muy lejana....
				</p>
				<Link to="/favoritos">
					<button className="btn btn-primary">
						Favoritos: {store.favorites ? store.favorites.length : 0}</button>
				</Link>
			</div>
		</nav>
	);
};
