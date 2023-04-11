import RazorpayCheckout from "react-native-razorpay";

export default (data, amount, user_details, themeColor) => {
    console.log("car book data : ", data.price)
    let result ;
    var options = {
        currency: 'INR',
        key: 'rzp_test_RgalfgmjSAdlNS',
        amount: 1200 + "00",
        name: 'Car Rental',
        prefill: user_details ? user_details : { email: 'gaurav.kumar@example.com', contact: '9098194917', name: "sunilp" },
        theme: themeColor ? themeColor : { color: '#53a20e' }
    }
    RazorpayCheckout.open(options).then((data) => {
        result = {
            ...data,
            success: true,
        };
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
        // handle failure
        console.log("error", error)
        result = {
            success: false,
        }
        return {error: error, success: false}
        // alert(`Error: ${error.code} | ${error.description}`);
    })
    return result;

}

