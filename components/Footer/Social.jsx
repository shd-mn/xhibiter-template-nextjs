import { socialIcons } from './data/constants';

function Social() {
    return (
        <ul className="flex gap-4">
            {socialIcons.map((Icon, idx) => (
                <li key={idx}>
                    <a href="#" className="text-dark duration-200">
                        <Icon className="h-5 w-5" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Social;
