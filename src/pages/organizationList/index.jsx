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
function labelDisplayedRows({ from, to, count }) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

const OrganizationList = () => {
  const navigate = useNavigate();
  const [Page, setPage] = useState(0);
  const [RowsPerPage, setRowsPerPage] = useState(10);
  const [TotalPages, setTotalPages] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [ListData, setListData] = useState([]);
  const [DeleteId, setDeleteId] = useState("");
  const [popUp, setpopUp] = useState(false);

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
      const data = await axios.get("http://localhost:8080/organization");
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
      const data = axios.delete(
        `http://localhost:8080/organization/${DeleteId}`
      );
      toast.error("You have successfully deleted Local Sales");
      getData();
    } catch (error) {
      console.error("Error deleting local sales:", error);
    }
  };
  return (
    <MainLayout>
      <h1 className="text-2xl font-medium mb-4">Organization List</h1>
      <div className="overflow-x-auto w-full">
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
              <th className="px-2 py-1 ">Organization</th>
              <th className="px-2 py-1 ">Departments</th>
              <th className="px-2 py-1 ">Department Admin</th>
              <th className="px-2 py-1 ">Password</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {Loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : ListData?.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
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
                  <td className="px-2 py-1">{data.organization}</td>
                  <td className="px-2 py-1">
                    {data.departments.map((d) => d)}
                  </td>
                  <td className="px-2 py-1">{data.user}</td>
                  <td className="px-2 py-1">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/organizationentry?editid=${data.id}`)
                        }
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
              <td colSpan={6}>
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

export default OrganizationList;
