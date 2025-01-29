import React from 'react';
import Count from './Count';
// import Form from './Form';
// import Greetings from './Greetings';      // Whenever we do not export a function as default we need to wrap it in {}.

export default function App() {
  // var number = 38;
  return (
    <>
      {/* <h2>{number} is {number%2 === 0 ? ' is even number.' : ' is odd number.'}</h2> */}

      <Count />

      {/* <Greetings name="Arijit" age={28} />
      <Greetings name="Pooja" age={26} />
      <Greetings name="Rahul" last_name={"Verma"} /> */}
      {/* <Form /> */}
    </>
  )
}
