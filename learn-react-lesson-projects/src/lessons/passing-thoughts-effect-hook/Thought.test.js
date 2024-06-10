import React from 'react';
import { Thought } from './Thought.js';
import { AddThoughtForm } from './AddThoughtForm.js';
import { default as ThoughtApp } from './App.js';

import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Import render and screen here
it('Displays the Thought component', async () => {
  // Pass to Thought component as thought prop
  const thoughtText = 'learn react testing library';
  render(<Thought thought={{ text: thoughtText }} removeThought={() => {}} />);

  // screen.debug();

  const thought = screen.getByText(thoughtText);
  expect(thought).toBeInTheDocument();
});

it('Should have header text Passing Thoughts', () => {
  render(<ThoughtApp />);
  // Test App header text here
  const headerText = 'Passing Thoughts';
  const header = screen.getByText(headerText);
  expect(header).toHaveTextContent(headerText);
});

it('Should have button enabled', () => {
  render(<Thought thought={{ text: 'Hello' }} removeThought={() => {}} />);
  // Test status of button here
  const button = screen.getByRole('button');

  expect(button).toBeEnabled();
});

it('"Oreos are delicious" should not appear', () => {
  render(<ThoughtApp />);
  // Add testing logic here
  const emptyThought = screen.queryByText('Oreos are delicious');
  expect(emptyThought).toBeNull();
});

it('Should show new thought to be present', async () => {
  render(<ThoughtApp />);

  // The code below mimics a user posting a thought with text 'Oreos are delicious'
  const addThoughtInput = screen.getByRole('textbox');
  const addButton = screen.getByText('Add');
  userEvent.type(addThoughtInput, 'Oreos are delicious');
  userEvent.click(addButton);

  // Modify testing logic here
  const thought = await screen.findByText('Oreos are delicious');
  expect(thought).toBeInTheDocument();
});

it('Clicking the x button should remove a thought', async () => {
  render(<ThoughtApp />);

  // Since there are multiple '×' buttons, we are using the .getAllByText() method which returns an array. We are then extracting the first button from the array which belongs to the Thought with text 'This is a place for your passing thoughts.'
  const button = screen.getAllByText('×')[0];

  // TODO: Mimic clicking on the button
  userEvent.click(button);

  // We grab the thought again. It should be null after we clicked the '×' button using userEvent.
  const removedThought = screen.queryByText(
    'This is a place for your passing thoughts.'
  );
  expect(removedThought).toBeNull();
});

it('Should add a new thought', async () => {
  render(<ThoughtApp />);
  // Grab the text box and the submit button.
  const input = screen.getByRole('textbox');
  const submit = screen.getByText('Add');

  // TODO: Add testing logic to simulate user interactions here

  userEvent.type(input, 'Did I forget my keys?');
  userEvent.click(submit);
  // Assert that the thought appears
  const thought = await screen.findByText('Did I forget my keys?');
  expect(thought).toBeInTheDocument();
});

it('Should show Thought to be removed', async () => {
  render(<ThoughtApp />);
  const input = screen.getByRole('textbox');
  const submit = screen.getByText('Add');
  userEvent.type(input, 'I have to call my mom.');
  userEvent.click(submit);

  //Write your test logic here!
  await waitFor(() => {
    const thought = screen.queryByText('I have to call my mom.');
    expect(thought).toBeNull();
  });
});
