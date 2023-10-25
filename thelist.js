// A. Instantiate two Arrays 
const vegetables = ["Bell Pepper", "Squash", "Onions", "Aubergine", "Baguio Beans"];
const fruits = ["Tomato", "Mango", "Pomegrante", "Prunes", "Ube"];

// B. Create a 2-Dimensional Array "TheFood", conjunct both Vegetable and Fruits Arrays
const TheFood = [vegetables, fruits];
console.log("The Food: ", TheFood);

// C. Create a 1-Dimensional Array "FoodList", concatenate both Vegetable and Fruits Arrays
const FoodList = vegetables.concat(fruits);
console.log("Food LIst: ", FoodList);

// D. Check Arrays "TheFood" and "FoodList" if the following exists: "Banana and Apple"
const existsBanana  = FoodList.includes("Banana");
const existsApple  = FoodList.includes("Apple");

if (existsBanana && existsApple){
    console.log("Both Banana and Apple exists in the FoodList.");
} else if (existsBanana || existsApple){
    console.log("Atleast one of Banana or Apple exists in the FoodList.");
}else{
    console.log("Neither Banana nor Apple exists in the FoodList.");
}

//Check Arrays "TheFood" and "FoodList" if the following exists: "10 and 20"
const existsTen = FoodList.includes("10");
const existsTwenty = FoodList.includes("20");

if (existsTen && existsTwenty){
    console.log("Both 10 and 20 exists in the FoodList.");
} else if (existsTen || existsTwenty){
    console.log("Atleast one of 10 nor 20 exists in the FoodList.");
}else{
    console.log("Neither 10 nor 20 exists in the FoodList.");
}

/*D.1 if it is not included, push BANANA in "TheFood" Array on Dimension 1 (index-0) and 
include APPLE in the beginning of the Array on Dimension 1 (index-0).*/
if(!existsBanana || !existsApple){
    console.log("Dimension 1 (index-0):");
    TheFood[0].unshift("Banana");
    TheFood[0].unshift("Apple");
    console.log(TheFood[0]);
}

/*D.2 if it is not included, push 20 in "TheFood" Array on Dimension 2 (index-1),
 and include 10 in the beginning of the Array on Dimension 2 (index-1).*/
if(!existsTen || !existsTwenty){
    console.log("Dimension 2 (index-1):");
    let startIndex = 1;
    let deleteCount = 0;
    TheFood[1].splice(startIndex, deleteCount, 20);
    TheFood[1].splice(startIndex, deleteCount, 10);
    console.log(TheFood[1]);
}

//E. Remove the last and first element in "FoodList" by passing to a new Array named "TanggalBes" using slice();
const TanggalBes = FoodList.slice(1, -1);
console.log("TanggalBes ", TanggalBes);

//F. Push TanggalBes to TheFood Array.
TheFood.push(TanggalBes);

//G. Print the TheFood and FoodList Array
console.log("Updated TheFood:", TheFood);
console.log("Updated FoodList: ", FoodList);