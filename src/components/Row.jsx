import PropTypes from "prop-types";

Row.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

export default function Row({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  isRequired = false,
}) {
  return (
    <div className="p-10">
      <div className="w-56 relative group">
        <input
          id={id}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none"
        />
        <label
          htmlFor={id}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
