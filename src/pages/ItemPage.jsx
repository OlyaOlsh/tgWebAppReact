import React from 'react';
import img from "./../imagesItem/imageBig1.jpg";
import "./../pages/ItemPage.css";


const ItemPage = () => {
    return ( <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Яблоки</h1>

                <img src={img} alt="" class="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Описание</p>
                </div>

            </div>
        </div>
    </main>

    );
};

export default ItemPage;