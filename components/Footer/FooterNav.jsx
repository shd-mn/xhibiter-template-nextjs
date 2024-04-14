import Link from 'next/link';

function FooterNav({ title, data }) {
    return (
        <div>
            <h3 className="mb-6 font-calSans text-sm dark:text-white">
                {title}
            </h3>
            <ul className="flex flex-col">
                {data.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            href={item.href}
                            className="inline-block py-1 text-t-clr hover:text-primary-hover dark:hover:text-white"
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterNav;
