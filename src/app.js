'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: {
                username: 'Gilvan Ribeiro',
                photo: 'https://avatars3.githubusercontent.com/u/40013090?v=4',
                login: 'grbalmeida',
                repos: 14,
                followers: 13,
                following: 31
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }

    render() {
        return (
            <AppContent
                userInfo={this.state.userInfo}
                repos={this.state.repos} 
                starred={this.state.starred} />
        )
    }
}

export default App