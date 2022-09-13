import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "../prod/productos.json";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;