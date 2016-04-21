# Bidirectional Map

Create key/value collections with unique keys and unique values.

# Install

    npm install bidirectional-map --save

# Usage


```js
    import BiMap from 'bidirectional-map'
    
    // Create an empty map
    let map = new BiMap()
    map.set('bob', 'alice')
    map.get('bob')          // 'alice'
    map.getKey('alice')     // 'bob'

    // Create a map with some key/values
    let map2 = new BiMap({
        bob: 'alice',
        john: 'mary'
    })
    map2.has('bob')          // true
    map2.hasValue('mary')    // true
    map2.deleteValue('mary')
```

# API

### Constructors

| Arguments |   Description |
|:---|:---|
| | Creates an empty structure |
| object: *object* | Creates a structure with the key/values of **object** |

### Properties

| Property | Return Type |  Description |
|:---|:---|:---|
| size | *any* | Returns the number of key/value pairs |

### Methods

| Method | Arguments | Return Type |  Description |
|:---|:---|:---|:---|
| set | key: *any*, value: *any*  |  | Sets a new key/value pair |
| get | key: *any* | *any* | Returns the value |
| getKey | value: *any* | *any* | Returns the key |
| clear |  |  | Removes all key/value pairs |
| delete | key: *any* | | Deletes a key/value pair by **key** |
| deleteValue | value: *any* | | Deletes a key/value pair by **value** |
| entries |  | *MapIterator* | Returns a new Iterator object that contains an array of [key, value] for each element in the structure |
| has | key: *any* | *boolean*| Returns a *true* if it exists a pair with the provided **key**, *false* otherwise  |
| hasValue | value: *any* | *boolean* | Returns a *true* if it exists a pair with the provided **value**, *false* otherwise  |
| keys |  | *MapIterator* | Returns a new Iterator object that contains the **keys** for each element in the structure |
| values |  | *MapIterator* | Returns a new Iterator object that contains the **values** for each element in the structure |




## Changelog

* 1.0.0 
    * Initial release :tada:

## License

[ISC License](http://opensource.org/licenses/ISC)
