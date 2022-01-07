// Interfaces represent the shape of something
// Below example we represent the shape of an object
// We can use this interface as the input for a function or as the output of function
interface MyInterface {
  property1?: string;
  property2: number;
  property3: boolean;
}
interface MyInterface2 {
  property4?: string;
}
interface MyInterface3 extends MyInterface, MyInterface2 {
  property5?: string;
}

//Types can not extend each others different than interfaces
type MyType = {
  property1: string;
};

function theFunctionReturnsSomethingTypeOfMyInterface(input: MyInterface): MyInterface {
  return input;
}

function theFunctionReturnsNothing(input: MyInterface): void {
  //Some logics
}

async function theFunctionReturnsPromise(input: MyInterface): Promise<MyInterface> {
  return input;
}
