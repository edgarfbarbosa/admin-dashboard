const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text text-white">{label}</span>
      </div>
      <input
        className="input input-bordered w-full max-w-xs"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
