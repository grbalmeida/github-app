'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import UserInfo from './index'

const stories = storiesOf('UserInfo', module)

stories.add('UserInfo with Facebook', () => (
  <UserInfo
    key={1}
    userInfo={{
      username: 'Facebook',
      photo: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      login: 'facebook',
      repos: '163',
      followers: '0',
      following: '0'
    }} />
))

stories.add('UserInfo with Google', () => (
  <UserInfo
    key={2}
    userInfo={{
      username: 'Google',
      photo: 'https://avatars1.githubusercontent.com/u/1342004?v=4',
      login: 'google',
      repos: 1403,
      followers: 0,
      following: 0
    }} />
))
