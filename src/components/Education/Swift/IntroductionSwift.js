import React,{Component} from 'react';


class Introduction extends Component{
  render(){
    return(
      <div className="container text-muted">
      <div className="contanier">
        <h1>Introduction</h1>
        <p>
        <i>Swift is a fantastic way to write software, Whereever it's phone,desktop, servers, or anything 
        else that runs code.</i>it's a fast and interactive programming language that combines the best in moderen language
        thinking with the wisdom from the wider Apple engenring culture and the diverse contributions from its open-source community.
        the compiler is optimized for the performance and the language is optimized for development, without compromising on either.
       <i>Swift is friendly to new programmers.</i> It’s an industrial-quality programming language that’s as excodessive and enjoyable as a scripting language. Writing Swift code in a playground lets you experiment with code and see the results immediately, without the overhead of building and running an app. 
      </p>
      <p>
      Swift defines away large classes of common programming errors by adopting modern programming patterns:
        Variables are always initialized before use.
        Array indices are checked for out-of-bounds errors.
        Integers are checked for overflow.
        Optionals ensure that nil values are handled explicitly.
        Memory is managed automatically.
        Error handling allows controlled recovery from unexpected failures.
          Swift code is compiled and optimized to get the most out of modern hardware. The syntax and standard library have been designed based on the guiding principle that the obvious way to write your code should also perform the best. Its combination of safety and speed make Swift an excellent choice for everything from “Hello, world!” to an entire operating system.
          Swift combines powerful type inference and pattern matching with a modern, lightweight syntax, allowing complex ideas to be excodessed in a clear and concise manner. As a result, code is not just easier to write, but easier to read and maintain as well.
          Swift has been years in the making, and it continues to evolve with new features and capabilities. Our goals for Swift are ambitious. We can’t wait to see what you create with it.
       </p>
        <h2>Version Compatibility</h2>
        <p>
        This book describes Swift 4.2, the default version of Swift that’s included in Xcode 10.0. You can use Xcode 10.0 to build targets that are written in either Swift 4 or Swift 3.
        </p>
        <pre>
            Note:
            When the Swift 4.2 compiler is working with Swift 3 code, it identifies its language version as 3.4. As a result, you can use conditional compilation blocks like #if swift(>=3.4) to write code that’s compatible with multiple versions of the Swift compiler.
        </pre>
        <p>
        When you use Xcode 9.2 to build Swift 3 code, most of the new Swift 4 functionality is available. That said, the following features are available only to Swift 4 code:
             
          Substring operations return an instance of the <u>Substring</u> type, instead of <u>String</u>
          The <underline>@objc</underline> attribute is implicitly added in fewer places.
          Extensions to a type in the same file can access that type’s private members.
             
          A target written in Swift 4 can depend on a target that’s written in Swift 3, and vice versa. This means, if you have a large project that’s divided into multiple frameworks, you can migrate your code from Swift 3 to Swift 4 one framework at a time.
        </p>
        <h1>A Swift Tour</h1>
        <p>
          <i>
          Tradition suggests that the first program in a new language should print the words “Hello, world!” on the screen. In Swift, this can be done in a single line:
          </i>
        </p>
        <code>
                print("Hello, world!")  <br/>
                output: Prints "Hello, world!" <br/>
        </code>
        <p>
          If you have written code in C or Objective-C, this syntax looks familiar to you—in Swift, this line of code is a complete program. You don’t need to import a separate library for functionality like input/output or string handling. Code written at global scope is used as the entry point for the program, so you don’t need a main() function. You also don’t need to write semicolons at the end of every statement.
          This tour gives you enough information to start writing code in Swift by showing you how to accomplish a variety of programming tasks. Don’t worry if you don’t understand something—everything introduced in this tour is explained in detail in the rest of this book.
        </p>
        <pre>
        Note:
            For the best experience, open this chapter as a playground in Xcode. Playgrounds allow you to edit the code listings and see the result immediately. 
        </pre>
        <h1>
            Simple Values
        </h1>
        <p>
          Use let to make a constant and var to make a variable. The value of a constant doesn’t need to be known at compile time, but you must assign it a value exactly once. This means you can use constants to name a value that you determine once but use in many places.
        </p>
        <code>
          var myVariable = 42 <br/>
          myVariable = 50  <br/>
          let myConstant = 42 <br/>
        </code>
         
        <p>
            A constant or variable must have the same type as the value you want to assign to it. However, you don’t always have to write the type explicitly. Providing a value when you create a constant or variable lets the compiler infer its type. In the example above, the compiler infers that <u>myVariable</u> is an integer because its initial value is an integer.If the initial value doesn’t provide enough information (or if there is no initial value), specify the type by writing it after the variable, separated by a colon.
        </p>
        <code> 
            let implicitInteger = 70   <br/>
            let implicitDouble = 70.0 <br/>
            let explicitDouble: Double = 70 <br/>
        </code>
        <mark>
            Experiment
            Create a constant with an explicit type of Float and a value of 4.
        </mark>
          <p>Values are never implicitly converted to another type. If you need to convert a value to a different type, explicitly make an instance of the desired type.</p>
          <code>
            let label = "The width is " <br/>
            let width = 94 <br/>
            let widthLabel = label + String(width)
          </code>
          <p>
            There’s an even simpler way to include values in strings: Write the value in parentheses, and write a backslash (\) before the parentheses. For example
          </p>
          <code>
              let apples = 3
              let oranges = 5 <br/>
              let appleSummary = "I have \(apples) apples." <br/>
              let fruitSummary = "I have \(apples + oranges) pieces of fruit."
          </code>
          <mark>
            Experiment
              Use \() to include a floating-point calculation in a string and to include someone’s name in a greeting.
          </mark>
          <p>
          Use three double quotation marks (""") for strings that take up multiple lines. Indentation at the start of each quoted line is removed, as long as it matches the indentation of the closing quotation marks. For example:
          </p>
          <pre>
              let quotation = """
              Even though there's whitespace to the left,
              the actual lines aren't indented.
              Except for this line.
              Double quotes (") can appear without being escaped.

              I still have \(apples + oranges) pieces of fruit.
              """
          </pre>
          <p>Create arrays and dictionaries using brackets ([]), and access their elements by writing the index or key in brackets. A comma is allowed after the last element.</p>
          <code>
          var shoppingList = ["catfish", "water", "tulips"] <br/>
            shoppingList[1] = "bottle of water" <br/>
            var occupations = [ <br/>
            "Malcolm": "Captain",<br/>
            "Kaylee": "Mechanic",<br/>
                              ]
            occupations["Jayne"] = "Public Relations" <br/>
          </code>
          <b>Arrays automatically grow as you add elements.</b>
          <code>
              let emptyArray = [String]() <br/>
              let emptyDictionary = [String: Float]()
          </code>
          <p>
          If type information can be inferred, you can write an empty array as [] and an empty dictionary as <b>[:]</b>for example, when you set a new value for a variable or pass an argument to a function.
          </p>
          <code>
                shoppingList = [] <br/>
                occupations = [:]
          </code>
          <h3>Control Flow</h3>
          <p>
             Use if and <mark><b>switch</b></mark>to make conditionals, and use <mark><b>for-in</b></mark> , <mark> <b>while</b> </mark> , and <mark> <b>repeat-while</b> </mark>  to make loops. Parentheses around the condition or loop variable are optional. Braces around the body are required.
          </p>learn more about shift introduction you learn from <a href="https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html" target="blank">here</a>
      </div>
         
         </div>
    );
  }
}

export default Introduction;