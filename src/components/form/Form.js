import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectsContext } from '../../context/ProjectsContext';
import { formatDate } from '../../helpers/formatDate';
import './form.css';

export const Form = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { projects, setProjects } = useContext(ProjectsContext);

  const project = projects.find(project => Number(project.id) === Number(id));

  const [formValues, setFormValues] = useState({
    name: project?.name || '',
    description: project?.description || '',
    manager: project?.manager || '',
    assignedTo: project?.assignedTo || '',
    status: project?.status || 'Enabled'
  });

  const {
    name,
    description,
    manager,
    assignedTo,
    status
  } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (
      !name ||
      !description ||
      !manager || 
      !assignedTo ||
      !status
    ) {
      return alert('missing fields to complete');
    }

    if (project) {
      setProjects(
        projects.map(e => {
          if (Number(e.id) === Number(project.id)) {
            return { ...e, ...formValues }
          } else {
            return e;
          }
        })
      );
    } else {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          name,
          description,
          date: `Creation date: ${formatDate()}`,
          manager,
          assignedTo,
          status
        },
      ])
    }

    navigate('/');
  }

  return (
    <div className='form-container px'>
      <form onSubmit={ handleSubmitForm }>
        <div className='field'>
          <label htmlFor='name'>Project Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={ name }
            onChange={ handleInputChange }
          />
        </div>
        <div className='field'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={ description }
            onChange={ handleInputChange }
          />
        </div>
        <div className='field'>
          <label htmlFor='manager'>Project Manager</label>
          <div className='select'>
            <select
              name='manager'
              id='manager'
              value={ manager || 'Select a Person' }
              onChange={ handleInputChange }
            >
              <option disabled selected>Select a Person</option>
              <option value='Walt Cosani'>Walt Cosani</option>
              <option value='Ignacio Truffa'>Ignacio Truffa</option>
            </select>
          </div>
        </div>
        <div className='field'>
          <label htmlFor='assignedTo'>Assigned To</label>
          <div className='select'>
            <select
              name='assignedTo'
              id='assignedTo'
              value={ assignedTo || 'Select a Person' }
              onChange={ handleInputChange }
            >
              <option disabled selected>Select a Person</option>
              <option value='Walt Cosani'>Walt Cosani</option>
              <option value='Ignacio Truffa'>Ignacio Truffa</option>
            </select>
          </div>
        </div>
        <div className='field'>
          <label htmlFor='status'>Status</label>
          <div className='select'>
            <select
              name='status'
              id='status'
              value={ status }
              onChange={ handleInputChange }
            >
              <option value='Enabled' selected>Enabled</option>
              <option value='Disabled'>Disabled</option>
            </select>
          </div>
        </div>
        <button className='add-button'>{ project ? 'Save Changes' : 'Create Project' }</button>
      </form>
    </div>
  )
}
