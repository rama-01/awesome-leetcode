class Animal {
  numLegs: number = 4;
}
type AnimalConstructor = new () => Animal;
function create(c: Animal): Animal {
  return new Animal()
}