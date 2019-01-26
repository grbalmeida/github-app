'use strict'

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Repos from './index'

const stories = storiesOf('Repos', module)
    
stories.add('With title prop', () => (
    <Repos title='Favoritos' />
))

stories.add('With repos', () => (
    <Repos 
        title='Favoritos' 
        repos={[{
            link: 'https://github.com/grbalmeida/github-app',
            name: 'github-app'
        }, {
            link: 'https://github.com/grbalmeida/meat-api-restify',
            name: 'meat-api-restify'
        }]} 
    />
))
