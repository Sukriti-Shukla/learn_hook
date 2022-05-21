import React, { useState } from "react";
//setState automatically merges and update the state of the  object but useState does not so we have to do it manually
// we can use the spread operator to do the manual merge
function ObjectAsState() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })} //if we dont use spread operator the first name we disappear as soon as we start entering last name
          // we make replica of the name object and only update first name to the new value
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2> first name is - {name.firstName}</h2>
        <h2> Last name is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default ObjectAsState;
