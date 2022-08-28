import { Wrapper } from '../ui/WrapperContainer';
import { Header } from '../components/Head/Head';
import { Now } from '../components/Now/Now';

export default function NowPage() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="Now" />
                    <Now />
                </>
            }
        />
    );
}
