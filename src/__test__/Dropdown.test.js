import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from '../components/Dropdown';

describe('Dropdown', () => {
  it('renders and toggles the dropdown menu', () => {
    const menu = [
      { id: 1, label: 'Option 1', onClick: jest.fn() },
      { id: 2, label: 'Option 2', onClick: jest.fn() },
    ];

    const { getByText, container } = render(
      <Dropdown menu={menu} />
    );

    const dropdownButton = getByText('Dropdown');
    fireEvent.click(dropdownButton);

    const option1 = getByText('Option 1');
    const option2 = getByText('Option 2');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    fireEvent.click(option1);
    fireEvent.click(option2);

    fireEvent.click(dropdownButton);

    expect(container.querySelector('.list')).toHaveClass('show');

    expect(container).toMatchSnapshot();
  });

  it('applies custom label and custom class names', () => {
    const customLabel = 'Custom Dropdown';
    const customClassName = 'custom-dropdown';
    const { container } = render(
      <Dropdown label={customLabel} className={customClassName} menu={[]} />
    );

    const dropdownButton = container.querySelector('.dropdown');
    expect(dropdownButton).toBeInTheDocument();
    expect(dropdownButton).toHaveClass('custom-dropdown');

    expect(container).toMatchSnapshot();
  });
});
