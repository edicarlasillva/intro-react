import React, { Component, Fragment } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  render() {
    return (
      // Fragmentos - Usar tags vazias por volta do conteúdo (elemento root)
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
