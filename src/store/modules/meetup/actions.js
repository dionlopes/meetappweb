export function shareMeetupRequest(meetup, myMeetup) {
  return {
    type: '@meetup/SHARE_MEETUP_REQUEST',
    payload: { meetup, myMeetup },
  };
}
export function shareMeetupSuccess(meetup, myMeetup) {
  return {
    type: '@meetup/SHARE_MEETUP_SUCCESS',
    payload: { meetup, myMeetup },
  };
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    payload: { id },
  };
}
