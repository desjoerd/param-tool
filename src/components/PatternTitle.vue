<template>
<span class="PatternTitle" @click="toggleExpand">
  <slot></slot>
</span>
</template>
<style>
.PatternTitle {
  display: block;
  width: 72px;
  color: #aaa;
  padding: 4px;
  padding-left: 8px;
}
</style>
<script>
export default {
  name: 'patternTitle',
  methods: {
    toggleExpand() {
      this.$emit('toggleExpand');
    },
  },
};
</script>
