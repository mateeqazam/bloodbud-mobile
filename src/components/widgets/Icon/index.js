/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import parseStyles from './parseStyles';

function Icon(props) {
  if (!props || !Icons[props.src]) return null;

  const { src, style, ...restProps } = props;
  const styles = parseStyles(style, restProps);
  return (
    <FontAwesome style={styles}>{Icons[props.src]}</FontAwesome>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Icon;
