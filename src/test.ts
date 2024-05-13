interface StringOnly {
    [key: string] : string | number, // 모든 문자로 된 속성
}

let user: StringOnly = {
    name : 'kim',
    123: 'test',
    location : 'seoul'
}

console.log(user[123]);

interface MyType { 
    'font-size' : MyType | number
}

let css : MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

interface H1 {
    [kiss: string] : string | number;
}


let obj :H1 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  };

interface H2 {
    [key: string] : number | H2,
} 

let obj2: H2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }