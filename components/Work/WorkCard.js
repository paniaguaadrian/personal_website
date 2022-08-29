import Link from 'next/link';

export const WorkCard = ({ companyName, description, stack, detailsLink }) => {
    return (
        <div>
            <article>
                <h4>{companyName}</h4>
                <p>{description}</p>
                <footer>
                    <p style={{ fontSize: '14px', margin: '0.5rem 0' }}>
                        {stack}
                    </p>
                    <Link href={`/work/${detailsLink}`}>
                        Read in deep my experience
                    </Link>
                </footer>
            </article>
        </div>
    );
};
