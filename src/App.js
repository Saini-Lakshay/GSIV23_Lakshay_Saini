import logo from "./logo.svg";
import "./App.css";
import Routing from "./routing";
import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";

function App() {
  const { loader } = useSelector((state) => state.movies);
  return (
    <div className="App">
      <section
        className={`absolute bg-[rgba(0,0,0,0.5)] h-full w-full flex justify-center items-center ${
          loader ? "flex" : "hidden"
        }`}
      >
        <ColorRing
          visible={true}
          height="300"
          width="300"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </section>
      <Routing />
    </div>
  );
}

export default App;
