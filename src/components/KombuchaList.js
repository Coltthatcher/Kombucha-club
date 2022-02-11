import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return (
    <React.Fragment>
      {props.KombuchaList.map((kombucha, index) =>
      <Kombucha
        names={kombucha.names}
        brand={kombucha.brand}
        method = {props.onDecrementKombuchaQuantity}
        key={kombucha.id}/>
        )}
    </React.Fragment>
  );

}


KombuchaList.propTypes = {
  kombuchaList: PropTypes.array

};

export default KombuchaList;