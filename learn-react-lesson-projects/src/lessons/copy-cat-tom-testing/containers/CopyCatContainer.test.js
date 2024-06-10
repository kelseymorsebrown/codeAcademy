import { CopyCatContainer } from './CopyCatContainer';
import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import 'regenerator-runtime';

it('Should display copied text', async () => {
  render(<CopyCatContainer />);

  const input = screen.getByRole('textbox');

  userEvent.type(input, 'Hello World!');

  const copiedText = await screen.findByText('Hello World!');
  expect(copiedText).toBeInTheDocument();
});

it('Should remove copied text after putting on tape', async () => {
  render(<CopyCatContainer />);

  const textToCopy = 'My mouth is shut';

  const input = screen.getByRole('textbox');
  userEvent.type(input, textToCopy);

  const copiedText = await screen.findByText(textToCopy);
  expect(copiedText).toBeInTheDocument();

  const image = screen.getByRole('button', { name: /copycat/i });
  userEvent.click(image);

  await waitFor(() => {
    const disappearingText = screen.queryByText(textToCopy);
    expect(disappearingText).not.toBeInTheDocument();
  });
});

it('Should display copied text after removing tape', async () => {
  render(<CopyCatContainer />);

  const textToCopy = 'Eventually this will appear';

  const copycat = screen.getByRole('button', { name: /copycat/i });
  userEvent.click(copycat);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, textToCopy);

  const quietcat = await screen.findByRole('button', { name: /quietcat/i });
  userEvent.click(quietcat);

  const copiedText = await screen.findByText(textToCopy);

  expect(copiedText).toBeInTheDocument();

  await waitFor(() => {
    const copiedText = screen.queryByText(textToCopy);
    expect(copiedText).toBeInTheDocument();
  });
});
