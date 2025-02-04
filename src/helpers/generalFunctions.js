export const actualDate = () =>{
    const dateNow = new Date()
    const day = dateNow.getDate()
    const month = dateNow.getMonth() + 1
    const year = dateNow.getFullYear()
    const formatDateNow = `${day}/${month}/${year}`
    return formatDateNow
}
export const alertMsg = (icon, title, timer, btn) => {
    Swal.fire({
        icon: icon,
        title: title,
        showConfirmButton: btn,
        timer: timer,
        timerProgressBar: true,
      })
}

export const reservations = () => {
    const reservation= {      
        hours: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        totalTable2: 10,
        totalTable4: 10,
        countTable2: [10,10,10,10,10,10,10,10,10,10],
        countTable4: [10,10,10,10,10,10,10,10,10,10]
    }
    return reservation
}


