import Link from 'next/link';
import React from 'react';

function SecondaryBtn({ title, href }) {
    return (
        <Link
            className="shadow-white-volume inline-block whitespace-nowrap rounded-full bg-white text-primary px-8 py-3 text-center font-calSans transition-all hover:bg-primary-hover hover:text-white hover:shadow-none"
            href={href}
        >
            {title}
        </Link>
    );
}

export default SecondaryBtn;
