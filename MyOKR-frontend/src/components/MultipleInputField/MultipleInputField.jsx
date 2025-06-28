import React, { useState } from "react";
const MultipleInputField = ({ label, departments, setDepartments }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim() !== "") {
      e.preventDefault();
      if (!departments.includes(inputValue.trim())) {
        setDepartments([...departments, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeDepartment = (index) => {
    setDepartments(departments.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mb-6">
      <label htmlFor="departments" className="text-base mb-2">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded p-2 focus-within:ring focus-within:ring-blue-200">
        {departments.map((dept, index) => (
          <span
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
          >
            {dept}
            <button
              type="button"
              onClick={() => removeDepartment(index)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          id="departments"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow border-none focus:ring-0 p-1 text-sm"
          placeholder="Type and press Enter"
        />
      </div>
    </div>
  );
};

export default MultipleInputField;
