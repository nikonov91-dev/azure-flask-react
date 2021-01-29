import '../styles/App.css';
import {Component, createRef} from 'react';
import Service from "../services/api_service";

class App extends Component {
  constructor() {
    super();
    this.state = {list: []};
    this.service = new Service();
  }

  componentDidMount() {
    this.refreshBlobList()
  }

  render() {
    const {list} = this.state;
    return (
      <div className="App">
        <div className='l-col'>
          <h4>Upload file</h4>
          <Input service={this.service} refresh={this.refreshBlobList}/>
        </div>
        <div className='r-col'>
          <button onClick={this.refreshBlobList}>Update list</button>
          <h4>Download files</h4>
          <ul>
            {list.map(({name, size}) => <Item download_link={this.service.download_link} download={this.downloadFile} name={name} size={size} key={name+size}/>)}
          </ul>
        </div>
      </div>
    );
  }

  refreshBlobList = () => this.service.refreshList((list) => this.setState({list}));

}

export default App;

function Item({download, download_link, name, size}) {
  return <li className='ul-item'>
    <p>{name}</p>
    <a href={download_link(name)}>get me</a>
  </li>
}

const ref = createRef();

function Input({service, refresh}) {
  return <input type="file" multiple={true}
                onChange={(e) => {
                  service.upload(e.target.files, refresh);
                  ref.current.value = "";
                }}
                ref={ref}
  />
}