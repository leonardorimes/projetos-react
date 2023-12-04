const TextStyleConfig = () => {
  return (
    <div className="textStyleConfig">
      <label className="configLabel">
        Font Size:
        <input type="text" className="input" />
      </label>
      <label className="configLabel">
        Font Color:
        <input type="color" className="colorPicker" />
      </label>
      <label className="configLabel">
        Bold:
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default TextStyleConfig;
