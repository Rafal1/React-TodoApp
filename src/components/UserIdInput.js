import React from 'react'

const UserIdInput = ({ value, onBlur }) => (
  <div>
    <label for="userIdInput">userId: </label>
    <br/>
    <input type="text" className="" id="userIdInput" onBlur={onBlur} />
  </div>
)

export default UserIdInput