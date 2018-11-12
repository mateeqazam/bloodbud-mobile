/**
*
* BloodGroup
*
*/

import React from 'react';
import Checkbox from '../../widgets/Checkbox'
import Text from '../../widgets/Text'

import {
  BloodType,
  MainView,
  Wrapper
} from './styles';

class BloodGroup extends React.PureComponent {
  render() {
    return (
      <MainView>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>A -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>A +ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>B -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>B +ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>C -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>C +ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>D -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>D +ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>AB -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>AB +ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox value></Checkbox>
          <Text>O -ve</Text>
          </BloodType>
        </Wrapper>
        <Wrapper>
          <BloodType>
          <Checkbox ></Checkbox>
          <Text>O +ve</Text>
          </BloodType>
        </Wrapper>
      </MainView>
    );
  }
}

export default BloodGroup;
