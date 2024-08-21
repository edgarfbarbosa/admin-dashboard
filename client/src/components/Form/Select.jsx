const Select = ({ label, value, onChange }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text text-white">{label}</span>
      </div>
      <select
        className="select select-bordered"
        value={value}
        onChange={onChange}
      >
        <option value="mouses">Mouses</option>
        <option value="mousepads">Mousepads</option>
        <option value="teclados">Teclados</option>
      </select>
    </label>
  );
};

export default Select;
