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
  const [name, setName] = useState("Chist");
  const handleClick = () => {
    setName("Allison");
  };

  return (
    <div>
      <h1>Hello {name}.</h1>
      {/* <Person name={name} />
      <button onClick={handleClick}>MAKE IT ALLISON!</button> */}
    </div>
  );
};

export default AppFunc;
