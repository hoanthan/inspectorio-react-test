import { render, screen } from '@testing-library/react';
import App from './App';

describe(App.name, () => {
  it("should render default app layout", () => {
    render(<App />);
    const defaultLayout = screen.getByTestId('DefaultLayout__root')
    expect(defaultLayout).toBeInTheDocument();
  })
});
