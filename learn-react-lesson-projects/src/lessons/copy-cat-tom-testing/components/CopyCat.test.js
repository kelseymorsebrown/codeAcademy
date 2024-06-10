import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CopyCat } from './CopyCat';

it('Displays the provided name', () => {
  render(
    <CopyCat
      name="Mack"
      value=""
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />
  );

  const header = screen.getByText('Copy Cat Mack');
  expect(header).toBeInTheDocument();
});

it('Should display input text in paragraph when isCopying is set to true', () => {
  render(
    <CopyCat
      name="Mack"
      value="Here is an input"
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />
  );

  const input = screen.getByRole('textbox');

  expect(input).toHaveValue('Here is an input');

  const text = screen.getByText('Here is an input');

  expect(text).toBeInTheDocument();
});

it('Should not display input text in paragraph when isCopying is set to false', () => {
  render(
    <CopyCat
      name="Mack"
      value="Here is an input"
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={false}
    />
  );

  const input = screen.getByRole('textbox');

  expect(input).toHaveValue('Here is an input');

  const text = screen.queryByText('Here is an input');

  expect(text).not.toBeInTheDocument();
});
