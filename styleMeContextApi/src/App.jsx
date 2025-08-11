
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Store from './Components/Store'
import './App.css'
import Cart from './Components/Cart'
import ProductDescription from './Components/ProductDescription'
import Home from './Components/Home'
import Root from './Root'
import { CartContextProvider } from './Context/CartContext'
import { useEffect, useState } from 'react'



function App() {
  
    const [apiData,setApiData] = useState([])

    const [cartItems, setCartItems] = useState([])

    const[itemcount,setItemCount] = useState(0)
  
    const addToCart = (products) =>{
      console.log(products)
      setCartItems((prevItem) => {
        const checkExisting = prevItem.find((item) => item.id===products.id)
        if (checkExisting){
          return prevItem.map((item) => ((item.id === products.id) ? 
          {...item, [item[2]] : products.itemcount *products.price }:
           item))
        }
        
        return [...prevItem,products]
      })
      
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
    <CartContextProvider value = {{ cartItems, apiData, addToCart, itemcount}}>
      <RouterProvider router={router}/>
      </CartContextProvider>
    </>
  )
}

export default App
