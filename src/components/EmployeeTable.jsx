import PropTypes from "prop-types";

import { DataGrid } from "@mui/x-data-grid";

EmployeeTable.propTypes = {
  employeesData: PropTypes.arrayOf(PropTypes.object),
};

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "startDate", headerName: "Start Date", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "birthDate", headerName: "Date of Birth", width: 130 },
  { field: "street", headerName: "Street", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  { field: "zipCode", headerName: "Zip Code", width: 130 },
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
      />
    </div>
  );
}

export default EmployeeTable;
