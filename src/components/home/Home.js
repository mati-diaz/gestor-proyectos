import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../table/Table';

export const Home = () => { 
  return (
    <div>
      <div className='subheader'>
        <div className='subheader__container'>
          <h2>My projects</h2>
          <Link to='/new'>
            <button className='add-button'>
              <p>+ Add project</p>
            </button>
          </Link>
        </div>
      </div>

      <div className='px container-alt'>
        <Table />
      </div>
    </div>
  )
}
