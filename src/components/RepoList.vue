<template>
  <div class="repo-container">
    <div class="no-search">
      <i class="fas fa-search"></i>
      <span>Hello, you! Make a search up there to browse repos of an user.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoList'
}
</script>

<style scoped>
.repo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  border: 1px solid gray;
  background-color: rgba(255, 255, 255, 0.65);
  box-sizing: border-box;
  border-radius: 25px;
  opacity: .3;
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
