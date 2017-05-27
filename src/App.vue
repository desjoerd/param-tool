<template>
  <div id="app">
    <input type="text" v-model="url" />
    <p>{{url}}</p>
    <Url :input="url"></Url>
  </div>
</template>

<script>
import Url from './components/Url';

export default {
  name: 'app',
  data() {
    return {
      url: '',
    };
  },
  components: {
    Url,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
