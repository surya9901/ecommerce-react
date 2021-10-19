import React from "react";

function Card(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card mt-5">
                    <img className="card-img-top" src="http://placehold.it/110x80" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.Name}</h5>
                        <p className="card-text">{props.data.Description}</p>
                        <span className="badge badge-primary mr-1">Price: {props.data.Currency}{props.data.Price}</span>
                        <a href="#" className="btn btn-success ml-1" 
                        onClick={() => props.handleclick(props.data.id)}>Add to Cart</a>

                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;