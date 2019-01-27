'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Search from './index'

const stories = storiesOf('Search', module)

stories.add('With disabled true', () => (
  <Search isDisabled handleSearch={action('Handle search true')} />
))

stories.add('With disabled false', () => (
  <Search isDisabled={false} handleSearch={action('Handle search false')} />
))
