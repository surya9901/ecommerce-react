import React from "react";

function Card(props) {

    return (
        <>
            <div className="col-lg-4">
                <div className="card mt-5">
                    <img className="card-img-top" src="data:image/png;base64,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" alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.Name}</h5>
                        <p className="card-text">{props.data.Description}</p>
                        <span className="badge badge-primary mr-1">Price: {props.data.Currency}{props.data.Price}</span>
                        <button className="btn btn-success ml-1" onClick={() => props.handleclick(props.data.id)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;