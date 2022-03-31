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
    const btn = screen.getByTestId("btnSearch");
    btn.click();
    // INPUT A DEĞER SET ET :
    el.value = "asd";
    // TODO CANSU : BUTONA TIKLAT VE POSTU KONTROL ET.

    // assertion :
    expect(el).toBeInTheDocument();
});



