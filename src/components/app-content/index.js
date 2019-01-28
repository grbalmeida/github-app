'use strict'

import React, { PropTypes } from 'react'
import Search from '../search'
import UserInfo from '../user-info'
import Actions from '../actions'
import Repos from '../repos'

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search
      isDisabled={isFetching}
      handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.repos.length &&
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
        handlePagination={clicked => handlePagination('repos', clicked)} />
    }
    {!!starred.repos.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
        handlePagination={clicked => handlePagination('starred', clicked)} />
    }
  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.PropTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
