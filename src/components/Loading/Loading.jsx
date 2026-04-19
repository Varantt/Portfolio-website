import "./loading.css";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100svh",
        background: "var(--bg)",
      }}
    >
      <div className="loader" />
    </div>
  );
};
