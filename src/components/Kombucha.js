import React from "react";
import PropTypes from "prop-types";



function Kombucha(props){
  let buy;
  if (props.content.quantity<1){
    buy = "No Buch Left";
  } else {
    buy = <button onClick={()=>props.method(props.position)}>Sell Pint</button>
  }
    return (
      <React.Fragment>
        <div key={props.content.id}>
          <h1>{props.content.name}</h1>
          <p>{props.content.brand}</p>
          <p>{props.content.price}</p>
          <p>{props.content.alcoholContent}</p>
          <p>{props.content.quantity}</p>
          {buy}
        </div>
        </React.Fragment>
    );
  }
Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
};

export default Kombucha;