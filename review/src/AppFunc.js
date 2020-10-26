import React, { useState } from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! Never change {props.name}.
      </p>
    </div>
  );
};

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Waldo");
  };

  return (
    <div>
      <h1>Hello {name}.</h1>
      <p>THat is the best name ever {name}. Never change {name}!</p>
      {/* <Person name={name} /> */}
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
