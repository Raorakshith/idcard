import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import Draggable from "react-draggable";
import MoreDetails from './MoreDetails';


function App() {
  const [rows, setrows] = useState("");
  const [columns, setcolumns] = useState("");
  const [image, setImage] = useState(null)

  const filehandler = (event) =>{
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj,(err, resp)=>{
      if(err){
        console.log(err);
      }else{
        setcolumns(resp.cols);
        setrows(resp.rows);
        console.log(resp.rows)
        // console.log(resp.cols)
      }
    })
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }
  return (
    <div className="App">
      <header className="App-header">
      <div>Upload Excel</div>
        <input type="file" onChange={filehandler.bind(this)} style={{"padding":"10px","top":"0px"}}/>
        <div>Upload Background image</div>
        <input type="file" onChange={onImageChange} className="filetype" />

        <div>
          {rows && <MoreDetails
         data={rows}
         img={image}/>}
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
