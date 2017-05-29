<template>
  <div class="PatternHeader">
    <PatternTitle @toggleExpand="toggleExpand">
      {{title}}
    </PatternTitle>
    <PatternValue>
      {{value}}
    </PatternValue>
  </div>
</template>
<style>
.PatternHeader {
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
}
</style>
<script>
import PatternTitle from './PatternTitle';
import PatternValue from './PatternValue';

export default {
  name: 'patternHeader',
  components: {
    PatternTitle,
    PatternValue,
  },
  props: {
    title: String,
    value: String,
  },
  methods: {
    toggleExpand() {
      this.$emit('toggleExpand');
    },
  },
};
</script>
