import { Wrapper } from '../ui/WrapperContainer';
import { Header } from '../components/Head/Head';
import { Navbar } from '../components/Navbar/Navbar';

export default function Now() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="Now" />
                    <Navbar />
                    <p>This is the Now page</p>
                </>
            }
        />
    );
}
