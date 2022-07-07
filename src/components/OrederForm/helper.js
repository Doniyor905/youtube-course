export const validatePhomeNumber = (phoneNumber) => {
    const regex = /^(\+? 998\d{9}|\d{9})$/
    return regex.test(phoneNumber)
}

// export const validateName = (name) => {
//     const regex = /^[a-zA-Z]+$/
//     return regex.test(name)
// }

export const validateName = (name) => name.length > 2

export const validateText = (text) => text.length > 5

export const validatePhomeContent = (phoneNumber) => {
    const regex = /^\+?\d*$/
    return regex.test(phoneNumber)
}