const PrimaryButton = ({ handleClick, data }) => {
  return (
    <>
      <button
        className="btn primary-btn"
        style={{
          border: `2px solid ${data?.data?.seed?.hex?.value}`,
          color: data?.data?.seed?.hex?.value,
        }}
        onClick={ev => handleClick(ev)}
      >
        <span style={{ verticalAlign: 'top' }}>👉</span>
        New Color Scheme
      </button>
    </>
  );
};

export default PrimaryButton;
