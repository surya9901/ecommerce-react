// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Card from './card.js';
import Checkout from './checkout.js'
import { useState } from 'react';


function App() {

  let value = "$";

  // data of card

  const [products, setproduct] = useState([
    {
      id: 1,
      Name: "Product 1",
      Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",
      Currency: "$",
      Price: 10,
    },
    {
      id: 2,
      Name: "Product 2",
      Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",
      Currency: "$",
      Price: 20
    },
    {
      id: 3,
      Name: "Product 3",
      Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",
      Currency: "$",
      Price: 30
    },
    {
      id: 4,
      Name: "Product 4",
      Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",
      Currency: "$",
      Price: 30
    }
  ])


  // data push from card to checkout

  const [checkoutItems, setcheckoutItem] = useState([])
  const [total, settotal] = useState(0)

  let addToCart = (id) => {
    let product = products.find(obj => obj.id === id);
    console.log(product)
    checkoutItems.push(product)
    setcheckoutItem([...checkoutItems])
    console.log(checkoutItems)
    settotal(total + product.Price)
  }

  // to remove item from cart

  let removeitem = (id) => {
    let result = window.confirm('Confirm to delete this item from cart')
    if (result) {
      let cartIndex = checkoutItems.findIndex(obj => obj.id === id)
      settotal(total - checkoutItems[cartIndex].Price)
      checkoutItems.splice(cartIndex, 1);
      setcheckoutItem([...checkoutItems])
    }
  }

  return (
    <>
      {/* Nav bar */}

      <Header></Header>

      {/* Card display */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">

              {
                products.map(obj => {
                  return <Card data={obj} handleclick={addToCart}></Card>
                })
              }

            </div>
          </div>

          {/* checkout */}

          <div class="col-lg-4 order-md-2 mt-5">
            <h4 class="d-flex justify-content-between align-items-center text-muted">Total Price: {value}{total}
              <span><button className="btn btn-warning">Checkout</button></span></h4>

            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              {checkoutItems.length === 0 ?
                <span class="badge badge-secondary badge-pill">0</span> : <span class="badge badge-secondary badge-pill">{checkoutItems.length}</span>
              }
            </h4>
            {
              checkoutItems.map((obj) => {
                return <Checkout data={obj} handleclick={removeitem}></Checkout>
              })
            }


          </div>
        </div>
      </div>

    </>
  );
}

export default App;
