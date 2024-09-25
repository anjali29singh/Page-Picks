import { useEffect, useState } from "react";

export default function BookSelector() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const inputFile = e.target.files[0];
    setFile(inputFile);
  };
  useEffect(() => {}, [file]);

  const submitFile = (e) => {
    e.preventDefault();

    console.log(file);
  };

  return (
    <div>
      <form>
        <input type="file" accept=".pdf" onChange={handleChange} />
        <button onClick={submitFile}>submit</button>
      </form>
    </div>
  );
}
