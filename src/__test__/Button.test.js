import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for extended DOM matchers
import Button from '../components/Button';

describe('Button', () => {
  it('renders with default label and handles onClick event', () => {
    const onClickMock = jest.fn(); // Mocking the onClick function
    const { getByText, container } = render(<Button onClick={onClickMock} />);
    
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn-primary');

    fireEvent.click(button); // Simulate a click event on the button

    expect(onClickMock).toHaveBeenCalled();

    expect(container).toMatchSnapshot();
  });

  it('renders with custom label and custom className', () => {
    const onClickMock = jest.fn();
    const customLabel = 'Custom Button';
    const customClassName = 'custom-class';
    const { getByText, container } = render(
      <Button
        onClick={onClickMock}
        label={customLabel}
        className={customClassName}
      />
    );

    const button = getByText(customLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn-primary');
    expect(button).toHaveClass(customClassName);

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();

    expect(container).toMatchSnapshot();
  });
});
