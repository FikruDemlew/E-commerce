import React from "react";
import { Header } from "../Components/Header";
import { CartBox } from "../Components/cart_box";
import { Footer } from "../Components/footer";

export const Details = () => {
    return (
        <>
        <Header/>
        <CartBox/>

        <div>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{left:"110px", top:"70px", position:"relative"}}/>
            <div style={{width:"300px", left:"650px",top:"-340px", position:"relative"}}>
                <h1>Natural Honey Bottle</h1>
                <h4>$99</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br></br>
                <button style={{display:"inline-block", margin:"15px"}} type="button" class="btn btn-light">S</button>
                <button style={{display:"inline-block", margin:"15px"}} type="button" class="btn btn-light">M</button>
                <button style={{display:"inline-block", margin:"15px"}} type="button" class="btn btn-light">L</button>

                <div style={{backgroundColor:"#D9C4C4",display:"inline-block", marginTop:"20px", padding:"3 50px", width:"200px"}}>
                <p style={{}}>Add to Cart - $188</p>
                </div>

                <div style={{position:"relative", left:"245px", top:"-75px"}}>
                    <p style={{display:"block"}}>Quantity</p>
                    <button type="button" class="btn btn-light" style={{display:"inline-block"}}>-</button>
                    <button type="button" class="btn btn-light" style={{display:"inline-block"}}>1</button>
                    <button type="button" class="btn btn-light" style={{display:"inline-block"}}>+</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}