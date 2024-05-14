type Age<T> = T extends string ? string : unknown
let a: Age<string>

type FirstItem<T> = T extends any[] ? T[0] : any;

type Person<T> = T extends infer R ? R : unknown

type a = Person<string>

type 타입추출<T> = T extends (infer R)[] ? R : unknown
type a = 타입추출<string[]>;

type Age1<T> = T extends (infer R)[] ? T[0] extends string ? string : unknown;

let age1 :Age1<[string, number]>;
let age2 :Age1<[boolean, number]>; 


type Age<T> = T extends [string, ...any] ? T[0] : unknown;
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>;

type 타입뽑기<T> = T extends ( ()=> infer R ) ? R : any; 
type a2 = 타입뽑기< (x:number) => void > // NewType은 number 타입입니다 
type b = 타입뽑기<(x :string) => void>