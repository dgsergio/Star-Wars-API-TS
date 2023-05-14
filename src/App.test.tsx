import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';
import dummy from './mocks/dummy_swapi.json';

describe('App component', () => {
  it('should render a integration test mocking fetch', async () => {
    render(<App />);
    window.fetch = vi.fn().mockResolvedValueOnce({
      json: JSON.stringify(dummy),
      ok: true,
    });
    const lukeTitle = await screen.findByText('Luke Skywalker', {
      exact: false,
    });
    expect(lukeTitle).toBeInTheDocument();
  });
});
