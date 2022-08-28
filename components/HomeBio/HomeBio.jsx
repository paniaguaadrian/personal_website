import Link from 'next/link';

export const HomeBio = () => {
    return (
        <header className="content-center">
            <div>
                <hgroup>
                    <h1>Adrian Breadandwater,</h1>
                    <h6>
                        Software Engineer in<span className="red"> ♥️ </span>{' '}
                        with JavaScript and Java
                    </h6>
                    <p>Aspiring Web3.0 space Engineer</p>
                </hgroup>

                <hgroup>
                    <h4>Keep coding, keep learning</h4>
                    <Link href="/now">
                        <a>Discover what I&apos;m doing right now</a>
                    </Link>
                    <a></a>
                </hgroup>

                <hgroup>
                    <h4>Professional web builder</h4>
                    <ul>
                        <li>
                            JS, TS, React, GraphQL, Node, Express, REST,
                            Websockets
                        </li>
                        <li>
                            Plain CSS/SCSS, Tailwind, MaterialUI, Bootstrap,
                            AntUI, ChakraUI
                        </li>
                        <li>Git, GitHub, BitBucket, GitHub Actions, Jira</li>
                        <li>SAFe, Agile, Scrum methodologies</li>
                        <li>TDD with Jest and React Testing Library</li>
                        <li>Strong interest in the sector of blockchain</li>
                        <li>
                            Easy going with Design, Product and Management teams
                        </li>
                    </ul>
                    <Link href="/work">
                        <a>Check my professional experience here</a>
                    </Link>
                    <a></a>
                </hgroup>

                <hgroup>
                    <h4>My way to Web3.0</h4>
                    <ul>
                        <li>
                            <Link href="/blockchain-minimal">
                                <a>Minimal projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="blockchain-hackathon">
                                <a>Chainlink Hackathon</a>
                            </Link>
                        </li>
                    </ul>
                    <a></a>
                </hgroup>

                <hgroup>
                    <h4>Interesting projects</h4>
                    <Link href="/projects">
                        <a>Discover what I have done in the past</a>
                    </Link>
                    <a></a>
                </hgroup>

                <div>
                    <a
                        href="mailto:paniaguasanchezadrian@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get in touch quickly 📨
                    </a>
                </div>
            </div>
        </header>
    );
};
