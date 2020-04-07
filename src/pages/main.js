import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './main.css';


export default function Main({ match }){
	
	const [produtos, setProdutos] = useState([]);
	const [infos, setInfos] = useState({});
	const [page, setPage] = useState(1);
	const [atual, setAtual] = useState('');

	
	
	
	
	
	useEffect(() => {
		
		async function loadProducts(page=1) {
			const response = await api.get(`/products?page=${page}`);
			const { docs, ...infoss } = response.data;
			
			setProdutos(response.data.docs)
			setInfos(infoss)
			
			
			
		}
		
		
		
		if(page!=atual){
			loadProducts(page);
			setAtual(page);
		}
		
		
		
		
	})
	
	
	
	const prevPage = () => {
		if(page == 1) return;
		
		
		const pageNumber = page - 1;
		setPage(pageNumber);
		
		
	};
		
	
	
	const nextPage = () => {
		
		if(page == infos.pages) return;
		
		
		const pageNumber = page + 1;
		
		setPage(pageNumber);
	};
	
	
	
	
	
	return(
		
		<div className="product-list">
		{
			
			produtos.map(produto => (
				<article key={produto._id}>
				
					<strong>{produto.title}</strong>
					<p>{produto.description}</p>
					
					<Link to={`/products/${produto._id}`}>Acessar</Link>
				</article>
			
			
		))}
			
			
	
			<div className="actions">
				<button disabled={page==1} onClick={prevPage}>Anterior</button>
				<button disabled={page==infos.pages} onClick={nextPage}>Próximo</button>
			</div>
		 </div>
	
	)
}