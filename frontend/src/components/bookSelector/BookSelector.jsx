import { useState } from "react";

export default function BookSelector() {
  const [pdfFiles, setPdfFiles] = useState([]);

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const currFile = e.target.files[0];
    setFile(currFile);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setPdfFiles([...pdfFiles, file]);
    setFile(null);

    const fileInput = document.querySelector('input[type="file"]');

    if (fileInput) fileInput.value = null;
  };

  const openPdfFile = () => {
    console.log("open pdf file");
  };
  return (
    <div>
      <form>
        <input type="file" accept=".pdf" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          upload
        </button>
      </form>

      {pdfFiles.map((pdfFile, ind) => (
        <div key={ind}>
          <h4>{pdfFile.name}</h4>
          <button onClick={openPdfFile}>Read</button>
        </div>
      ))}
    </div>
  );
}
