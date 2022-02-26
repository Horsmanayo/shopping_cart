import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Context = React.createContext()


function ContextProvider({children}){

    const [allPhotos, setAllPhotos] = useState([])
    const [ cartItems, setCartItems ] = useState([])

    const toggleFavorite =(id) => {
      const favArr = allPhotos.map(photo => {
        if(photo.id === id){
          return {...photo, isFavorite : !photo.isFavorite}
        }
        return photo
      })
      setAllPhotos(favArr)
    }

    function addToCart(newItems) {
      setCartItems(prevItems => [...prevItems, newItems])
    }
    
    function removeFromCart(id){
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart(){
      setCartItems([])
    }

    const getAllPhotos=() => {
        Axios.get('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
          .then(response =>  {
            console.log(response.data)
            setAllPhotos(response.data)
          }).catch(err =>{
            console.log(err)
          })
    }
    
    useEffect(() => {
        getAllPhotos()
    }, []);

    

    

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context}