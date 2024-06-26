import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import ShoppingCartProvider from "./context/ShoppingCartProvider"

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Container>
          <Outlet />
        </Container>
      </ShoppingCartProvider>
    </>

  )
}

export default App
