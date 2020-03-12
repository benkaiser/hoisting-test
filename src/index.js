import _ from 'lodash';
import module from './module';
import AnotherClass from './anotherClass';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log('In component');
  console.log(module);
  window.mod1 = module;

  new AnotherClass();

  return element;
}

document.body.appendChild(component());