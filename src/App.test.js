import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home component', () => {
  render(<App />);
  const linkElement = screen.getByText("Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży Ci, o czym jest nasza strona.");
  expect(linkElement).toBeInTheDocument();
});