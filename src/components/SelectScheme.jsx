const SelectScheme = ({ mode, handleChange, data }) => {
  return (
    <>
      <label
        htmlFor="chooseScheme"
        className="scheme-label"
        style={{
          textDecoration: `underline ${data?.data?.seed?.hex?.value}`,
        }}
      >
        Choose a Scheme
      </label>
      <select
        id="chooseScheme"
        name="chooseScheme"
        onChange={ev => handleChange(ev)}
        value={mode}
        className="scheme-select"
        required
      >
        <option value="analogic">Analogic</option>
        <option value="monochrome">Monochrome</option>
        <option value="analogic-complement">Analogic-Complement</option>
        <option value="quad">Quad</option>
      </select>
    </>
  );
};

export default SelectScheme;
