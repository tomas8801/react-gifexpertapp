import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const submitHandle =(e) => {
        e.preventDefault();
        // console.log('Submit hecho...');
        if( inputValue.trim().length > 2) {

            setCategories( cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ submitHandle }>
            <h2>{ inputValue }</h2>
            <input type="text" value={ inputValue } onChange={ handleInputChange } />
        </form>
    )
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
