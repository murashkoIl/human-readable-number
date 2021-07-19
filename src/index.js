let Units = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
};

let HigherUnits = {
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
};

let Dozens = {
    "10": "ten",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
};

let Hundreds = {
    "100": "one hundred",
    "200": "two hundred",
    "300": "three hundred",
    "400": "four hundred",
    "500": "five hundred",
    "600": "six hundred",
    "700": "seven hundred",
    "800": "eight hundred",
    "900": "nine hundred"
};


module.exports = function toReadable (number) {
    let resultStr = ""; 
    let arr = Array.from(number.toString(10));
    let unitsKeys = Object.keys(Units);
    let higherUnitsKeys = Object.keys(HigherUnits);
    let dozensKeys = Object.keys(Dozens);
    let hundredsKeys = Object.keys(Hundreds);
    for (let j = 0; j < arr.length; j++){
        if (arr[j] == 0) {
            return "zero";
        }
        for (let q = 0; q < higherUnitsKeys.length; q++){
            if (number == higherUnitsKeys[q]) {
                return HigherUnits[higherUnitsKeys[q]]; 
            }
        }
        for (let w = 0; w < hundredsKeys.length; w++){
            if (number == hundredsKeys[w]) {
                return Hundreds[hundredsKeys[w]]; 
            }
        }
        for (let p = 0; p < dozensKeys.length; p++){
            if (number == dozensKeys[p]) {
                return Dozens[dozensKeys[p]]; 
            }
        }
        if (arr.length == 1) {
            for (let i = 0; i < unitsKeys.length; i++){
                if (arr[j] == unitsKeys[i]) {
                    return Units[unitsKeys[i]]; 
                }
            } 
        }
        if (arr.length == 2) {
            if (arr[0] > arr[1]) {
                for (let o = unitsKeys.length; o >= 0; o--){
                    if (arr[1] == unitsKeys[o]) {
                        resultStr += Units[unitsKeys[o]];
                    }
                    if (arr[0] == unitsKeys[o]) {
                        resultStr += Dozens[dozensKeys[o]] + ' '; 
                    }
                }
            } else {
                for (let k = 0; k < unitsKeys.length; k++){
                    if (arr[0] == unitsKeys[k]) {
                        resultStr += Dozens[dozensKeys[k]] + ' '; 
                    }
                    if (arr[1] == unitsKeys[k]) {
                        resultStr += Units[unitsKeys[k]];
                    }
                }
            }
            return resultStr;
        }
        if (arr.length == 3) {
            if (arr[0] > arr[1] && arr[1] > arr[2]) {
                for (let u = unitsKeys.length; u >= 0; u--){
                    if (arr[0] == unitsKeys[u]) {
                        resultStr += Hundreds[hundredsKeys[u]];
                    }
                    if (arr[1] == unitsKeys[u]) {
                        resultStr += " " + Dozens[dozensKeys[u]]; 
                    }
                    if (arr[2] == unitsKeys[u]) {
                        resultStr += " " + Units[unitsKeys[u]];
                    }
                }
            } else if(arr[0] < arr[1] && arr[1] < arr[2]){
                for (let t = 0; t < unitsKeys.length; t++){
                    if (arr[0] == unitsKeys[t]) {
                        resultStr += Hundreds[hundredsKeys[t]];
                    }
                    if (arr[1] == unitsKeys[t]) {
                        resultStr += " " + Dozens[dozensKeys[t]]; 
                    }
                    if (arr[2] == unitsKeys[t]) {
                        resultStr += " " + Units[unitsKeys[t]];
                    }
                }
            } else if(arr[0] > arr[1] && arr[1] <= arr[2]){
                for (let x = unitsKeys.length; x >= 0; x--){
                    if (arr[0] == unitsKeys[x]) {
                        resultStr += Hundreds[hundredsKeys[x]];
                    }
                    if (arr[1] == unitsKeys[x] && unitsKeys[x] == 1) {
                        for (let e = 0; e < unitsKeys.length; e++){
                            if(arr[2] == unitsKeys[e]){
                                resultStr += " " + HigherUnits[higherUnitsKeys[e]];
                                return resultStr;
                            }
                        }
                    }
                    if (arr[1] == unitsKeys[x]) {
                        resultStr += " " + Dozens[dozensKeys[x]]; 
                    }
                } 
                for (let r = 0; r < unitsKeys.length; r++){
                    if (arr[2] == unitsKeys[r]) {
                        resultStr += " " + Units[unitsKeys[r]];
                    }
                }    
            } else{
                for (let h = 0; h < unitsKeys.length; h++){
                    if (arr[0] == unitsKeys[h]) {
                        resultStr += Hundreds[hundredsKeys[h]];
                    }
                    if (arr[1] == unitsKeys[h] && unitsKeys[h] == 1) {
                        for (let e = 0; e < unitsKeys.length; e++){
                            if(arr[2] == unitsKeys[e]){
                                resultStr += " " + HigherUnits[higherUnitsKeys[e]];
                                return resultStr;
                            }
                        }
                    }
                    if (arr[1] == unitsKeys[h]) {
                        resultStr += " " + Dozens[dozensKeys[h]]; 
                    }
                }
                for (let s = 0; s < unitsKeys.length; s++){
                    if (arr[2] == unitsKeys[s]) {
                        resultStr += " " + Units[unitsKeys[s]];
                    }
                }    
            }
            return resultStr;
        }
    }
}
