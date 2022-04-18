import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Articles from "./components/Articles"
import Footer from "./components/Footer"
import Social from "./components/Social"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Articles />
        <Social />
        <Footer />
        <Routes>
          <Route path="/stories" />
          <Route path="/features" />
          <Route path="/pricing" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
