import Image from 'next/image';

export const Header = () => {
    return (
        <header>
            <div className="grid">
                <div>
                    <hgroup>
                        <h1>Adrian Breadandwater,</h1>
                        <h4>
                            Software Engineer experienced on end to end Java and
                            Javascript solutions.
                        </h4>
                        <p>
                            Don&apos;t ask me for a UI design. Ask me how to
                            implement the new feature your users will love.
                        </p>
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
                <div>
                    <div>
                        <Image
                            src="https://i.ibb.co/fN4HDkj/adrian-image.jpg"
                            alt="adrian-image"
                            border="0"
                            width="500px"
                            height="340px"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
