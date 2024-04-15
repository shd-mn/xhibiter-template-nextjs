import Link from 'next/link';
import React from 'react';

function Dropdown({ title, data, className, itemClass }) {
    return (
        <div className="group relative h-full">
            <button
                type="button"
                className={`h-full p-3 font-calSans hover:text-primary-hover ${title === 'Home' && 'text-primary'}`}
            >
                {title}
            </button>
            <div
                className={`absolute -left-6 top-full hidden ${className} gap-x-2 whitespace-nowrap rounded-lg bg-white shadow-xl `}
            >
                {data.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        type="button"
                        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2 text-start font-calSans text-sm duration-100 hover:bg-gray-100 ${itemClass}`}
                    >
                        {item.icon && (
                            <span
                                className={`flex items-center justify-center rounded-full p-2 ${item.bgColor}`}
                            >
                                <item.icon />
                            </span>
                        )}
                        {item.text}
                        {item.badge && (
                            <span className="rounded-md bg-green-600 px-2 py-1 text-white">
                                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
