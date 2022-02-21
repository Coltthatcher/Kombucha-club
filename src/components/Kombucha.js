import React from "react";
import PropTypes from "prop-types";



function Kombucha(props){
  if (props.pint > 0){
    return (
      <React.Fragment>
        <div key={props.content.id}>
          <h1>Name{props.content.name}</h1>
          <p>Brand{props.content.brand}</p>
          <p>$ {props.content.price}</p>
          <p>ABV%{props.content.alcoholContent}</p>
          <p>Pints Left:{props.pint}</p>
          <button onClick={() => props.handleSellPint(props.id)}>Sell Pint</button>
        </div>
        </React.Fragment>
    )
  } else {
    return (
      <p>no pints are Left</p>
    )
  }
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  handleSellPint: PropTypes.func,
  pint: PropTypes.number
};

export default Kombucha; 