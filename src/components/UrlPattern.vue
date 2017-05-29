<template>
  <div class="UrlPattern" v-if="isUrl">
    <PatternHeader @toggleExpand="toggleExpand" title="url" :value="value">
    </PatternHeader>
    <div class="SubPattern" v-if="isExpanded">
      <PatternHeader title="origin" :value="origin">
      </PatternHeader>
      <PatternHeader title="path" :value="url.path">
      </PatternHeader>
      <PatternHeader title="query" :value="url.query">
      </PatternHeader>
    </div>
  </div>
</template>
<style>
.UrlPattern {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.SubPattern {
  display: block;
  padding-left: 24px;
}
</style>
<script>
import URI from 'urijs';
import { isEmpty } from '../util';
import PatternTitle from './PatternTitle';
import PatternValue from './PatternValue';
import PatternHeader from './PatternHeader';
import ParamPart from './ParamPart';
import TextPart from './TextPart';

export default {
  name: 'urlPattern',
  components: {
    PatternTitle,
    PatternValue,
    PatternHeader,
    ParamPart,
    TextPart,
  },
  props: {
    value: String,
  },
  data() {
    return {
      isExpanded: true,
    };
  },
  computed: {
    isUrl() {
      if (isEmpty(this.value)) {
        return false;
      }

      return this.value.startsWith('http');
    },
    uri() {
      if (this.isUrl) {
        return new URI(this.value);
      }
      return undefined;
    },
    url() {
      let result;
      if (this.isUrl) {
        result = URI.parse(this.value);
      }
      return result;
    },
    origin() {
      if (this.uri) {
        return this.uri.origin();
      }
      return undefined;
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
