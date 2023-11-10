import React from 'react'

const CartContext = React.createContext({
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
