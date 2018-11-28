import React,{Component} from 'react';

class Basic extends Component{
  render(){
    return(
      <div className="container">
              <h1>Swift The Basics</h1>
              <p>
                  Swift is a new programming language for iOS, macOS, watchOS, and tvOS app development. Nonetheless, many parts of Swift will be familiar from your experience of developing in C and Objective-C.
              </p>
              <p>
              Swift provides its own versions of all fundamental C and Objective-C types, including <mark>Int</mark> for integers, <mark>Double</mark> and <mark>Float</mark> for floating-point values,<mark>Bool</mark>  for Boolean values, and <mark>String</mark> for textual data. Swift also provides powerful versions of the three primary collection types, Array, Set, and Dictionary, as described in <a href="https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html"> Collection Types</a>.
              </p>
              <p>
              Like C, Swift uses variables to store and refer to values by an identifying name. Swift also makes extensive use of variables whose values can’t be changed. These are known as constants, and are much more powerful than constants in C. Constants are used throughout Swift to make code safer and clearer in intent when you work with values that don’t need to change.
              In addition to familiar types, Swift introduces advanced types not found in Objective-C, such as tuples. Tuples enable you to create and pass around groupings of values. You can use a tuple to return multiple values from a function as a single compound value.
              Swift also introduces optional types, which handle the absence of a value. Optionals say either “there is a value, and it equals x” or “there isn’t a value at all”. Using optionals is similar to using <mark>nill</mark> with pointers in Objective-C, but they work for any type, not just classes. Not only are optionals safer and more expressive than <mark>nill</mark> pointers in Objective-C, they’re at the heart of many of Swift’s most powerful features.
              Swift is a type-safe language, which means the language helps you to be clear about the types of values your code can work with. If part of your code requires a String, type safety prevents you from passing it an Int by mistake. Likewise, type safety prevents you from accidentally passing an optional <mark>String</mark> to a piece of code that requires a nonoptional <mark>String</mark>. Type safety helps you catch and fix errors as early as possible in the development process.
              </p>
              <h2>Constants and Variables</h2>
              <p>
                Constants and variables associate a name <b> (such as maximumNumberOfLoginAttempts or welcomeMessage)</b> with a value of a particular type (such as the number 10 or the string "Hello"). The value of a constant can’t be changed once it’s set, whereas a variable can be set to a different value in the future.
              </p>
              <h2>Declaring Constants and Variables</h2>
              <p>
              Constants and variables must be declared before they’re used. You declare constants with the let keyword and variables with the var keyword. Here’s an example of how constants and variables can be used to track the number of login attempts a user has made:
              </p><br/>
              <code>
                  let maximumNumberOfLoginAttempts = 10 <br/>
                  var currentLoginAttempt = 0
              </code>
              <mark>
                  This code can be read as:
                  “Declare a new constant called maximumNumberOfLoginAttempts, and give it a value of 10. Then, declare a new variable called currentLoginAttempt, and give it an initial value of 0.”
                  In this example, the maximum number of allowed login attempts is declared as a constant, because the maximum value never changes. The current login attempt counter is declared as a variable, because this value must be incremented after each failed login attempt.
                  You can declare multiple constants or multiple variables on a single line, separated by commas:
              </mark>
              <code>var x = 0.0, y = 0.0, z = 0.0</code>
              <mark><br/>
                Note:
                    If a stored value in your code won’t change, always declare it as a constant with the let keyword. Use variables only for storing values that need to be able to change.
              </mark>
              <h2>Type Annotations</h2>
              <p>You can provide a type annotation when you declare a constant or variable, to be clear about the kind of values the constant or variable can store. Write a type annotation by placing a colon after the constant or variable name, followed by a space, followed by the name of the type to use.This example provides a type annotation for a variable called welcomeMessage, to indicate that the variable can store String values:</p>
              <code>var welcomeMessage: String</code>
              <p>The colon in the declaration means “…of type…,” so the code above can be read as:
                  “Declare a variable called <b>welcomeMessage</b>  that is of type String.”
                  The phrase “of type String” means “can store any String value.” Think of it as meaning “the type of thing” (or “the kind of thing”) that can be stored.
                  The welcomeMessage variable can now be set to any string value without error:
              </p>
              <code>welcomeMessage = "Hello"</code>
              <p>You can define multiple related variables of the same type on a single line, separated by commas, with a single type annotation after the final variable name:</p>
              <code>var red, green, blue: Double</code>
              <mark>
                  Note
                  It’s rare that you need to write type annotations in practice. If you provide an initial value for a constant or variable at the point that it’s defined, Swift can almost always infer the type to be used for that constant or variable, as described in <a href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322">Type Safety and Type Inference</a>. In the welcomeMessage example above, no initial value is provided, and so the type of the welcomeMessage variable is specified with a type annotation rather than being inferred from an initial value.
              </mark>
              <h2>Naming Constants and Variables</h2>
              <p>Constant and variable names can’t contain whitespace characters, mathematical symbols, arrows, private-use Unicode scalar values, or line- and box-drawing characters. Nor can they begin with a number, although numbers may be included elsewhere within the name.
                  Once you’ve declared a constant or variable of a certain type, you can’t declare it again with the same name, or change it to store values of a different type. Nor can you change a constant into a variable or a variable into a constant.
              </p><br/>
              <code>
                  let π = 3.14159 <br/>
                  let 你好 = "你好世界"<br/>
                  let 🐶🐮 = "dogcow"<br/>
              </code>
              <mark>
                Note:
                    If you need to give a constant or variable the same name as a reserved Swift keyword, surround the keyword with backticks (`) when using it as a name. However, avoid using keywords as names unless you have absolutely no choice.
              </mark>
              <p>
              You can change the value of an existing variable to another value of a compatible type. In this example, the value of friendlyWelcome is changed from "Hello!" to "Bonjour!":
              </p>
              <code>
                  var friendlyWelcome = "Hello!" <br/>
                  friendlyWelcome = "Bonjour!" <br/>
                  comment => // friendlyWelcome is now "Bonjour!" <br/>
              </code>
              <pre>
              Unlike a variable, the value of a constant can’t be changed after it’s set. Attempting to do so is reported as an error when your code is compiled:
              </pre>
              <code>    let languageName = "Swift" <br/>
                        languageName = "Swift++"<br/>
                        comment=> // This is a compile-time error: languageName cannot be changed.
              </code>
              <h2>Printing Constants and Variable</h2>
              <pre>
               You can print the current value of a constant or variable with the print(_:separator:terminator:) function:
                print(friendlyWelcome)
                output: Prints "Bonjour!"
              </pre>
              <p>
              Integers are whole numbers with no fractional component, such as 42 and -23. Integers are either signed (positive, zero, or negative) or unsigned (positive or zero).Swift provides signed and unsigned integers in 8, 16, 32, and 64 bit forms. These integers follow a naming convention similar to C, in that an 8-bit unsigned integer is of type UInt8, and a 32-bit signed integer is of type Int32. Like all types in Swift, these integer types have capitalized names.
                <a href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html" >Read More</a>
              </p>
      </div>
    );
  }
}
export default Basic;