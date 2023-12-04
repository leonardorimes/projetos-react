const ImageUpload = () => {
  return (
    <div className="imageUpload">
      <label className="configLabel">
        Upload Image:
        <input type="file" accept="image/*" className="fileinput" />
      </label>
    </div>
  );
};

export default ImageUpload;
