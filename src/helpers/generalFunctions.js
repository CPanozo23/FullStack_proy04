
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