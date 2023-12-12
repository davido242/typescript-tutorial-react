import React, { useEffect } from 'react';

function App() {
  interface Person {
    name: string;
    age: number;
    sex: string;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Max",
    age: 27,
    sex: "Male"
  };

  printPersonProperty(person, "age");
  printPersonProperty(person, "sex");

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
