import { Wrapper } from '../ui/WrapperContainer';
import { Header } from '../components/Head/Head';
import { HomeBio } from '../components/HomeBio/HomeBio';

export default function Home() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="BreadAndWater" />
                    <HomeBio />
                </>
            }
        />
    );
}
