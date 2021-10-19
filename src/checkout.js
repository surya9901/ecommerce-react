import React from "react";

function Checkout(props) {

    return (
        <>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">{props.data.Name}</h6>
                        <span>Price: {props.data.Currency}{props.data.Price}</span><br/>
                        <small className="text-muted">{props.data.Description}</small>
                    </div>
                    <div>

                        <button className="badge badge-danger badge-pill"
                            onClick={() => props.handleclick(props.data.id)}
                            style={{ border: "none" }}>X</button>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Checkout