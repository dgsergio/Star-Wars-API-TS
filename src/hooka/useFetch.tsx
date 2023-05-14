import { useState } from 'react';
import { People, PeopleAPI } from '../swapi.model';

export default function useFetch() {
  const [status, setStatus] = useState({ error: '', loading: false });

  const sendRequest = async (
    url: string,
    transformData: (data: PeopleAPI) => void
  ) => {
    setStatus({ error: '', loading: true });
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Could not send the request');
      const data = await response.json();
      transformData(data);
    } catch (err: any) {
      setStatus({
        loading: false,
        error: 'Something went wrong. ' + err.message,
      });
    }
    setStatus((pv) => ({ ...pv, loading: false }));
  };
  return { status, sendRequest };
}
