export const CHANGE_USER_ID   = 'CHANGE_USER_ID';

export const changeUserId = (userId) => ({
  type: CHANGE_USER_ID,
  payload: { userId }
})