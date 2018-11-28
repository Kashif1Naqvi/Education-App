import React, {Component} from 'react';


class Advance extends Component{
  render(){
    return(
      <div>
          <h2>Inheritance and the prototype chain</h2>
          <p>
            JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in <b>ES2015</b>, but is syntactical sugar, JavaScript remains prototype-based).
            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
            Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
            While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.</p>
            <br/>
            <h5>Inheriting <b>methods</b>Section</h5>
            <p>JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).</p>
            <br/>
            <h4>Using prototypes in JavaScriptSection</h4>
            <p>
            In JavaScript, as mentioned above, functions are able to have properties. All functions have a special property named prototype. Please note that the code below is free-standing (it is safe to assume there is no other JavaScript on the webpage other than the below code). For the best learning experience, it is highly reccomended that you open a console (which, in Chrome and Firefox, can be done by pressing Ctrl+Shift+I), navigating to the "console" tab, copying-and-pasting in the below JavaScript code, and run it by pressing the Enter/Return key
            </p><br/>
            <pre>
                function doSomething(){}
                    console.log( doSomething.prototype );
                    var doSomething = function(){}; 
                    console.log( doSomething.prototype )
            </pre>
            <strong>Learn more About Advance Javascript you can learn from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target='blank' >here</a> </strong>
      </div>
    );
  }
}
export default Advance;