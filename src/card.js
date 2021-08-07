import React from "react";

function Card(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card mt-5">
                    <img className="card-img-top" src="https://assets.website-files.com/60131c7300605de7946be0d3/60131c7300605d6e776be117_Homepage_Results_Icon.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.Name}</h5>
                        <p className="card-text">{props.data.Description}</p>
                        <span class="badge badge-primary mr-1">Price: {props.data.Currency}{props.data.Price}</span>
                        <a href="#" className="btn btn-success ml-1" 
                        onClick={() => props.handleclick(props.data.id)}>Add to Cart</a>

                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;