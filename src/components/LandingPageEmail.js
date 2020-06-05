import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <form
    className="Form"
    name={name}
    action={action}
    data-netlify="true"
    data-netlify-honeypot="_gotcha"
  >
    <label className="Form--Label">
      <input
        className="Form--Input"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
    </label>
    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="form-name" value={name} />
    <input
      className="Button Form--SubmitButton"
      type="submit"
      value="Enquire"
    />
  </form>
)
