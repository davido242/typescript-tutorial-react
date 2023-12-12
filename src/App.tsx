import React, { useEffect } from 'react';

function App() {
  interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
              
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
  
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
              
  let home: House = {
    sqft: 500,
    yard: {
      sqft: 600
    }
  };
              
  printYardSize(home); // Prints 'No yard'

//  useEffect(() => {  
//   class Person {
//     name: string;
//   }
//   const david = new Person
//    console.log(david.name = "Sarka");
//    console.log("Shiuut");
//  }, []);

  return (
    <div className="App">
     <h2>Simple Typescript React Tutorial From W3schools</h2>     
    </div>
  );
}

export default App;
