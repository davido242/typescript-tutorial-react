import React, { useEffect } from "react";

function App() {
  function greet(name : string) {
    return ("Hello, " + name + "!");
    // No explicit return statement
}

const greeting = greet("Johnyyyy");
console.log(greeting); // Output: undefined

function addNumbers(a: number, b: number) {
  return a + b;
}

let result = addNumbers(3, 4);
console.log(result); // Output: 7


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