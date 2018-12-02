'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: {
                username: 'Gilvan Ribeiro',
                repos: 13,
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