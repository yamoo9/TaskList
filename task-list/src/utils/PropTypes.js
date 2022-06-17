/* eslint-disable import/no-anonymous-default-export */

const string = (props, propName, componentName) => {
  let value = props[propName];
  let valueType = typeof value;
  let isValueString = valueType === 'string';
  // isRequired
  if (string.isRequired === undefined && valueType === 'undefined') {
    throw new TypeError(`
      ${componentName} 컴포넌트 "${propName}" prop 입력은 필수(required)입니다.
    `);
  }
  // propTypes
  if (!isValueString) {
    throw new TypeError(`
      ${componentName} 컴포넌트에 "${propName}" prop의 타입은 string 이어야 하나,
      전달된 prop의 데이터 타입은 ${valueType} 입니다.
    `);
  }
}
string.isRequired = '';

export default {
  string
}