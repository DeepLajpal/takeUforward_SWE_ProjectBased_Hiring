import Header from "./components/Header"
import Home from "./pages/Home"
import "./styles/App.module.scss"

function App() {

  return (
    <>
     <div className="rootContainer">
        <div className="rootContent">
          <Header mainHeading = "Project Based Hiring Challenge"/>
          <Home/>
        </div>
     </div>
    </>
  )
}

export default App
