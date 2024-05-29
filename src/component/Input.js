import { useState } from "react";

function Input({ setTodos }) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = () => {
    setTodos(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        name="TodoInput"
        placeholder="오늘의 할일"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleInputChange}>추가</button>
    </div>
  );
}

export default Input;
