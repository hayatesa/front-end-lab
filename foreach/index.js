Array.prototype.myForeach = function (callback) {
    let _this = this;
    for (let i = 0; i < _this.length; i++) {
        callback(_this[i], i, _this);
    }
};

let arr = [1, 2, 3, 4, 5];
let handler1 = (item, index, array)=>{
    console.log(item);
};
arr.myForeach(handler1);

let arr2 = [1, 2, 3, 4, 5];
let handler2 = (item, index, array)=>{
    console.log("Oh Yeah")
};
arr.myForeach(handler2);



function outer() {
    let outerValue = "Outer Value";

    function inner() {
        console.log(`Inner access: ${outerValue}`);
    }
    return inner;
}

let inner = outer();
inner();