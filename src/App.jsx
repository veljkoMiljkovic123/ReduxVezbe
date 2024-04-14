import { useEffect } from "react";
import ProductsService from "./services/productsService";
import {INITIALE_STATE,productsReducer} from './store/productsReducer'
import { useReducer } from "react";
import ProductsComponent from "./components/ProductsComponent";
function App() {

  const [state,dispatch] = useReducer(productsReducer,INITIALE_STATE)

 
  function handleData(){
    dispatch({type:'FETCH_START'})

    ProductsService.getAllProducts()
    .then(res=>dispatch({data:res.data.products,type:'FETCH_SUCCESS'}))
    .catch(err=>dispatch({type:'FETCH_ERROR'}))
  }
  if(state.error){
    return <h2>Imate gresku</h2>
  }

  return (
    <div className="container mx-auto">
      <button className="bg-blue-500" onClick={handleData}>Fetch data</button>
    {state.isLoading?(<h2>Loading...</h2>):(
      (state.products.map((el,i)=>{
        return <div className="text-2xl bg-blue-400" key={i}>
          <h2>{el.title}</h2>
          <img src={el.thumbnail} alt="" />
        </div>
      }))
    )}
    </div>
  );
}

export default App;
