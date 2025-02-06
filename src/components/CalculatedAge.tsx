import React, { useEffect, useState } from 'react';
import { intervalToDuration } from "date-fns";

interface AgeDisplayProps {
  birthdate: Date | null;
}

const CalculatedAge: React.FC<AgeDisplayProps> = ({ birthdate }) => {
  const [days, setDays] = useState("- -");
  const [months, setMonths] = useState("- -");
  const [years, setYears] = useState("- -");

  useEffect(() => {
    if(birthdate !== null) {
    
    const {years, months, days} = intervalToDuration({
      start: birthdate, 
      end: new Date()
    });
    
    if (years === undefined) {
      setYears("0");
    } else {
        setYears(years.toString());
      }

    if (months === undefined) {
      setMonths("0");
    } else {
      setMonths(months.toString());
      }

    if (days === undefined) {
      setDays("0");
    } else {
      setDays(days.toString());
    }  
    }})

  
  return (
    <div className='flex flex-col pt-3 pl-1'>
        <p className='ageText md:pb-4'><span className='text-purple'>{years}</span> years</p>
        <p className='ageText md:pb-4'><span className='text-purple'>{months}</span> months</p>
        <p className='ageText md:pb-2'><span className='text-purple'>{days}</span> days</p>
    </div>
  )
}

export default CalculatedAge;