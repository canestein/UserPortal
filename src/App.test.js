// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UserPortal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/UserPortal/i);
    expect(titleElement).toBeInTheDocument();
});
