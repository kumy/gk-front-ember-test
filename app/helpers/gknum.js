import { helper } from '@ember/component/helper';

export function gknum(params/*, hash*/) {
  return 'GK'+parseInt(params).toString(16).padStart(4, 0).toUpperCase();
}

export default helper(gknum);
