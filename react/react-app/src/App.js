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
    this.fileHandler = this.fileHandler.bind(this)
    this.dropBoxRef = React.createRef()
  }

  async fileHandler(file, fileName) {
    let data;
    let users = [];

    async function findIn(comment) {
      if (comment.replies) {
        for (let repl of comment.replies) {
          if (!users.includes(repl.user)) {
            users.push(repl.user)
          }
          if (repl.replies) {
            await findIn(repl)
          }
        }
      }
    }

    try {
      data = JSON.parse(file)
      users.push(data.user)

      for (let v of data.replies) {
        if (!users.includes(v.user)) {
          users.push(v.user)
        }
        await findIn(v)
      }

      users = users.sort((a,b) => {
        return a.localeCompare(b, 'en')
      });

      this.setState({
        stage: 2,
        fileName: fileName,
        users: users,
        error: false
      })

    } catch(e) {
      console.error(e)
      this.setState({error: true})
    }
  }

  deleteUser = (userName) => {
    let state = Array.from(this.state.users);

    let index = state.findIndex(v => {
      if (v === userName) {
        return true
      } else {
        return false
      }
    })

    state.splice(index, 1)
    this.setState({users: state})
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
                users={this.state.users}/>
            </div>
          </div>
      )
    }
  }
}

export default App;
