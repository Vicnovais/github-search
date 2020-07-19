<template>
  <input type="text" placeholder="type an username..." />
</template>

<script>
export default {
  name: 'Search'
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
