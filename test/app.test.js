import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

describe('App > Index page', () => {
    it('should render our app and show content', () => {
        render(<Index />);

        const header = screen.getByText(/Adrian Breadandwater/i);

        expect(header).toBeInTheDocument();
    });
});
