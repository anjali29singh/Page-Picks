import "./App.css";
import BookSelector from "./components/bookSelector/BookSelector";
import Header from "./components/header/Header";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  return (
    <div className="App">
      <Header />
      <BookSelector />
    </div>
  );
}

export default App;
