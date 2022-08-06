import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from './App'

describe('test routes', () => {
  it('should return hello world', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello Vite + React!')).toBeInTheDocument()
  })
})
