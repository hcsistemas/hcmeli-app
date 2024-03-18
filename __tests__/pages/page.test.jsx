import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders page unchanged', () => {
    const { container } = render(<Home/>);

    expect(container)
      .toMatchSnapshot();
  });
})

