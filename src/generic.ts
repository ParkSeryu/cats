interface LengthCheck {
    length: number
}

const 함수 = <MyType extends LengthCheck>(x: MyType) => {
    return x.length;
}

  
let a = 함수<string[]>(['100']);
// let b = 함수<string>(['4', '2']);
// let a = 함수<number>(100);


console.log(a);


const 숙제1 = <T extends string | string[]>(param : T) => {
    console.log(param.length);
}

let 숙제1_1 = 숙제1<string>('hello');
let 숙제1_2 = 숙제1<string[]>(['kim', 'park']);

interface Animal {
    name : string;
    age: number
}

const 숙제2 = <T extends Animal>(param : T) => {
    return param;
}

let data = '{"name" : "dog", "age" : 1}';

let b = 숙제2<Animal>(JSON.parse(data));

class Person <T> {
    name : T;
    constructor(a: T){
      this.name = a;
    }
  }
  let a1 = new Person<string>('어쩌구');
  a1.name //any 타입이 되었넹 