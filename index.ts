
export default class BidirectionalMap<T, U> {
    _map = new Map<T, U>()
    _reverse = new Map<U, T>()

    constructor(arr: Array<[T, U]> = []) {
        for (let el of arr) {
            this.set(el[0], el[1])
        }
    }
    get size () {
        return this._map.size
    }
    set(key: T, value: U) {
        let _value = this._map.get(key)
        if(_value !== undefined) this._reverse.delete(_value)
    
        let _key = this._reverse.get(value)
        if(_key !== undefined) this._map.delete(_key)
        
        this._map.set(key, value)
        this._reverse.set(value, key)
    }
    get(key: T) {
        return this._map.get(key)
    }
    getKey(value: U): T | undefined {
        return this._reverse.get(value)
    }
    clear() {
        this._map.clear()
        this._reverse.clear()
    }
    delete(key: T) {
        let value = this._map.get(key)
        if(value === undefined) return false
        this._map.delete(key)
        this._reverse.delete(value)
        return true
    }
    deleteValue(value: U) {
        let key = this._reverse.get(value)
        if(key === undefined) return false
        this._map.delete(key)
        this._reverse.delete(value)
        return true
    }
    entries() {
        return this._map.entries()
    }
    has(key: T) {
        return this._map.has(key)
    }
    hasValue(value: U) {
        return this._reverse.has(value)
    }
    keys() {
        return this._map.keys()
    }
    values() {
        return this._map.values()
    }
}
