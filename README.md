# micro-message

A global state management for communication between micro-frontends and multiple applications, supporting value classification management, dynamic monitoring, and event bus

### Install

Add it as a dependency in all applications that need to communicate:

```bash
  yarn add micro-message or pnpm add micro-message
````

##### CDN

```html
<body>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/npm/micro-message/dist/micro-message.min.js"></script>
  <script>
    MicroMessage.Store.set('key', 'value')
  </script>
</body>
````

### Usage

#### Store

`Store` is an object that contains methods for manipulating global data.

##### example

```ts
import { Store } from 'micro-message'

// set
Store.set('key', 'value')
// support path set
Store.set('object.key.key2', {})

// get
Store.get<string>('key')
Store.get('object.key.key2')

// get all data store
Store.getStore()

// scope data
Store.setWithScope('key', {}, 'some-scope')
Store.getWithScope<Record<string, any>>('key', 'some-scope')
````

##### methods

| method | description |
| :-------------------: | :------------------------- |
| `Store.set` | set value |
| `Store.get` | get value |
| `Store.setWithScope` | Set value with identifier (easy to manage) |
| `Store.getWithScope` | get value with identifier |
| `Store.getScope` | Get all data objects under the identifier |
| `Store.setScope` | set the entire data object under the identifier |
| `Store.getStore` | Get all data |

#### StoreChange

`StoreChange` is used to listen for changes in the data in the `Store`.

##### example

```ts
import { StoreChange } from 'micro-message'

StoreChange.$on((newStore) => {
  // ...
})
StoreChange.$on('path.key', (newValue, oldValue) => {
  // ...
})
````

##### methods

| method | description |
| :--------------------------------: | :--------------------------------------------- |
| `StoreChange.$on` | Listen for value changes on a property, support path monitoring |
| `StoreChange.$delete` | delete a listener function |
| `StoreChange.$destory` | Destroy all listeners for this property |

#### StoreBus

`StoreBus` is an event bus.

##### example

```ts
import { StoreBus } from 'micro-message'

StoreBus.$emit('some-event', 'value')
StoreBus.$on('some-event', (value) => {
  // ...
})
````

##### methods

| method | description |
| :----------------: | :------------------------- |
| `StoreBus.$on` | Listen to an event by event name |
| `StoreBus.$emit` | event broadcast |
| `StoreBus.$delete` | removes a listening function |
| `StoreBus.$off` | Clear all listeners for an event |

### Other

Note: Whether using change listeners or event buses, be careful to destroy or delete your listener functions when the component is `unmount`.