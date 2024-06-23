import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Outlet />
        </Container>
      </ShoppingCartProvider>
    </>

  )
}

export default App
