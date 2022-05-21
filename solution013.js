function findShort(s) {
    // given a string of words, return the length of the shortest word

    const sArr = s.split(" ");
    //     console.log(sArr);
    return (sArr.reduce(function (a, b) {
        if (a.length <= b.length) {
            return a;
        } else { return b };
        // return a.length <= b.length ? a.length : b.length;
    })).length
}