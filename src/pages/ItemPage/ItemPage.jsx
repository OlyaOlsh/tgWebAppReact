import React from 'react';

import "./../ItemPage/ItemPage.css";
import { useParams } from 'react-router-dom';
{/*import  "./../../components/ProductList/ProductList";*/}

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { products } from "./../../components/helpers/productsList";

const ItemPage = () => {
const {id} = useParams();
const productCur = products[id];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


    return ( <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{productCur.title}</h1>

                <Slider {...settings}>
                        {productCur.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={productCur.title} className="project-details__cover" />
                            </div>
                        ))}
                </Slider>

                <div className="project-details__desc">
                    <p>{productCur.description}</p>
                </div> 

            </div>
        </div>
    </main>

    );
};

export default ItemPage;