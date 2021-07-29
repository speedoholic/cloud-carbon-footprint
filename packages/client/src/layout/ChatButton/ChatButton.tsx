/*
 * © 2021 Thoughtworks, Inc.
 */

import React, { ReactElement } from 'react'
import useStyles from './chatbuttonStyles'

const ChatButton = (): ReactElement => {
  const classes = useStyles()

  return (
    <a href="#" className={classes.btn}>
      <button className={classes.chatbot}>
        <i className="material-icons">question_answer</i>
      </button>
    </a>
  )
}

export default ChatButton
