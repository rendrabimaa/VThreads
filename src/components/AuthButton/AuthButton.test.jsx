import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import AuthButton from '.';

describe('AuthButton component', () => {
  it('renders button with children and triggers onClick event', () => {
    const mockHandleClick = vi.fn();
    const mockChildText = 'Click me';

    render(
      <AuthButton handleClick={mockHandleClick}>
        {mockChildText}
      </AuthButton>,
    );

    const buttonElement = screen.getByText(mockChildText);

    expect(buttonElement).toBeTruthy();

    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
