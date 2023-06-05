import CreateEmployeeForm from "../components/CreateEmployeeForm";

function CreateEmployee() {
  return (
    <>
      <div className="flew w-full ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Employee
        </h2>

        <CreateEmployeeForm />
      </div>
    </>
  );
}

export default CreateEmployee;
