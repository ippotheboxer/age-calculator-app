import React from 'react';

interface ageProps {
    years: number;
    months: number;
    days: number;
}

const CalculatedAge = (props: ageProps) => {
  return (
    <div className='flex flex-col'>
        <p className='ageText'>
            {props.years !== undefined ? 
            <span className='text-purple'>{props.years} years</span>
            :
            <span className='text-purple'>- - </span>
            }
            years
            </p>
        <p className='ageText'>
            {props.months !== undefined ? 
            <span className='text-purple'>{props.months} months</span>
            :
            <span className='text-purple'>- - </span>
            }
            months
            </p>
        <p className='ageText'>
            {props.days !== undefined ? 
            <span className='text-purple'>{props.days} days</span>
            :
            <span className='text-purple'>- - </span>
            }
            days
            </p>
    </div>
  )
}

export default CalculatedAge;