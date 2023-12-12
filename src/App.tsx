import React, { useEffect } from 'react';

function App() {
              
  function getSalue(): string | undefined {
    return 'hello';
  }
              
  let value = getSalue();
  console.log('value length: ' + value?.length);

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
