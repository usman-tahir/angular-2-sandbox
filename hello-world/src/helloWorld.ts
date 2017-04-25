import {Component} from 'angular2/core';

@Component({
	selector: 'hello-world',
	templateUrl: 'src/helloWorld.html'
})

export class HelloWorld {
	yourName: string = '';
}