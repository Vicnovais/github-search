<template>
  <input type="text" v-model="username" placeholder="type an username..." />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',

  data() {
    return {
      username: ""
    }
  },

  created() {
    this.throttle = null;
  },

  watch: {
    username: function () {
      this.debounce(() => {
        this.fetchRepos(this.username);
      });
    }
  },

  methods: {
    ...mapActions([
      'fetchRepos'
    ]),

    debounce(func) {
      clearTimeout(this.throttle);
      this.throttle = setTimeout(func, 500);
    }
  }
}
</script>

<style scoped>
input {
  font-family: 'Open Sans', sans-serif;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 25px;
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding-left: 24px;
  font-size: 17px;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-weight: 400;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  opacity: .7;
}

input::placeholder {
  opacity: .4;
}
</style>
