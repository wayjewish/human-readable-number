let arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

module.exports = function toReadable (number) {
    let result = '';
    let strNumber = String(number);

    let objNumber = {
        hundreds: strNumber.charAt(strNumber.length - 3),
        tens: strNumber.charAt(strNumber.length - 2),
        units: strNumber.charAt(strNumber.length - 1)
    };

    if (objNumber.hundreds) {
        result += `${arrUnits[objNumber.hundreds]} hundred`;
    }

    if (objNumber.tens == 1 || objNumber.tens != 0) {
        if (objNumber.hundreds) result += ` `;

        if (objNumber.tens == 1) result += `${arrTens[`${objNumber.tens}${objNumber.units}`]}`;
        if (objNumber.tens != 0 && objNumber.tens != 1) result += `${arrTens[objNumber.tens]}`;
    }

    //if (num.units) {
        if (objNumber.tens != 1 && objNumber.units != 0) {
            if (objNumber.tens) result += ` `;
            result += `${arrUnits[objNumber.units]}`;
        }
    //}

    return result ? result : 'zero';
}