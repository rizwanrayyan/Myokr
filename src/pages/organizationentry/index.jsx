import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import InputField from "../../components/InputField/InputField";
import MultipleInputField from "../../components/MultipleInputField/MultipleInputField";

const Organizationentry = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const [Departmentlist, setDepartmentlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-lg shadow-[0px_7px_29px_0px_rgba(100,_100,_111,_0.2)] m-6">
        {" "}
        <h1 className="text-2xl font-medium mb-4">Organization Entry</h1>
        <form onSubmit={handleSubmit}>
          {" "}
          <InputField
            name={"orgname"}
            placeholder={"Organization Name"}
            value={OrganizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
          <MultipleInputField
            label={"Departments"}
            departments={Departmentlist}
            setDepartments={setDepartmentlist}
          />
          <InputField
            name={"username"}
            placeholder={"Department Admin"}
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            name={"password"}
            placeholder={"Password"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
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

export default Organizationentry;
