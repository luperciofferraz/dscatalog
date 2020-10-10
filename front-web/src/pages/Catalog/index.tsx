import React from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';

const Catalog = () => (

    <div className="catalog-container">

        <h1 className="catalog-title"
            >Catálogo de Produtos
        </h1>
        <div className="catalog-products">
            <Link to="/Products/1"><ProductCard /></Link>
            <Link to="/Products/2"><ProductCard /></Link>
            <Link to="/Products/3"><ProductCard /></Link>
            <Link to="/Products/4"><ProductCard /></Link>
            <Link to="/Products/5"><ProductCard /></Link>
            <Link to="/Products/6"><ProductCard /></Link>
        </div>

    </div>

);

export default Catalog;

