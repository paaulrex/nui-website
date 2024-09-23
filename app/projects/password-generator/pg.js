const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
    "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
    "|",":",";","<",">",".","?","/"]
    
const noSymbolCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    
const noNumberCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    
const lettersOnlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z"]

function getRandomCharacter(numbersExcluded, symbolsExcluded) {
    if (numbersExcluded && symbolsExcluded) {
        let randomChar = Math.floor(Math.random() * lettersOnlyCharacters.length)
        return lettersOnlyCharacters[randomChar]
    } else if (numbersExcluded) {
        let randomChar = Math.floor(Math.random() * noNumberCharacters.length)
        return noNumberCharacters[randomChar]
    } else if (symbolsExcluded) {
        let randomChar = Math.floor(Math.random() * noSymbolCharacters.length)
        return noSymbolCharacters[randomChar]
    }  else {
        let randomChar = Math.floor(Math.random() * allCharacters.length)
        return allCharacters[randomChar]
    }
}

function generatePassword(pwdLength, numSelected, symSelected) {
    let randomPwdOne = ""
    let randomPwdTwo = ""
    for (let i = 0; i < pwdLength; i++) {
        randomPwdOne += getRandomCharacter(numSelected, symSelected)
        randomPwdTwo += getRandomCharacter(numSelected, symSelected)       
    }
    return [randomPwdOne, randomPwdTwo]
}

export default generatePassword