import React from 'react'

const UserIdInput = ({ value, onBlurEv }) => (
  <div>
    <label htmlFor="userIdInput">userId: </label>
    <br/>
    <input type="text" className="" value={value} id="userIdInput" onBlur={onBlurEv}  onChange={onBlurEv} /> {/*onblur event */}
  </div>
)

export default UserIdInput