import { Navbar } from '../Navbar/Navbar';
import { WorkCard } from './WorkCard';

import data from '../../data/workExperience.json';

export const WorkHandler = () => {
    const workData = data;
    return (
        <>
            <Navbar />
            <header className="content-center">
                <div>
                    <hgroup>
                        <h1>Where I have left a mark</h1>
                        <p>
                            Even if it wasn&apos;t easy to change my whole
                            profesional carrier to sofware engineering, I
                            managed to land some really cool projects and
                            companies on my way.
                        </p>
                        <p>Last update: 28 August 2022</p>
                    </hgroup>

                    <div>
                        {workData.map((work) => {
                            return (
                                <WorkCard
                                    key={work.id}
                                    companyName={work.companyName}
                                    description={work.description}
                                    stack={work.stack}
                                    detailsLink={work.detailsLink}
                                />
                            );
                        })}
                    </div>
                </div>
            </header>
        </>
    );
};
