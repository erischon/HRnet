import EmployeeTable from "../components/EmployeeTable";
import { employeesData } from "../data/employees.js";

function Employee() {
  return (
    <>
      <div className="flew w-full ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Current Employees
        </h2>

        <EmployeeTable employeesData={employeesData} />
      </div>
    </>
  );
}
export default Employee;
