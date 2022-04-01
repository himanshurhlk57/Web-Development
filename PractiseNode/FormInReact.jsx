import { useState } from "react";

const Practise = () => {
  const [array, setArrayData] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const addDataToTheArray = () => {
    setArrayData((prevState) => [...prevState, name, lastName]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <label>Enter Your lastName:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <div>
            <button onClick={addDataToTheArray}>Submit</button>
          </div>
        </div>
      </form>
      <ul>
        {array.map((arr, index) => (
          <li key={index}>{arr}</li>
        ))}
      </ul>
    </div>
  );
};

export default Practise;
