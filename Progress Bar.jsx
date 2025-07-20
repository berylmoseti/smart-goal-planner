/**function ProgressBar({ value }) {
  return (
    <div style={{
      height: "20px",
      background: "#eee",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "0.5rem"
    }}>
      <div
        style={{
          width: `${value}%`,
          background: value >= 100 ? "green" : "#00bcd4",
          height: "100%"
        }}
      />
    </div>
  );
}

export default ProgressBar;
**/