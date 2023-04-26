export default (date) => {
    const d = new Date()
    // console.log("date : ", date)

    let month = d.getMonth() + 1 ;
    let day = d.getDate();
    let year = d.getFullYear();
    // console.log("date : ", day)


    //   date = date.split("/")
    let newDate = date.split("T")
    newDate = newDate[0].split("-")
    // console.log("date : ", newDate)

    month = month - newDate[1]
    day = day - newDate[2]
    year = year - newDate[0]
    let week = Math.floor(day / 7)

    if(year > 0 ){
        return year == 1 ? `${year} year ago` : `${year} years ago`
    }else if(month > 0){
        return month == 1 ? `${month} month ago` : `${month} months ago`
    }else if(week){
        return week == 1 ? `${week} week ago` : `${week} weeks ago`
    }else if(day > 0){
        return day == 1 ? `Yesterday` : `${day} days ago`
    }else if(day == 0){
        return `Today`
    }else{
        return `${date}`
    }
}