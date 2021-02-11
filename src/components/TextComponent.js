import React, { useState } from "react";
import "./TextComponent.css";

const Greeting = (prop) =>
  React.createElement("h1", { className: prop.color }, `Hello, ${prop.name}`);

class Paragraph extends React.Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

class Toggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    this.props.onToggleChange(this.state.isToggleOn);
  };

  render() {
    return (
      <a style={{ cursor: "pointer" }} onClick={this.handleClick}>
        {this.state.isToggleOn ? "Light" : "Dark"}
      </a>
    );
  }
}

function TextComponent() {
  const [theme, setTheme] = useState("dark");
  const handleToggleChange = (isOn) =>
    isOn ? setTheme("light") : setTheme("dark");
  return (
    <div className="App-header">
      <Greeting name="React" color={theme} />
      <Paragraph text="A long time ago, in a galaxy far, far away..." />
      <Toggle onToggleChange={handleToggleChange} />
    </div>
  );
}

export default TextComponent;
