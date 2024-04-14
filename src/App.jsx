import { useDispatch } from "react-redux";
import { handleAllProductAction } from "./store/productSlice";
import ShowInfo from "./components/ShowInfo";

function App() {
  const dispatch = useDispatch()
  function handleInfo(){
    dispatch(handleAllProductAction('Tihomir je stigao'))
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1>Redux Toolkit</h1>
      <button className="px-6 py-3 bg-green-400 rounded-xl" onClick={handleInfo}>Send Info</button>
      <ShowInfo />
    </div>
  )
}

export default App;
