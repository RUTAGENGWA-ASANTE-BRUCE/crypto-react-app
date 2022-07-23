import { useState } from 'react'
import {Loader,Footer,Services,Transactions,Welcome,NavBar} from './components'
function App() {

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <NavBar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    </div>
  )
}

export default App
