// app/page.js
'use client';
import useCartStore from '../stores/cartStore';
import Link from 'next/link';

const products = [
    { id: 1, name: '상품 1', price: 10000 },
    { id: 2, name: '상품 2', price: 20000 },
    { id: 3, name: '상품 3', price: 30000 },
];

export default function Home() {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">상품 목록</h1>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="border p-4 rounded">
                        <h2 className="text-xl">{product.name}</h2>
                        <p>{product.price}원</p>
                        <button
                            onClick={() => addItem(product)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            장바구니에 추가
                        </button>
                    </li>
                ))}
            </ul>
            <Link
                href="/cart"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                장바구니 보기
            </Link>
        </div>
    );
}
