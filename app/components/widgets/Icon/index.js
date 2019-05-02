/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ViewPropTypes from 'bloodbud/app/config/ViewPropTypes';

// import FontAwesome, { Icons } from 'react-native-fontawesome';
import IconElem from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';

import styled, { css } from 'styled-components';
import parseStyles from './parseStyles';

export const Wrapper = styled.View`
  margintop: ${props => props.marginTop || 1};
  paddinghorizontal: 5px;
`;

function Icon(props) {
  if (!props || !Icons[props.name]) return null;

  const { name, style, marginTop, ...restProps } = props;
  delete restProps.align;
  const styles = parseStyles(style, restProps);
  // console.log('icons',Icons)
  return (
    <Wrapper marginTop={marginTop}>
      <IconElem style={styles} name={name} />
    </Wrapper>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Icon;
