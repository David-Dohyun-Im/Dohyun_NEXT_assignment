// app/cart/page.js
'use client';
import { useCart } from '../../contexts/CartContext';
import Link from 'next/link';

export default function Cart() {
    const { cart, dispatch } = useCart();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">장바구니</h1>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="border p-4 rounded">
                                <h2 className="text-xl">{item.name}</h2>
                                <p>
                                    {item.price}원 x
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        min="1"
                                        className="w-16 mx-2 border rounded"
                                    />
                                    = {item.price * item.quantity}원
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-xl font-bold">총 금액: {total}원</p>
                </>
            )}
            <Link href="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                계속 쇼핑하기
            </Link>
        </div>
    );
}
