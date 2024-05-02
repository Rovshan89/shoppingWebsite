// MainPage.jsx
import './MainPage.css'
import { useState } from 'react'
import Product from './Product'

export default function MainPage() {
    const products = [
        { name: 'Apple', imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Banana', imageUrl: 'https://example.com/banana.jpg' } // Add other products as needed
    ];

    return (
        <>
            <h1>Products</h1>
            {products.map((product, index) => (
                <Product key={index} name={product.name} imageUrl={product.imageUrl} />
            ))}
        </>
    );
}
