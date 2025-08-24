let s ="Hello world";
let news =s.split(' ');
let word =news[1].length;
console.log(word);

let s1 = " fly me to the moon ";
let news1 = s1.trim();
let word1 = news1.split(' ');
let newword = word1[4].length;
console.log(newword);

function isAnagram(inputa,inputb){
let a = inputa.split('').sort();
let b = inputb.split('').sort();
for(let i=0; i<a.length; i++){
    if(a[i]!=b[i]){
        console.log("its not a Anagram")
        return false;
    }else{
        console.log("its Anagram")
        return true;
    }
}

}

console.log(isAnagram("listen","silent"));

console.log(isAnagram("Hello", "world"));

const numarray = [2,4,5,2,1,2]
const targetted = 2 ;
let countnumber = 0;
for(let s=0; s<numarray.length; s++){
if(targetted == numarray[s]){
    countnumber++
}
}
console.log(countnumber);



function intersection(arr1, arr2){
let output = [];
    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                output.push(arr1[i]);

            }
        }
    }
    console.log(output)
}

intersection([2,4,5,9,1,2], [1,4,5,9,7,2])


function sumOfN(n){
    let sum=1;
    let iterate = 2;
    for(let i=0; i<=n; i++){

        sum=iterate+sum;
        iterate ++;
        console.log(sum);
    }

   }

sumOfN(5)