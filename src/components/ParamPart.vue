<template>
<span class="ParamPart"><slot ref="slot"></slot></span>
</template>
<script>
export default {
  name: 'paramPart',
  props: {
    param: String,
  },
  computed: {
    inner() {
      return this.$slots.default;
    },
  },
};
</script>
<style>
.ParamPart {
  display: block;
  background: #eef;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.ParamPart:last-child {

}

.ParamPart:hover {
  background: #bcf;
  cursor: pointer;
}
</style>
