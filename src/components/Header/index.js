import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="meetapp" />

        <aside>
          <Profile>
            <strong>Dion Lopes</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <button type="button" onClick={() => {}}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
