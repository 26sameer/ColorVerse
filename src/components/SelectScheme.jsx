const SelectScheme = ({ mode, handleChange, data, isFetched }) => {
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
        style={
          isFetched
            ? {
                color: data?.data?.seed?.contrast?.value,
                backgroundColor: data?.data?.seed?.hex?.value,
                outline: 'none',
              }
            : {}
        }
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
