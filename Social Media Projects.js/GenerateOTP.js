
//  way 1  ==============================================================
function generateOtp() {
    return Math.floor(1000000 + Math.random() * 900000)
}
document.getElementById('otpDisplay').innerHTML = generateOtp();




// way 2 ==================================================================
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000)
}

function generateOtpBtn() {
    document.getElementById("otp-display").value = generateOtp();
}




// way 3  ======================================================================
function generateOtp() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&'
    let otp = ''
    for (i = 0; i <= 6; i++) {
        otp += characters[Math.floor(Math.random() * characters.length)]
    }
    return otp;
}
function otpbutton() {

    document.getElementById("getOtp").value = generateOtp()
}