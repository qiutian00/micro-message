import { getSubscribeBase } from '../subscribe'
import { __SUBSCRIBE_SCOPE__ } from '../constants'

export type EventBusCallback = (value?: any) => any

export const SubBaseForEventBus =
  getSubscribeBase<EventBusCallback>(__SUBSCRIBE_SCOPE__)

export const dispatchEvents = (key: string, value?: any) => {
  SubBaseForEventBus.dispatch(key, value)
}

export const StoreBus = {
  $on: SubBaseForEventBus.add,
  $off: SubBaseForEventBus.destory,
  $emit: dispatchEvents,
  $delete: SubBaseForEventBus.delete,
}
