import CreateEmployeeForm from "../components/CreateEmployeeForm";

/**
 * @description Page for creating an employee
 */
function CreateEmployee() {
  return (
    <>
      <div className="w-full ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Employee
        </h2>

        <CreateEmployeeForm />
      </div>
    </>
  );
}

export default CreateEmployee;
