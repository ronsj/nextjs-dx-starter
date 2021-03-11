import { render, screen } from '@testing-library/react'
import Hello from '../../components/Hello'

describe('Hello', () => {
  it('Renders "Hello World"', () => {
    render(<Hello name="World" />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
