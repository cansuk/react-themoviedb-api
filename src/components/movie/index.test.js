import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Movies from '.';

test('Search button is on screen', () => {
    render(<Movies />);
    const el = screen.getByText(/search/i);
    // assertion :
    expect(el).toBeInTheDocument();
});

test('Search textbox is on screen', () => {
    render(<Movies />);
    const el = screen.getByPlaceholderText(/search/i);
    // assertion :
    expect(el).toBeInTheDocument();
});



