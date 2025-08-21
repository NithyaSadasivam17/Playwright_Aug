let originalstring = "MADAM"
let reversestring ="";
let arr1count = originalstring.length;
//console.log(arr1count)
for(i=arr1count-1; i >= 0; i--){
 reversestring += originalstring[i]
}
console.log("orginal string:"+originalstring)
  console.log("reverse string:"+reversestring)
if(originalstring === reversestring){
    console.log("It is palindrome")
}else{
    console.log("Its not a palindrome")
}

