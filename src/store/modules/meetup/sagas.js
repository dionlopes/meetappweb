import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import getTime from 'date-fns/getTime';
import { parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import { shareMeetupSuccess } from './actions';

export function* meetUp({ payload }) {
  const { meetup, myMeetup } = payload;
  yield put(shareMeetupSuccess(meetup, myMeetup));

  history.push('/meetups');
}

export function* newMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      file_id,
      title,
      description,
      date: getTime(date),
      location,
    });
    toast.success('Meetup criado com sucesso');
    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`, {});

    toast.success('Meetup cancelado');
    history.push('/');
  } catch (error) {
    toast.error(error);

    toast.error('Falha ao cancelar Meetup');
  }
}

export default all([
  takeLatest('@meetup/SHARE_MEETUP_REQUEST', meetUp),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
