import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import ShoppingCartProvider from "./context/ShoppingCartProvider"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

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
