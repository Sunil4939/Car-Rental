export default (obj) => {
    // var formBody = [];
    // for (var property in details) {
    //     var encodedKey = encodeURIComponent(property);
    //     var encodedValue = encodeURIComponent(details[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");


    var formBody = [];
    for (const [key, value] of Object.entries(obj)) {
        // console.log(`${key}: ${value}`);
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(obj[key]);
        if (value == null || value == undefined) {

        } else if (typeof (value) == "object" && !value.uri) {
            // form.append(key, JSON.stringify(value))
            formBody.push(key, JSON.stringify(value));
        }else {
            formBody.push(encodedKey + "=" + encodedValue);
        }
    }
    formBody = formBody.join("&");
    return formBody
}