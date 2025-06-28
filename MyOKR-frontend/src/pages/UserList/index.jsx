import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../components/icons/DeleteIcon";
import EditIcon from "../../components/icons/EditIcon";
import MainLayout from "../../layout/MainLayout";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeletePopup from "../../components/DeletePopup/DeletePopup";
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Option,
  Select,
  Table,
  Typography,
} from "@mui/joy";
import LeftArrowIcon from "../../components/icons/LeftArrowIcon";
import RightArrowIcon from "../../components/icons/RightArrowIcon";
import InputField from "../../components/InputField/InputField";
function labelDisplayedRows({ from, to, count }) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

const UserList = () => {
  const navigate = useNavigate();
  const [Page, setPage] = useState(0);
  const [RowsPerPage, setRowsPerPage] = useState(10);
  const [TotalPages, setTotalPages] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [ListData, setListData] = useState([]);
  const [DeleteId, setDeleteId] = useState("");
  const [popUp, setpopUp] = useState(false);

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getLabelDisplayedRowsTo = () => {
    return Math.min((Page + 1) * RowsPerPage, TotalPages);
  };

  const handleChangeRowsPerPage = (event, newValue) => {
    setPage(0);
    setRowsPerPage(parseInt(newValue.toString(), 10));
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const getData = async () => {
    setLoading(true);
    try {
      const data = await axios.get("http://localhost:8080/Team");
      setListData(data.data);
      setTotalPages(Math.ceil(data.data.length / RowsPerPage));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const handleDelete = () => {
    try {
      const data = axios.delete(`http://localhost:8080/Team/${DeleteId}`);
      toast.error("You have successfully deleted Local Sales");
      getData();
    } catch (error) {
      console.error("Error deleting local sales:", error);
    }
  };
  return (
    <MainLayout>
      <h1 className="text-2xl font-medium mb-4">Team List</h1>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        {" "}
        <InputField
          name={"username"}
          placeholder={"Username"}
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
      <div className="overflow-x-auto w-full mt-6">
        <Table
          borderAxis={"both"}
          hoverRow
          sx={{
            width: "100%",
            tbody: {
              tr: {
                "&:hover": {
                  background: "#e9e9e980",
                },
              },
            },
          }}
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 ">S.No</th>
              <th className="px-2 py-1 ">User Name</th>
              <th className="px-2 py-1 ">User Password</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {Loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : ListData?.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Data Found
                </td>
              </tr>
            ) : (
              ListData?.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border-b last:border-none"
                >
                  <td className="px-2 py-1">{index + 1}</td>
                  <td className="px-2 py-1">{data.Team}</td>
                  <td className="px-2 py-1">{data.Team}</td>
                  <td className="px-2 py-1">
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/teamentry?editid=${data.id}`)}
                        className="p-1 bg-blue-500 text-white rounded"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(data.id);
                          setpopUp(true);
                        }}
                        className="p-1 bg-red-500 text-white rounded"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "flex-end",
                  }}
                >
                  <FormControl orientation="horizontal" size="sm">
                    <FormLabel>Rows per page:</FormLabel>
                    <Select
                      onChange={handleChangeRowsPerPage}
                      value={RowsPerPage}
                    >
                      <Option value={5}>5</Option>
                      <Option value={10}>10</Option>
                      <Option value={25}>25</Option>
                      <Option value={100}>100</Option>
                    </Select>
                  </FormControl>
                  <Typography textAlign="center" sx={{ minWidth: 80 }}>
                    {labelDisplayedRows({
                      from: ListData.length === 0 ? 0 : Page * RowsPerPage + 1,
                      to: getLabelDisplayedRowsTo(),
                      count: TotalPages,
                    })}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={Page === 0}
                      onClick={() => handleChangePage(Page - 1)}
                      sx={{ bgcolor: "background.surface" }}
                    >
                      <LeftArrowIcon />
                    </IconButton>

                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={getLabelDisplayedRowsTo() >= TotalPages}
                      onClick={() => handleChangePage(Page + 1)}
                      sx={{ bgcolor: "background.surface" }}
                    >
                      <RightArrowIcon />
                    </IconButton>
                  </Box>
                </Box>
              </td>
            </tr>
          </tfoot>
        </Table>
        <DeletePopup
          isOpen={popUp}
          onClose={() => setpopUp(false)}
          onConfirm={handleDelete}
        />
      </div>
    </MainLayout>
  );
};

export default UserList;
