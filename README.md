# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Design

![desktop-preview](https://github.com/user-attachments/assets/bd529ed7-ec74-454a-b831-6f667726aef9)


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/age-calculator-app-using-react-typescript-tailwind-css-and-vite-M20Tt2WTMC)
- [Live Site URL](https://ippotheboxer.github.io/age-calculator-app/)

## My process
Designed using mobile-first approach. First step was to add the colors in the style guide to tailwind.config.js, add colors array into theme. Next I fully designed the app with no functionality. 

The first functionality I introduced was adding the form and making sure the app could receive the results. To pass the date from BirhForm.tsx, there is a master component MainContainer.tsx that has a state which is set by submitting the form in BirthForm component. Then that date given is saved as a javascript date, which the CalculatedAge component receives. 

To calculate the difference in years, months and days since the present time and given date, internalToDuration is used from date-fns. I found this was more accurate than using differenceInDays since with days you had to do calcuations to all years, months and days to divide it into the correct amount: however it wasn't as accurate since 30.347 was assumed as the average amount of days per month, leading to inaccuracies in the day count. Using intervalToDuration returns an object with years, months, days, hours, minutes and seconds so I destructued the object to only receieve the needed fields (years, months and days).

[Documentation for intervalToDuration](https://date-fns.org/v4.1.0/docs/intervalToDuration) 

One small issue was that if any of the fields were 0, it would not return months: 0, it just doesn't return the months. However I handled this by checking if any of the properties were undefined, and if they were setting their state to 0.

I created the animation by using useSpring from react-spring, and set different delays for each field.

[Documentation for useSpring](https://www.react-spring.dev/docs/components/use-spring)


### Useful resources

- [React-gh-pages guide](https://github.com/gitname/react-gh-pages) - Great tutorial for setting up github pages with React
- [Perfect Pixel by WellDoneCode (pixel perfect)](https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?pli=1) - I HIGHLY recommend this chrome extension for creating Frontend Mentor solutions! You can see the actual size of the completed project overlaying whilst you're working on design. This is a must if you want it to be super accurate :)

### Built with

- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - JS with types
- [Tailwind-css](https://tailwindcss.com/) - CSS framework
- [Vite](https://vite.dev/) - Frontend build tool
- [date-fns](https://date-fns.org/) - intervalToDuration
- [react-spring](https://www.react-spring.dev/docs) - library for buildilng animated UI components

