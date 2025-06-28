import axios from "axios";
import React, { useEffect, useState } from "react";
import MultipleSelectField from "../MultipleSelectField/MultipleSelectField";
const AddObjectivesPopup = ({ isOpen, onClose, onSave }) => {
  const [objectiveName, setObjectiveName] = useState("");
  const [objectiveDescription, setObjectiveDescription] = useState("");

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [UserList, setUserList] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = () => {
    onSave();
    onClose();
  };
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const data = axios.post("http://localhost:8080/teams", {
      //   teamname: TeamName,
      username: UserName,
      password: Password,
    });
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Objective</h2>

        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium">
            Objective Name
          </label>
          <input
            type="text"
            value={objectiveName}
            onChange={(e) => setObjectiveName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter objective name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            value={objectiveDescription}
            onChange={(e) => setObjectiveDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter objective description"
          />
        </div>
        <MultipleSelectField
          label={"User"}
          option={UserList}
          selected={selected}
          setSelected={setSelected}
          newUsername={UserName}
          setNewUsername={setUserName}
          newPassword={Password}
          setNewPassword={setPassword}
          handleModalSubmit={handleModalSubmit}
          isMulti={false}
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddObjectivesPopup;
