import Row from "../components/Row";

export default function CreateEmployeePage() {
  return (
    <>
      <div className="">
        <a href="employee-list.html">View Current Employees</a>

        <h2>Create Employee</h2>
        <form action="#" id="create-employee" className="flex flex-col">
          <Row
            label={"First Name"}
            id={"firstName"}
            type={"text"}
            placeholder={""}
            value={""}
            onChange={() => {}}
            isRequired={true}
          />

          <Row
            label={"Last Name"}
            id={"last-name"}
            type={"text"}
            placeholder={""}
            value={""}
            onChange={() => {}}
            isRequired={true}
          />

          <Row
            label={"Date of Birth"}
            id={"date-of-birth"}
            type={"text"}
            placeholder={""}
            value={""}
            onChange={() => {}}
            isRequired={true}
          />

          <Row
            label={"Start Date"}
            id={"start-date"}
            type={"text"}
            placeholder={""}
            value={""}
            onChange={() => {}}
            isRequired={true}
          />

          <fieldset className="flex border-2 bg-blue-200">
            <legend>Address</legend>

            <div className="flex">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
            </div>

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <Row
            label={"Department"}
            id={"department"}
            type={"radio"}
            placeholder={""}
            value={""}
            onChange={() => {}}
            isRequired={true}
          />

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={() => {}}>Save</button>
      </div>
    </>
  );
}
