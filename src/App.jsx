import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Team from './components/Team'
import useGeolocation from './hooks/useGeolocation'

function App() {

  const { coordinates, permission } = useGeolocation()


  return (
    <>
      <pre>
        {JSON.stringify(coordinates)}
      </pre>
      <pre>
        {permission}
      </pre>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Services />
      <Team />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
