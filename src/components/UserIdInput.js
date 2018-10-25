import React from 'react'

const UserIdInput = ({ value, fetchDataEv }) => (
  <div className='inputMarginGap'>
    <label htmlFor="userIdInput">userId: </label>
    <br/>
    <input type="text" className="" value={value} id="userIdInput" onChange={fetchDataEv} />
  </div>
)

export default UserIdInput