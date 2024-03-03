import SearchBar from '@/app/_components/common/search/SearchBar';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

test('renders search bar with input field and search button', () => {
  render(<SearchBar handleSearch={() => {}} />);
  const inputField = screen.getByPlaceholderText(/title or keyword.../i);
  const searchButton = screen.getByText(/search/i);
  expect(inputField).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('calls handleSearch function with input value when search button is clicked', () => {
  const handleSearchMock = jest.fn();
  render(<SearchBar handleSearch={handleSearchMock} />);
  const inputField = screen.getByPlaceholderText(/title or keyword.../i);
  const searchButton = screen.getByText(/search/i);
  fireEvent.change(inputField, { target: { value: 'test' } });
  fireEvent.click(searchButton);
  expect(handleSearchMock).toHaveBeenCalledWith('test');
});
