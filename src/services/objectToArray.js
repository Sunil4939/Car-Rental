export default (obj, key) => {
    let arr = []
    const values = Object.values(obj)
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        arr.push({
            id: values[i],
            [key]: keys[i]
        })
    }
    return arr;
}

