import { Wrapper } from '../../ui/WrapperContainer';
import { Header } from '../../components/Head/Head';
import { Bootcamp } from '../../components/Bootcamp/Bootcamp';

export default function BootcampPage() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="Java Bootcamp" />
                    <Bootcamp />
                </>
            }
        />
    );
}
