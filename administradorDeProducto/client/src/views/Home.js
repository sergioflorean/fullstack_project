import React from "react"
import ProductMan from '../components/ProductMan'
import ProductList from '../components/ProductList';

import { useEffect, useState } from 'react';

import axios from 'axios';
const Home = () => {
    return (
        <div>
            <ProductMan />
            <ProductList />
        </div>
    )

}

export default Home;