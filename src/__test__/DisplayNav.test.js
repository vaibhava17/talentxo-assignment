import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayNav from '../components/DisplayNav';

describe('DisplayNav', () => {
  it('renders with default previous and next buttons', () => {
    const { getByText } = render(<DisplayNav />);
    
    const prevButton = getByText('Previous');
    const nextButton = getByText('Next');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('renders with custom previous and next button labels and handles onClick events', () => {
    const prevBtnProps = {
      label: 'Back',
      onClick: jest.fn(),
    };
    const nextBtnProps = {
      label: 'Forward',
      onClick: jest.fn(),
    };

    const { getByText } = render(
      <DisplayNav prevBtnProps={prevBtnProps} nextBtnProps={nextBtnProps} />
    );

    const prevButton = getByText('Back');
    const nextButton = getByText('Forward');

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(prevBtnProps.onClick).toHaveBeenCalledTimes(1);
    expect(nextBtnProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom class names', () => {
    const customClassName = 'custom-display-nav';
    const { container } = render(
      <DisplayNav className={customClassName} />
    );

    const displayNav = container.querySelector('.justify-content-between');
    expect(displayNav).toHaveClass(customClassName);
  });
});
