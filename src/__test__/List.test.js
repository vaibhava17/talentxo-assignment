import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for extended DOM matchers
import List from '../components/List';

describe('List', () => {
  it('renders with default "No data" message when data is empty', () => {
    const { getByText } = render(<List />);
    const noDataMessage = getByText('No data');
    expect(noDataMessage).toBeInTheDocument();
    expect(noDataMessage).toHaveClass('list-group-item');
  });

  it('renders list items with provided data and handles item click', () => {
    const data = [
      { id: 1, label: 'Item 1', onClick: jest.fn() },
      { id: 2, label: 'Item 2', onClick: jest.fn() },
    ];

    const activeItem = 2;
    const { getByText } = render(
      <List
        data={data}
        activeItem={activeItem}
        renderItem={(item) => <span>{item.label}</span>}
      />
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();

    fireEvent.click(item1);
    fireEvent.click(item2);

    expect(data[0].onClick).toHaveBeenCalledTimes(1);
    expect(data[1].onClick).toHaveBeenCalledTimes(1);
  });

  it('renders list with custom class names and a listRef', () => {
    const listRef = React.createRef();
    const { container } = render(
      <List
        data={[]}
        className="custom-list"
        listRef={listRef}
      />
    );

    const list = container.querySelector('.list');
    expect(list).toHaveClass('custom-list');

    const listGroup = container.querySelector('.list-group');
    expect(listRef.current).toBe(listGroup);
  });
});
