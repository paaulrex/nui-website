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


// Lenth Calculator


// VA Disability Calculator


export default {genBmiMet, genBmiU, serviceTip}