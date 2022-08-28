import Link from 'next/link';
import { Navbar } from '../Navbar/Navbar';

export const Now = () => {
    return (
        <>
            <Navbar />
            <header className="content-center">
                <div>
                    <hgroup>
                        <h1>Keep coding, keep learning</h1>
                        <p>
                            Here you can find the latest things that I&apos;m
                            doing right now like learning a new language,
                            reading a new tech book or thinking on my next steps
                        </p>
                        <p>Last update: 28 August 2022</p>
                    </hgroup>

                    <hgroup>
                        <h4>🏫 Master Java and SQL at Ironhack Bootcamp</h4>
                        <ul>
                            <li>
                                2 years after my Full Stack Web Development
                                bootcamp I will learn and master Backend
                                development with Java and SQL at{' '}
                                <a
                                    href="https://www.ironhack.com/en"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ironhack&apos;s bootcamp.
                                </a>
                            </li>

                            <li>
                                As a professional developer I didn&apos;t have
                                many opportunities to work on the backend side.
                                Normally I&apos;m more focused on the frontend
                                logic.
                            </li>
                            <li>
                                That&apos;s why I&apos;ve decided to be a more
                                complete developer thank&apos;s to the good
                                teacher and programm that Ironhack has.
                            </li>
                        </ul>
                        <Link href="/now/bootcamp">
                            <a>
                                Check my full journey at Ironhack Java Edition
                            </a>
                        </Link>
                        <a></a>
                    </hgroup>

                    <hgroup>
                        <h4>📖 Head First Java - 3rd Edition</h4>
                        <ul>
                            <li>
                                In order to learn efficiently Java, I made a
                                research on the net to find the best book for
                                begginers. I&apos;ve ended up with this one and
                                I&apos;m enjoying it a lot.
                            </li>
                            <li>
                                Read this book will help me to understand and
                                take the maximum profit of the bootcamp that
                                I&apos;m doing.
                            </li>
                        </ul>
                        <a></a>
                    </hgroup>

                    <hgroup>
                        <h4>⛓️ Blockchain, Solidity and JavaScript</h4>
                        <ul>
                            <li>
                                1 year ago I discovered the power of the
                                blockchain space and technology. I just get in
                                love with that and I&apos;m learning at my own
                                path all the necessary to became a Blockchain
                                Engineer.
                            </li>
                            <li>
                                On that case, no Bootcamp. This time will be the{' '}
                                <a
                                    href="https://github.com/smartcontractkit/full-blockchain-solidity-course-js"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Patrick Collins course
                                </a>
                                . One of the most loved courses out there to
                                learn Blockchain and Solidity in deep.
                            </li>
                        </ul>
                        <a></a>
                    </hgroup>

                    <hgroup>
                        <h4>⌛ Pipelines, CI/CD and Github actions</h4>
                        <ul>
                            <li>
                                At Travelport, there are some important
                                practices that we do in order to deliver 200
                                different repositories orchestrated under
                                microservices and microfrontends.
                            </li>
                            <li>
                                One of them is how to deliver our code to
                                development or production environements, and the
                                answer is Azure Pipelines.
                            </li>
                            <li>
                                On my case, I&apos;ve used GitHub actions and
                                Vercel to create my own pipeline and checks
                                before I merge code. It takes in count also the
                                pull requests that I made to my project in order
                                to be as much professional as I can.
                            </li>
                        </ul>
                        <a
                            href="https://github.com/paniaguaadrian/personal_website"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Check this portfolio repository
                        </a>
                        <a></a>
                    </hgroup>
                </div>
            </header>
        </>
    );
};
