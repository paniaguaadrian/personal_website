import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="navbar_container">
            <ul>
                <li>
                    <Link href="/">A. BreadAndWater</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/adrian-paniagua/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/paniaguaadrian"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/BreadandwaterA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </nav>
    );
};
