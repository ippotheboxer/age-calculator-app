import React, { useEffect, useState } from 'react';
import { intervalToDuration } from "date-fns";
import { useSpring, animated } from "react-spring";

interface AgeDisplayProps {
  birthdate: Date | null;
}

interface NumberAnimationProps {
  n: number,
  delay: number
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({ n, delay }) => {
  const {number} = useSpring({
    from: {number: 0},
    number: n,
    delay: delay,
    config: {mass: 1, tension: 20, friction: 10}
  });
  return <animated.div className="inline-block">{number.to((n) => n.toFixed(0))}</animated.div>
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
        <p className='ageText md:pb-4'>
            {birthdate !== null ? (
              <span className='text-purple'>
                <NumberAnimation n={Number(years)} delay={400} />
              </span> 
            ) : (
              <span className='text-purple'>
                {years}
              </span>
            )} years</p>

         <p className='ageText md:pb-4'>
            {birthdate !== null ? (
              <span className='text-purple'>
                <NumberAnimation n={Number(months)} delay={800} />
              </span> 
            ) : (
              <span className='text-purple'>
                {months}
              </span>
            )} months</p>

<p className='ageText md:pb-4'>
            {birthdate !== null ? (
              <span className='text-purple'>
                <NumberAnimation n={Number(days)} delay={1500} />
              </span> 
            ) : (
              <span className='text-purple'>
                {days}
              </span>
            )} days</p>
    </div>
  )
}

export default CalculatedAge;