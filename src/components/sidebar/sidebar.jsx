import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HamburgerIcon from "../icons/HamburgerIcon";
import EntryIcon from "../icons/EntryIcon";
import LocalSalesIcon from "../icons/LocalSalesIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ListIcon from "../icons/ListIcon";
import TeamIcon from "../icons/TeamIcon";
import UserIcon from "../icons/UserIcon";
import LogoutIcon from "../icons/LogoutIcon";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [hamburger, setHamburger] = useState(false);
  const [orgMenuOpen, setOrgMenuOpen] = useState(false);
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);

  const isActive = (to) => pathname.startsWith(to);

  const toggleHamburger = () => {
    setHamburger((prev) => !prev);
  };

  const menuItemClasses = (active) =>
    `flex items-center gap-4 px-3 py-2 text-white text-lg hover:bg-[#9E77D2] rounded-full ${
      active ? "bg-[#9E77D2]" : ""
    }`;

  const submenuContainerClasses = `flex flex-col gap-1 ${
    hamburger ? "ml-0" : "ml-4"
  }`;
  const logout = () => {
    navigate("/");
  };

  return (
    <div
      className={`h-[98vh] p-4 bg-[#24252B] m-2 rounded-xl relative ${
        hamburger ? "w-[120px]" : "w-[250px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-white">Rizwan T</h1>
        <div className="cursor-pointer" onClick={toggleHamburger}>
          <HamburgerIcon />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        {/* --- Organization --- */}
        <div
          className="flex items-center px-3 py-2 justify-between cursor-pointer"
          onClick={() => setOrgMenuOpen((prev) => !prev)}
        >
          <div className="flex items-center">
            <LocalSalesIcon />{" "}
            {!hamburger && (
              <p className="ml-4 text-white text-lg">Organization</p>
            )}
          </div>
          <ArrowDownIcon className={`${orgMenuOpen ? "rotate-180" : ""}`} />
        </div>
        {orgMenuOpen && (
          <div className={submenuContainerClasses}>
            <Link
              to="/organizationentry"
              className={`${menuItemClasses(isActive("/organizationentry"))} ${
                hamburger ? "justify-center" : ""
              }`}
            >
              <EntryIcon /> {!hamburger && <span>Entry</span>}
            </Link>
            <Link
              to="/organizationlist"
              className={`${menuItemClasses(isActive("/organizationlist"))} ${
                hamburger ? "justify-center" : ""
              }`}
            >
              <ListIcon /> {!hamburger && <span>List</span>}
            </Link>
          </div>
        )}

        {/* --- Team --- */}
        <div
          className="flex items-center px-3 py-2 justify-between cursor-pointer"
          onClick={() => setTeamMenuOpen((prev) => !prev)}
        >
          <div className="flex items-center">
            <TeamIcon />{" "}
            {!hamburger && <p className="ml-4 text-white text-lg">Team</p>}
          </div>
          <ArrowDownIcon className={`${teamMenuOpen ? "rotate-180" : ""}`} />
        </div>
        {teamMenuOpen && (
          <div className={submenuContainerClasses}>
            <Link
              to="/teamentry"
              className={`${menuItemClasses(isActive("/teamentry"))} ${
                hamburger ? "justify-center" : ""
              }`}
            >
              <EntryIcon /> {!hamburger && <span>Entry</span>}
            </Link>
            <Link
              to="/teamlist"
              className={`${menuItemClasses(isActive("/teamlist"))} ${
                hamburger ? "justify-center" : ""
              }`}
            >
              <ListIcon /> {!hamburger && <span>List</span>}
            </Link>
          </div>
        )}

        {/* --- User List --- */}
        <Link
          to="/userlist"
          className={`${menuItemClasses(isActive("/userlist"))} ${
            hamburger ? "justify-center" : ""
          }`}
        >
          <UserIcon /> {!hamburger && <span>User List</span>}
        </Link>
        <Link
          to="/objectiveslist"
          className={`${menuItemClasses(isActive("/objectiveslist"))} ${
            hamburger ? "justify-center" : ""
          }`}
        >
          <ListIcon /> {!hamburger && <span>Objectives List</span>}
        </Link>
      </div>
      <div className="absolute bottom-5">
        <button
          className={`${
            hamburger ? "w-[50px] justify-center" : "w-[210px]"
          } bg-[#2D2D35] text-white text-lg  py-3 px-4 rounded-full flex items-center gap-2 hover:bg-[#9E77D2] focus:bg-[#9E77D2]`}
          onClick={logout}
        >
          <LogoutIcon /> {!hamburger && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
