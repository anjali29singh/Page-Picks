import { useEffect, useRef, useState } from "react";
import styles from "./bookSelector.module.css";

export default function BookSelector() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleSpanClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const inputFile = e.target.files[0];

    if (inputFile) {
      setFile(inputFile);
    }
  };

  const handlePdfSubmit = (e) => {
    e.preventDefault();

    if (file) {
      console.log(file);
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlePdfSubmit}>
        <div className={styles.container}>
          <div className={styles.chooseFile}>
            <span
              role="button"
              tabIndex={0}
              className="material-symbols-outlined"
              style={{ fontSize: "100px", color: "#1a1450", cursor: "pointer" }}
              onClick={handleSpanClick}
              onKeyDown={(e) => {
                e.key === "Enter" && handleSpanClick();
              }}
            >
              cloud_upload
            </span>
            <span>drop your file here</span>
          </div>
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
