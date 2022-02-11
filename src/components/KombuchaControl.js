import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaList from "./KombuchaList";
import KombuchaDetail from "./KombuchaDetail";



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

    handlePintsLeft = () => {
      const chosenKombucha = this.state.chosenKombucha;
      const sellKombucha = Object.assign({}, chosenKombucha, {pints: parseInt(chosenKombucha.pints) -1 });
      const newNewKombuchaList = this.state.mainKombuchaList
        .filter(kombucha => kombucha.id !== this.state.chosenKombucha.id)
        .concat(sellKombucha);
      this.setState({
        mainKombuchaList: newNewKombuchaList,
        chosenKombucha: sellKombucha
      });
    }
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "Return to kombucha list";
    } else if (this.state.chosenKombucha != null) {
      currentlyVisibleState =
      <KombuchaDetail
        kombucha={this.state.chosenKombucha}
        onClickPour={this.handlePintsLeft}/>
      buttonText="Retun to List";
    } else { (this.state.formVisibleOnPage) 
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "return to List"
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