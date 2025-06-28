import { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import InputField from "../../components/InputField/InputField";
import MultipleInputField from "../../components/MultipleInputField/MultipleInputField";
import axios from "axios";
import MultipleSelectField from "../../components/MultipleSelectField/MultipleSelectField";
import SelectInputField from "../../components/SelectInputField";

const TeamEntry = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [TeamName, setTeamName] = useState("");
  const [TeamList, setTeamlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [DepartmentList, setDepartmentList] = useState([]);
  const [SelectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    getDepartmentList();
  }, []);

  useEffect(() => {
    getTeamList();
  }, []);

  const getDepartmentList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/departments");
      setDepartmentList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeamList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/teams");
      setTeamlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const data = axios.post("http://localhost:8080/teams", {
      teamname: TeamName,
      username: UserName,
      password: Password,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-lg shadow-[0px_7px_29px_0px_rgba(100,_100,_111,_0.2)] m-6">
        <h1 className="text-2xl font-medium mb-4">Team Entry</h1>
        <form onSubmit={handleSubmit}>
          <SelectInputField
            label={"Select Department"}
            options={DepartmentList}
            selectedOption={SelectedDepartment}
            setSelectedOption={setSelectedDepartment}
          />

          <InputField
            name={"teamname"}
            placeholder={"Team Name"}
            value={TeamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <MultipleSelectField
            label={"Team Leader"}
            option={TeamList}
            selected={selected}
            setSelected={setSelected}
            newUsername={UserName}
            setNewUsername={setUserName}
            newPassword={Password}
            setNewPassword={setPassword}
            handleModalSubmit={handleModalSubmit}
            isMulti={false}
          />

          <button
            type="submit"
            className={`w-full p-2 border bg-[#9e77d2] text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#fff] hover:border-[#9e77d2] hover:text-black focus:outline-none `}
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default TeamEntry;
