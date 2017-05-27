<template>
<span class="TextPart">{{text}}</span>
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
