import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <img src={logo} alt="meetapp" />

        <aside>
          <Profile>
            <strong>Dion Lopes</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <button type="button" onClick={() => dispatch(signOut())}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
