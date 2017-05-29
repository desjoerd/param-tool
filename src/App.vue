<template>
  <div id="app">
    <input type="text" v-model="url" />
    <p>{{url}}</p>
    <PatternPart :input="url"></PatternPart>
    <Test></Test>
    <UrlPattern :value="url"></UrlPattern>
  </div>
</template>

<script>
import PatternPart from './components/PatternPart';
import Test from './components/Test';
import UrlPattern from './components/UrlPattern';

export default {
  name: 'app',
  data() {
    return {
      url: '',
    };
  },
  components: {
    PatternPart,
    Test,
    UrlPattern,
  },
};
</script>

<style>
#app {
  font-family: Consolas, monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0;
}

*, *::after, *::before {
  box-sizing: border-box;
}
</style>
