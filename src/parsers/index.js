
export function getTokensFromRegex(input, regex) {
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

export function getGuidTokens(input) {
  const guidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/ig;

  return getTokensFromRegex(input, guidRegex);
}

export function getDateTokens(input) {
  return getTokensFromRegex(input, /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/ig);
}
