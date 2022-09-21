import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
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

	return (
		<>
			
			
			<ItemList data={data} />
		</>
	);
};
export default ItemListContainer;