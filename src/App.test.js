import { fireEvent, render, screen } from "@testing-library/react";
import App from './App.js';

test('Renders the Booking Page', () => {
    render(<App/>);
    const bookingPageBtn = screen.getByTestId("book-btn");
    fireEvent.click(bookingPageBtn);
    const headingElement = screen.getByText("Book a table now");
    expect(headingElement).toBeInTheDocument();
})