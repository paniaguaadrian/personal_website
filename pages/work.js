import { Wrapper } from '../ui/WrapperContainer';
import { Header } from '../components/Head/Head';
import { WorkHandler } from '../components/Work/WorkHandler';

export default function WorkPage() {
    return (
        <Wrapper
            content={
                <>
                    <Header title="Work experience" />
                    <WorkHandler />
                </>
            }
        />
    );
}
