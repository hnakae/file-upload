import { useState, useEffect } from "react";
import Axios from "axios";
// import qs from "qs";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  // const [uploadList, setUploadList] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    Axios.post("http://localhost:3001/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        alert("File Upload success");
        console.log(res.data);
        // setUploadList([...uploadList, { formData }]);
        // getUploads();
      })
      .catch((err) => console.error(err));
  };

  // const getUploads = () => {
  //   Axios.get("http://localhost:3001/uploads").then((res) => {
  //     setUploadList(res.data);
  //     // console.log(uploadList.length);
  //     for (let i = 0; i < uploadList.length; i++) {
  //       console.log(uploadList[i]);
  //     }
  //   });
  // };

  useEffect(() => {
    // getUploads();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" value={fileName} onChange={handleFileNameChange} />
        <br />
        {/* {isSelected ? (
        <div>
          <p>Filename: {file.name}</p>
          <p>Filetype: {file.type}</p>
          <p>Size in bytes: {file.size}</p>
          <p>lastModifiedDate: {file.lastModifiedDate.toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )} */}
        <button type="submit">Submit</button>
      </form>
      {/* <div>
        {uploadList.map((val, key) => {
          return (
            <div key={key}>
              <p>id: {val.id}</p>
              <p>name: {val.name}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
