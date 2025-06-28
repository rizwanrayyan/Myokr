const SelectInputField = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  return (
    <div className="w-full mb-4">
      <label className="block mb-2 font-semibold">{label}</label>
      <select
        name={label}
        value={selectedOption}
        onChange={handleSelectChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputField;
