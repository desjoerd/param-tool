<template>
<span class="TextPart"><slot></slot></span>
</template>
<script>
export default {
  name: 'textPart',
  props: {
    text: String,
  },
};
</script>
<style>
  .TextPart {
    display: block;
  }
</style>
