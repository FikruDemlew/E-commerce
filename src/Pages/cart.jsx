import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/footer";
import { CartBox } from "../Components/cart_box";
export const Cart = () => {
    return (<div>
         <>
        <Header/>
        <CartBox/>

        <div>
            <h1>Your Chart</h1>
            <p>Not Ready to checkout? Continue Shopping</p>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"200px"} height={"200px"} style={{left:"400px", top:"70px", position:"relative"}}/>
            <div style={{width:"300px", left:"650px",top:"-140px", position:"relative"}}>
                <h2>Natural Honey Bottle</h2>
                <p>Size:L</p>
                <p>Quantity:1</p>
                <h4>$99</h4>
                <br></br>

                <div style={{position:"relative", left:"245px", top:"-75px"}}>
                    <p style={{display:"block"}}>by Vendor Name</p>
                    <p>Remove</p>
                </div>
            </div>
        </div>
        <hr style={{height:"1px" , width:"700px", backgroundColor:"black", bottom:"200px", left:"-300px", position:"relative"}}></hr>
        <div style={{position:"relative", bottom:"250px" }}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"200px"} height={"200px"} style={{left:"400px", top:"70px", position:"relative"}}/>
            <div style={{width:"300px", left:"650px",top:"-140px", position:"relative"}}>
                <h2>Natural Honey Bottle</h2>
                <p>Size:L</p>
                <p>Quantity:1</p>
                <h4>$99</h4>
                <br></br>

                <div style={{position:"relative", left:"245px", top:"-75px"}}>
                    <p style={{display:"block"}}>by Vendor Name</p>
                    <p>Remove</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    </div>)
} 