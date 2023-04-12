console.log('Hello Typescript!');

//* 변수 //
var number: number;
number = 10;
// number = 'string';

let string = 'string';
// string = 10; -> 처음 들어온 데이터의 타입으로 맞춰짐

//* 함수 //
const function1 = (arg: number): string /* string -> 반환타입 지정 */ => {
    return 'string';
}

//* 객체 //
// 객체에 대한 타입 선언
//! 1. class를 이용 
class Object1 {
    prop1: string;
    prop2: number;

    constructor(prop1: string, prop2: number) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    };
};
const object1: Object1 = { prop1: 'prop1', prop2: 2 };

//! 2. type 키워드 사용 
type Object2 = {
    prop1: string,
    prop2: number
}
const object2: Object2 = { prop1: 'prop1', prop2: 2 };

//! 3. interface 활용 
interface Object3 {
    prop1: string;
    prop2: number;
    func1?: (arg1: number) => string; // 함수의 타입 지정 가능 (매개변수 number, 반환타입 string) / ? -> 필수요소 해제
}
const object3: Object3 | null = null;
// 객체에 null 넣기 불가능.하지만 객체의 타입을 2개로 받고 싶으면 '| + 타입'

interface Object4 {
    prop3: string;
    prop4: number;
}
const object4: Object3 & Object4 = { prop1: 'prop1', prop2: 2, prop3: 'prop1', prop4: 2 };
// 객체 타입 2개 합치기 가능
