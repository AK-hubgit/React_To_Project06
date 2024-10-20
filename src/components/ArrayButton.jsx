import React from "react";

function ArrayButton() {
  const oldArray = [0, 1, 2, 3];
  let emptyArray = oldArray;
  function pushElements() {
    let newArray = emptyArray.push(oldArray.length + 1 - 1);
    console.log(newArray);
    console.log(emptyArray);
  }

  return (
    <div>
      <button onClick={pushElements}>pushArrayLength</button>
    </div>
  );
}

export default ArrayButton;
