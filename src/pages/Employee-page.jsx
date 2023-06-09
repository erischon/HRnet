import { useSelector } from "react-redux";

import EmployeeTable from "../components/EmployeeTable";

function Employee() {
  const { employeeList } = useSelector((store) => store.employee);

  return (
    <>
      <div className="flew w-full mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Current Employees
        </h2>

        <EmployeeTable employeesData={employeeList} />
      </div>
    </>
  );
}
export default Employee;
