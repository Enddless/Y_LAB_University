export function validateEmail(email) {
    const reg = /^\w+\@[a-z]+\.(com|ru|me)$/;
    if (reg.test(email)) {
        return true
    } else {
        return false
    }
}

export function validatePassword(password) {

    if (password.length >= 4) {
        return true
    } else {
        return false
    }
}