import Header from "./Header";
import React from "react";
import KombuchaControl from "./KombuchaControl";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kombuchaKeg: []
    };
  }

  HandlePintRemoval = (newKombucha) => {
    const placeholder = this.state.kombuchaKeg.concat(newKombucha);
    this.setState({
      kombuchaKeg: placeholder
    });
  }

render(){
  return (
    <React.Fragment>
      <Header />
      <KombuchaControl />
    </React.Fragment>
    );
  }
}
export default App;
