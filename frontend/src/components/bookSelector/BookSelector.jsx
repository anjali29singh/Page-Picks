import { useState } from "react";

export default function BookSelector() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const inputFile = e.target.files[0];
    setFile(inputFile);
  };

  const submitFile = (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();

      formData.append("file", file);
      console.log(formData.getAll("file"));
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result is ", result);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("no file selected");
    }
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <input type="file" accept=".pdf" onChange={handleChange} />
        <button onClick={submitFile}>submit</button>
      </form>
    </div>
  );
}
