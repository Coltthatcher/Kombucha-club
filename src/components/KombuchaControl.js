import React from "react";



class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKombuchaList: [],
      chosenKombucha: null // new code
    };
    this.handleClick  = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMainKombuchaList = this.state.mainKombuchaList.concat(newKombucha);
    this.setState({
      mainKombuchaList: newMainKombuchaList,
      formVisibleOnPage: false
    });
  }
}




export default KombuchaControl;