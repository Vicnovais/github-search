<template>
  <div id="app">
    <div class="wrapper">
      <span>GitSearch</span>
      <Search />
      <RepoList />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import RepoList from './components/RepoList.vue'
import store from './store/store'

export default {
  name: 'App',
  store,
  components: {
    Search,
    RepoList
  }
}
</script>

<style>
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #E0EAFC;
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);
  background: linear-gradient(to right, #CFDEF3, #E0EAFC);
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 60px 0;
  box-sizing: border-box;
}

.wrapper > span {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  font-size: 40px;
  display: inline-block;
  margin-bottom: 30px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
}
</style>
