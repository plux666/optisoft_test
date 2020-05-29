import React from 'react';
import DropBox from './components/drop-box.js';
import MainList from "./components/list-main";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      error: false
    }

    this.dropBoxRef = React.createRef()
  }

  fileHandler = (file, fileName) => {
    let data;
    let parsedData = {};

    try {
      data = JSON.parse(file)
      data.forEach(v => {
        if (parsedData[v.user]) {
          parsedData[v.user].push({comment: v.comment, replies: v.replies})
        } else {
          parsedData[v.user] = []
          parsedData[v.user].push({comment: v.comment, replies: v.replies})
        }
      })

      this.setState({
        stage: 2,
        discData: parsedData,
        fileName: fileName,
        error: false
      })

    } catch(e) {
      console.error(e)
      this.setState({error: true})
    }
  }

  deleteUser = (userName) => {
    let state = Object.assign({}, this.state.discData);

    delete state[userName]
    this.setState({discData: state})
  }

  render() {
    if (this.state.stage === 1) {
      return (
        <div className="app">
          <div className='container-main'>
            <DropBox error={this.state.error}
              ref={this.dropBoxRef}
              file={this.fileHandler}/>
          </div>
        </div>
      );
    } else if (this.state.stage === 2) {
      return(
          <div className="app">
            <div className='container-main'>
              <h2>{this.state.fileName}</h2>
              <MainList
                delete={this.deleteUser}
                users={this.state.discData}/>
            </div>
          </div>
      )
    }
  }
}

export default App;
