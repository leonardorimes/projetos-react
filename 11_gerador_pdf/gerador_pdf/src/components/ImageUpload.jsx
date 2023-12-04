const ImageUpload = () => {
  return (
    <div className="imageUpload">
      <label className="configLabel">
        Upload Image:
        <input type="file" accept="image/*" className="fileInput" />
      </label>
    </div>
  );
};

export default ImageUpload;
