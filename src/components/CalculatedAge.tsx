import React, { useEffect, useState } from 'react';
import { differenceInDays } from "date-fns";

interface AgeDisplayProps {
  birthdate: Date | null;
}

const CalculatedAge: React.FC<AgeDisplayProps> = ({ birthdate }) => {
  const [days, setDays] = useState("- -");
  const [months, setMonths] = useState("- -");
  const [years, setYears] = useState("- -");

  useEffect(() => {
    if(birthdate !== null) {
      var result = differenceInDays(
      new Date(),
      birthdate
    )

    var yearsCalc = Math.floor(result / 365);
    var monthsCalc = Math.floor(result % 365 / 30);
    var daysCalc = Math.floor(result % 365 % 30);

    setYears(yearsCalc.toString());
    setMonths(monthsCalc.toString());
    setDays(daysCalc.toString());
    }})

  

  return (
    
    <div className='flex flex-col'>
        <p className='ageText'><span className='text-purple'>{years}</span> years</p>
        <p className='ageText'><span className='text-purple'>{months}</span> months</p>
        <p className='ageText'><span className='text-purple'>{days}</span> days</p>
    </div>
  )
}

export default CalculatedAge;