import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  const { container, getByText }  = render(<App />);
  const contents = container.querySelector(".Contents");
  const header = container.querySelector("Header");
  expect(header).not.toBeNull();
  expect(header?.children.length).toBe(2);
  expect(contents?.children.item(0)?.textContent).toBe("Test One");
  expect(contents?.children.item(1)?.textContent).toBe("Test Two");
  expect(contents?.children.item(2)?.textContent).toBe("Test Three");
  expect(contents?.children.length).toBe(3);  
});

test('when title is updated, it should pass down the new title to header component', () => {
  const { container }  = render(<App />);
  const input = container.querySelector(".TitleInput");
  const header = container.querySelector("Header"); 
  fireEvent.focus(input);
  userEvent.type(input, "Konda");
  fireEvent.click(container.querySelector('.Button'));
  expect(header?.children.item(0)?.textContent).toBe('Konda');
});


