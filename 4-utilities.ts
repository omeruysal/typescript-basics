interface MyInterface {
  property: string;
  property2: number;
  property3: boolean;
}
const obj: MyInterface = {
  property: 'omer',
  property2: 1,
  property3: true,
};
//Partial makes all of properties in the interface optional
const obj1: Partial<MyInterface> = {};

//Omit ignore the properties which we give
const obj2: Omit<MyInterface, 'property2' | 'property3'> = {
  property: 'omer',
};
