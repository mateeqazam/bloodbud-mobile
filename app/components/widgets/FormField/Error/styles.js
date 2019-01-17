/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Text from 'bloodbud/app/components/widgets/Text';

export const TextWrapper = styled(Text)`
  color: ${props => props.theme.colors.danger};
`;
