import { helper } from '@ember/component/helper';

export function formatTime([value, unit]) {
  let unitValue = unit === 'Hours' ? 'Hrs' : unitValue;
  return `${value} ${unitValue}`;
}

export default helper(formatTime);
