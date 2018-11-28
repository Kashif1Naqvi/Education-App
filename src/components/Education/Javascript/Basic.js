import React, {Component} from 'react';


class Basic extends Component{
  render(){
    return(
      <div  className="container" >
          <h3>
            <mark> JavaScript Data Types Explained</mark>
          </h3>
          <div className="text-dark" >
              Two Kinds of Data.In JavaScript there are two different kinds of data: primitives, and objects. A primitive is simply a data type that is not an object, and has no methods.
              In JS, there are six primitive data types: <br/>
         <i>
            <div className="row" >
            <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"  }} >
              <mark>
                Boolean <br/>
                  <p className="text-dark" >A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.</p>
                    <pre>
                      var boo1 = true;
                      var boo2 = false;
                    </pre>
              </mark>
            </div>
            
            <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"}} >
            
            <mark>
            Number <br/>
                  <p className="text-dark" >There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).</p>
                  <pre>
                    var num1 = 32;
                    var num2 = +Infinity;
                  </pre>
            </mark>
            </div>
            <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"}} >
            <mark>
            String  <br/>
                  <p className="text-dark" >Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).</p>
                  <pre>
                    var str1 = 'hello, it is me';
                    var str2 = "hello, it's me";
                  </pre>
            </mark>
            
            </div>
           
           <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"}} >
           <mark>
           Null    <br/>
                  <p className="text-dark" >Null has one value: null. It is explicitly nothing.</p>
                  <pre>var nothing = null;</pre>
           </mark>
          </div>
           <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"}} >
              <mark>
              Undefined <br/>
                  <p className="text-dark" >A variable that has no value is undefined.</p>
                  <pre>
                    var data;
                    console.log(data);
                  </pre>

              </mark>
            </div>
           <div className="col-sm-4" style={{backgroundColor:"white" , fontFamily:"Times New Roman, Times, serif", border:"2px solid black"}} >
           <mark>
           Symbol  <br/>
                <p className="text-dark" >Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, that is the extent that this article will cover Symbols.</p>
                <pre>
                const mySymbol = Symbol('mySymbol');
                </pre>
           </mark>
          </div>
           </div>
         </i>
      </div>
        <h4>What about Objects?</h4>
        <p className="text-dark" >Objects are not a primitive data Type.<br />An object is a collection of properties. These properties are stored in key/value pairs. Properties can reference any type of data, including objects and/or primitive values.</p>
         <pre>
          var obj = [
                      key1: 'value',
                      key2: 'value',
                      key3: true,
                      key4: 32,
                      key5: {}
                    ]
        </pre>
        <p className="text-dark" >more about Javascript basics you can be learn  <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target='blank' >here</a> </p>
      </div>
    );
  }
}
export default Basic;