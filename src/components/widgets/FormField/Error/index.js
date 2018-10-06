/**
*
* FieldError
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  TextWrapper,
} from './styles';

function FieldError(props) {
  if (!props || !props.error) return null;
  return <TextWrapper fontWeight="semiLight">{props.error}</TextWrapper>;
}

FieldError.propTypes = {
  error: PropTypes.string,
};

export default FieldError;
