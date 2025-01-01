import React from 'react';

// Components
import BirthForm from './BirthForm';
import CalculatedAge from './CalculatedAge';

const MainContainer = () => {
  return (
    <div className='flex flex-col bg-white p-8 mainContainer'>
        <BirthForm />
        <CalculatedAge />
    </div>
  )
}

export default MainContainer;