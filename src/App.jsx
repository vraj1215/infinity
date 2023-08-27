import Navbar2 from './component/Navbar2'
import Services from './component/Services'
import Footer from './component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style/app.scss'
import Hero from './component/Hero'
import Photog from './component/Photog'
import Contact from './component/Contact'
import About from './component/About'
function App() {
  const router = createBrowserRouter[
    {
      path: "/",
      element: <Navbar2 ></Navbar2>
    }
  ]

  return (


    <BrowserRouter>
      <Navbar2 ></Navbar2>
      <Routes>
        <Route element={<div>
          <Hero></Hero>
          <Services></Services>
        </div>} path='/'></Route>
      </Routes>
          
      <Routes>
        <Route element={<Photog></Photog>} path="/photography"></Route>
      </Routes>
       
      <Routes>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

      <Routes>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </BrowserRouter>

  )
}

export default App
