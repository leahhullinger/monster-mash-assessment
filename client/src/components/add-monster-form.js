import React, { Component } from 'react';
import './add-monster-form.css'

class AddMonsterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image_url: '',
      scary: {
        level: '',
      }
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleImageChange = (e) => {
    this.setState({ image_url: e.target.value })
  }
  handleScareChange = (e) => {
    this.setState({ scary: { level: e.target.value } })
  }
  handleButtonClick = () => {
    this.props.addMonster(this.state)
    this.setState({
      name: '',
      image_url: '',
      scary: {
        level: ''
      }
    })
  }


  render() {
    return (
      <div className="form-container">
        <div className="inputs-container">
          <label>Name</label>
          <input placeholder="name" value={this.state.name} onChange={this.handleNameChange}></input>
          <label>Image</label>
          <input placeholder="image-url" value={this.state.image_url} onChange={this.handleImageChange}></input>
          <label>Scare Level</label>
          <input placeholder="scare-level" value={this.state.scary.level} onChange={this.handleScareChange}></input>
        </div>
        <br />
        <button onClick={this.handleButtonClick}>Add Monster</button>

      </div >
    )
  }
}

export default AddMonsterForm;