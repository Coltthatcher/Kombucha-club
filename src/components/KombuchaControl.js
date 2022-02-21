import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaList from "./KombuchaList";




class KombuchaControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKombuchaList: [],
      selectedKombucha: null
    };
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
  
  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.mainKombuchaList.filter(kombucha => kombucha.id === id)[0];
    this.setState({selectedKombucha: selectedKombucha});
  }


  handleSellPint = (id) => {
    let selectedKombucha = this.state.mainKombuchaList.find(kombucha => kombucha.id === id);
    selectedKombucha.pint--;
    const newMainKombuchaList = this.state.mainKombuchaList.map((kombucha) => {return kombucha.id === id ? selectedKombucha : kombucha});
    this.setState({mainKombuchaList: newMainKombuchaList});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <KombuchaList 
                                handleSellPint={this.handleSellPint}
                                mainKombuchaList={this.state.mainKombuchaList} 
                              />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



export default KombuchaControl;