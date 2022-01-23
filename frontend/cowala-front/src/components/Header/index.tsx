import React, { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import {shade} from 'polished'

import { Container } from './styles';

import IllustrationSvg from'../../assets/logotipo.svg'
import Name from'../../assets/CowalaSoftware.svg'

interface Props{
  toggleThemes(): void
}

const Header:React.FC<Props> = ({toggleThemes}) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <div>
        <img src={IllustrationSvg} alt="Logo"/>
        <img src={Name} alt="" />
      </div>

      <Switch
        onChange={toggleThemes}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.9, colors.primary)}
        onColor={colors.secundary}
        />
     
    </Container>
  );
};

export default Header;
