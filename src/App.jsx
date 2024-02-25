import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />

    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
