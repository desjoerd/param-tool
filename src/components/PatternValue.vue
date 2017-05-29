<template>
  <span class="PatternValue">
    <slot></slot>
  </span>
</template>
<style>
.PatternValue {
  display: block;
  padding: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script>
export default {
  name: 'patternValue',
};
</script>
