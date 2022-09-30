import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);


    const renderList = products.map((product) => {
        const { id, title, image, price, category, description } = product;

        return (
            <>
                <div className="four wide column " key={id}>
                    <Link to={`/product/${id}`}>
                        <div className="ui link cards" style={{ width: "100%", height: "420px", paddingTop: "10px" }}>
                            <div className="card" >
                                <div className="image">
                                    <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "contain", objectPosition: "center" }} />
                                </div>
                                <div className="content">
                                    <div className="header">{title.slice(0, 50)}</div>
                                    <div className="meta price" style={{ color: "blue" }}>$ {price}</div>
                                    <div className="meta">{category}</div>
                                    <div className="meta" style={{ fontStyle: "italic" }}> {description !== null ? description.slice(0, 60) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aliquid!"}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div >
            </>
        )
    });

    return (
        <>
            {renderList}
        </>
    )

}

export default ProductComponent
