import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';
import FavProvider from './context/FavContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <ThemeProvider>
            <CartProvider>
                <FavProvider>
                    <App />
                </FavProvider>
            </CartProvider>
        </ThemeProvider>
    </BrowserRouter>

);