import React, { useEffect, useState } from 'react';
import './styles.scss';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader'; 
import Pagination from 'core/components/Pagination';
import ProductFilters from 'core/components/ProductFilters';

const Catalog = () => {

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    useEffect( () => {

        const params = {
            page: activePage,
            linesPerPage: 12
        }

        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => setIsLoading(false));

    }, [activePage]);

    return    (

        <div className="catalog-container">

            <div className="d-flex justify-content-between">

                <h1 className="catalog-title"
                    >Catálogo de Produtos
                </h1>
                <ProductFilters />

            </div>

            <div className="catalog-products">

                {isLoading ? <ProductCardLoader /> : (
                    
                    productsResponse?.content.map( product => (

                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
    
                    ))
                )}
            </div>

            {productsResponse && (
            
                <Pagination 
                    totalPages={productsResponse.totalPages} 
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )} 

        </div>

    )

};

export default Catalog;

