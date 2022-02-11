import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaList from "./KombuchaList";




class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKombuchaList: [],
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
    })
  }
    handleDecrementKombuchaQuantity = (quantityKombucha) => {
      const updateKombuchaQuantity = [...this.state.mainKombuchaList];
      updateKombuchaQuantity[quantityKombucha].quantity = updateKombuchaQuantity[quantityKombucha].quantity-1;
      this.setState({
        mainKombuchaList: updateKombuchaQuantity
      })
    }
  


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <KombuchaList onDecrementKombuchaQuantity={this.handleDecrementKombuchaQuantity}
      kombuchaList={this.state.mainkombuchaList} />;
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