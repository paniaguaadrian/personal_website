import { Navbar } from '../components/Navbar/Navbar';

export const Wrapper = (props) => {
    return (
        <>
            <header className="container">
                <Navbar />
                {props.content}
            </header>
        </>
    );
};
