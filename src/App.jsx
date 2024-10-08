import { useState, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import UploadForm from "./components/UploadForm";

const photos = [
  // "./src/assets/sunrise.png",
  // "./src/assets/hills.png",
  // "./src/assets/moon.png",
  // "./src/assets/pond.png",
  // "./src/assets/rainbow.png",
  // "./src/assets/cloud.png",
  // "./src/assets/rain.png",
  // "./src/assets/stars.png",
  // "./src/assets/forest.jpg",
];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, Path: null },
  isCollapsed: false,
};

const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    return {
      ...state.inputs,
      file: e.target.files[0],
      Path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [state.inputs, ...state.items],
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value),
      };
    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.
        bool
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState();

  const toggle = (bool) =>
    dispatch({ type: "collapse", payload: { bool } });

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(!state.isCollapsed)
  };

  useEffect(() => {
    setCount(
      `you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`
    );
  }, [state.items]);
  return (
    <>

        
        <h1>Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((photos, index) => (
            <Card key={index} src={photos.Path} />
          ))}
        </div>
    </>
  );
}

export default App;
