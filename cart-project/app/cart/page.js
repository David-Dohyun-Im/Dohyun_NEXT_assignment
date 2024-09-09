// app/cart/page.js
'use client';
import useCartStore from '../../stores/cartStore';
import Link from 'next/link';

export default function Cart() {
    const { items, removeItem, updateQuantity } = useCartStore();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">장바구니</h1>
            {items.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item) => (
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
                                    onClick={() => removeItem(item.id)}
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
