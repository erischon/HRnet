import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { states } from "../constants/states.list";
import { departments } from "../constants/departments.list";

function CreateEmployeeForm() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-4">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="block border"
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
            })}
          />

          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="block border"
            {...register("lastName", {
              required: { value: true, message: "Last name is required" },
            })}
          />

          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="birthDate">Date Of Birth</label>
          <input
            id="birthDate"
            type="date"
            className="block border"
            {...register("birthDate", {
              required: { value: true, message: "Date of birth is required" },
            })}
          />

          <p className="text-red-500 text-sm">{errors.birthDate?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="startDate">Start date</label>
          <input
            id="startDate"
            type="date"
            className="block border"
            {...register("startDate", {
              required: { value: true, message: "Start date is required" },
            })}
          />

          <p className="text-red-500 text-sm">{errors.startDate?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            {...register("street", {
              required: { value: true, message: "Street is required" },
            })}
            className="block border"
          />

          <p className="text-red-500 text-sm">{errors.street?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            {...register("city", {
              required: { value: true, message: "City is required" },
            })}
            className="block border"
          />

          <p className="text-red-500 text-sm">{errors.city?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="state">State</label>
          <select
            id="state"
            {...register("state", {
              required: { value: true, message: "State is required" },
            })}
            className="block border"
          >
            <option disabled selected value="">
              -- select a state --
            </option>

            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <p className="text-red-500 text-sm">{errors.state?.message}</p>
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            {...register("zipCode", {
              required: { value: true, message: "Zip code is required" },
            })}
            className="block border"
          />

          <p className="text-red-500 text-sm">{errors.zipCode?.message}</p>
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <select
            id="department"
            {...register("department", {
              required: { value: true, message: "Department is required" },
            })}
            className="block border"
          >
            <option disabled selected value="">
              -- select a dept. --
            </option>

            {departments.map((state, n) => (
              <option key={n} value={departments.name}>
                {state.name}
              </option>
            ))}
          </select>

          <p className="text-red-500 text-sm">{errors.department?.message}</p>
        </div>

        <button className="px-2 py-1 bg-cyan-800 text-white">Submit</button>
      </form>

      <DevTool control={control} />
    </>
  );
}
export default CreateEmployeeForm;
