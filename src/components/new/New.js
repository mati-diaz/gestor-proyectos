import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../form/Form';

export const New = () => {
  return (
    <div>
      <div className='subheader'>
        <div className='subheader__container subheader__container--start'>
          <Link to='/'>
            <button className='button-back'>
              <img src='/assets/images/back.svg' alt='back button' />
              <p>Back</p>
            </button>
          </Link>
          <h2>Add project</h2>
        </div>
      </div>
      <Form />
    </div>
  )
}
