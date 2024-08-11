import Header from "./components/Header"
import Home from "./pages/Home"
import "./styles/App.module.scss"

function App() {

  return (
    <>
     <div className="rootContainer">
        <div className="rootContent">
          <Header/>
          <Home/>
        </div>
     </div>
    </>
  )
}

export default App
