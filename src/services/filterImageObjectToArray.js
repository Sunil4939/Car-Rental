export default (obj) => {
    const arr = Object.values(obj).filter((url) => /\.(jpe?g|png|webp|svg|gif)$/.test(url))
    return arr;
}