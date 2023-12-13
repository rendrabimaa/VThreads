import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, expect, it, vi,
} from 'vitest';
import AuthInput from '.';

describe('AuthInput component', () => {
  const mockLabelEmail = 'Email';
  const mockTypeEmail = 'email';
  const mockNameEmail = 'email';
  const mockPlaceholderEmail = 'Enter email';
  const mockValueEmail = '';
  const mockOnChangeEmail = vi.fn();

  const mockLabelName = 'Full Name';
  const mockTypeName = 'text';
  const mockNameName = 'name';
  const mockPlaceholderName = 'Enter name';
  const mockValueName = '';
  const mockOnChangeName = vi.fn();

  it('renders Name input with provided props', () => {
    render(
      <AuthInput
        label={mockLabelEmail}
        type={mockTypeEmail}
        name={mockNameEmail}
        placeholder={mockPlaceholderEmail}
        value={mockValueEmail}
        onHandleChange={mockOnChangeEmail}
      />,
    );

    const labelElement = screen.getByText(mockLabelEmail);
    const inputElement = screen.getByPlaceholderText(mockPlaceholderEmail);

    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
    expect(inputElement.getAttribute('type')).toBe(mockTypeEmail);
  });

  it('triggers onChange event for Name Input', () => {
    render(
      <AuthInput
        label={mockLabelName}
        type={mockTypeName}
        name={mockNameName}
        placeholder={mockPlaceholderName}
        value={mockValueName}
        onHandleChange={mockOnChangeName}
      />,
    );

    const inputElement = screen.getByPlaceholderText(mockPlaceholderName);
    fireEvent.change(inputElement, { target: { value: 'test@test.com' } });

    expect(mockOnChangeName).toHaveBeenCalledTimes(1);
  });
});
