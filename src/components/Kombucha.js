import React from "react";
import PropTypes from "prop-types";



function Kombucha(props){
  return (
    <React.Fragment>
    <div onClick = {() => props.whenKombuchaClicked(props.id)}>
      <h3>{props.name} - {props.brand}</h3>
    </div>

    </React.Fragment>
  )
  
}
Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
};

export default Kombucha;