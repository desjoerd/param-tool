<template>
<span class="ParamPart">{{param}}</span>
</template>
<script>
export default {
  name: 'paramPart',
  props: {
    param: String,
  },
};
</script>
<style>
.ParamPart {
  display: block;
  background: pink;
}
</style>
