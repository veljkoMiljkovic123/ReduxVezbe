import { useDispatch } from "react-redux";
import { handleAllProductAction, handleSingleProductAction } from "./store/productSlice";
import ShowInfo from "./components/ShowInfo";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(handleSingleProductAction({
      title:'Tihomir',
      desc:'Bingo redux',
      price:'$999'
    }))
  },[])

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1>Redux Toolkit</h1>
    <ul className="flex gap-4 font-bold uppercase">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/products'}>Products</NavLink>
      </li>
    </ul>
          

      <Outlet /> 
    </div>
  )
}

export default App;
