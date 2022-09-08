n_element = (l_numbers) =>{
    var n_numbers = l_numbers.length
    var result = []
    total_product = l_numbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1 );
    for (var index = 0; index < n_numbers; index++) {
        result.push(total_product/l_numbers[index])
    }

    return result

}

console.log(n_element([1,2,3,4]))
console.log(n_element([6,11,3,14,1,10]))