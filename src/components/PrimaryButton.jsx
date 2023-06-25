const PrimaryButton = ({ handleClick }) => {
  return (
    <>
      <button className="btn primary-btn" onClick={ev => handleClick(ev)}>
        <span style={{ verticalAlign: 'top' }}>👉</span>New Color Scheme
      </button>
    </>
  );
};

export default PrimaryButton;
