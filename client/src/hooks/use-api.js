import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:9000/api';

export function useApi({ method, path, payload } = { method: '', path: '', payload: {} }) {
  const [response, setResponse] = useState();
  const METHODS = {
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
  };
  const setPath = () => {return `${API_ROOT}/${path}`};
  //functions for CRUD operations, to run according to the given method:
  const readFromDb = () => {
    fetch(setPath())
      .then(res => res.json())
      .then(res => setResponse(res));
  };
  const createTomDb = () => {
    const htmlRequest = {
      method: METHODS.POST,
      headers: {"content-type": "application/json"},
      body: JSON.stringify(payload)
    };
    fetch(setPath(), htmlRequest)
      .then(res => res.json())
      .then(res => setResponse(res));
  };
  const updateToDb = () => {
    const htmlRequest = {
      method: METHODS.PATCH,
      headers: {"content-type": "application/json"},
      body: JSON.stringify(payload)
    };
    fetch(setPath(), htmlRequest)
      .then(res => res.json())
      .then(res => setResponse(res));
  };
  const deleteFromDb = () => {
    fetch(setPath(), {method: METHODS.DELETE})
    .then(res => res.json())
    .then(res => setResponse(res));
  };

  useEffect(() => {
    switch (method) {
      case METHODS.POST:
        createTomDb();
        break;
      case METHODS.PATCH:
        updateToDb();
        break;
      case METHODS.DELETE:
        deleteFromDb();
        break;
      default:
        readFromDb();
    }
  }, []);

  return {
    response
  };
}
