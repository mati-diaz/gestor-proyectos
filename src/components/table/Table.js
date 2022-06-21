import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../../context/ProjectsContext';
import './table.css';

export const Table = () => {
  const { projects, setProjects } = useContext(ProjectsContext);

  const handleMenu = (e) => {
    const menu = e.target.nextSibling;

    menu.classList.toggle('show')
  }

  const deleteProject = (id) => {
    return () => {
      setProjects(projects.filter(element => Number(element.id) !== Number(id)));
    }
  }

  return (
    <div className='table'>
      <div className='table__head'>
        <p>Project Info</p>
        <p>Project Manager</p>
        <p>Assigned To</p>
        <p>Status</p>
        <div className='center'>
          <p>Action</p>
        </div>
      </div>
      {
        projects.map(project => (
          <div className='project' key={ project.id }>
            <div className='project__info'>
              <p>{ project.name }</p>
              <p className='project__date'>{ project.date }</p>
            </div>
            <div className='project__person project__manager'>
              <img src='/assets/images/person.png' alt='profile' />
              <p>{ project.manager }</p>
            </div>
            <div className='project__person'>
              <img src='/assets/images/person.png' alt='profile' />
              <p>{ project.assignedTo }</p>
            </div>
            <div className='project__status'>
              <p>{ project.status }</p>
            </div>
            <div className='project__action'>
              <div className='menu-btn'>
                <img className='edit-img' src='/assets/images/menu.svg' alt='menu' onClick={ handleMenu } />
                <div className='menu animate__animated animate__zoomIn'>
                  <Link to={ '/edit/' + project.id }>
                    <div>
                      <img src='/assets/images/edit.svg' alt='edit' />
                      <p>Edit</p>
                    </div>
                  </Link>
                  <div onClick={ deleteProject(project.id) }>
                    <img src='/assets/images/delete.svg' alt='delete' />
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
