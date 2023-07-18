type FormatMap = {
  [key: string]: (input: string) => boolean;
};

const LITERAL_FORMATS: string[] = ['\\N', '\\A', '\\X'];
const REGULAR_FORMATS: string[] = ['N', 'A', 'X'];
const LITERAL_MATCH_MAP: FormatMap = {
  '\\N': (input: string) => /N/.test(input),
  '\\A': (input: string) => /A/.test(input),
  '\\X': (input: string) => /X/.test(input),
};
const MATCH_MAP: FormatMap = {
  'N': (input: string) => /[0-9]/.test(input),
  'A': (input: string) => /[a-zA-Z]/.test(input),
  'X': (input: string) => /[a-zA-Z0-9]/.test(input),
};

const formatArrayGenerator = (format: string): string[] => {
  return format.split('').reduce((accumulator: string[], current: string, i: number, array: string[]) => {
    if (current === '\\' && ['N', 'A', 'X'].includes(array[i + 1])) {
      accumulator.push(`\\${array[++i]}`);
    } else {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
};

const formatStringGenerator = (str: string, formatArray: string[]): string => {
  let formatted = '';
  for (let i = 0, j = 0; i < formatArray.length && j < str.length; i++) {
    if (LITERAL_FORMATS.includes(formatArray[i])) {
      formatted += LITERAL_MATCH_MAP[formatArray[i]](str[j]) ? str[j++] : formatArray[i++].slice(1);
    } else if (REGULAR_FORMATS.includes(formatArray[i])) {
      formatted += MATCH_MAP[formatArray[i]](str[j]) ? str[j++] : '';
    } else if (formatArray[i] === str[j]) {
      formatted += str[j++];
    } else {
      formatted += formatArray[i];
    }
  }
  return formatted;
};

const formatString = (format = "P0\\A-AA", str = ""): string => {
  const formatArray = formatArrayGenerator(format);
  return formatStringGenerator(str, formatArray);
};

export default formatString;
