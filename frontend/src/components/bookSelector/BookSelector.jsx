import { useState } from "react";

export default function BookSelector() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [pdfDataArr, setPdfDataArr] = useState([]);

  const handleChange = (e) => {
    const currFile = e.target.files[0];
    setFile(currFile);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!file) return;

    // Add the file to the list of PDF files
    setPdfFiles([...pdfFiles, file]);
    setFile(null);

    // Use URL.createObjectURL instead of FileReader
    const pdfObjectURL = URL.createObjectURL(file);
    setPdfDataArr([...pdfDataArr, { name: file.name, url: pdfObjectURL }]);

    // Clear the file input field
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = null;
  };

  const openPdfFile = (pdfURL) => {
    // Open the PDF in a new tab
    const newWindow = window.open();
    newWindow.document.write(
      `<iframe src="${pdfURL}" width="100%" height="100%"></iframe>`
    );
  };

  return (
    <div>
      <form>
        <input type="file" accept=".pdf" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Upload
        </button>
      </form>

      {pdfDataArr.map((pdfFile, ind) => (
        <div key={ind} style={{ marginTop: "20px" }}>
          <h4>{pdfFile.name}</h4>
          <button onClick={() => openPdfFile(pdfFile.url)}>Read</button>
          {pdfFile.url && (
            <embed
              src={pdfFile.url}
              width="800"
              height="600"
              type="application/pdf"
            />
          )}
        </div>
      ))}
    </div>
  );
}
