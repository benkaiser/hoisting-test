import module from './module';

export default class AnotherClass {
  constructor() {
    console.log('In antoher class');
    console.log(module);
    console.log('Testing equality:');
    console.log(module === window.mod1);
  }
}