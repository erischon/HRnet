import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateEmployeeForm from "../components/CreateEmployeeForm";

// import MyModal from "../components/testModal";
import { MyModal } from "my-react-modal-erischon";

/**
 * @description Page for creating an employee
 */
function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const navigate = useNavigate();

  const modalProps = {
    title: "Employee created successfully",
    message: "What do you want to do next?",
    actionA: {
      title: "Back to creation form",
      action: () => {
        setIsModalOpen(false);
      },
    },
    actionB: {
      title: "Go to employee list",
      action: () => {
        navigate("/employee");
      },
    },
    isOpen: setIsModalOpen,
    ui: {
      modalBackgroundContainer: "bg-red-600",
      modalBackgroundContainerOpacity: "bg-opacity-90",
      modalBackground: "bg-zinc-100",
      modalColor: "text-black",
      buttonABackground: "bg-orange-600",
      buttonAColor: "text-white",
      buttonBBackground: "bg-orange-600",
      buttonBColor: "text-white",
    },
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Create Employee
      </h2>

      {isModalOpen ? <MyModal modalProps={modalProps} /> : null}

      <CreateEmployeeForm setModal={setIsModalOpen} />
    </>
  );
}

export default CreateEmployee;
