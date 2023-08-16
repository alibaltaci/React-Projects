import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { navbar } from './data/data.json'
import PageReturner from './components/Header/PageReturner'

function App() {

  return (
    <>
      <Header />
      <Routes>
        {
          navbar.map( (data) => (
            <Route key={data.path} path={data.path} element={ <PageReturner page={data.page} />} />
          ))
        }
        {/* <Route path='/*' element={ <Page404 /> } /> */}
        {/* <Route path='/'  element={ <Home /> } />
        <Route path='/about'  element={ <About /> } />
        <Route path='/services'  element={ <Services /> } />
        <Route path='/contact'  element={ <Contact /> } /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
