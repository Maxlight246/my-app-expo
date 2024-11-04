import React, { useCallback, useEffect, useReducer, useRef } from "react";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
}

function UseFetch(url: string, options = {}, timeout: number = 5000) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortControllerRef = useRef<AbortController>(new AbortController());

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });
    const controller = abortControllerRef.current;
    const signal = controller.signal;
    const timer = setTimeout(() => {
      controller.abort();
    }, timeout);
    try {
      const response = await fetch(url, { ...options, signal });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("=>(useFetch.ts:31) data:", data);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.error("Fetch error:", error);
      dispatch({
        type: "FETCH_FAILURE",
        payload: signal.aborted ? "Request đã bị hủy do timeout" : error,
      });
    } finally {
      clearTimeout(timer);
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current.abort();
    };
  }, []);

  return { state, fetchData };
}

export default UseFetch;
