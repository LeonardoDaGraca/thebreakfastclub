import { useState, useEffect } from 'react';

const API_ROOT = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/';

export function useApi(path) {
  console.log('path: ', path);
  const [response, setResponse] = useState();
  console.log(`${API_ROOT}/${path}`);
  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => console.log(res))
      .then(res => res.text())
      .then(res => setResponse(res));
  }, []);

  console.log('response: ',response);
  return {
    response
  };
}
