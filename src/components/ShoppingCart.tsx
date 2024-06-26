type ShoppingCartProps = {
  display: boolean
}

const ShoppingCart = ({ display }: ShoppingCartProps) => {
  const style = { display: display ? 'block' : 'none' }
  return ( 
    <div style={style}>
      <h1>Shopping Cart</h1>
    </div>
   );
}
 
export default ShoppingCart;