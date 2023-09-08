import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GoToTop from './components/UI/GoToTop/GoToTop'
import RoutesComponent from './RoutesComponent'

function App() {

  return (
    <>
      <Header />
      {/* <Routes>
          {
          navbar.map( (data) =>( 
              <Route key={data.path} path={data.path} element={ <RouteReturner page={data.page} />} />
            ))
          }
      </Routes> */}

      <RoutesComponent/>
      <GoToTop />
      <Footer />

    </>
  )
}

export default App



