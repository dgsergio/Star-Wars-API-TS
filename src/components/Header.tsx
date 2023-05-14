import { useState } from 'react';

interface HeaderProps {
  next: string;
  previous: string;
  pageHandler: (page: string) => void;
}

export default function Header({ next, previous, pageHandler }: HeaderProps) {
  const [count, setCount] = useState(1);

  const clickHandler = (page: string, op: 'ADD' | 'SUB') => {
    pageHandler(page);
    if (op === 'ADD') setCount((pv) => pv + 1);
    if (op === 'SUB') setCount((pv) => pv--);
  };
  return (
    <nav>
      <button
        disabled={!previous}
        onClick={() => clickHandler(previous, 'SUB')}
      >
        Previus
      </button>
      <p>Page number: {count}</p>
      <button disabled={!next} onClick={() => clickHandler(next, 'ADD')}>
        Next
      </button>
    </nav>
  );
}
