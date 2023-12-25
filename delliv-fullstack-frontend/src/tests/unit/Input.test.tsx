import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../../components/atoms/Input';

import '@testing-library/jest-dom';

describe('Input Component', () => {
  test('Renders the input correctly', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('Accepts value and calls the onChange function', () => {
    const onChangeMock = jest.fn();
    render(<Input value="Test" onChange={onChangeMock} />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    
    fireEvent.change(inputElement, { target: { value: 'New value' } });

    expect(inputElement.value).toBe('Test');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });

  test('Accepts the placeholder attribute', () => {
    render(<Input placeholder="Type here" />);
    const inputElement = screen.getByPlaceholderText('Type here');
    expect(inputElement).toBeInTheDocument();
  });
});
