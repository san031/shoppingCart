
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Store from './Components/Store'
import './App.css'
import Cart from './Components/Cart'
import ProductDescription from './Components/ProductDescription'
import Home from './Components/Home'
import Root from './Root'
import { CartContextProvider } from './context/CartContext'
import { useEffect, useState } from 'react'



function App() {
  
    const [apiData,setApiData] = useState([])

    const [cartItems, setCartItems] = useState([])

    const addToCart = (products) =>{
      const checkExisting = cartItems.find((item) => item[0]===products[0])
      console.log(checkExisting)
      if (checkExisting){
        // {cartItems.map= (prev) => (
        //   prev[0]===products[0] ? prev[1]+= products[1] * products[3]: prev
        //   // (prev[0]===products[0]) ? {prev[1]=itemcount*products[1] }: prev
        //   //
        // )}
        
      setCartItems([...cartItems,products])
      }
      else{
        setCartItems([...cartItems,products])
      }
      
      // console.log(itemcount)
    }
    
    
   
    
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => 
      setApiData(data)  
    );
    }, [])

  



  const router = createBrowserRouter([
    {path : '' , element:<Root/>,
      children:[
        {path:"", element:<Home/>},
        {path:"store", element:<Store/>},
        {path:"store/:id", element:<ProductDescription/>},
        {path:"/cart", element:<Cart/>}
      ]
    }
  ])
  return (
    <>
    <CartContextProvider value = {{ cartItems, apiData, addToCart}}>
      <RouterProvider router={router}/>
      </CartContextProvider>
    </>
  )
}

export default App
