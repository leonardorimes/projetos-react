import ImageUpload from "./ImageUpload";
import TextStyleConfig from "./TextStyleConfig";

const GeneratePDF = () => {
  return (
    <div className="container">
      <label className="label">
        Título:
        <input type="text" className="input" />
      </label>
      <label className="label">
        Descrição:
        <input type="text" className="input" />
      </label>
      <TextStyleConfig />
      <ImageUpload />
      <button className="button">Gerar PDF</button>
    </div>
  );
};

export default GeneratePDF;
