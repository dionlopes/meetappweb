import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { MdAddCircleOutline } from 'react-icons/md';
import { newMeetupRequest } from '~/store/modules/meetup/actions';

import ImageInput from '~/components/ImageInput';

import { Container } from '../styles';

registerLocale('pt-BR', ptBR);

export default function New() {
  const [dataF, setDataF] = useState();
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, location }) {
    dispatch(newMeetupRequest(file_id, title, description, dataF, location));
  }

  function date() {
    return new Date();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Título do Meetup" />
        <Textarea name="description" placeholder="Descrição completa" />

        <div id="dt">
          <DatePicker
            showTimeSelect
            autoComplete="off"
            timeFormat="p"
            timeIntervals={30}
            dateFormat="P p"
            selected={dataF}
            onChange={e => setDataF(e)}
            minDate={date()}
            name="data"
            locale="pt-BR"
            placeholderText="Data do meetup"
          />
        </div>

        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
