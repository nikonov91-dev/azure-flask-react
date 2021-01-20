import './App.css';
import {createRef} from 'react';

function App() {
  return (
    <div className="App">
      <div className='l-col'>
        <h4>Upload file</h4>
        <Input/>
      </div>
      <div className='r-col'>
        <h4>Download files</h4>
        <ul>
          <li className='ul-item'>
            <p>file 1</p>
            <button onClick={() => {
            }}>download me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

const API_URL = 'http://127.0.0.1:5000/api/';
const ref = createRef();

function Input() {
  return <input type="file" multiple={true}
                onChange={(e) => {
                  service.sendFile(e.target.files);
                  ref.current.value = ""
                }}
                ref={ref}
  />

}

const service = {
  sendFile: (files) => {
    const data = new FormData();
    for (let file of files) {
      data.append(file.name, file);
    }
    fetch(API_URL + 'upload', {
      method: 'POST',
      cache: 'no-cache',
      body: data
    })
      .then(res => {
        if (res.ok)
          return
        else return res
      })
      .catch(e => {return e})
  }
}