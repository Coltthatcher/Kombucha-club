import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  const { handleSellPint, mainKombuchaList} = props;


  return (
    <React.Fragment>
      {mainKombuchaList.map((kombucha, index) =>
        <Kombucha
          // whenKombuchaClicked = { props.onKegSelection }
          pint={kombucha.pint}
          content={kombucha}
          key = {index}
          handleSellPint={handleSellPint}
          id={kombucha.id}/>
      )}
    </React.Fragment>
  );

}


KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  handleSellPint: PropTypes.func

};

export default KombuchaList;