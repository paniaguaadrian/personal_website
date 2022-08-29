import { useRouter } from 'next/router';
import { Wrapper } from '../../ui/WrapperContainer';
import { Header } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';

export default function WorkSpecificPage() {
    const { query } = useRouter();
    const headerTitle = `Work experience at: ${query.workName}`;

    return (
        <Wrapper
            content={
                <>
                    <Header title={headerTitle} />
                    <Navbar />
                    <p>
                        This is the {headerTitle} work page in order to create a
                        blog explaining my work.
                    </p>
                </>
            }
        />
    );
}
