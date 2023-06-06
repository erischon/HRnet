import EmployeeTable from "../components/EmployeeTable";

function Employee() {
  return (
    <>
      <div className="flew w-full ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Current Employees
        </h2>

        <EmployeeTable />
      </div>
    </>
  );
}
export default Employee;
