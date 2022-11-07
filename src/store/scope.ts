import { __SCOPE_PREFIX__, __INTERNAL_SCOPE_PREFIX__ } from '../constants'
import { isInternalKey } from '../utils'

export { getScope } from '../utils';

export const getKeyWithScope = (scope: string, key: string) => {
  const isInternal = isInternalKey(scope)
  return `${
    isInternal ? __INTERNAL_SCOPE_PREFIX__ : __SCOPE_PREFIX__
  }${scope}.${key}`
}
