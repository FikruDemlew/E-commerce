import React from "react";
import { Header } from "../Components/Header";
import { CartBox } from "../Components/cart_box";
import { Gallery } from "../Components/gallery";
import { Footer } from "../Components/footer";
export const Home = () => {
    return (
    <>
    <Header/>
    <CartBox/>
    <Gallery/>
    <div style={{width:"450px", height:"300px", textAlign:"center", margin:"20px 0 0 700px"}}><h1> Catagories </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button>Button</button></div>
    <div style={{marginLeft:"300px", marginTop:"-115px"}}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
    </div>

    <div style={{width:"450px", height:"300px", textAlign:"center", margin:"20px 0 0 700px"}}><h1> Our latest arrivals </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button>Button</button></div>

    <div style={{marginLeft:"300px"}}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"600px"} style={{margin:"20px", position:"relative"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"600px"} style={{margin:"-130px 7px 70px 8px", position:"relative"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"600px"} style={{margin:"20px", position:"relative"}}/>
    </div>

    <div style={{width:"450px", height:"300px", textAlign:"center", margin:"20px 0 0 700px"}}><h1> Our Products </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button>Button</button></div>
    <div style={{marginLeft:"300px", marginTop:"-115px"}}>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
        <img alt="Shoe" src="https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800" width={"400px"} height={"400px"} style={{margin:"20px"}}/>
    </div>
    <Footer/>
    </>
    )
}