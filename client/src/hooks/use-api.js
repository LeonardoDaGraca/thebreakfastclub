/**
 * Pedro Gutierrez Rincon
 * 02/19/2023
 * Middleware to connect the api to the front end
 * Designed to take the method for HTML request, (GET, POST, PUT or DELETE), the path and/or the payload from front end
 */

import { useState, useEffect } from "react";

const API_ROOT = "http://localhost:9000/api";

export function useApi(method = "GET", path = "/everything", payload = {}) {
  const [response, setResponse] = useState();
  const apiDecider = () => {
    const METHODS = {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE",
    };
    const setPath = () => {
      return `${API_ROOT}/${path}`;
    };
    //functions for CRUD operations, to run according to the given method:
    const readFromDb = () => {
      fetch(setPath())
        .then((res) => res.json())
        .then((res) => setResponse(res));
    };
    const createTomDb = () => {
      const htmlRequest = {
        method: METHODS.POST,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(setPath(), htmlRequest)
        .then((res) => res.json())
        .then((res) => setResponse(res));
    };
    const updateToDb = () => {
      const htmlRequest = {
        method: METHODS.PUT,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(setPath(), htmlRequest)
        .then((res) => res.json())
        .then((res) => setResponse(res));
    };
    const deleteFromDb = () => {
      fetch(setPath(), { method: METHODS.DELETE })
        .then((res) => res.json())
        .then((res) => setResponse(res));
    };

    switch (method) {
      case METHODS.POST:
        createTomDb();
        break;
      case METHODS.PUT:
        updateToDb();
        break;
      case METHODS.DELETE:
        deleteFromDb();
        break;
      default:
        readFromDb();
    }
  };

  useEffect(apiDecider, []);

  return {
    response,
  };
}
