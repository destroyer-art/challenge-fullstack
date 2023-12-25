import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '../../components/atoms/Label';

import '@testing-library/jest-dom';

describe('Label Component', () => {
  test('Renders the label with the correct "for" attribute', () => {
    render(<Label htmlFor="testId">Test Label</Label>);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
    
    expect(labelElement).toHaveAttribute('for', 'testId');
  });

  test('Renders the label with custom styles', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    render(<Label htmlFor="testId" style={customStyle}>Styled Label</Label>);

    const labelElement = screen.getByText('Styled Label');
    expect(labelElement).toBeInTheDocument();
    
    expect(labelElement).toHaveStyle({ color: 'red', fontSize: '16px' });
  });
});
