import React, { useState } from "react";
import Select, { components } from "react-select";
import InputField from "../InputField/InputField";

const MultipleSelectField = ({
  label,
  option,
  selected,
  setSelected,
  newUsername,
  setNewUsername,
  newPassword,
  setNewPassword,
  handleModalSubmit,
  showAddNewButton = true,
  isMulti = true,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (selectedOptions) => {
    if (isMulti) {
      setSelected(selectedOptions || []);
    } else {
      setSelected(selectedOptions || null);
    }
  };

  const handleAddNew = () => {
    console.log("test");
    setShowModal(true);
  };

  const handleSaveNew = () => {
    setShowModal(false);
    handleModalSubmit();
  };
  const MenuList = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <div
          onClick={handleAddNew}
          className="p-2 cursor-pointer hover:bg-gray-100 text-blue-600 border-t border-gray-200"
        >
          ➕ Add New
        </div>
      </components.MenuList>
    );
  };
  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">{label}</label>
      <Select
        isMulti
        options={option}
        value={selected}
        onChange={handleChange}
        closeMenuOnSelect={false}
        components={showAddNewButton ? { MenuList } : undefined}
      />

      {showModal && (
        <div className="fixed inset-0 bg-[#000000a8] flex justify-center items-center z-[999]">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
            <InputField
              name={"username"}
              placeholder={"Username"}
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <InputField
              name={"password"}
              placeholder={"Password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNew}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultipleSelectField;
