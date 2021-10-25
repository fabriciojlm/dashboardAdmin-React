import { useState} from 'react'

import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
        <h1>Hello Fabricio</h1>
    </div>
  );
}

export default App;
