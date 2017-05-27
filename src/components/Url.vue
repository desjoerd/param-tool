<template>
  <div class="Url">
    <template v-for="token in result">
      <ParamPart :param="token.text" v-if="token.type == 'param'" />
      <TextPart :text="token.text" v-if="token.type == 'text'" />
    </template>
  </div>
</template>
<script>

import ParamPart from './ParamPart';
import TextPart from './TextPart';

function getTokensFromRegex(input, regex) {
  const foundTokens = [];
  let token = regex.exec(input);
  while (token !== null) {
    const text = token[0];
    foundTokens.push({
      start: regex.lastIndex - text.length,
      end: regex.lastIndex,
      text,
      type: 'param',
    });
    token = regex.exec(input);
  }
  return foundTokens;
}

function getGuidTokens(input) {
  const guidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/ig;

  return getTokensFromRegex(input, guidRegex);
}

function getDateTokens(input) {
  return getTokensFromRegex(input, /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/ig);
}

export default {
  name: 'url',
  props: {
    input: String,
  },
  computed: {
    result() {
      const guidTokens = getGuidTokens(this.input);
      const dateTokens = getDateTokens(this.input);

      const tokens = [...guidTokens, ...dateTokens];
      if (!tokens) {
        return [{
          text: this.input,
          type: 'text',
        }];
      }

      const result = [];
      let currentTextIndex = 0;

      for (let i = 0; i < tokens.length; i += 1) {
        const currentToken = tokens[i];
        if (currentTextIndex !== currentToken.start) {
          result.push({
            text: this.input.substring(currentTextIndex, currentToken.start),
            type: 'text',
          });
        }
        result.push({
          text: currentToken.text,
          type: 'param',
        });
        currentTextIndex = currentToken.end;
      }
      if (currentTextIndex !== this.input.length) {
        result.push({
          text: this.input.substring(currentTextIndex, this.input.length),
          type: 'text',
        });
      }

      return result;
    },
  },
  components: {
    TextPart,
    ParamPart,
  },
};
</script>
<style>
.Url {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Consolas', monospace;
}
</style>
