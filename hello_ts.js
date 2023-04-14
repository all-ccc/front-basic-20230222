console.log('Hello Typescript!');
//* 변수 //
var numberVariable;
numberVariable = 10;
// number = 'string';
var stringVariable = 'it is a string';
// stringVariable = 10; -> 처음 들어온 데이터의 타입으로 맞춰짐
//* 함수 //
var function1 = function (arg) {
    return 'string';
};
// 변수선언 키워드 변수명 = (매개변수: 타입): 반환타입 => {구현부};
//* 객체 //
// 객체에 대한 타입 선언
//! 1. class를 이용 
var Object1 = /** @class */ (function () {
    function Object1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    ;
    return Object1;
}());
;
var object1 = { prop1: 'prop1', prop2: 2 };
var object2 = { prop1: 'prop1', prop2: 2 };
var object3 = null;
var object4 = { prop1: 'prop1', prop2: 2, prop3: 'prop1', prop4: 2 };
// 객체 타입 2개 합치기 가능
//! 4. enum (열거형 타입)
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\uC0AC\uACFC";
    Fruits["BANANA"] = "\uBC14\uB098\uB098";
    Fruits["MELON"] = "\uBA54\uB860";
})(Fruits || (Fruits = {}));
var fruit = Fruits.APPLE; // Fruits 안에 있는 거 아니면 오류남
console.log(fruit);
