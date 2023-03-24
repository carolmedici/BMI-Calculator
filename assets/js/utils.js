export function notANumber(value){
    return isNaN(value) || value == ""
}

export function BMI(weight, height) {
    return (weight/(height **2)).toFixed(2)
} 