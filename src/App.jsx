import { useState } from 'react'
import { Header } from './components/Header'
import { SideMenu } from './components/SideMenu'
import { Tasks } from './containers/Tasks'

function App() {

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <>
    <Header onSelectCompany={setSelectedCompany}/>
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <Tasks filterCompany={selectedCompany}/>
    </div>
    </>
  )
}

export default App
