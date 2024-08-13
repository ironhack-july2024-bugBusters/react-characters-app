import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import CharacterDetails from "./pages/CharacterDetails"


function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        
      </Routes>
      
    </>
  )
}

export default App
