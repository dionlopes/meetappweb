import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { MdAddCircleOutline } from 'react-icons/md';
import { editMeetupRequest } from '~/store/modules/meetup/actions';

import ImageInput from '~/components/ImageInput';

import { Container } from '../styles';

registerLocale('pt-BR', ptBR);

export default function Edit() {
  const meetup = useSelector(state => state.meetup.meetup);
  const [dataF, setDataF] = useState();
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, location }) {
    const id = meetup.imagem;
    dispatch(
      editMeetupRequest(
        meetup.id,
        file_id || id,
        title,
        description,
        dataF || meetup.defaultData,
        location
      )
    );
  }

  function date() {
    return new Date();
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Título do Meetup" />
        <Textarea name="description" placeholder="Descrição completa" />

        <div id="dt">
          <DatePicker
            showTimeSelect
            autoComplete="off"
            timeFormat="p"
            timeIntervals={30}
            selected={dataF}
            dateFormat="P p"
            onChange={e => setDataF(e)}
            minDate={date()}
            name="data"
            locale="pt-BR"
            placeholderText={meetup.data}
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
