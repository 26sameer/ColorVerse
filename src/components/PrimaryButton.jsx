const PrimaryButton = ({ handleClick, data }) => {
  return (
    <>
      <button
        className="btn primary-btn"
        style={{
          border: `2px solid ${data?.data?.seed?.hex?.value}`,
          color: data?.data?.seed?.hex?.value,
          padding: '0 10px 3px',
        }}
        onClick={ev => handleClick(ev)}
      >
        <span style={{}}>👉</span>
        New Color Scheme
      </button>
    </>
  );
};

export default PrimaryButton;
