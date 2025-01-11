import { user } from "@nextui-org/theme"

// BMI Calculator (US)
function genBmiU(userFt, userIn, userLbs) {
  if (userFt === undefined, userIn === undefined, userLbs === undefined ) {
    alert("One of more fields are missing.")
  } else {
    let convertToIn = userFt * 12
    let totalIn = convertToIn + userIn
    let totalInSq = totalIn * totalIn
    let usrBmi = (userLbs/totalInSq)*703

    return usrBmi.toFixed(2)
  }
}

// BMI Calculator (Metric)
function genBmiMet(userCm, userKg) {
  if (userCm === undefined, userKg === undefined) {
    alert("One of more fields are missing.")
  } else {
    let convertToM = userCm * .01
    let totalM = convertToM * convertToM
    let usrBmi = (userKg/totalM)

    return usrBmi.toFixed(2)
  }
}

// GPA Calculator


// Service Tip
function serviceTip(userBill, userPercent) {
  if (userBill === undefined) {
    alert("Please enter the service amount.")
  } else {
    let tip = userPercent * .01
    let serverTip = userBill * tip
    return serverTip.toFixed(2)
  }
}

// Mass Calculator


// Temperature Calculator
function tempConv(usrEnter, usrFrom, usrTo) {
  if (usrEnter === undefined) {
    alert("Please enter a number you want to convert")
  } else if (usrFrom === "F" && usrTo === "C") {
    let fcels = ((usrEnter - 32) * (5/9)).toFixed(2).replace(/\.00$/, '')
    return fcels
  } else if (usrFrom === "F" && usrTo === "K") {
    let fkel = ((usrEnter - 32) * (5/9) + 273.15).toFixed(2).replace(/\.00$/, '')
    return fkel
  } else if (usrFrom === "C" && usrTo === "F") {
    let cfar = ((usrEnter * (9/5)) + 32).toFixed(2).replace(/\.00$/, '')
    return cfar
  } else if (usrFrom === "C" && usrTo === "K") {
    let ckel = (usrEnter + 273.15).toFixed(2).replace(/\.00$/, '')
    return ckel
  } else if (usrFrom === "K" && usrTo === "F") {
    let kfar = ((usrEnter - 273.15) * (9/5) +32).toFixed(2).replace(/\.00$/, '')
    return kfar
  } else if (usrFrom === "K" && usrTo === "C") {
    let kcel = (usrEnter - 273.15).toFixed(2).replace(/\.00$/, '')
    return kcel
  } else {
    return usrEnter
  }
}


// Lenth Calculator
function lenCalc() {
  
}

// VA Disability Calculator


export default {genBmiMet, genBmiU, serviceTip, tempConv}