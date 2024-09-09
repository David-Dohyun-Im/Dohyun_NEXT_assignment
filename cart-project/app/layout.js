'use client';

import { CartProvider } from '../contexts/CartContext';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CartProvider>
                    <main className="container mx-auto p-4">{children}</main>
                </CartProvider>
            </body>
        </html>
    );
}
