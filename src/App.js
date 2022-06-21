import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { New } from './components/new/New';
import { ProjectsContext } from './context/ProjectsContext';
import { formatDate } from './helpers/formatDate';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Landing Page',
      description: 'test description',
      date: `Creation date: ${formatDate()}`,
      manager: 'Walt Cosani',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled'
    },
    {
      id: 2,
      name: 'E-Commerce',
      description: 'test description',
      date: `Creation date: ${formatDate()}`,
      manager: 'Walt Cosani',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled'
    },
  ]); 

  return (
    <ProjectsContext.Provider value={ { projects, setProjects } }>
      <header>
        <div className='container'>
          <img className='app-logo' src='/assets/images/logo.png' alt='app-logo' />
        </div>
      </header>
      <Routes>
        <Route path='/'>
          <Route index element={ <Home /> } />
          <Route path='new' element={ <New /> } />
          <Route path='edit'>
            <Route path=':id' element={ <New /> } />
          </Route>
        </Route>
      </Routes>
    </ProjectsContext.Provider>
  );
}

export default App;
