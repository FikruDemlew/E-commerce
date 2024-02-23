import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Home } from '../Pages/home';
import { Shop } from '../Pages/shop';
import { Cart } from '../Pages/cart';
import { Details } from '../Pages/details';

const router = createBrowserRouter([
    {path :"/",
    element: <Home/>} ,

    {path :"/Shop",
    element: <Shop/>},

    {path :"/Cart",
    element: <Cart/>},

    {path :"/Details",
    element: <Details/>}
]
)

export default router