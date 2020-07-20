<template>
  <div class="repo-container has-items">
    <div class="repo-item" v-for="datum in repos" 
                          :item="datum"
                          :key="datum.id">
      <div class="repo-base-info">
        <span>{{ datum.name }}</span>
        <span>{{ datum.description }}</span>
      </div>
      <div class="repo-extra-info">
        <div class="star-count">
          <i class="far fa-star" />
          <span>{{ datum.stargazers_count }}</span>
        </div>
        <div class="fork-count">
          <i class="fas fa-code-branch" />
          <span>{{ datum.forks_count }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="no-search">
      <i class="fas fa-search"></i>
      <span>Hello, you! Make a search up there to browse repos of an user.</span>
    </div> -->
  </div>
</template>

<script>
import GitHubAPI from '../DAL/github.api'

export default {
  name: 'RepoList',

  data() {
    return {
      repos: []
    }
  },

  created() {
    this.gitHubApi = new GitHubAPI();
    this.getRepos();
  },

  methods: {
    async getRepos() {
      const repos = await this.gitHubApi.getRepos();
      this.repos = repos;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.repo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 0 0;
  overflow-y: auto;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 30px;
}

.repo-container.has-items {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: baseline;
}

.repo-container > .repo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 25px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
}

.repo-container > .repo-item:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

@media (min-width: 576px) { 
  .repo-container > .repo-item {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .repo-container > .repo-item {
    width: 48%;
  }
}

.repo-container > .repo-item .repo-base-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 75%;
}

.repo-container > .repo-item .repo-base-info span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.repo-container > .repo-item .repo-base-info span:first-child {
  font-weight: 600;
}

.repo-container > .repo-item .repo-base-info span:nth-child(2) {
  font-weight: 100;
}

.repo-container > .repo-item .repo-extra-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  opacity: .5;
}

.repo-container > .repo-item .repo-extra-info > * {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.repo-container > .repo-item .repo-extra-info i {
  margin-right: 8px;
}

.repo-container > .repo-item .repo-extra-info span {
  line-height: 13px;
}

.repo-container > .repo-item .repo-extra-info .star-count {
  margin-bottom: 8px;
}

.no-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.no-search .fa-search {
  font-size: 1.5em;
}

.no-search span {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}
</style>
