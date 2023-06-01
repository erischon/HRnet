import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import "react-datepicker/dist/react-datepicker.css";

function CreateEmployeeForm() {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="block border"
            {...register("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="block border"
            {...register("lastName")}
          />
        </div>

        <div>
          <label htmlFor="birthDate">Date Of Birth</label>
          <input
            id="birthDate"
            type="date"
            className="block border"
            {...register("birthDate")}
          />
        </div>

        <div>
          <label htmlFor="startDate">Start date</label>
          <input
            id="startDate"
            type="date"
            className="block border"
            {...register("startDate")}
          />
        </div>

        <fieldset className="flex border-2">
          <legend>Address</legend>

          <div className="flex">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" {...register("street")} />
          </div>

          <label htmlFor="city">City</label>
          <input id="city" type="text" {...register("city")} />

          <label htmlFor="state">State</label>
          <select name="state" id="state" {...register("state")}></select>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" {...register("zipCode")} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" {...register("department")}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button>Submit</button>
      </form>

      <DevTool control={control} />
    </>
  );
}
export default CreateEmployeeForm;
