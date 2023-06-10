import { Outlet, Link } from "react-router-dom";
import { HiOutlineUserPlus, HiOutlineUsers } from "react-icons/hi2";

/**
 * @description Root component for application layout
 */
function Root() {
  return (
    <div className="mx-4 mt-2">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          <Link to="/">HRnet</Link>
        </h1>

        <nav className="flex gap-4">
          <Link
            to="/employee"
            className="flex items-center gap-2 hover:text-gray-400"
          >
            <HiOutlineUsers />
            Employees
          </Link>
          <Link
            to="/employee/create"
            className="flex items-center gap-2 hover:text-gray-400"
          >
            <HiOutlineUserPlus />
            Add Employee
          </Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
export default Root;
