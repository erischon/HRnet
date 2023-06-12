import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { states } from "../constants/states.list";
import { departments } from "../constants/departments.list";
import { addEmployee } from "../features/employee/employeeSlice";
import MyModal from "./modal/MyModal";

/**
 * @description Create employee form component
 */
function CreateEmployeeForm() {
  const [message, setMessage] = useState(null);
  const { employeeList } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    data.id = employeeList.length + 1;

    dispatch(addEmployee(data));

    form.reset();
    setMessage("Employee added successfully");
    navigate("/employee");
  };

  return (
    <>
      <form
        className="flex flex-col w-full sm:max-w-xl px-6 py-6 mx-auto mb-6 bg-slate-50 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="font-light text-xl mb-4">Employee Informations</h2>

        <div className="sm:grid sm:grid-cols-2 sm:gap-2 mb-4">
          <div className="flex flex-col mb-2">
            <label htmlFor="firstName" className="mb-1 font-semibold">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              className="block border px-2 py-1 rounded-md"
              placeholder="Enter first name..."
              {...register("firstName", {
                required: { value: true, message: "First Name is required" },
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.firstName?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="lastName" className="mb-1 font-semibold">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              className="block border px-2 py-1 rounded-md"
              placeholder="Enter last name..."
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.lastName?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="birthDate" className="mb-1 font-semibold">
              Date Of Birth <span className="text-red-500">*</span>
            </label>
            <input
              id="birthDate"
              type="date"
              className="block border px-2 py-1 rounded-md"
              {...register("birthDate", {
                required: { value: true, message: "Date of birth is required" },
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.birthDate?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="startDate" className="mb-1 font-semibold">
              Start date <span className="text-red-500">*</span>
            </label>
            <input
              id="startDate"
              type="date"
              className="block border px-2 py-1 rounded-md"
              {...register("startDate", {
                required: { value: true, message: "Start date is required" },
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.startDate?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="department" className="mb-1 font-semibold">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              id="department"
              className="block border px-2 py-1 rounded-md text-gray-400"
              {...register("department", {
                required: { value: true, message: "Department is required" },
              })}
            >
              <option disabled value="">
                Select a department...
              </option>

              {departments.map((state, n) => (
                <option key={n} value={departments.name} className="text-black">
                  {state.name}
                </option>
              ))}
            </select>

            <p className="text-red-500 text-sm italic">
              {errors.department?.message}
            </p>
          </div>
        </div>

        <h2 className="font-light text-xl mb-4">Employee Address</h2>

        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
          <div className="flex flex-col mb-2">
            <label htmlFor="street" className="mb-1 font-semibold">
              Street <span className="text-red-500">*</span>
            </label>
            <input
              id="street"
              type="text"
              placeholder="Enter street name..."
              {...register("street", {
                required: { value: true, message: "Street is required" },
              })}
              className="block border px-2 py-1 rounded-md"
            />

            <p className="text-red-500 text-sm italic">
              {errors.street?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="city" className="mb-1 font-semibold">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="Enter city name..."
              {...register("city", {
                required: { value: true, message: "City is required" },
              })}
              className="block border px-2 py-1 rounded-md"
            />

            <p className="text-red-500 text-sm italic">
              {errors.city?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="state" className="mb-1 font-semibold">
              State <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              className="block border px-2 py-1 rounded-md text-gray-400"
              {...register("state", {
                required: { value: true, message: "State is required" },
              })}
            >
              <option disabled value="">
                Select a state...
              </option>

              {states.map((state) => (
                <option
                  key={state.abbreviation}
                  value={state.abbreviation}
                  className="text-black"
                >
                  {state.name}
                </option>
              ))}
            </select>

            <p className="text-red-500 text-sm italic">
              {errors.state?.message}
            </p>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="zipCode" className="mb-1 font-semibold">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              id="zipCode"
              type="number"
              placeholder="Enter Zip code..."
              {...register("zipCode", {
                required: { value: true, message: "Zip code is required" },
              })}
              className="block border px-2 py-1 rounded-md"
            />

            <p className="text-red-500 text-sm italic">
              {errors.zipCode?.message}
            </p>
          </div>
        </div>

        <button className="px-2 py-1 bg-cyan-800 text-white font-semibold rounded-md mt-6 mb-2 w-full mx-auto">
          Submit
        </button>
      </form>

      <MyModal message={message} setMessage={setMessage} />
    </>
  );
}
export default CreateEmployeeForm;
