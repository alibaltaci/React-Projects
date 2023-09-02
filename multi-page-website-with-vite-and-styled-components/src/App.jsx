import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { navbar } from './data/data.json'
import RouteReturner from './components/Header/RouteReturner'

function App() {

  return (
    <>
      <Header />
      <Routes>
          {
          navbar.map( (data) =>( 
              <Route key={data.path} path={data.path} element={ <RouteReturner page={data.page} />} />
            ))
          }
      </Routes>
      <Footer />
    </>
  )
}

export default App
