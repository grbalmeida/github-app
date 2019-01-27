'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination
    onClick={page => window.alert(page)} />
))

stories.add('without callback', () => (
  <Pagination
    total={8}
    activePage={3}
    pageLink={'http://mypage.com/page/%page%'} />
))

stories.add('with total 16', () => (
  <Pagination
    total={16}
    pageLink={'http://mypage.com/page/%page%'}
    onClick={page => window.alert(page)} />
))

stories.add('with total 10 and activePage 5', () => (
  <Pagination
    total={10}
    activePage={5}
    pageLink={'http://mypage.com/page/%page%'}
    onClick={page => window.alert(page)} />
))
