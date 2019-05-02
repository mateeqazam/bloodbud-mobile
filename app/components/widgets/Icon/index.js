/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ViewPropTypes from 'bloodbud/app/config/ViewPropTypes';

import IconElem from 'react-native-vector-icons/FontAwesome';

import styled, { css } from 'styled-components';
import parseStyles from './parseStyles';

export const Wrapper = styled.View`
  margintop: ${props => props.marginTop || 1};
  paddinghorizontal: 5px;
`;

function Icon(props) {
  const { name, style, marginTop, ...restProps } = props;
  delete restProps.align;
  const styles = parseStyles(style, restProps);
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
