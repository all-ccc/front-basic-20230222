console.log('Hello Javascript!');

// 한 줄 주석
/* 부분 주석 */

//* 변수 선언 방법 //
//! 1. 변수의 타입이 존재하지 않음 
var variable_name;
variable_name = '변수 값';
console.log(variable_name.trim());
variable_name = 10; // 다른 변수 타입으로 변경 가능
// console.log(variable_name.trim()); -> 숫자에는 trim 적용 불가

//! 2. 변수 선언 키워드 
//! var, let, const 
var variable_name; // 동일한 변수명 써도 오류 발생 X
if (10 == 10) {
    var variable_name_2 = '변수';
}
console.log(variable_name_2); // if문 밖에서 변수 호출했지만 출력됨

let let_variable_1; // 동일한 변수명 쓰면 오류 발생
// let let_variable_1; // 블록 변수 키워드 (동일한 블럭 내에서 동일한 변수명으로 지으면 안되고, 동일한 블럭 내에서만 사용 가능)
if (10 == 10) {
    let let_variable_2 = '블럭 변수';
}
// console.log(let_variable_2); -> 블럭 밖이라서 오류 발생

const const_variable_1 = '상수'; // 선언과 동시에 초기화해야 함
// const_variable_1 = '변경 상수'; -> 상수라서 변경 불가

//! 3. 데이터의 타입 
//! 문자열 string : '', "" 
let stringVariable1 = '문자열';
let stringVariable2 = "문자열";
console.log(typeof(stringVariable1, stringVariable2)); // typeof: 타입 확인 시

//! 숫자 number : 정수, 실수 
let numberVariable1  = 10;
let numberVariable2 = 1.5;
console.log(typeof(numberVariable1,numberVariable2)); // 정수 실수 구분없이 둘 다 number

//! 논리 boolean : true, false 
let booleanVariable = true;
console.log(typeof(booleanVariable));

//! null 
let nullVariable = null;
console.log(typeof(nullVariable)); // object라고 나오지만 null이라고 이해

//! 배열 : [] 
let arrayVariable = [1, 'A', false]; // 타입 섞어서 넣기 가능
arrayVariable = [0]; // -> typeof하면 object라고 나옴

//! 객체 : {} 
let objectVariable = {
    "key": "value",
    "name": "John",
    "age": 20,
    "object": {
        "key1" : 1
    }
}
// (위) json이라는 구조임 ("key": "value") -> 쉽게 구조를 짤 수 있음(장점)

//* 연산자 //
//! 1. 나눗셈 연산자 
let number1 = 10 / 3;
console.log(number1);

//! 2. 제곱 연산자(**)
let number2 = 10 ** 3;
console.log(number2);

//! 3. 비교 연산 (==, ===)
let numberValue10 = 10;
let stringValue10 = '10';
console.log(numberValue10 == stringValue10); // 데이터 타입은 비교 X
console.log(numberValue10 === stringValue10); // 타입도 비교

//* if 조건 //
let tmpValue = null;
if (tmpValue) console.log('true'); // 조건 자리에 boolean 외에도 다 가능
else console.log('false'); 
// if(숫자 변수) -> 0이 아닌 모든 애들 true
// if(문자) -> 아무것도 없으면 false, 공백이나 문자 있으면 true
// if(빈 배열, 빈 객체) -> true (실제로 주소값이 있기 때문)
// if(null) -> false

//* class //
class Human {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let humanObject = new Human('John', 30, '부산');
console.log(humanObject.address);

//* 비구조화 할당 //
// const {name, age, address } = humanObject;
let { name, ...others } = humanObject;
console.log(name);
console.log(others);
// ...어쩌고 -> 스프레드 연산자
name = 'Michle';

humanObject = { ...humanObject, name };
// { name, age, address, name } => name이 중첩됨 -> 뒤에 오는 name으로 덮어씌움
console.log(humanObject);

const tmpArray = [1, 'A', true];
const [number, ...otherArray] = tmpArray;
console.log(number);
console.log(otherArray); // 'A'와 true가 배열 형태로

//* 함수 //
function function1(arg1, arg2) {

}
function1(1, 2);

// 화살표 함수
const function2 = (arg1, arg2) => {

}
function2(1, 2);
