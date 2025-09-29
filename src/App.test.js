import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter as BrowserRouter } from 'react-router';
import App from './App.js';

test('Booking confirmation is rendered', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const bookingPageBtn = screen.getByTestId("book-btn");
    fireEvent.click(bookingPageBtn);
    const dateSelector = screen.getByTestId("date-selector");
    fireEvent.change(dateSelector, { target: { value: "2025-09-28" } });
    const timeSelector = screen.getByTestId("time-selector");
    fireEvent.change(timeSelector, { target: { value: "17:00"} });
    const confirmBtn = screen.getByTestId("submit-btn");
    fireEvent.click(confirmBtn);
    const headingElement = screen.getByText("Booking Successful");
    expect(headingElement).toBeInTheDocument();
})

test('Booking button is disabled if no date or no time', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    const bookingPageBtn = screen.getByTestId("book-btn");
    fireEvent.click(bookingPageBtn);
    const confirmBtn = screen.getByTestId("submit-btn");
    expect(confirmBtn).toHaveAttribute('disabled');

    const dateSelector = screen.getByTestId("date-selector");
    fireEvent.change(dateSelector, { target: { value: "2025-09-28" } });
    expect(confirmBtn).toHaveAttribute('disabled');

    const timeSelector = screen.getByTestId("time-selector");
    fireEvent.change(timeSelector, { target: { value: "17:00"} });
    expect(confirmBtn).not.toHaveAttribute('disabled');    
})