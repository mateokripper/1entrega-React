import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
//import products from "../prod/productos.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    
    const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});
		
		if (categoriaId) {
			getData.then((res) =>
				setData(res.filter((products) => products.category === categoriaId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	const onAdd = (quantity) => {
		console.log(`Compraste ${quantity} unidades`);
	};
	return (
		<>
			
			<ItemCount initial={3} stock={5} onAdd={onAdd} />
			<ItemList data={data} />
		</>
	);
};
export default ItemListContainer;