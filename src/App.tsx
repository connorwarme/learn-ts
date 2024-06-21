import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default App
