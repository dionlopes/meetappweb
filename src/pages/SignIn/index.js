import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="meetapp" />

      <button id="voltar" type="button">
        <Link to="/">Voltar</Link>
      </button>

      <Form onSubmit={() => {}}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>

    </>
  );
}
