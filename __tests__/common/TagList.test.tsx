import TagList from '@/app/_components/common/search/TagList';
import { fireEvent, render, screen } from '@testing-library/react';

test('calls handleSearch function with tag label when tag is clicked', () => {
  const handleSearchMock = jest.fn();
  const tagOptions = [
    { label: 'tag1', value: 'tag1' },
    { label: 'tag2', value: 'tag2' },
  ];
  render(<TagList handleSearch={handleSearchMock} tagOptions={tagOptions} />);

  // タグがクリックされたときに handleSearch 関数が呼び出されるかを確認する
  fireEvent.click(screen.getByText('tag1'));
  expect(handleSearchMock).toHaveBeenCalledWith('tag1');

  fireEvent.click(screen.getByText('tag2'));
  expect(handleSearchMock).toHaveBeenCalledWith('tag2');
});
