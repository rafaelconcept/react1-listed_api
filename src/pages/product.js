import React, { Component, useState, useEffect } from 'react';
import './products.css';
import api from '../services/api';


export default function Product({ match }){
	
	const [product, setProduct] = useState('');
	
	useEffect(()=>{
		async function loadProduct(){
			const { id } = match.params;
			const response = await api.get(`/products/${id}`);
			//console.log(response)
			setProduct(response.data)
		}
	
		loadProduct()
		//console.log(match)
		
	})
	
	return(
	
		<div className="product-info">
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>
				URL: <a href={product.url}>{product.url}</a>
			</p>
		</div>
	
	
	)
	
	
}
