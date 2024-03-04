import MenuItems from '@/app/_components/sidebar/MenuItems';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('clicking on a menu item navigates to the correct path', () => {
  const menuItems = [
    { title: 'Home', path: '/', icon: <span>Home Icon</span> },
  ];

  render(<MenuItems menuItems={menuItems} />);
  const homeMenuItem = screen.getByText('Home Icon');
  userEvent.click(homeMenuItem);
  expect(window.location.pathname).toBe('/');
});
