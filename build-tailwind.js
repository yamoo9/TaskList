/* 사용자 정의 구성 --------------------------------------------------------------- */

// 입력 디렉토리 이름
const INPUT_DIR = 'theme';

// 출력 디렉토리 이름
const OUTPUT_DIR = 'theme/tailwind';

// 멀티 테마 이름
const THEMES = 'global dark light';

/* 스타일 딕셔너리 모듈 ------------------------------------------------------------ */

const S = require('style-dictionary');
const { createArray } = require('./fns');

S.registerFormat({
  name: 'css/variables',
  formatter: function (dictionary /* config */) {
    return `${this.selector} {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join('\n')}\n}`;
  },
});

S.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher: function (prop) {
    return [
      'fontSizes',
      'spacing',
      'borderRadius',
      'borderWidth',
      'sizing',
    ].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value) + 'px';
  },
});

function getStyleDictionaryConfig(theme) {
  return {
    source: [`${INPUT_DIR}/${theme}.json`],
    format: {
      createArray,
    },
    platforms: {
      web: {
        transforms: ['attribute/cti', 'name/cti/kebab', 'sizes/px'],
        buildPath: `${OUTPUT_DIR}/`,
        files: [
          {
            destination: `${theme}.json`,
            format: 'createArray',
          },
          {
            destination: `${theme}.css`,
            format: 'css/variables',
            selector: `.${theme}-theme`,
          },
        ],
      },
    },
  };
}

console.log('🪩  테마 빌드 START ---------------');

THEMES.split(' ').map(function (theme) {
  const SD = S.extend(getStyleDictionaryConfig(theme));
  SD.buildPlatform('web');
});

console.log('\n🪩  테마 빌드 FINISHED ------------\n');
