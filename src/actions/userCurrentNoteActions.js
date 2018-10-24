export const CHANGE_USER_CURRENT_NOTE   = 'CHANGE_USER_CURRENT_NOTE';

export const changeUserCurrentNote = (userCurrentNote) => ({
  type: CHANGE_USER_CURRENT_NOTE,
  payload: { userCurrentNote }
})
