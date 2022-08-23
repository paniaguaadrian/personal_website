import { Wrapper } from '../ui/WrapperContainer';
import { Header as Head } from '../components/Head/Head';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { About } from '../components/About/About';

export default function Home() {
    return (
        <Wrapper
            content={
                <>
                    <Head title="BreadAndWater | Home" />
                    <Navbar />
                    <Header />
                    <About />
                </>
            }
        />
    );
}
