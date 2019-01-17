import { isString, isObject } from 'lodash';

const parseIcon = (icon, iconAlign) => {
  if (!icon || !iconAlign) return null;

  if (isString(icon)) {
    return { name: icon, align: iconAlign };
  } if (isObject(icon)) {
    return Object.assign(icon, { name: icon });
  }

  return null;
};

export default parseIcon;
