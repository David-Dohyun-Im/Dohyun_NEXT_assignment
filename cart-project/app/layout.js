// app/layout.js
import './globals.css';

export const metadata = {
    title: 'Cart Project',
    description: 'A simple cart project using Next.js and Zustand',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="container mx-auto p-4">{children}</main>
            </body>
        </html>
    );
}
