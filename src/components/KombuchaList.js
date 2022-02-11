import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return (
    <React.Fragment>
      {props.KombuchaList.map((kombucha) =>
      <Kombucha
        names={kombucha.names}
        brand={kombucha.brand}
        pints={kombucha.pints}
        id={kombucha.id}
        key={kombucha.id}/>
        )}
    </React.Fragment>
  );

}


KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,

};

export default KombuchaList;