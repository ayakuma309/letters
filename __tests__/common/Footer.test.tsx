import Footer from '@/app/_components/common/Footer';
import { render, screen } from '@testing-library/react';

test('renders Link components with correct href attributes', () => {
  render(<Footer />);

  const termsLink = screen.getByText('利用規約');
  expect(termsLink.getAttribute('href')).toBe('/terms');

  const privacyPolicyLink = screen.getByText('プライバシーポリシー');
  expect(privacyPolicyLink.getAttribute('href')).toBe('/privacy-policy');
});
