import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  const person = {
    name: 'Joaquin Phoenix',
    height: '173',
    hairColor: 'black',
    mass: '80',
  };
  beforeEach(() => {
    render(<Character person={person} />);
  });
  it('should render a title', () => {
    const nameTitle = screen.getByRole('heading', { level: 2 });
    expect(nameTitle).toBeInTheDocument();
  });

  it('should be 3 list elements', () => {
    const unOrderList = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');
    expect(unOrderList).toBeInTheDocument();
    expect(listItem).toHaveLength(3);
  });
});
