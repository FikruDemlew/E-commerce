import React from "react";
import { Header } from "../Components/Header";
import { CartBox } from "../Components/cart_box";
import { Footer } from "../Components/footer";

export const Shop = () => {
    return(
        <>
        <Header/>
        <CartBox/>
        <div style={{width:"400px", height:"300px", margin:"20px 0 0 200px"}}><h1> Shop </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div style={{marginLeft:"300px", marginTop:"-115px"}}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
    </div>

    <div style={{marginLeft:"300px", marginTop:"35px"}}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
    </div>

    <div style={{margin:"85px 0 30px 930px"}}>
    <button type="button" class="btn btn-secondary">Button</button>
    </div>

    <Footer/>
        </>
    )
}