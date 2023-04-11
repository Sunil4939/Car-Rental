function formatDate(date) {
    // console.log("date: ", date);
    date = new Date(date)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let month = months[date.getMonth()]
    let day = days[date.getDay()]
    let d = date.getDate()
    let year = String(date.getFullYear()).slice(2,4)
     var dateString = `${day},${d} ${month} ${year}`;
    //  console.log(dateString)
     return dateString;
  }
  
//   console.log(formatDate(new Date));
  export default formatDate;