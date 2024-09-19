import { useRef } from "react";
import styles from "./bookSelector.module.css";
export default function BookSelector() {
  const fileInputRef = useRef(null);

  const handleSpanClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <form>
        <div className={styles.container}>
          <div>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "100px", color: "#1a1450", cursor: "pointer" }}
              onClick={handleSpanClick}
            >
              cloud_upload
            </span>

            <p>drop your file here</p>
          </div>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        </div>
      </form>
    </div>
  );
}
