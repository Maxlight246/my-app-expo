import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

function useStorage(key: string, defaultValue: any) {
  const { getItem, setItem } = useAsyncStorage(key);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const data = await readItemFromStorage();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error });
      }
    };
    fetchData();
    console.log("useStorage KAKAKA");
  }, [key]);

  const readItemFromStorage = async () => {
    try {
      const jsonValue = await getItem();
      return jsonValue ? JSON.parse(jsonValue) : defaultValue;
    } catch (e) {
      // saving error
      console.log("Not Found:", e);
    }
  };

  const writeItemToStorage = async (newValue: any) => {
    try {
      const jsonValue = JSON.stringify(newValue);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
      console.log("Not Saved:", e);
    }
  };

  return { state, writeItemToStorage };
}

export default useStorage;
