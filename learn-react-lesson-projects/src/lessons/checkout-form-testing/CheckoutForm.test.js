import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckoutForm from './CheckoutForm';

it('finds name form field', () => {
  render(<CheckoutForm />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  expect(nameInput).toBeInTheDocument();
});

it('finds the email form field', () => {
  render(<CheckoutForm />);
  //Put your test logic below!
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  expect(emailInput).toBeInTheDocument();
});

it('finds the address form field', () => {
  render(<CheckoutForm />);
  //Put your test logic below!
  const addressInput = screen.getByRole('textbox', { name: /address/i });

  expect(addressInput).toBeInTheDocument();
});

it('finds the payment form field', () => {
  render(<CheckoutForm />);
  //Put your test logic below!
  const paymentInput = screen.getByRole('combobox', {
    name: /payment method/i,
  });

  expect(paymentInput).toBeInTheDocument();
});

it('finds the checkout button', () => {
  render(<CheckoutForm />);
  //Put your test logic below!
  const checkoutButton = screen.getByRole('button', { name: /checkout/i });

  expect(checkoutButton).toBeInTheDocument();
});
