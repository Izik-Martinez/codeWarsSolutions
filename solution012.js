function filter_list(l) {
    // Accepts an array of integers and strings
    // Return a new array with the strings filtered out
    //  Ex.)
    //  filter_list([1,2,'a','b']) == [1,2]
    //  filter_list([1,'a','b',0,15]) == [1,0,15]
    //  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof(l[i]) == "number") {
            newArr.push(l[i]);
        }
    }
    return newArr;
}



// ---Solution using Filter---

function filterList(list){
    return list.filter((x) => (typeof(x) == "number"))
}