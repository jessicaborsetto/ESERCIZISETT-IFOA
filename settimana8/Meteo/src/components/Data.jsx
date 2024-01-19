function Data({ date }){

    const today = new Date(date);
    const week = ["Domenica", "Lunedì", "Martedì", "Mercoledì","Giovedì", "Venerdì","Sabato"];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'January',
        'December',
    ]
    const year = today.getFullYear()
    const hour = today.getHours()
    const day = week[today.getDay()]
    const minutes = today.getMinutes()
    const currentHour = `${hour}:${minutes}`
    const month = months[today.getMonth()]

    // console.log(today)
    // console.log(month)
    // console.log(year)
    // console.log(hour)
    // console.log(minutes)
    // console.log(currentHour)

    return(
        <div className="CurrentData"> 
            <h5>{`${month} ${year}`}</h5>
            <h6>{`${day} ${currentHour}`}</h6>

        </div>
    )
}

export default Data