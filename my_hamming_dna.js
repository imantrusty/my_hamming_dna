function my_hamming_dna (str1, str2) {

    var difference = 0

    if (str1.length != str2.length){
    return -1
    }
    for (var i = 0; i < str1.length; i++){
        //console.log("the current letter is " + str1[i])
    
        if (str1[i] != str2[i]) {
            difference++
        }
    }
    return difference
}
//console.log (hamming_dna ("GGACTGA", "GGLCSGA"))