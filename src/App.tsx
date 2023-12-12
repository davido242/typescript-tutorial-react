import React, { useEffect } from 'react';

function App() {
              
  function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }
              
  printMileage(null); // Prints 'Mileage: Not Available'
  
  printMileage(0); // Prints 'Mileage: 0'
  printMileage(50); // Prints 'Mileage: 0'
  printMileage(undefined); // Prints 'Mileage: 0'

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
