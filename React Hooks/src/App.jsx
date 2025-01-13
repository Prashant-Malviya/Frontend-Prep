import React from 'react'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
// import UseCallback from './components/UseCallback'
import { ContextProvider } from './components/context/NumberContext'
import Headers from './components/examples/Headers'
import UseReducer from './components/UseReducer'

function App() {
  return (
    <ContextProvider>
    <div>
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <Headers /> */}
      <UseReducer />
    </div>
    </ContextProvider>
  )
}

export default App
