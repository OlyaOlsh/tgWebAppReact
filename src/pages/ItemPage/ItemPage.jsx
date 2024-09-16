import React from 'react';

import "./../ItemPage/ItemPage.css";
import { useParams } from 'react-router-dom';
import  "./../../components/ProductList/ProductList";
{/*import {ProductList} from "./../../ProductList/ProductList"; */}
{/*import ProductItem from "./../../components/ProductItem/ProductItem"; */}

import { products } from "./../../components/helpers/productsList"


{/*import img  from "./../../imagesItem/imageBig1.jpg";*/}

const ItemPage = () => {
const {id} = useParams();
const productCur = products[id];


    return ( <main className="section">
        <div className="container">
            <div className="project-details">
{console.log(productCur)};
                <h1 className="title-1">{productCur.title}</h1>

                <img src={productCur.imgBig} alt={productCur.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{productCur.description}</p>
                </div>

            </div>
        </div>
    </main>

    );
};

export default ItemPage;