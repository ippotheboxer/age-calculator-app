import React, {useState} from 'react';

// Components
import BirthForm from './BirthForm';
import CalculatedAge from './CalculatedAge';

const MainContainer: React.FC = () => {
  const [birthdate, setBirthdate] = useState<Date | null>(null);

  const handleBirthdateSubmit = (date: Date) => {
    setBirthdate(date); // Update the shared state
  };
  return (
    <div className='flex flex-col bg-white md:p-14 p-10 mainContainer'>
        <BirthForm onSubmit={handleBirthdateSubmit}/>
        <CalculatedAge birthdate={birthdate}/>
    </div>
  )
}

export default MainContainer;