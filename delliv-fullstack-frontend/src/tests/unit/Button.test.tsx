import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../components/atoms/Button';

import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('Renders the button correctly', () => {
    render(<Button>Teste</Button>);
    const buttonElement = screen.getByText('Teste');

    expect(buttonElement).toBeInTheDocument();
  });

  test('Calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Teste</Button>);
    const buttonElement = screen.getByText('Teste');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});