type Car = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] : string
};

type 새로운타입 = TypeChanger<Car>

type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger <MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger<Bus, boolean>;
type NewBus2 = TypeChanger<Bus, string[]>