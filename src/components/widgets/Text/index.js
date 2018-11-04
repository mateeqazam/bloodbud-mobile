/**
*
* Text
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';

import {
  TextWrapper,
} from './styles';

function Text(props) {
  if (!props) return null;
  const { children, textTransform, ...restProps } = props;

  let textToDisplay = children;
  if (isString(children) && !!textTransform) {
    if (textTransform === 'uppercase') textToDisplay = children.toUpperCase();
    if (textTransform === 'lowercase') textToDisplay = children.toLowerCase();
  }
  return <TextWrapper {...restProps}>{textToDisplay}</TextWrapper>;
}

Text.propTypes = {
  children: PropTypes.string,
  textTransform: PropTypes.oneOf([
    'uppercase', 'lowercase',
  ]),
  fontWeight: PropTypes.oneOf([
    'normal', 'light', 'semiLight',
    'italic', 'semiBold', 'bold',
  ]),
  color: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Text;
