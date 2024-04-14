import Link from 'next/link';
import React from 'react';

function PrimaryBtn({ title, href }) {
    return (
        <Link
            class="shadow-accent-volume inline-block whitespace-nowrap rounded-full bg-primary px-8 py-3 text-center text-white  transition-all hover:bg-primary-hover"
            href={href}
        >
            {title}
        </Link>
    );
}

export default PrimaryBtn;
