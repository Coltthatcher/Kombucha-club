
import React from "react";
import PropTypes from "prop-types";


function KombuchaDetail(props){

  const { kombucha, onClickPour } = props;

  let pintsRemaining;
  let saleButton;
  if (kombucha.pints > 0) {
    pintsRemaining = <h3>Pints: {kombucha.pints }</h3>;
    saleButton = <button onClick={ () => onClickPour()}>Sell</button>
  } else {
    pintsRemaining = <h3>None of this buch left!</h3>;
  };


  return (
    <React.Fragment>
      <h2>Kombucha Details</h2>
      <h3>{kombucha.name} made by {kombucha.brand}</h3>
      <h4>{kombucha.price}</h4>
      <h4>{kombucha.alcoholContent}</h4>
    </React.Fragment>
  );
}

KombuchaDetail.propTypes = {
  kombucha: PropTypes.object,
  onClickPour: PropTypes.func
};

export default KombuchaDetail;
