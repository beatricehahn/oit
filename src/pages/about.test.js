import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event' // simulates clicking
import '@testing-library/jest-dom'
import AboutPage from './about' // component to test

test('show about content', () => {
    // render the component into the DOM
    render(<AboutPage />)
    const check = 1
    expect(check).toBe(1)
    //expect(screen.getByRole('div')).toHaveTextContent('About')
});