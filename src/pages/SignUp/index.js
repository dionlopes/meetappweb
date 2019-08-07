import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatória'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Senha obrigatória'),
});

export default function SignUp() {

  function handleSubmit({ name, email, password }) {
    console.log(name, email, password);
  }

  return (
    <>
      <img src={logo} alt="meetapp" />

      <button id="voltar" type="button">
        <Link to="/">Voltar</Link>
      </button>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          Criar conta
        </button>

        <Link to="/login">Já tenho login</Link>
      </Form>
    </>
  );
}
