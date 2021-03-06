import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKombuchaForm(props) {

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value, 
      pint: event.target.pint.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Kombucha Name' />
        <input 
          type='text'
          name='brand'
          placeholder="Brand" />
        <input 
          type='number'
          name='price'
          placeholder='Price' />
        <input 
          type='number'
          name='alcoholContent'
          placeholder="Alcohol Content" />
        <input
          type='number'
          name='pint'
          placeholder='pints left'
          min="0"
          defaultValue="124"/>
        <button type='submit'>Add new Kombucha</button>
      </form>
    </React.Fragment>
  )
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
};

export default NewKombuchaForm;