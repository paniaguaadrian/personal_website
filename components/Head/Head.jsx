import Head from 'next/head';

export const Header = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Welcome to Bread&Water personal website. Adrian is a Software Engineer with 3 years of experience and 3 years more as a Project Manager as a background."
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
};
