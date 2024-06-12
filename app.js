// let counter = 0
// function incrementCall (){
//    try{ counter++;

//     console.log("Global counter :",counter);
//     incrementCall();
//    }
//    catch(error)
//    {console.error("error occured :",error);
// console.log("Value of global counter :",counter)}
// }
// incrementCall();

// part two
let testArray = [[1],2,[9],4,["Abdoul",["test"],[]]]
let newarr = []


function flattenArr (arr){
for (let i = 0; i <arr.length;i++){
   if (Array.isArray(arr[i])){
      flattenArr(arr[i])}
      else{ 
      newarr.push(arr[i])}
   }
   return newarr
}
console.log(flattenArr(testArray))
console.log(newarr)
