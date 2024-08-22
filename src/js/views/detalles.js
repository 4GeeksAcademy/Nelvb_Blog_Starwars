import React from 'react';
import { useParams } from "react-router-dom";


export const Detalles = () => {
	const { id } = useParams(); // obtener el ID del elemento desde la URL

	return (
		<div>
			<h1>Descripciones</h1>
{/*Aquí irá la lógica para mostrar los detalles*/}


		</div>
	);
};
	