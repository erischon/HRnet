import { AiOutlineClose } from "react-icons/ai";

/**
 * @description Modal component
 */
function MyModal() {
  return (
    <>
      <div className="z-50 transition duration-300 bg-zinc-600 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
        <div className="bg-zinc-100 w-11/12 md:max-w-md mx-auto rounded-md shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <AiOutlineClose className="text-xl font-bold cursor-pointer" />
          </div>

          <div className="py-4 text-left px-4">Modal text to be display</div>

          <div className="flex justify-end items-center w-100 p-4 gap-4">
            <button className="bg-red-700 rounded-md px-3 py-1 text-white font-semibold">
              Action A
            </button>

            <button className="bg-red-700 rounded-md px-3 py-1 text-white font-semibold">
              Action B
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyModal;
