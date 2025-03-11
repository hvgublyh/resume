interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;

}
// This line is a shortcut to tell TypeScript there is a 
// constant called •backpack- , 
declare const backpack:Backpack<string>;
  // object is a string, because we declared it above as the variable part of Backpack. 
const object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function. 
backpack.add('123');