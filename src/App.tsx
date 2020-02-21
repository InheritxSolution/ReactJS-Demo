import React from 'react';
import './App.css';
import NameList from './Component/list';
import {
  Typography,
  TextField,
} from '@material-ui/core';
import MainButton from './Component/mainButton';

interface IProps { }

interface IState {
  username: string;
  data: any;
  pickData: any;
};


export default class App extends React.Component<IProps, IState>  {
  state: IState = {
    username: '',
    data: [],
    pickData: []
  };

  handleUsername = (event: any): void => {
    this.setState({
      username: event.target.value,
    });
  }

  handleAdd = (e: any) => {
    const { data, username } = this.state;
    e.preventDefault();
    if (username === '') {
      alert("Please Enter name")
    } else {
      data.push({ "name": username })
    }
    this.setState({ data: data, username: '' })
  }

  handleupdate = (e: any) => {
    const { data, pickData } = this.state;
    e.preventDefault();
    if (data.length > 0) {
      const randomnumber = Math.floor(Math.random() * data.length);
      data.forEach((val: any, index: number) => {
        if (randomnumber === index) {
          pickData.push(val)
          this.setState({ pickData })
          data.splice(index, 1);
          this.setState({
            data: data,
          });
        }
      })
    } else {
      alert("Please add data into list")
    }
  }

  handleRemove = (index: number, e: any) => {
    e.preventDefault();
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({ data: data });
  }

  render() {
    const { username, data, pickData } = this.state;
    return (
      <div className="mainContainer">
        <div className="formContainer">
          <div className="addDataContainer">
            <TextField
              placeholder="Enter your Username"
              onChange={this.handleUsername}
              value={username}
            />
            <MainButton onClick={this.handleAdd} buttonname="Add Data" />
          </div>
          <NameList data={data} onClick={this.handleRemove} />
          <div className="pickButton">
            <MainButton onClick={this.handleupdate} buttonname="Picked Data" />
          </div>
          <div className="pickContainer">
            {pickData.map((name: any, index: number) => (
              <Typography >{name.name}</Typography>
            ))}
          </div>
        </div>
      </div>
    )
  }
}


