import { __INTERNAL_KEY__, __INTERNAL_SCOPE_PREFIX__, __SCOPE_PREFIX__ } from "../constants";

export const isFunction = (obj: any) => typeof obj === 'function'

export const isString = (obj: any) => typeof obj === 'string'

export const isInternalKey = (key: string) => ~__INTERNAL_KEY__.indexOf(key)

export const getScope = (scope: string) => {
  const isInternal = isInternalKey(scope)
  return `${isInternal ? __INTERNAL_SCOPE_PREFIX__ : __SCOPE_PREFIX__}${scope}`
}

export const isAffiliateInternalKey = (key: string) => {
  return __INTERNAL_KEY__.some((internalKey) => {
    return key.startsWith(getScope(internalKey))
  })
}
