// BMI Calculator (US)
function genBmiU(userFt, userIn, userLbs) {
  if (userFt === undefined, userIn === undefined, userLbs === undefined) {
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
  let convertToM = userCm * .1
  let totalM = convertToM * convertToM
  let usrBmi = (userKg/totalM)

  return usrBmi
}

export default {genBmiMet, genBmiU}