import React from "react";

function Checkout(props) {
    return (
        <>
            <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">{props.data.Name}</h6>                    
                        <span>Price: {props.data.Currency}{props.data.Price}</span> <br/>
                        <small class="text-muted">{props.data.Description}</small>
                    </div>
                    <div>

                    <button class="badge badge-danger badge-pill" 
                    onClick={()=>{props.handleclick(props.data.id)}} 
                    style={{border:"none"}}>X</button>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Checkout