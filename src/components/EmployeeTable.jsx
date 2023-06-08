import PropTypes from "prop-types";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

EmployeeTable.propTypes = {
  employeesData: PropTypes.arrayOf(PropTypes.object),
};

const columns = [
  { field: "firstName", headerName: "First name", minWidth: 100, flex: 1 },
  { field: "lastName", headerName: "Last name", minWidth: 100, flex: 1 },
  { field: "startDate", headerName: "Start Date", minWidth: 100, flex: 1 },
  { field: "department", headerName: "Department", minWidth: 100, flex: 1 },
  { field: "birthDate", headerName: "Date of Birth", minWidth: 100, flex: 1 },
  { field: "street", headerName: "Street", minWidth: 100, flex: 1 },
  { field: "city", headerName: "City", minWidth: 100, flex: 1 },
  { field: "state", headerName: "State", minWidth: 100, flex: 1 },
  { field: "zipCode", headerName: "Zip Code", minWidth: 100, flex: 1 },
];

/**
 * @description EmployeeTable component
 */
function EmployeeTable({ employeesData }) {
  const rows = employeesData;

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        sx={{
          "& .MuiButton-text": {
            color: "#000000",
            textTransform: "none",
            opacity: 0.5,
          },
        }}
      />
    </div>
  );
}

export default EmployeeTable;
