import { Wrapper } from '../ui/WrapperContainer';
import { Header } from '../components/Head/Head';

export default function Now() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="Now" />
                    <p>This is the Now page</p>
                </>
            }
        />
    );
}
