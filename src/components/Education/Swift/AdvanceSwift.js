import React,{Component} from 'react';

class Advance extends Component{
  render(){
    return(
    <div className="container text-muted" >
        <h1>Basic Operators</h1>
          <p>
              An operator is a special symbol or phrase that you use to check, change, or combine values. For example, the addition operator (+) adds two numbers, as in let i = 1 + 2, and the logical AND operator (&&) combines two Boolean values, as in if enteredDoorCode && passedRetinaScan.
              Swift supports most standard C operators and improves several capabilities to eliminate common coding errors. The assignment operator (=) doesn’t return a value, to prevent it from being mistakenly used when the equal to operator (==) is intended. Arithmetic operators (+, -, *, /, % and so forth) detect and disallow value overflow, to avoid unexpected results when working with numbers that become larger or smaller than the allowed value range of the type that stores them. You can opt in to value overflow behavior by using Swift’s overflow operators, as described in Overflow Operators.
              Swift also provides range operators that aren’t found in C, such as a..<b> and a...b, as a shortcut for expressing a range of values.
              This chapter describes the common operators in Swift. Advanced Operators covers Swift’s advanced operators, and describes how to define your own custom operators and implement the standard operators for your own custom types.</b>
          </p>
           */}
    <main role="main">
        <article className="page">
            <div className="section" id="basic-operators">
                <h1>Basic Operators
                </h1>
                <p>An 
                    <em>operator</em> is a special symbol or phrase that you use to check, change, or combine values. For example, the addition operator (
                    <code className="docutils literal notranslate">
                        <span className="pre">+</span>
                    </code>) adds two numbers, as in
                    <code className="docutils literal notranslate">
                        <span className="pre">let</span>
                        <span className="pre">i</span>
                        <span className="pre">=</span>
                        <span className="pre">1</span>
                        <span className="pre">+</span>
                        <span className="pre">2</span>
                    </code>, and the logical AND operator (
                    <code className="docutils literal notranslate">
                        <span className="pre">&amp;&amp;</span>
                    </code>) combines two Boolean values, as in
                    <code className="docutils literal notranslate">
                        <span className="pre">if</span>
                        <span className="pre">enteredDoorCode</span>
                        <span className="pre">&amp;&amp;</span>
                        <span className="pre">passedRetinaScan</span>
                    </code>.
                </p>
                <p>Swift supports most standard C operators and improves several capabilities to eliminate common coding errors. The assignment operator (
                    <code className="docutils literal notranslate">
                        <span className="pre">=</span>
                    </code>) doesn’t return a value, to prevent it from being mistakenly used when the equal to operator (
                    <code className="docutils literal notranslate">
                        <span className="pre">==</span>
                    </code>) is intended. Arithmetic operators (
                    <code className="docutils literal notranslate">
                        <span className="pre">+</span>
                    </code>,
                    <code className="docutils literal notranslate">
                        <span className="pre">-</span>
                    </code>,
                    <code className="docutils literal notranslate">
                        <span className="pre">*</span>
                    </code>,
                    <code className="docutils literal notranslate">
                        <span className="pre">/</span>
                    </code>,
                    <code className="docutils literal notranslate">
                        <span className="pre">%</span>
                    </code> and so forth) detect and disallow value overflow, to avoid unexpected results when working with numbers that become larger or smaller than the allowed value range of the type that stores them. You can opt in to value overflow behavior by using Swift’s overflow operators, as described in
                    
                </p>
                <p>Swift also provides range operators that aren’t found in C, such as 
                    <code className="docutils literal notranslate">
                        <span className="pre">a..&lt;b</span>
                    </code> and
                    <code className="docutils literal notranslate">
                        <span className="pre">a...b</span>
                    </code>, as a shortcut for expressing a range of values.
                </p>
                <p>This chapter describes the common operators in Swift. 
                </p>
                <div className="section" id="ID61">
                   
                    <p>Operators are unary, binary, or ternary:</p>
                    <ul className="simple">
                        <li>
                            <em>Unary</em> operators operate on a single target (such as
                            <code className="docutils literal notranslate">
                                <span className="pre">-a</span>
                            </code>). Unary
                            <em>prefix</em> operators appear immediately before their target (such as
                            <code className="docutils literal notranslate">
                                <span className="pre">!b</span>
                            </code>), and unary
                            <em>postfix</em> operators appear immediately after their target (such as
                            <code className="docutils literal notranslate">
                                <span className="pre">c!</span>
                            </code>).
                        </li>
                        <li>
                            <em>Binary</em> operators operate on two targets (such as
                            <code className="docutils literal notranslate">
                                <span className="pre">2</span>
                                <span className="pre">+</span>
                                <span className="pre">3</span>
                            </code>) and are
                            <em>infix</em> because they appear in between their two targets.
                        </li>
                        <li>
                            <em>Ternary</em> operators operate on three targets. Like C, Swift has only one ternary operator, the ternary conditional operator (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">?</span>
                                <span className="pre">b</span>
                                <span className="pre">:</span>
                                <span className="pre">c</span>
                            </code>).
                        </li>
                    </ul>
                    <p>The values that operators affect are 
                        <em>operands</em>. In the expression
                        <code className="docutils literal notranslate">
                            <span className="pre">1</span>
                            <span className="pre">+</span>
                            <span className="pre">2</span>
                        </code>, the
                        <code className="docutils literal notranslate">
                            <span className="pre">+</span>
                        </code> symbol is a binary operator and its two operands are the values
                        <code className="docutils literal notranslate">
                            <span className="pre">1</span>
                        </code> and
                        <code className="docutils literal notranslate">
                            <span className="pre">2</span>
                        </code>.
                    </p>
                </div>
                <div className="section" id="ID62">
                    <h2>Assignment Operator
                        <a className="headerlink" href="#ID62" title="Permalink to this headline">¶</a>
                    </h2>
                    <p>The 
                        <em>assignment operator</em> (
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                            <span className="pre">=</span>
                            <span className="pre">b</span>
                        </code>) initializes or updates the value of
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> with the value of
                        <code className="docutils literal notranslate">
                            <span className="pre">b</span>
                        </code>:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">b</span> =
                                        <span className="m">10</span>
                                    </li>
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">a</span> =
                                        <span className="m">5</span>
                                    </li>
                                    <li>
                                        <span className="nv">a</span> =
                                        <span className="nv">b</span>
                                    </li>
                                    <li>
                                        <span className="c">comment=> a is now equal to 10</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>If the right side of the assignment is a tuple with multiple values, its elements can be decomposed into multiple constants or variables at once:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span> (
                                        <span className="nv">x</span>,
                                        <span className="nv">y</span>) = (
                                        <span className="m">1</span>,
                                        <span className="m">2</span>)
                                    </li>
                                    <li>
                                        <span className="c">comment=> x is equal to 1, and y is equal to 2</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Unlike the assignment operator in C and Objective-C, the assignment operator in Swift does not itself return a value. The following statement is not valid:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">if</span>
                                        <span className="nv">x</span> =
                                        <span className="nv">y</span> <pre>prenticis</pre> 
                                    </li>
                                    <li>
                                        <span className="c">comment=> This is not valid, because x = y does not return a value.</span>
                                    </li>
                                    <li>}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>This feature prevents the assignment operator (
                        <code className="docutils literal notranslate">
                            <span className="pre">=</span>
                        </code>) from being used by accident when the equal to operator (
                        <code className="docutils literal notranslate">
                            <span className="pre">==</span>
                        </code>) is actually intended. By making
                        <code className="docutils literal notranslate">
                            <span className="pre">if</span>
                            <span className="pre">x</span>
                            <span className="pre">=</span>
                            <span className="pre">y</span>
                        </code> invalid, Swift helps you to avoid these kinds of errors in your code.
                    </p>
                </div>
                <div className="section" id="ID63">
                    <h2>Arithmetic Operators</h2>
                    <p>Swift supports the four standard 
                        <em>arithmetic operators</em> for all number types:
                    </p>
                    <ul className="simple">
                        <li>Addition (
                            <code className="docutils literal notranslate">
                                <span className="pre">+</span>
                            </code>)
                        </li>
                        <li>Subtraction (
                            <code className="docutils literal notranslate">
                                <span className="pre">-</span>
                            </code>)
                        </li>
                        <li>Multiplication (
                            <code className="docutils literal notranslate">
                                <span className="pre">*</span>
                            </code>)
                        </li>
                        <li>Division (
                            <code className="docutils literal notranslate">
                                <span className="pre">/</span>
                            </code>)
                        </li>
                    </ul>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="m">1</span> +
                                        <span className="m">2</span>
                                        <span className="c">comment=> equals 3</span>
                                    </li>
                                    <li>
                                        <span className="m">5</span> -
                                        <span className="m">3</span>
                                        <span className="c">comment=> equals 2</span>
                                    </li>
                                    <li>
                                        <span className="m">2</span> *
                                        <span className="m">3</span>
                                        <span className="c">comment=> equals 6</span>
                                    </li>
                                    <li>
                                        <span className="m">10.0</span> /
                                        <span className="m">2.5</span>
                                        <span className="c">comment=> equals 4.0</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Unlike the arithmetic operators in C and Objective-C, the Swift arithmetic operators don’t allow values to overflow by default. You can opt in to value overflow behavior by using Swift’s overflow operators (such as 
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                            <span className="pre">&amp;+</span>
                            <span className="pre">b</span>
                        </code>). See
                        <a className="reference internal" href="AdvancedOperators.html#ID37">
                            <span className="std std-ref">Overflow Operators</span>
                        </a>.
                    </p>
                    <p>The addition operator is also supported for 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> concatenation:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="s">&quot;hello, &quot;</span> +
                                        <span className="s">&quot;world&quot;</span>
                                        <span className="c">comment=> equals &quot;hello, world&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="ID64">
                        <h3>Remainder Operator
                            <a className="headerlink" href="#ID64" title="Permalink to this headline">¶</a>
                        </h3>
                        <p>The 
                            <em>remainder operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">%</span>
                                <span className="pre">b</span>
                            </code>) works out how many multiples of
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code> will fit inside
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> and returns the value that is left over (known as the
                            <em>remainder</em>).
                        </p>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">The remainder operator (
                                <code className="docutils literal notranslate">
                                    <span className="pre">%</span>
                                </code>) is also known as a
                                <em>modulo operator</em> in other languages. However, its behavior in Swift for negative numbers means that, strictly speaking, it’s a remainder rather than a modulo operation.
                            </p>
                        </div>
                        <p>Here’s how the remainder operator works. To calculate 
                            <code className="docutils literal notranslate">
                                <span className="pre">9</span>
                                <span className="pre">%</span>
                                <span className="pre">4</span>
                            </code>, you first work out how many
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code>s will fit inside
                            <code className="docutils literal notranslate">
                                <span className="pre">9</span>
                            </code>:
                        </p>
                        <p>You can fit two 
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code>s inside
                            <code className="docutils literal notranslate">
                                <span className="pre">9</span>
                            </code>, and the remainder is
                            <code className="docutils literal notranslate">
                                <span className="pre">1</span>
                            </code> (shown in orange).
                        </p>
                        <p>In Swift, this would be written as:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="m">9</span> %
                                            <span className="m">4</span>
                                            <span className="c">comment=> equals 1</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>To determine the answer for 
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">%</span>
                                <span className="pre">b</span>
                            </code>, the
                            <code className="docutils literal notranslate">
                                <span className="pre">%</span>
                            </code> operator calculates the following equation and returns
                            <code className="docutils literal notranslate">
                                <span className="pre">remainder</span>
                            </code> as its output:
                        </p>
                        <p>
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> = (
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code> x
                            <code className="docutils literal notranslate">
                                <span className="pre">some</span>
                                <span className="pre">multiplier</span>
                            </code>) +
                            <code className="docutils literal notranslate">
                                <span className="pre">remainder</span>
                            </code>
                        </p>
                        <p>where 
                            <code className="docutils literal notranslate">
                                <span className="pre">some</span>
                                <span className="pre">multiplier</span>
                            </code> is the largest number of multiples of
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code> that will fit inside
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code>.
                        </p>
                        <p>Inserting 
                            <code className="docutils literal notranslate">
                                <span className="pre">9</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code> into this equation yields:
                        </p>
                        <p>
                            <code className="docutils literal notranslate">
                                <span className="pre">9</span>
                            </code> = (
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code> x
                            <code className="docutils literal notranslate">
                                <span className="pre">2</span>
                            </code>) +
                            <code className="docutils literal notranslate">
                                <span className="pre">1</span>
                            </code>
                        </p>
                        <p>The same method is applied when calculating the remainder for a negative value of 
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code>:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="m">-9</span> %
                                            <span className="m">4</span>
                                            <span className="c">comment=> equals -1</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Inserting 
                            <code className="docutils literal notranslate">
                                <span className="pre">-9</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code> into the equation yields:
                        </p>
                        <p>
                            <code className="docutils literal notranslate">
                                <span className="pre">-9</span>
                            </code> = (
                            <code className="docutils literal notranslate">
                                <span className="pre">4</span>
                            </code> x
                            <code className="docutils literal notranslate">
                                <span className="pre">-2</span>
                            </code>) +
                            <code className="docutils literal notranslate">
                                <span className="pre">-1</span>
                            </code>
                        </p>
                        <p>giving a remainder value of 
                            <code className="docutils literal notranslate">
                                <span className="pre">-1</span>
                            </code>.
                        </p>
                        <p>The sign of 
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code> is ignored for negative values of
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>. This means that
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">%</span>
                                <span className="pre">b</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">%</span>
                                <span className="pre">-b</span>
                            </code> always give the same answer.
                        </p>
                    </div>
                    <div className="section" id="ID67">
                        <h3>Unary Minus Operator
                            <a className="headerlink" href="#ID67" title="Permalink to this headline">¶</a>
                        </h3>
                        <p>The sign of a numeric value can be toggled using a prefixed 
                            <code className="docutils literal notranslate">
                                <span className="pre">-</span>
                            </code>, known as the
                            <em>unary minus operator</em>:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">three</span> =
                                            <span className="m">3</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">minusThree</span> = -
                                            <span className="nv">three</span>
                                            <span className="c">comment=> minusThree equals -3</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">plusThree</span> = -
                                            <span className="nv">minusThree</span>
                                            <span className="c">comment=> plusThree equals 3, or &quot;minus minus three&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>The unary minus operator (
                            <code className="docutils literal notranslate">
                                <span className="pre">-</span>
                            </code>) is prepended directly before the value it operates on, without any white space.
                        </p>
                    </div>
                    <div className="section" id="ID68">
                        <h3>Unary Plus Operator
                            <a className="headerlink" href="#ID68" title="Permalink to this headline">¶</a>
                        </h3>
                        <p>The 
                            <em>unary plus operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">+</span>
                            </code>) simply returns the value it operates on, without any change:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">minusSix</span> =
                                            <span className="m">-6</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">alsoMinusSix</span> = +
                                            <span className="nv">minusSix</span>
                                            <span className="c">comment=> alsoMinusSix equals -6</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Although the unary plus operator doesn’t actually do anything, you can use it to provide symmetry in your code for positive numbers when also using the unary minus operator for negative numbers.</p>
                    </div>
                </div>
                <div className="section" id="ID69">
                    <h2>Compound Assignment Operators
                        <a className="headerlink" href="#ID69" title="Permalink to this headline">¶</a>
                    </h2>
                    <p>Like C, Swift provides 
                        <em>compound assignment operators</em> that combine assignment (
                        <code className="docutils literal notranslate">
                            <span className="pre">=</span>
                        </code>) with another operation. One example is the
                        <em>addition assignment operator</em> (
                        <code className="docutils literal notranslate">
                            <span className="pre">+=</span>
                        </code>):
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">a</span> =
                                        <span className="m">1</span>
                                    </li>
                                    <li>
                                        <span className="nv">a</span> +=
                                        <span className="m">2</span>
                                    </li>
                                    <li>
                                        <span className="c">comment=> a is now equal to 3</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>The expression 
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                            <span className="pre">+=</span>
                            <span className="pre">2</span>
                        </code> is shorthand for
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                            <span className="pre">=</span>
                            <span className="pre">a</span>
                            <span className="pre">+</span>
                            <span className="pre">2</span>
                        </code>. Effectively, the addition and the assignment are combined into one operator that performs both tasks at the same time.
                    </p>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">The compound assignment operators don’t return a value. For example, you can’t write 
                            <code className="docutils literal notranslate">
                                <span className="pre">let</span>
                                <span className="pre">b</span>
                                <span className="pre">=</span>
                                <span className="pre">a</span>
                                <span className="pre">+=</span>
                                <span className="pre">2</span>
                            </code>.
                        </p>
                    </div>
                    <p>For information about the operators provided by the Swift standard library, see 
                        <a className="reference external" href="https:comment=>developer.apple.com/documentation/swift/operator_declarations">Operator Declarations</a>.
                    </p>
                </div>
                <div className="section" id="ID70">
                    <h2>Comparison Operators
                        <a className="headerlink" href="#ID70" title="Permalink to this headline">¶</a>
                    </h2>
                    <p>Swift supports all standard C 
                        <em>comparison operators</em>:
                    </p>
                    <ul className="simple">
                        <li>Equal to (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">==</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Not equal to (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">!=</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Greater than (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&gt;</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Less than (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&lt;</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Greater than or equal to (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&gt;=</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Less than or equal to (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&lt;=</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                    </ul>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">Swift also provides two 
                            <em>identity operators</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">===</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">!==</span>
                            </code>), which you use to test whether two object references both refer to the same object instance. For more information, see
                            <a className="reference internal" href="ClassNameesAndStructures.html">
                                <span className="doc">Structures and ClassNamees</span>
                            </a>.
                        </p>
                    </div>
                    <p>Each of the comparison operators returns a 
                        <code className="docutils literal notranslate">
                            <span className="pre">Bool</span>
                        </code> value to indicate whether or not the statement is true:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="m">1</span> ==
                                        <span className="m">1</span>
                                        <span className="c">comment=> true because 1 is equal to 1</span>
                                    </li>
                                    <li>
                                        <span className="m">2</span> !=
                                        <span className="m">1</span>
                                        <span className="c">comment=> true because 2 is not equal to 1</span>
                                    </li>
                                    <li>
                                        <span className="m">2</span> &gt;
                                        <span className="m">1</span>
                                        <span className="c">comment=> true because 2 is greater than 1</span>
                                    </li>
                                    <li>
                                        <span className="m">1</span> &lt;
                                        <span className="m">2</span>
                                        <span className="c">comment=> true because 1 is less than 2</span>
                                    </li>
                                    <li>
                                        <span className="m">1</span> &gt;=
                                        <span className="m">1</span>
                                        <span className="c">comment=> true because 1 is greater than or equal to 1</span>
                                    </li>
                                    <li>
                                        <span className="m">2</span> &lt;=
                                        <span className="m">1</span>
                                        <span className="c">comment=> false because 2 is not less than or equal to 1</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Comparison operators are often used in conditional statements, such as the 
                        <code className="docutils literal notranslate">
                            <span className="pre">if</span>
                        </code> statement:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">name</span> =
                                        <span className="s">&quot;world&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">if</span>
                                        <span className="nv">name</span> ==
                                        <span className="s">&quot;world&quot;</span> <b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;hello, world&quot;</span>)
                                    </li>
                                    <li>} 
                                        <span className="k">else</span> <b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;I&#39;m sorry </span>\
                                        <span className="p">(</span>
                                        <span className="nv">name</span>
                                        <span className="p">)</span>
                                        <span className="s">, but I don&#39;t recognize you&quot;</span>)
                                    </li>
                                    <li>}
</li>
                                    <li>
                                        <span className="c">comment=> Prints &quot;hello, world&quot;, because name is indeed equal to &quot;world&quot;.</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>For more about the 
                        <code className="docutils literal notranslate">
                            <span className="pre">if</span>
                        </code> statement, see
                        <a className="reference internal" href="ControlFlow.html">
                            <span className="doc">Control Flow</span>
                        </a>.
                    </p>
                    <p>You can compare two tuples if they have the same type and the same number of values. Tuples are compared from left to right, one value at a time, until the comparison finds two values that aren’t equal. Those two values are compared, and the result of that comparison determines the overall result of the tuple comparison. If all the elements are equal, then the tuples themselves are equal. For example:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>(
                                        <span className="m">1</span>,
                                        <span className="s">&quot;zebra&quot;</span>) &lt; (
                                        <span className="m">2</span>,
                                        <span className="s">&quot;apple&quot;</span>)
                                        <span className="c">comment=> true because 1 is less than 2; &quot;zebra&quot; and &quot;apple&quot; are not compared</span>
                                    </li>
                                    <li>(
                                        <span className="m">3</span>,
                                        <span className="s">&quot;apple&quot;</span>) &lt; (
                                        <span className="m">3</span>,
                                        <span className="s">&quot;bird&quot;</span>)
                                        <span className="c">comment=> true because 3 is equal to 3, and &quot;apple&quot; is less than &quot;bird&quot;</span>
                                    </li>
                                    <li>(
                                        <span className="m">4</span>,
                                        <span className="s">&quot;dog&quot;</span>) == (
                                        <span className="m">4</span>,
                                        <span className="s">&quot;dog&quot;</span>)
                                        <span className="c">comment=> true because 4 is equal to 4, and &quot;dog&quot; is equal to &quot;dog&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>In the example above, you can see the left-to-right comparison behavior on the first line. Because 
                        <code className="docutils literal notranslate">
                            <span className="pre">1</span>
                        </code> is less than
                        <code className="docutils literal notranslate">
                            <span className="pre">2</span>
                        </code>,
                        <code className="docutils literal notranslate">
                            <span className="pre">(1,</span>
                            <span className="pre">&quot;zebra&quot;)</span>
                        </code> is considered less than
                        <code className="docutils literal notranslate">
                            <span className="pre">(2,</span>
                            <span className="pre">&quot;apple&quot;)</span>
                        </code>, regardless of any other values in the tuples. It doesn’t matter that
                        <code className="docutils literal notranslate">
                            <span className="pre">&quot;zebra&quot;</span>
                        </code> isn’t less than
                        <code className="docutils literal notranslate">
                            <span className="pre">&quot;apple&quot;</span>
                        </code>, because the comparison is already determined by the tuples’ first elements. However, when the tuples’ first elements are the same, their second elements
                        <em>are</em> compared—this is what happens on the second and third line.
                    </p>
                    <p>Tuples can be compared with a given operator only if the operator can be applied to each value in the respective tuples. For example, as demonstrated in the code below, you can compare two tuples of type 
                        <code className="docutils literal notranslate">
                            <span className="pre">(String,</span>
                            <span className="pre">Int)</span>
                        </code> because both
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> and
                        <code className="docutils literal notranslate">
                            <span className="pre">Int</span>
                        </code> values can be compared using the
                        <code className="docutils literal notranslate">
                            <span className="pre">&lt;</span>
                        </code> operator. In contrast, two tuples of type
                        <code className="docutils literal notranslate">
                            <span className="pre">(String,</span>
                            <span className="pre">Bool)</span>
                        </code> can’t be compared with the
                        <code className="docutils literal notranslate">
                            <span className="pre">&lt;</span>
                        </code> operator because the
                        <code className="docutils literal notranslate">
                            <span className="pre">&lt;</span>
                        </code> operator can’t be applied to
                        <code className="docutils literal notranslate">
                            <span className="pre">Bool</span>
                        </code> values.
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>(
                                        <span className="s">&quot;blue&quot;</span>,
                                        <span className="m">-1</span>) &lt; (
                                        <span className="s">&quot;purple&quot;</span>,
                                        <span className="m">1</span>)
                                        <span className="c">comment=> OK, evaluates to true</span>
                                    </li>
                                    <li>(
                                        <span className="s">&quot;blue&quot;</span>,
                                        <span className="k">false</span>) &lt; (
                                        <span className="s">&quot;purple&quot;</span>,
                                        <span className="k">true</span>)
                                        <span className="c">comment=> Error because &lt; can&#39;t compare Boolean values</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">The Swift standard library includes tuple comparison operators for tuples with fewer than seven elements. To compare tuples with seven or more elements, you must implement the comparison operators yourself.</p>
                    </div>
                </div>
                <div className="section" id="ID71">
                    <h2>Ternary Conditional Operator
                        <a className="headerlink" href="#ID71" title="Permalink to this headline">¶</a>
                    </h2>
                    <p>The 
                        <em>ternary conditional operator</em> is a special operator with three parts, which takes the form
                        <code className="docutils literal notranslate">
                            <span className="pre">question</span>
                            <span className="pre">?</span>
                            <span className="pre">answer1</span>
                            <span className="pre">:</span>
                            <span className="pre">answer2</span>
                        </code>. It’s a shortcut for evaluating one of two expressions based on whether
                        <code className="docutils literal notranslate">
                            <span className="pre">question</span>
                        </code> is true or false. If
                        <code className="docutils literal notranslate">
                            <span className="pre">question</span>
                        </code> is true, it evaluates
                        <code className="docutils literal notranslate">
                            <span className="pre">answer1</span>
                        </code> and returns its value; otherwise, it evaluates
                        <code className="docutils literal notranslate">
                            <span className="pre">answer2</span>
                        </code> and returns its value.
                    </p>
                    <p>The ternary conditional operator is shorthand for the code below:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">if</span>
                                        <span className="nv">question</span> <b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">answer1</span>
                                    </li>
                                    <li>} 
                                        <span className="k">else</span><b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">answer2</span>
                                    </li>
                                    <li>}
</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Here’s an example, which calculates the height for a table row. The row height should be 50 points taller than the content height if the row has a header, and 20 points taller if the row doesn’t have a header:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">contentHeight</span> =
                                        <span className="m">40</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">hasHeader</span> =
                                        <span className="k">true</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">rowHeight</span> =
                                        <span className="nv">contentHeight</span> + (
                                        <span className="nv">hasHeader</span> ?
                                        <span className="m">50</span> :
                                        <span className="m">20</span>)
                                    </li>
                                    <li>
                                        <span className="c">comment=> rowHeight is equal to 90</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>The example above is shorthand for the code below:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">contentHeight</span> =
                                        <span className="m">40</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">hasHeader</span> =
                                        <span className="k">true</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">rowHeight</span>:
                                        <span className="nc">Int</span>
                                    </li>
                                    <li>
                                        <span className="k">if</span>
                                        <span className="nv">hasHeader</span><b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">rowHeight</span> =
                                        <span className="nv">contentHeight</span> +
                                        <span className="m">50</span>
                                    </li>
                                    <li>} 
                                        <span className="k">else</span> <b>prenthisis</b>
                                    </li>
                                    <li>
                                        <span className="nv">rowHeight</span> =
                                        <span className="nv">contentHeight</span> +
                                        <span className="m">20</span>
                                    </li>
                                    <li>}
</li>
                                    <li>
                                        <span className="c">comment=> rowHeight is equal to 90</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>The first example’s use of the ternary conditional operator means that 
                        <code className="docutils literal notranslate">
                            <span className="pre">rowHeight</span>
                        </code> can be set to the correct value on a single line of code, which is more concise than the code used in the second example.
                    </p>
                    <p>The ternary conditional operator provides an efficient shorthand for deciding which of two expressions to consider. Use the ternary conditional operator with care, however. Its conciseness can lead to hard-to-read code if overused. Avoid combining multiple instances of the ternary conditional operator into one compound statement.</p>
                </div>
                <div className="section" id="ID72">
                    <h2>Nil-Coalescing Operator
                        <a className="headerlink" href="#ID72" title="Permalink to this headline">¶</a>
                    </h2>
                    <p>The 
                        <em>nil-coalescing operator</em> (
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                            <span className="pre">??</span>
                            <span className="pre">b</span>
                        </code>) unwraps an optional
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> if it contains a value, or returns a default value
                        <code className="docutils literal notranslate">
                            <span className="pre">b</span>
                        </code> if
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> is
                        <code className="docutils literal notranslate">
                            <span className="pre">nil</span>
                        </code>. The expression
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> is always of an optional type. The expression
                        <code className="docutils literal notranslate">
                            <span className="pre">b</span>
                        </code> must match the type that is stored inside
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code>.
                    </p>
                    <p>The nil-coalescing operator is shorthand for the code below:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="nv">a</span> !=
                                        <span className="k">nil</span> ?
                                        <span className="nv">a</span>! :
                                        <span className="nv">b</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>The code above uses the ternary conditional operator and forced unwrapping (
                        <code className="docutils literal notranslate">
                            <span className="pre">a!</span>
                        </code>) to access the value wrapped inside
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> when
                        <code className="docutils literal notranslate">
                            <span className="pre">a</span>
                        </code> is not
                        <code className="docutils literal notranslate">
                            <span className="pre">nil</span>
                        </code>, and to return
                        <code className="docutils literal notranslate">
                            <span className="pre">b</span>
                        </code> otherwise. The nil-coalescing operator provides a more elegant way to encapsulate this conditional checking and unwrapping in a concise and readable form.
                    </p>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">If the value of 
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> is non-
                            <code className="docutils literal notranslate">
                                <span className="pre">nil</span>
                            </code>, the value of
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code> is not evaluated. This is known as
                            <em>short-circuit evaluation</em>.
                        </p>
                    </div>
                    <p>The example below uses the nil-coalescing operator to choose between a default color name and an optional user-defined color name:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">defaultColorName</span> =
                                        <span className="s">&quot;red&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">userDefinedColorName</span>:
                                        <span className="nc">String</span>?
                                        <span className="c">comment=> defaults to nil</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">colorNameToUse</span> =
                                        <span className="nv">userDefinedColorName</span> ??
                                        <span className="nv">defaultColorName</span>
                                    </li>
                                    <li>
                                        <span className="c">comment=> userDefinedColorName is nil, so colorNameToUse is set to the default of &quot;red&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>The 
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                        </code> variable is defined as an optional
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code>, with a default value of
                        <code className="docutils literal notranslate">
                            <span className="pre">nil</span>
                        </code>. Because
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                        </code> is of an optional type, you can use the nil-coalescing operator to consider its value. In the example above, the operator is used to determine an initial value for a
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> variable called
                        <code className="docutils literal notranslate">
                            <span className="pre">colorNameToUse</span>
                        </code>. Because
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                        </code> is
                        <code className="docutils literal notranslate">
                            <span className="pre">nil</span>
                        </code>, the expression
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                            <span className="pre">??</span>
                            <span className="pre">defaultColorName</span>
                        </code> returns the value of
                        <code className="docutils literal notranslate">
                            <span className="pre">defaultColorName</span>
                        </code>, or
                        <code className="docutils literal notranslate">
                            <span className="pre">&quot;red&quot;</span>
                        </code>.
                    </p>
                    <p>If you assign a non-
                        <code className="docutils literal notranslate">
                            <span className="pre">nil</span>
                        </code> value to
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                        </code> and perform the nil-coalescing operator check again, the value wrapped inside
                        <code className="docutils literal notranslate">
                            <span className="pre">userDefinedColorName</span>
                        </code> is used instead of the default:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="nv">userDefinedColorName</span> =
                                        <span className="s">&quot;green&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">colorNameToUse</span> =
                                        <span className="nv">userDefinedColorName</span> ??
                                        <span className="nv">defaultColorName</span>
                                    </li>
                                    <li>
                                        <span className="c">comment=> userDefinedColorName is not nil, so colorNameToUse is set to &quot;green&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID73">
                    <h2>Range Operators</h2>
                    <p>Swift includes several 
                        <em>range operators</em>, which are shortcuts for expressing a range of values.
                    </p>
                    <div className="section" id="ID74">
                        <h3>Closed Range Operator </h3>
                        <p>The 
                            <em>closed range operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">a...b</span>
                            </code>) defines a range that runs from
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> to
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>, and includes the values
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>. The value of
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> must not be greater than
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>.
                        </p>
                        <p>The closed range operator is useful when iterating over a range in which you want all of the values to be used, such as with a 
                            <code className="docutils literal notranslate">
                                <span className="pre">for</span>
                            </code>-
                            <code className="docutils literal notranslate">
                                <span className="pre">in</span>
                            </code> loop:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">index</span>
                                            <span className="k">in</span>
                                            <span className="m">1</span>...
                                            <span className="m">5</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">index</span>
                                            <span className="p">)</span>
                                            <span className="s"> times 5 is </span>\
                                            <span className="p">(</span>
                                            <span className="nv">index</span> *
                                            <span className="m">5</span>
                                            <span className="p">)</span>
                                            <span className="s">&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> 1 times 5 is 5</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> 2 times 5 is 10</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> 3 times 5 is 15</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> 4 times 5 is 20</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> 5 times 5 is 25</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>For more about 
                            <code className="docutils literal notranslate">
                                <span className="pre">for</span>
                            </code>-
                            <code className="docutils literal notranslate">
                                <span className="pre">in</span>
                            </code> loops, see
                           
                        </p>
                    </div>
                    <div className="section" id="ID75">
                        <h3>Half-Open Range Operator    </h3>
                        <p>The 
                            <em>half-open range operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">a..&lt;b</span>
                            </code>) defines a range that runs from
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> to
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>, but doesn’t include
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>. It’s said to be
                            <em>half-open</em> because it contains its first value, but not its final value. As with the closed range operator, the value of
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> must not be greater than
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>. If the value of
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code> is equal to
                            <code className="docutils literal notranslate">
                                <span className="pre">b</span>
                            </code>, then the resulting range will be empty.
                        </p>
                        <p>Half-open ranges are particularly useful when you work with zero-based lists such as arrays, where it’s useful to count up to (but not including) the length of the list:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">names</span> = [
                                            <span className="s">&quot;Anna&quot;</span>,
                                            <span className="s">&quot;Alex&quot;</span>,
                                            <span className="s">&quot;Brian&quot;</span>,
                                            <span className="s">&quot;Jack&quot;</span>]
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">count</span> =
                                            <span className="nv">names</span>.
                                            <span className="nv">count</span>
                                        </li>
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">i</span>
                                            <span className="k">in</span>
                                            <span className="m">0</span>..&lt;
                                            <span className="nv">count</span><b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;Person </span>\
                                            <span className="p">(</span>
                                            <span className="nv">i</span> +
                                            <span className="m">1</span>
                                            <span className="p">)</span>
                                            <span className="s"> is called </span>\
                                            <span className="p">(</span>
                                            <span className="nv">names</span>[
                                            <span className="nv">i</span>]
                                            <span className="p">)</span>
                                            <span className="s">&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Person 1 is called Anna</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Person 2 is called Alex</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Person 3 is called Brian</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Person 4 is called Jack</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Note that the array contains four items, but 
                            <code className="docutils literal notranslate">
                                <span className="pre">0..&lt;count</span>
                            </code> only counts as far as
                            <code className="docutils literal notranslate">
                                <span className="pre">3</span>
                            </code> (the index of the last item in the array), because it’s a half-open range. For more about arrays, see
                            <a className="reference internal" href="CollectionTypes.html#ID107">
                                <span className="std std-ref">Arrays</span>
                            </a>.
                        </p>
                    </div>
                    <div className="section" id="ID562">
                        <h3>One-Sided Ranges </h3>
                        <p>The closed range operator has an alternative form for ranges that continue as far as possible in one direction—for example, a range that includes all the elements of an array from index 2 to the end of the array. In these cases, you can omit the value from one side of the range operator. This kind of range is called a 
                            <em>one-sided range</em> because the operator has a value on only one side. For example:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">name</span>
                                            <span className="k">in</span>
                                            <span className="nv">names</span>[
                                            <span className="m">2</span>...] <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="nv">name</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Brian</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Jack</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">name</span>
                                            <span className="k">in</span>
                                            <span className="nv">names</span>[...
                                            <span className="m">2</span>] <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="nv">name</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Anna</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Alex</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Brian</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>The half-open range operator also has a one-sided form that’s written with only its final value. Just like when you include a value on both sides, the final value isn’t part of the range. For example:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">name</span>
                                            <span className="k">in</span>
                                            <span className="nv">names</span>[..&lt;
                                            <span className="m">2</span>]<b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="nv">name</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Anna</span>
                                        </li>
                                        <li>
                                            <span className="c">comment=> Alex</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>One-sided ranges can be used in other contexts, not just in subscripts. You can’t iterate over a one-sided range that omits a first value, because it isn’t clear where iteration should begin. You 
                            <em>can</em> iterate over a one-sided range that omits its final value; however, because the range continues indefinitely, make sure you add an explicit end condition for the loop. You can also check whether a one-sided range contains a particular value, as shown in the code below.
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">range</span> = ...
                                            <span className="m">5</span>
                                        </li>
                                        <li>
                                            <span className="nv">range</span>.
                                            <span className="nv">contains</span>(
                                            <span className="m">7</span>)
                                            <span className="c">comment=> false</span>
                                        </li>
                                        <li>
                                            <span className="nv">range</span>.
                                            <span className="nv">contains</span>(
                                            <span className="m">4</span>)
                                            <span className="c">comment=> true</span>
                                        </li>
                                        <li>
                                            <span className="nv">range</span>.
                                            <span className="nv">contains</span>(
                                            <span className="m">-1</span>)
                                            <span className="c">comment=> true</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID76">
                    <h2>Logical Operators </h2>
                    <p>
                        <em>Logical operators</em> modify or combine the Boolean logic values
                        <code className="docutils literal notranslate">
                            <span className="pre">true</span>
                        </code> and
                        <code className="docutils literal notranslate">
                            <span className="pre">false</span>
                        </code>. Swift supports the three standard logical operators found in C-based languages:
                    </p>
                    <ul className="simple">
                        <li>Logical NOT (
                            <code className="docutils literal notranslate">
                                <span className="pre">!a</span>
                            </code>)
                        </li>
                        <li>Logical AND (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&amp;&amp;</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                        <li>Logical OR (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">||</span>
                                <span className="pre">b</span>
                            </code>)
                        </li>
                    </ul>
                    <div className="section" id="ID77">
                        <h3>Logical NOT Operator
                            <a className="headerlink" href="#ID77" title="Permalink to this headline">¶</a>
                        </h3>
                        <p>The 
                            <em>logical NOT operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">!a</span>
                            </code>) inverts a Boolean value so that
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code> becomes
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code> becomes
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>.
                        </p>
                        <p>The logical NOT operator is a prefix operator, and appears immediately before the value it operates on, without any white space. It can be read as “not 
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                            </code>”, as seen in the following example:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">allowedEntry</span> =
                                            <span className="k">false</span>
                                        </li>
                                        <li>
                                            <span className="k">if</span> !
                                            <span className="nv">allowedEntry</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;ACCESS DENIED&quot;</span>)
                                        </li>
                                        <li>}
                                        </li>
                                        <li>
                                            <span className="c">comment=> Prints &quot;ACCESS DENIED&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>The phrase 
                            <code className="docutils literal notranslate">
                                <span className="pre">if</span>
                                <span className="pre">!allowedEntry</span>
                            </code> can be read as “if not allowed entry.” The subsequent line is only executed if “not allowed entry” is true; that is, if
                            <code className="docutils literal notranslate">
                                <span className="pre">allowedEntry</span>
                            </code> is
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>.
                        </p>
                        <p>As in this example, careful choice of Boolean constant and variable names can help to keep code readable and concise, while avoiding double negatives or confusing logic statements.</p>
                    </div>
                    <div className="section" id="ID78">
                        <h3>Logical AND Operator </h3>
                        <p>The 
                            <em>logical AND operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">&amp;&amp;</span>
                                <span className="pre">b</span>
                            </code>) creates logical expressions where both values must be
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code> for the overall expression to also be
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>.
                        </p>
                        <p>If either value is 
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>, the overall expression will also be
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>. In fact, if the
                            <em>first</em> value is
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>, the second value won’t even be evaluated, because it can’t possibly make the overall expression equate to
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>. This is known as
                            <em>short-circuit evaluation</em>.
                        </p>
                        <p>This example considers two 
                            <code className="docutils literal notranslate">
                                <span className="pre">Bool</span>
                            </code> values and only allows access if both values are
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">enteredDoorCode</span> =
                                            <span className="k">true</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">passedRetinaScan</span> =
                                            <span className="k">false</span>
                                        </li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">enteredDoorCode</span> &amp;&amp;
                                            <span className="nv">passedRetinaScan</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;Welcome!&quot;</span>)
                                        </li>
                                        <li>} 
                                            <span className="k">else</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;ACCESS DENIED&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Prints &quot;ACCESS DENIED&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="ID79">
                        <h3>Logical OR Operator </h3>
                        <p>The 
                            <em>logical OR operator</em> (
                            <code className="docutils literal notranslate">
                                <span className="pre">a</span>
                                <span className="pre">||</span>
                                <span className="pre">b</span>
                            </code>) is an infix operator made from two adjacent pipe characters. You use it to create logical expressions in which only
                            <em>one</em> of the two values has to be
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code> for the overall expression to be
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>.
                        </p>
                        <p>Like the Logical AND operator above, the Logical OR operator uses short-circuit evaluation to consider its expressions. If the left side of a Logical OR expression is 
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>, the right side is not evaluated, because it can’t change the outcome of the overall expression.
                        </p>
                        <p>In the example below, the first 
                            <code className="docutils literal notranslate">
                                <span className="pre">Bool</span>
                            </code> value (
                            <code className="docutils literal notranslate">
                                <span className="pre">hasDoorKey</span>
                            </code>) is
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>, but the second value (
                            <code className="docutils literal notranslate">
                                <span className="pre">knowsOverridePassword</span>
                            </code>) is
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>. Because one value is
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>, the overall expression also evaluates to
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>, and access is allowed:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">hasDoorKey</span> =
                                            <span className="k">false</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">knowsOverridePassword</span> =
                                            <span className="k">true</span>
                                        </li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">hasDoorKey</span> ||
                                            <span className="nv">knowsOverridePassword</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;Welcome!&quot;</span>)
                                        </li>
                                        <li>} 
                                            <span className="k">else</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;ACCESS DENIED&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Prints &quot;Welcome!&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="ID80">
                        <h3>Combining Logical Operators</h3>
                        <p>You can combine multiple logical operators to create longer compound expressions:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">enteredDoorCode</span> &amp;&amp;
                                            <span className="nv">passedRetinaScan</span> ||
                                            <span className="nv">hasDoorKey</span> ||
                                            <span className="nv">knowsOverridePassword</span><b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;Welcome!&quot;</span>)
                                        </li>
                                        <li>} 
                                            <span className="k">else</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;ACCESS DENIED&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c">comment=> Prints &quot;Welcome!&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>This example uses multiple 
                            <code className="docutils literal notranslate">
                                <span className="pre">&amp;&amp;</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">||</span>
                            </code> operators to create a longer compound expression. However, the
                            <code className="docutils literal notranslate">
                                <span className="pre">&amp;&amp;</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">||</span>
                            </code> operators still operate on only two values, so this is actually three smaller expressions chained together. The example can be read as:
                        </p>
                        <p>If we’ve entered the correct door code and passed the retina scan, or if we have a valid door key, or if we know the emergency override password, then allow access.</p>
                        <p>Based on the values of 
                            <code className="docutils literal notranslate">
                                <span className="pre">enteredDoorCode</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">passedRetinaScan</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">hasDoorKey</span>
                            </code>, the first two subexpressions are
                            <code className="docutils literal notranslate">
                                <span className="pre">false</span>
                            </code>. However, the emergency override password is known, so the overall compound expression still evaluates to
                            <code className="docutils literal notranslate">
                                <span className="pre">true</span>
                            </code>.
                        </p>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">The Swift logical operators 
                                <code className="docutils literal notranslate">
                                    <span className="pre">&amp;&amp;</span>
                                </code> and
                                <code className="docutils literal notranslate">
                                    <span className="pre">||</span>
                                </code> are left-associative, meaning that compound expressions with multiple logical operators evaluate the leftmost subexpression first.
                            </p>
                        </div>
                    </div>
                    <div className="section" id="ID81">
                        <h3>Explicit Parentheses
                            <a className="headerlink" href="#ID81" title="Permalink to this headline">¶</a>
                        </h3>
                        <p>It’s sometimes useful to include parentheses when they’re not strictly needed, to make the intention of a complex expression easier to read. In the door access example above, it’s useful to add parentheses around the first part of the compound expression to make its intent explicit:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">if</span> (
                                            <span className="nv">enteredDoorCode</span> &amp;&amp;
                                            <span className="nv">passedRetinaScan</span>) ||
                                            <span className="nv">hasDoorKey</span> ||
                                            <span className="nv">knowsOverridePassword</span> <b>prenthisis</b>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;Welcome!&quot;</span>)
                                        </li>
                                        <li>}
                                        </li> 
                                            <span className="k">else</span> <b>prenthisis</b>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;ACCESS DENIED&quot;</span>)
                                        </li>} 
                                        <li>
                                            <span className="c">comment=> Prints &quot;Welcome!&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>The parentheses make it clear that the first two values are considered as part of a separate possible state in the overall logic. The output of the compound expression doesn’t change, but the overall intention is clearer to the reader. Readability is always preferred over brevity; use parentheses where they help to make your intentions clear.</p>
                    </div>
                </div>
            </div>
        </article>
        <div className="next_previous">
            <p className="next">
                <a href="StringsAndCharacters.html">Strings and Characters</a>
            </p>
        </div>
    </main>
    <main role="main">
        <article className="page">
            <div className="section" id="strings-and-characters">
                <h1>Strings and Characters
                </h1>
                <p>A 
                    <em>string</em> is a series of characters, such as
                    <code className="docutils literal notranslate">
                        <span className="pre">&quot;hello,</span>
                        <span className="pre">world&quot;</span>
                    </code> or
                    <code className="docutils literal notranslate">
                        <span className="pre">&quot;albatross&quot;</span>
                    </code>. Swift strings are represented by the
                    <code className="docutils literal notranslate">
                        <span className="pre">String</span>
                    </code> type. The contents of a
                    <code className="docutils literal notranslate">
                        <span className="pre">String</span>
                    </code> can be accessed in various ways, including as a collection of
                    <code className="docutils literal notranslate">
                        <span className="pre">Character</span>
                    </code> values.
                </p>
                <p>Swift’s 
                    <code className="docutils literal notranslate">
                        <span className="pre">String</span>
                    </code> and
                    <code className="docutils literal notranslate">
                        <span className="pre">Character</span>
                    </code> types provide a fast, Unicode-compliant way to work with text in your code. The syntax for string creation and manipulation is lightweight and readable, with a string literal syntax that is similar to C. String concatenation is as simple as combining two strings with the
                    <code className="docutils literal notranslate">
                        <span className="pre">+</span>
                    </code> operator, and string mutability is managed by choosing between a constant or a variable, just like any other value in Swift. You can also use strings to insert constants, variables, literals, and expressions into longer strings, in a process known as string interpolation. This makes it easy to create custom string values for display, storage, and printing.
                </p>
                <p>Despite this simplicity of syntax, Swift’s 
                    <code className="docutils literal notranslate">
                        <span className="pre">String</span>
                    </code> type is a fast, modern string implementation. Every string is composed of encoding-independent Unicode characters, and provides support for accessing those characters in various Unicode representations.
                </p>
                <div className="admonition note">
                    <p className="first admonition-title">Note</p>
                    <p>Swift’s 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> type is bridged with Foundation’s
                        <code className="docutils literal notranslate">
                            <span className="pre">NSString</span>
                        </code> className. Foundation also extends
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> to expose methods defined by
                        <code className="docutils literal notranslate">
                            <span className="pre">NSString</span>
                        </code>. This means, if you import Foundation, you can access those
                        <code className="docutils literal notranslate">
                            <span className="pre">NSString</span>
                        </code> methods on
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> without casting.
                    </p>
                    <p className="last">For more information about using 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> with Foundation and Cocoa, see
                    </p>
                </div>
                <div className="section" id="ID286">
                    <h2>String Literals
                    </h2>
                    <p>You can include predefined 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> values within your code as
                        <em>string literals</em>. A string literal is a sequence of characters surrounded by double quotation marks (
                        <code className="docutils literal notranslate">
                            <span className="pre">&quot;</span>
                        </code>).
                    </p>
                    <p>Use a string literal as an initial value for a constant or variable:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">someString</span> =
                                        <span className="s">&quot;Some string literal value&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Note that Swift infers a type of 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> for the
                        <code className="docutils literal notranslate">
                            <span className="pre">someString</span>
                        </code> constant because it’s initialized with a string literal value.
                    </p>
                    <div className="section" id="ID564">
                        <h3>Multiline String Literals
                        </h3>
                        <p>If you need a string that spans several lines, use a multiline string literal—a sequence of characters surrounded by three double quotation marks:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">quotation</span> =
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">The White Rabbit put on his spectacles.  &quot;Where shall I begin,</span>
                                        </li>
                                        <li>
                                            <span className="s">please your Majesty?&quot; he asked.</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="s">&quot;Begin at the beginning,&quot; the King said gravely, &quot;and go on</span>
                                        </li>
                                        <li>
                                            <span className="s">till you come to the end; then stop.&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>A multiline string literal includes all of the lines between its opening and closing quotation marks. The string begins on the first line after the opening quotation marks (
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;&quot;&quot;</span>
                            </code>) and ends on the line before the closing quotation marks, which means that neither of the strings below start or end with a line break:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">singleLineString</span> =
                                            <span className="s">&quot;These are the same.&quot;</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">multilineString</span> =
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">These are the same.</span>
                                        </li>
                                        <li>
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>When your source code includes a line break inside of a multiline string literal, that line break also appears in the string’s value. If you want to use line breaks to make your source code easier to read, but you don’t want the line breaks to be part of the string’s value, write a backslash (
                            <code className="docutils literal notranslate">
                                <span className="pre">\</span>
                            </code>) at the end of those lines:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">softWrappedQuotation</span> =
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">The White Rabbit put on his spectacles.  &quot;Where shall I begin, \</span>
                                        </li>
                                        <li>
                                            <span className="s">please your Majesty?&quot; he asked.</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="s">&quot;Begin at the beginning,&quot; the King said gravely, &quot;and go on \</span>
                                        </li>
                                        <li>
                                            <span className="s">till you come to the end; then stop.&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>To make a multiline string literal that begins or ends with a line feed, write a blank line as the first or last line. For example:</p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">lineBreaks</span> =
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="s">This string starts with a line break.</span>
                                        </li>
                                        <li>
                                            <span className="s">It also ends with a line break.</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>A multiline string can be indented to match the surrounding code. The whitespace before the closing quotation marks (
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;&quot;&quot;</span>
                            </code>) tells Swift what whitespace to ignore before all of the other lines. However, if you write whitespace at the beginning of a line in addition to what’s before the closing quotation marks, that whitespace
                            <em>is</em> included.
                        </p>
                        <p>In the example above, even though the entire multiline string literal is indented, the first and last lines in the string don’t begin with any whitespace. The middle line has more indentation than the closing quotation marks, so it starts with that extra four-space indentation.</p>
                    </div>
                    <div className="section" id="ID295">
                        <h3>Special Characters in String Literals
                        </h3>
                        <p>String literals can include the following special characters:</p>
                        <ul className="simple">
                            <li>The escaped special characters 
                                <code className="docutils literal notranslate">
                                    <span className="pre">\0</span>
                                </code> (null character),
                                <code className="docutils literal notranslate">
                                    <span className="pre">\\</span>
                                </code> (backslash),
                                <code className="docutils literal notranslate">
                                    <span className="pre">\t</span>
                                </code> (horizontal tab),
                                <code className="docutils literal notranslate">
                                    <span className="pre">\n</span>
                                </code> (line feed),
                                <code className="docutils literal notranslate">
                                    <span className="pre">\r</span>
                                </code> (carriage return),
                                <code className="docutils literal notranslate">
                                    <span className="pre">\&quot;</span>
                                </code> (double quotation mark) and
                                <code className="docutils literal notranslate">
                                    <span className="pre">\'</span>
                                </code> (single quotation mark)
                            </li>
                            <li>An arbitrary Unicode scalar value, written as 
                                <code className="docutils literal notranslate">
                                    <span className="pre">\u<mark>prenthisis</mark></span>
                                </code>
                                <em>n</em>
                                <code className="docutils literal notranslate">
                                    <span className="pre"><mark>prenthisis</mark></span>
                                </code>, where
                                <em>n</em> is a 1–8 digit hexadecimal number (Unicode is discussed in
                                    <span className="std std-ref">Unicode</span>
                                 below)
                            </li>
                        </ul>
                        <p>The code below shows four examples of these special characters. The 
                            <code className="docutils literal notranslate">
                                <span className="pre">wiseWords</span>
                            </code> constant contains two escaped double quotation marks. The
                            <code className="docutils literal notranslate">
                                <span className="pre">dollarSign</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">blackHeart</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">sparklingHeart</span>
                            </code> constants demonstrate the Unicode scalar format:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">wiseWords</span> =
                                            <span className="s">&quot;\&quot;Imagination is more important than knowledge\&quot; - Einstein&quot;</span>
                                        </li>
                                        <li>
                                            <span className="c"> &quot;Imagination is more important than knowledge&quot; - Einstein</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">dollarSign</span> =
                                            <span className="s">&quot;\u{24}&quot;</span>
                                            <span className="c"> $,  Unicode scalar U+0024</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">blackHeart</span> =
                                            <span className="s">&quot;\u{2665}&quot;</span>
                                            <span className="c"> ♥,  Unicode scalar U+2665</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">sparklingHeart</span> =
                                            <span className="s">&quot;\u[1F496]&quot;</span>
                                            <span className="c">  Unicode scalar U+1F496</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Because multiline string literals use three double quotation marks instead of just one, you can include a double quotation mark (
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;</span>
                            </code>) inside of a multiline string literal without escaping it. To include the text
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;&quot;&quot;</span>
                            </code> in a multiline string, escape at least one of the quotation marks. For example:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">threeDoubleQuotationMarks</span> =
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">Escaping the first quotation mark \&quot;&quot;&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">Escaping all three quotation marks \&quot;\&quot;\&quot;</span>
                                        </li>
                                        <li>
                                            <span className="s">&quot;&quot;&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID287">
                    <h2>Initializing an Empty String
                    </h2>
                    <p>To create an empty 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value as the starting point for building a longer string, either assign an empty string literal to a variable, or initialize a new
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> instance with initializer syntax:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">emptyString</span> =
                                        <span className="s">&quot;&quot;</span>
                                        <span className="c"> empty string literal</span>
                                    </li>
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">anotherEmptyString</span> =
                                        <span className="nv">String</span>()
                                        <span className="c"> initializer syntax</span>
                                    </li>
                                    <li>
                                        <span className="c"> these two strings are both empty, and are equivalent to each other</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Find out whether a 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value is empty by checking its Boolean
                        <code className="docutils literal notranslate">
                            <span className="pre">isEmpty</span>
                        </code> property:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">if</span>
                                        <span className="nv">emptyString</span>.
                                        <span className="nv">isEmpty</span><mark>prenthisis</mark>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;Nothing to see here&quot;</span>)
                                    </li>
                                    <li>}
</li>
                                    <li>
                                        <span className="c"> Prints &quot;Nothing to see here&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID288">
                    <h2>String Mutability
                    </h2>
                    <p>You indicate whether a particular 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> can be modified (or
                        <em>mutated</em>) by assigning it to a variable (in which case it can be modified), or to a constant (in which case it can’t be modified):
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">variableString</span> =
                                        <span className="s">&quot;Horse&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">variableString</span> +=
                                        <span className="s">&quot; and carriage&quot;</span>
                                    </li>
                                    <li>
                                        <span className="c"> variableString is now &quot;Horse and carriage&quot;</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">constantString</span> =
                                        <span className="s">&quot;Highlander&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">constantString</span> +=
                                        <span className="s">&quot; and another Highlander&quot;</span>
                                    </li>
                                    <li>
                                        <span className="c"> this reports a compile-time error - a constant string cannot be modified</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">This approach is different from string mutation in Objective-C and Cocoa, where you choose between two classNamees (
                            <code className="docutils literal notranslate">
                                <span className="pre">NSString</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">NSMutableString</span>
                            </code>) to indicate whether a string can be mutated.
                        </p>
                    </div>
                </div>
                <div className="section" id="ID289">
                    <h2>Strings Are Value Types
                    </h2>
                    <p>Swift’s 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> type is a
                        <em>value type</em>. If you create a new
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value, that
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value is
                        <em>copied</em> when it’s passed to a function or method, or when it’s assigned to a constant or variable. In each case, a new copy of the existing
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value is created, and the new copy is passed or assigned, not the original version. Value types are described in
                            <span className="std std-ref">Structures and Enumerations Are Value Types</span>
                        .
                    </p>
                    <p>Swift’s copy-by-default 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> behavior ensures that when a function or method passes you a
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value, it’s clear that you own that exact
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value, regardless of where it came from. You can be confident that the string you are passed won’t be modified unless you modify it yourself.
                    </p>
                    <p>Behind the scenes, Swift’s compiler optimizes string usage so that actual copying takes place only when absolutely necessary. This means you always get great performance when working with strings as value types.</p>
                </div>
                <div className="section" id="ID290">
                    <h2>Working with Characters
                    </h2>
                    <p>You can access the individual 
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> values for a
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> by iterating over the string with a
                        <code className="docutils literal notranslate">
                            <span className="pre">for</span>
                        </code>-
                        <code className="docutils literal notranslate">
                            <span className="pre">in</span>
                        </code> loop:
                    </p>
                    <p>The 
                        <code className="docutils literal notranslate">
                            <span className="pre">for</span>
                        </code>-
                        <code className="docutils literal notranslate">
                            <span className="pre">in</span>
                        </code> loop is described in
                            <span className="std std-ref">For-In Loops</span>
                    </p>
                    <p>Alternatively, you can create a stand-alone 
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> constant or variable from a single-character string literal by providing a
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> type annotation:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">exclamationMark</span>:
                                        <span className="nc">Character</span> =
                                        <span className="s">&quot;!&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> values can be constructed by passing an array of
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> values as an argument to its initializer:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">catCharacters</span>: [
                                        <span className="nc">Character</span>] = [
                                        <span className="s">&quot;C&quot;</span>,
                                        <span className="s">&quot;a&quot;</span>,
                                        <span className="s">&quot;t&quot;</span>,
                                        <span className="s">&quot;!&quot;</span>,
                                        <span className="s">&quot;&quot;</span>]
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">catString</span> =
                                        <span className="nv">String</span>(
                                        <span className="nv">catCharacters</span>)
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="nv">catString</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints &quot;Cat!&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID291">
                    <h2>Concatenating Strings and Characters
                    </h2>
                    <p>
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> values can be added together (or
                        <em>concatenated</em>) with the addition operator (
                        <code className="docutils literal notranslate">
                            <span className="pre">+</span>
                        </code>) to create a new
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">string1</span> =
                                        <span className="s">&quot;hello&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">string2</span> =
                                        <span className="s">&quot; there&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">welcome</span> =
                                        <span className="nv">string1</span> +
                                        <span className="nv">string2</span>
                                    </li>
                                    <li>
                                        <span className="c"> welcome now equals &quot;hello there&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>You can also append a 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value to an existing
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> variable with the addition assignment operator (
                        <code className="docutils literal notranslate">
                            <span className="pre">+=</span>
                        </code>):
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">instruction</span> =
                                        <span className="s">&quot;look over&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">instruction</span> +=
                                        <span className="nv">string2</span>
                                    </li>
                                    <li>
                                        <span className="c"> instruction now equals &quot;look over there&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>You can append a 
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> value to a
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> variable with the
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> type’s
                        <code className="docutils literal notranslate">
                            <span className="pre">append()</span>
                        </code> method:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">exclamationMark</span>:
                                        <span className="nc">Character</span> =
                                        <span className="s">&quot;!&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">welcome</span>.
                                        <span className="nv">append</span>(
                                        <span className="nv">exclamationMark</span>)
                                    </li>
                                    <li>
                                        <span className="c"> welcome now equals &quot;hello there!&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">You can’t append a 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> or
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> to an existing
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> variable, because a
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value must contain a single character only.
                        </p>
                    </div>
                    <p>If you’re using multiline string literals to build up the lines of a longer string, you want every line in the string to end with a line break, including the last line. For example:</p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">badStart</span> =
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="s">one</span>
                                    </li>
                                    <li>
                                        <span className="s">two</span>
                                    </li>
                                    <li>
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">end</span> =
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="s">three</span>
                                    </li>
                                    <li>
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="nv">badStart</span> +
                                        <span className="nv">end</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints two lines:</span>
                                    </li>
                                    <li>
                                        <span className="c"> one</span>
                                    </li>
                                    <li>
                                        <span className="c"> twothree</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">goodStart</span> =
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="s">one</span>
                                    </li>
                                    <li>
                                        <span className="s">two</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="s">&quot;&quot;&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="nv">goodStart</span> +
                                        <span className="nv">end</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints three lines:</span>
                                    </li>
                                    <li>
                                        <span className="c"> one</span>
                                    </li>
                                    <li>
                                        <span className="c"> two</span>
                                    </li>
                                    <li>
                                        <span className="c"> three</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>In the code above, concatenating 
                        <code className="docutils literal notranslate">
                            <span className="pre">badStart</span>
                        </code> with
                        <code className="docutils literal notranslate">
                            <span className="pre">end</span>
                        </code> produces a two-line string, which isn’t the desired result. Because the last line of
                        <code className="docutils literal notranslate">
                            <span className="pre">badStart</span>
                        </code> doesn’t end with a line break, that line gets combined with the first line of
                        <code className="docutils literal notranslate">
                            <span className="pre">end</span>
                        </code>. In contrast, both lines of
                        <code className="docutils literal notranslate">
                            <span className="pre">goodStart</span>
                        </code> end with a line break, so when it’s combined with
                        <code className="docutils literal notranslate">
                            <span className="pre">end</span>
                        </code> the result has three lines, as expected.
                    </p>
                </div>
                <div className="section" id="ID292">
                    <h2>String Interpolation
                    </h2>
                    <p>
                        <em>String interpolation</em> is a way to construct a new
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value from a mix of constants, variables, literals, and expressions by including their values inside a string literal. You can use string interpolation in both single-line and multiline string literals. Each item that you insert into the string literal is wrapped in a pair of parentheses, prefixed by a backslash (
                        <code className="docutils literal notranslate">
                            <span className="pre">\</span>
                        </code>):
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">multiplier</span> =
                                        <span className="m">3</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">message</span> =
                                        <span className="s">&quot;</span>\
                                        <span className="p">(</span>
                                        <span className="nv">multiplier</span>
                                        <span className="p">)</span>
                                        <span className="s"> times 2.5 is </span>\
                                        <span className="p">(</span>
                                        <span className="nv">Double</span>(
                                        <span className="nv">multiplier</span>) *
                                        <span className="m">2.5</span>
                                        <span className="p">)</span>
                                        <span className="s">&quot;</span>
                                    </li>
                                    <li>
                                        <span className="c"> message is &quot;3 times 2.5 is 7.5&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>In the example above, the value of 
                        <code className="docutils literal notranslate">
                            <span className="pre">multiplier</span>
                        </code> is inserted into a string literal as
                        <code className="docutils literal notranslate">
                            <span className="pre">\(multiplier)</span>
                        </code>. This placeholder is replaced with the actual value of
                        <code className="docutils literal notranslate">
                            <span className="pre">multiplier</span>
                        </code> when the string interpolation is evaluated to create an actual string.
                    </p>
                    <p>The value of 
                        <code className="docutils literal notranslate">
                            <span className="pre">multiplier</span>
                        </code> is also part of a larger expression later in the string. This expression calculates the value of
                        <code className="docutils literal notranslate">
                            <span className="pre">Double(multiplier)</span>
                            <span className="pre">*</span>
                            <span className="pre">2.5</span>
                        </code> and inserts the result (
                        <code className="docutils literal notranslate">
                            <span className="pre">7.5</span>
                        </code>) into the string. In this case, the expression is written as
                        <code className="docutils literal notranslate">
                            <span className="pre">\(Double(multiplier)</span>
                            <span className="pre">*</span>
                            <span className="pre">2.5)</span>
                        </code> when it’s included inside the string literal.
                    </p>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">The expressions you write inside parentheses within an interpolated string can’t contain an unescaped backslash (
                            <code className="docutils literal notranslate">
                                <span className="pre">\</span>
                            </code>), a carriage return, or a line feed. However, they can contain other string literals.
                        </p>
                    </div>
                </div>
                <div className="section" id="ID293">
                    <h2>Unicode
                    </h2>
                    <p>
                        <em>Unicode</em> is an international standard for encoding, representing, and processing text in different writing systems. It enables you to represent almost any character from any language in a standardized form, and to read and write those characters to and from an external source such as a text file or web page. Swift’s
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> and
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> types are fully Unicode-compliant, as described in this section.
                    </p>
                    <div className="section" id="ID294">
                        <h3>Unicode Scalar Values
                        </h3>
                        <p>Behind the scenes, Swift’s native 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> type is built from
                            <em>Unicode scalar values</em>. A Unicode scalar value is a unique 21-bit number for a character or modifier, such as
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0061</span>
                            </code> for
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">A</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;a&quot;</span>
                            </code>), or
                            <code className="docutils literal notranslate">
                                <span className="pre">U+1F425</span>
                            </code> for
                            <code className="docutils literal notranslate">
                                <span className="pre">FRONT-FACING</span>
                                <span className="pre">BABY</span>
                                <span className="pre">CHICK</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;&quot;</span>
                            </code>).
                        </p>
                        <p>Note that not all 21-bit Unicode scalar values are assigned to a character—some scalars are reserved for future assignment or for use in UTF-16 encoding. Scalar values that have been assigned to a character typically also have a name, such as 
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">A</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">FRONT-FACING</span>
                                <span className="pre">BABY</span>
                                <span className="pre">CHICK</span>
                            </code> in the examples above.
                        </p>
                    </div>
                    <div className="section" id="ID296">
                        <h3>Extended Grapheme Clusters
                        </h3>
                        <p>Every instance of Swift’s 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> type represents a single
                            <em>extended grapheme cluster</em>. An extended grapheme cluster is a sequence of one or more Unicode scalars that (when combined) produce a single human-readable character.
                        </p>
                        <p>Here’s an example. The letter 
                            <code className="docutils literal notranslate">
                                <span className="pre">é</span>
                            </code> can be represented as the single Unicode scalar
                            <code className="docutils literal notranslate">
                                <span className="pre">é</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">E</span>
                                <span className="pre">WITH</span>
                                <span className="pre">ACUTE</span>
                            </code>, or
                            <code className="docutils literal notranslate">
                                <span className="pre">U+00E9</span>
                            </code>). However, the same letter can also be represented as a
                            <em>pair</em> of scalars—a standard letter
                            <code className="docutils literal notranslate">
                                <span className="pre">e</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">E</span>
                            </code>, or
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0065</span>
                            </code>), followed by the
                            <code className="docutils literal notranslate">
                                <span className="pre">COMBINING</span>
                                <span className="pre">ACUTE</span>
                                <span className="pre">ACCENT</span>
                            </code> scalar (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0301</span>
                            </code>). The
                            <code className="docutils literal notranslate">
                                <span className="pre">COMBINING</span>
                                <span className="pre">ACUTE</span>
                                <span className="pre">ACCENT</span>
                            </code> scalar is graphically applied to the scalar that precedes it, turning an
                            <code className="docutils literal notranslate">
                                <span className="pre">e</span>
                            </code> into an
                            <code className="docutils literal notranslate">
                                <span className="pre">é</span>
                            </code> when it’s rendered by a Unicode-aware text-rendering system.
                        </p>
                        <p>In both cases, the letter 
                            <code className="docutils literal notranslate">
                                <span className="pre">é</span>
                            </code> is represented as a single Swift
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value that represents an extended grapheme cluster. In the first case, the cluster contains a single scalar; in the second case, it’s a cluster of two scalars:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">eAcute</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u[E9]&quot;</span>
                                            <span className="c"> é</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">combinedEAcute</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u{65}\u{301}&quot;</span>
                                            <span className="c"> e followed by ́</span>
                                        </li>
                                        <li>
                                            <span className="c"> eAcute is é, combinedEAcute is é</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Extended grapheme clusters are a flexible way to represent many complex script characters as a single 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value. For example, Hangul syllables from the Korean alphabet can be represented as either a precomposed or decomposed sequence. Both of these representations qualify as a single
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value in Swift:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">precomposed</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u[D55C]&quot;</span>
                                            <span className="c"> 한</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">decomposed</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u{1112}\u{1161}\u[11AB]&quot;</span>
                                            <span className="c"> ᄒ, ᅡ, ᆫ</span>
                                        </li>
                                        <li>
                                            <span className="c"> precomposed is 한, decomposed is 한</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Extended grapheme clusters enable scalars for enclosing marks (such as 
                            <code className="docutils literal notranslate">
                                <span className="pre">COMBINING</span>
                                <span className="pre">ENCLOSING</span>
                                <span className="pre">CIRCLE</span>
                            </code>, or
                            <code className="docutils literal notranslate">
                                <span className="pre">U+20DD</span>
                            </code>) to enclose other Unicode scalars as part of a single
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">enclosedEAcute</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u[E9]\u[20DD]&quot;</span>
                                        </li>
                                        <li>
                                            <span className="c"> enclosedEAcute is é⃝</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Unicode scalars for regional indicator symbols can be combined in pairs to make a single 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> value, such as this combination of
                            <code className="docutils literal notranslate">
                                <span className="pre">REGIONAL</span>
                                <span className="pre">INDICATOR</span>
                                <span className="pre">SYMBOL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">U</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+1F1FA</span>
                            </code>) and
                            <code className="docutils literal notranslate">
                                <span className="pre">REGIONAL</span>
                                <span className="pre">INDICATOR</span>
                                <span className="pre">SYMBOL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">S</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+1F1F8</span>
                            </code>):
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">regionalIndicatorForUS</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u[1F1FA]\u[1F1F8]&quot;</span>
                                        </li>
                                        <li>
                                            <span className="c"> regionalIndicatorForUS is </span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID297">
                    <h2>Counting Characters
                    </h2>
                    <p>To retrieve a count of the 
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> values in a string, use the
                        <code className="docutils literal notranslate">
                            <span className="pre">count</span>
                        </code> property of the string:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">unusualMenagerie</span> =
                                        <span className="s">&quot;Koala , Snail , Penguin , Dromedary &quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;unusualMenagerie has </span>\
                                        <span className="p">(</span>
                                        <span className="nv">unusualMenagerie</span>.
                                        <span className="nv">count</span>
                                        <span className="p">)</span>
                                        <span className="s"> characters&quot;</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints &quot;unusualMenagerie has 40 characters&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Note that Swift’s use of extended grapheme clusters for 
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> values means that string concatenation and modification may not always affect a string’s character count.
                    </p>
                    <p>For example, if you i1F496nitialize a new string with the four-character word 
                        <code className="doc1F496utils literal notranslate">
                            <span className="1F496-pre">cafe</span>
                        </code>, and then ap1F496pend a
                        <code className="doc1F496utils literal notranslate">
                            <span className="pre">COMBINING</span>
                            <span className="pre">ACUTE</span>
                            <span className="pre">ACCENT</span>
                        </code> (
                        <code className="docutils literal notranslate">
                            <span className="pre">U+0301</span>
                        </code>) to the end of the string, the resulting string will still have a character count of
                        <code className="docutils literal notranslate">
                            <span className="pre">4</span>
                        </code>, with a fourth character of
                        <code className="docutils literal notranslate">
                            <span className="pre">é</span>
                        </code>, not
                        <code className="docutils literal notranslate">
                            <span className="pre">e</span>
                        </code>:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">var</span>
                                        <span className="nv">word</span> =
                                        <span className="s">&quot;cafe&quot;</span>
                                    </li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;the number of characters in </span>\
                                        <span className="p">(</span>
                                        <span className="nv">word</span>
                                        <span className="p">)</span>
                                        <span className="s"> is </span>\
                                        <span className="p">(</span>
                                        <span className="nv">word</span>.
                                        <span className="nv">count</span>
                                        <span className="p">)</span>
                                        <span className="s">&quot;</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints &quot;the number of characters in cafe is 4&quot;</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="nv">word</span> +=
                                        <span className="s">&quot;\u{301}&quot;</span>
                                        <span className="c"> COMBINING ACUTE ACCENT, U+0301</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="nv">print</span>(
                                        <span className="s">&quot;the number of characters in </span>\
                                        <span className="p">(</span>
                                        <span className="nv">word</span>
                                        <span className="p">)</span>
                                        <span className="s"> is </span>\
                                        <span className="p">(</span>
                                        <span className="nv">word</span>.
                                        <span className="nv">count</span>
                                        <span className="p">)</span>
                                        <span className="s">&quot;</span>)
                                    </li>
                                    <li>
                                        <span className="c"> Prints &quot;the number of characters in café is 4&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p>Extended grapheme clusters can be composed of multiple Unicode scalars. This means that different characters—and different representations of the same character—can require different amounts of memory to store. Because of this, characters in Swift don’t each take up the same amount of memory within a string’s representation. As a result, the number of characters in a string can’t be calculated without iterating through the string to determine its extended grapheme cluster boundaries. If you are working with particularly long string values, be aware that the 
                            <code className="docutils literal notranslate">
                                <span className="pre">count</span>
                            </code> property must iterate over the Unicode scalars in the entire string in order to determine the characters for that string.
                        </p>
                        <p className="last">The count of the characters returned by the 
                            <code className="docutils literal notranslate">
                                <span className="pre">count</span>
                            </code> property isn’t always the same as the
                            <code className="docutils literal notranslate">
                                <span className="pre">length</span>
                            </code> property of an
                            <code className="docutils literal notranslate">
                                <span className="pre">NSString</span>
                            </code> that contains the same characters. The length of an
                            <code className="docutils literal notranslate">
                                <span className="pre">NSString</span>
                            </code> is based on the number of 16-bit code units within the string’s UTF-16 representation and not the number of Unicode extended grapheme clusters within the string.
                        </p>
                    </div>
                </div>
                <div className="section" id="ID494">
                    <h2>Accessing and Modifying a String
                    </h2>
                    <p>You access and modify a string through its methods and properties, or by using subscript syntax.</p>
                    <div className="section" id="ID534">
                        <h3>String Indices
                        </h3>
                        <p>Each 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> value has an associated
                            <em>index type</em>,
                            <code className="docutils literal notranslate">
                                <span className="pre">String.Index</span>
                            </code>, which corresponds to the position of each
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> in the string.
                        </p>
                        <p>As mentioned above, different characters can require different amounts of memory to store, so in order to determine which 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> is at a particular position, you must iterate over each Unicode scalar from the start or end of that
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code>. For this reason, Swift strings can’t be indexed by integer values.
                        </p>
                        <p>Use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">startIndex</span>
                            </code> property to access the position of the first
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> of a
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code>. The
                            <code className="docutils literal notranslate">
                                <span className="pre">endIndex</span>
                            </code> property is the position after the last character in a
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code>. As a result, the
                            <code className="docutils literal notranslate">
                                <span className="pre">endIndex</span>
                            </code> property isn’t a valid argument to a string’s subscript. If a
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> is empty,
                            <code className="docutils literal notranslate">
                                <span className="pre">startIndex</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">endIndex</span>
                            </code> are equal.
                        </p>
                        <p>You access the indices before and after a given index using the 
                            <code className="docutils literal notranslate">
                                <span className="pre">index(before:)</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">index(after:)</span>
                            </code> methods of
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code>. To access an index farther away from the given index, you can use the
                            <code className="docutils literal notranslate">
                                <span className="pre">index(_:offsetBy:)</span>
                            </code> method instead of calling one of these methods multiple times.
                        </p>
                        <p>You can use subscript syntax to access the 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> at a particular
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> index.
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">greeting</span> =
                                            <span className="s">&quot;Guten Tag!&quot;</span>
                                        </li>
                                        <li>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">greeting</span>.
                                            <span className="nv">startIndex</span>]
                                        </li>
                                        <li>
                                            <span className="c"> G</span>
                                        </li>
                                        <li>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">greeting</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">before</span>:
                                            <span className="nv">greeting</span>.
                                            <span className="nv">endIndex</span>)]
                                        </li>
                                        <li>
                                            <span className="c"> !</span>
                                        </li>
                                        <li>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">greeting</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">after</span>:
                                            <span className="nv">greeting</span>.
                                            <span className="nv">startIndex</span>)]
                                        </li>
                                        <li>
                                            <span className="c"> u</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">index</span> =
                                            <span className="nv">greeting</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">greeting</span>.
                                            <span className="nv">startIndex</span>,
                                            <span className="nv">offsetBy</span>:
                                            <span className="m">7</span>)
                                        </li>
                                        <li>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">index</span>]
                                        </li>
                                        <li>
                                            <span className="c"> a</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Attempting to access an index outside of a string’s range or a 
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> at an index outside of a string’s range will trigger a runtime error.
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">greeting</span>.
                                            <span className="nv">endIndex</span>]
                                            <span className="c"> Error</span>
                                        </li>
                                        <li>
                                            <span className="nv">greeting</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">after</span>:
                                            <span className="nv">greeting</span>.
                                            <span className="nv">endIndex</span>)
                                            <span className="c"> Error</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">indices</span>
                            </code> property to access all of the indices of individual characters in a string.
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">index</span>
                                            <span className="k">in</span>
                                            <span className="nv">greeting</span>.
                                            <span className="nv">indices</span> <mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">greeting</span>[
                                            <span className="nv">index</span>]
                                            <span className="p">)</span>
                                            <span className="s"> &quot;</span>,
                                            <span className="nv">terminator</span>:
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c"> Prints &quot;G u t e n   T a g ! &quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">You can use the 
                                <code className="docutils literal notranslate">
                                    <span className="pre">startIndex</span>
                                </code> and
                                <code className="docutils literal notranslate">
                                    <span className="pre">endIndex</span>
                                </code> properties and the
                                <code className="docutils literal notranslate">
                                    <span className="pre">index(before:)</span>
                                </code>,
                                <code className="docutils literal notranslate">
                                    <span className="pre">index(after:)</span>
                                </code>, and
                                <code className="docutils literal notranslate">
                                    <span className="pre">index(_:offsetBy:)</span>
                                </code> methods on any type that conforms to the
                                <code className="docutils literal notranslate">
                                    <span className="pre">Collection</span>
                                </code> protocol. This includes
                                <code className="docutils literal notranslate">
                                    <span className="pre">String</span>
                                </code>, as shown here, as well as collection types such as
                                <code className="docutils literal notranslate">
                                    <span className="pre">Array</span>
                                </code>,
                                <code className="docutils literal notranslate">
                                    <span className="pre">Dictionary</span>
                                </code>, and
                                <code className="docutils literal notranslate">
                                    <span className="pre">Set</span>
                                </code>.
                            </p>
                        </div>
                    </div>
                    <div className="section" id="ID496">
                        <h3>Inserting and Removing
                        </h3>
                        <p>To insert a single character into a string at a specified index, use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">insert(_:at:)</span>
                            </code> method, and to insert the contents of another string at a specified index, use the
                            <code className="docutils literal notranslate">
                                <span className="pre">insert(contentsOf:at:)</span>
                            </code> method.
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">var</span>
                                            <span className="nv">welcome</span> =
                                            <span className="s">&quot;hello&quot;</span>
                                        </li>
                                        <li>
                                            <span className="nv">welcome</span>.
                                            <span className="nv">insert</span>(
                                            <span className="s">&quot;!&quot;</span>,
                                            <span className="nv">at</span>:
                                            <span className="nv">welcome</span>.
                                            <span className="nv">endIndex</span>)
                                        </li>
                                        <li>
                                            <span className="c"> welcome now equals &quot;hello!&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="nv">welcome</span>.
                                            <span className="nv">insert</span>(
                                            <span className="nv">contentsOf</span>:
                                            <span className="s">&quot; there&quot;</span>,
                                            <span className="nv">at</span>:
                                            <span className="nv">welcome</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">before</span>:
                                            <span className="nv">welcome</span>.
                                            <span className="nv">endIndex</span>))
                                        </li>
                                        <li>
                                            <span className="c"> welcome now equals &quot;hello there!&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>To remove a single character from a string at a specified index, use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">remove(at:)</span>
                            </code> method, and to remove a substring at a specified range, use the
                            <code className="docutils literal notranslate">
                                <span className="pre">removeSubrange(_:)</span>
                            </code> method:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="nv">welcome</span>.
                                            <span className="nv">remove</span>(
                                            <span className="nv">at</span>:
                                            <span className="nv">welcome</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">before</span>:
                                            <span className="nv">welcome</span>.
                                            <span className="nv">endIndex</span>))
                                        </li>
                                        <li>
                                            <span className="c"> welcome now equals &quot;hello there&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">range</span> =
                                            <span className="nv">welcome</span>.
                                            <span className="nv">index</span>(
                                            <span className="nv">welcome</span>.
                                            <span className="nv">endIndex</span>,
                                            <span className="nv">offsetBy</span>:
                                            <span className="m">-6</span>)..&lt;
                                            <span className="nv">welcome</span>.
                                            <span className="nv">endIndex</span>
                                        </li>
                                        <li>
                                            <span className="nv">welcome</span>.
                                            <span className="nv">removeSubrange</span>(
                                            <span className="nv">range</span>)
                                        </li>
                                        <li>
                                            <span className="c"> welcome now equals &quot;hello&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">You can use the 
                                <code className="docutils literal notranslate">
                                    <span className="pre">insert(_:at:)</span>
                                </code>,
                                <code className="docutils literal notranslate">
                                    <span className="pre">insert(contentsOf:at:)</span>
                                </code>,
                                <code className="docutils literal notranslate">
                                    <span className="pre">remove(at:)</span>
                                </code>, and
                                <code className="docutils literal notranslate">
                                    <span className="pre">removeSubrange(_:)</span>
                                </code> methods on any type that conforms to the
                                <code className="docutils literal notranslate">
                                    <span className="pre">RangeReplaceableCollection</span>
                                </code> protocol. This includes
                                <code className="docutils literal notranslate">
                                    <span className="pre">String</span>
                                </code>, as shown here, as well as collection types such as
                                <code className="docutils literal notranslate">
                                    <span className="pre">Array</span>
                                </code>,
                                <code className="docutils literal notranslate">
                                    <span className="pre">Dictionary</span>
                                </code>, and
                                <code className="docutils literal notranslate">
                                    <span className="pre">Set</span>
                                </code>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID555">
                    <h2>Substrings
                    </h2>
                    <p>When you get a substring from a string—for example, using a subscript or a method like 
                        <code className="docutils literal notranslate">
                            <span className="pre">prefix(_:)</span>
                        </code>—the result is an instance of
                            <code className="docutils literal notranslate">
                                <span className="pre">Substring</span>
                            </code>
                       , not another string. Substrings in Swift have most of the same methods as strings, which means you can work with substrings the same way you work with strings. However, unlike strings, you use substrings for only a short amount of time while performing actions on a string. When you’re ready to store the result for a longer time, you convert the substring to an instance of
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code>. For example:
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">greeting</span> =
                                        <span className="s">&quot;Hello, world!&quot;</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">index</span> =
                                        <span className="nv">greeting</span>.
                                        <span className="nv">firstIndex</span>(
                                        <span className="nv">of</span>:
                                        <span className="s">&quot;,&quot;</span>) ??
                                        <span className="nv">greeting</span>.
                                        <span className="nv">endIndex</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">beginning</span> =
                                        <span className="nv">greeting</span>[..&lt;
                                        <span className="nv">index</span>]
                                    </li>
                                    <li>
                                        <span className="c"> beginning is &quot;Hello&quot;</span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="c"> Convert the result to a String for long-term storage.</span>
                                    </li>
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">newString</span> =
                                        <span className="nv">String</span>(
                                        <span className="nv">beginning</span>)
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p>Like strings, each substring has a region of memory where the characters that make up the substring are stored. The difference between strings and substrings is that, as a performance optimization, a substring can reuse part of the memory that’s used to store the original string, or part of the memory that’s used to store another substring. (Strings have a similar optimization, but if two strings share memory, they are equal.) This performance optimization means you don’t have to pay the performance cost of copying memory until you modify either the string or substring. As mentioned above, substrings aren’t suitable for long-term storage—because they reuse the storage of the original string, the entire original string must be kept in memory as long as any of its substrings are being used.</p>
                    <p>In the example above, 
                        <code className="docutils literal notranslate">
                            <span className="pre">greeting</span>
                        </code> is a string, which means it has a region of memory where the characters that make up the string are stored. Because
                        <code className="docutils literal notranslate">
                            <span className="pre">beginning</span>
                        </code> is a substring of
                        <code className="docutils literal notranslate">
                            <span className="pre">greeting</span>
                        </code>, it reuses the memory that
                        <code className="docutils literal notranslate">
                            <span className="pre">greeting</span>
                        </code> uses. In contrast,
                        <code className="docutils literal notranslate">
                            <span className="pre">newString</span>
                        </code> is a string—when it’s created from the substring, it has its own storage. The figure below shows these relationships:
                    </p>
                    <div className="admonition note">
                        <p className="first admonition-title">Note</p>
                        <p className="last">Both 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">Substring</span>
                            </code> conform to the
                                <code className="docutils literal notranslate">
                                    <span className="pre">StringProtocol</span>
                                </code>
                            protocol, which means it’s often convenient for string-manipulation functions to accept a
                            <code className="docutils literal notranslate">
                                <span className="pre">StringProtocol</span>
                            </code> value. You can call such functions with either a
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> or
                            <code className="docutils literal notranslate">
                                <span className="pre">Substring</span>
                            </code> value.
                        </p>
                    </div>
                </div>
                <div className="section" id="ID298">
                    <h2>Comparing Strings
                    </h2>
                    <p>Swift provides three ways to compare textual values: string and character equality, prefix equality, and suffix equality.</p>
                    <div className="section" id="ID299">
                        <h3>String and Character Equality
                        </h3>
                        <p>String and character equality is checked with the “equal to” operator (
                            <code className="docutils literal notranslate">
                                <span className="pre">==</span>
                            </code>) and the “not equal to” operator (
                            <code className="docutils literal notranslate">
                                <span className="pre">!=</span>
                            </code>), as described in
                           
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">quotation</span> =
                                            <span className="s">&quot;We&#39;re a lot alike, you and I.&quot;</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">sameQuotation</span> =
                                            <span className="s">&quot;We&#39;re a lot alike, you and I.&quot;</span>
                                        </li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">quotation</span> ==
                                            <span className="nv">sameQuotation</span> <mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;These two strings are considered equal&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c"> Prints &quot;These two strings are considered equal&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Two 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> values (or two
                            <code className="docutils literal notranslate">
                                <span className="pre">Character</span>
                            </code> values) are considered equal if their extended grapheme clusters are
                            <em>canonically equivalent</em>. Extended grapheme clusters are canonically equivalent if they have the same linguistic meaning and appearance, even if they’re composed from different Unicode scalars behind the scenes.
                        </p>
                        <p>For example, 
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">E</span>
                                <span className="pre">WITH</span>
                                <span className="pre">ACUTE</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+00E9</span>
                            </code>) is canonically equivalent to
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">SMALL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">E</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0065</span>
                            </code>) followed by
                            <code className="docutils literal notranslate">
                                <span className="pre">COMBINING</span>
                                <span className="pre">ACUTE</span>
                                <span className="pre">ACCENT</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0301</span>
                            </code>). Both of these extended grapheme clusters are valid ways to represent the character
                            <code className="docutils literal notranslate">
                                <span className="pre">é</span>
                            </code>, and so they’re considered to be canonically equivalent:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="c"> &quot;Voulez-vous un café?&quot; using LATIN SMALL LETTER E WITH ACUTE</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">eAcuteQuestion</span> =
                                            <span className="s">&quot;Voulez-vous un caf\u[E9]?&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="c"> &quot;Voulez-vous un café?&quot; using LATIN SMALL LETTER E and COMBINING ACUTE ACCENT</span>
                                        </li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">combinedEAcuteQuestion</span> =
                                            <span className="s">&quot;Voulez-vous un caf\u{65}\u{301}?&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">eAcuteQuestion</span> ==
                                            <span className="nv">combinedEAcuteQuestion</span> <mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;These two strings are considered equal&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c"> Prints &quot;These two strings are considered equal&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Conversely, 
                            <code className="docutils literal notranslate">
                                <span className="pre">LATIN</span>
                                <span className="pre">CAPITAL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">A</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0041</span>
                            </code>, or
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;A&quot;</span>
                            </code>), as used in English, is
                            <em>not</em> equivalent to
                            <code className="docutils literal notranslate">
                                <span className="pre">CYRILLIC</span>
                                <span className="pre">CAPITAL</span>
                                <span className="pre">LETTER</span>
                                <span className="pre">A</span>
                            </code> (
                            <code className="docutils literal notranslate">
                                <span className="pre">U+0410</span>
                            </code>, or
                            <code className="docutils literal notranslate">
                                <span className="pre">&quot;А&quot;</span>
                            </code>), as used in Russian. The characters are visually similar, but don’t have the same linguistic meaning:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">latinCapitalLetterA</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u{41}&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">cyrillicCapitalLetterA</span>:
                                            <span className="nc">Character</span> =
                                            <span className="s">&quot;\u[0410]&quot;</span>
                                        </li>
                                        <li></li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">latinCapitalLetterA</span> !=
                                            <span className="nv">cyrillicCapitalLetterA</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;These two characters are not equivalent.&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c"> Prints &quot;These two characters are not equivalent.&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">String and character comparisons in Swift are not locale-sensitive.</p>
                        </div>
                    </div>
                    <div className="section" id="ID300">
                        <h3>Prefix and Suffix Equality
                        </h3>
                        <p>To check whether a string has a particular string prefix or suffix, call the string’s 
                            <code className="docutils literal notranslate">
                                <span className="pre">hasPrefix(_:)</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">hasSuffix(_:)</span>
                            </code> methods, both of which take a single argument of type
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> and return a Boolean value.
                        </p>
                        <p>The examples below consider an array of strings representing the scene locations from the first two acts of Shakespeare’s 
                            <em>Romeo and Juliet</em>:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">let</span>
                                            <span className="nv">romeoAndJuliet</span> = [
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 1 Scene 1: Verona, A public place&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 1 Scene 2: Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 1 Scene 3: A room in Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 1 Scene 4: A street outside Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 1 Scene 5: The Great Hall in Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 1: Outside Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 2: Capulet&#39;s orchard&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 3: Outside Friar Lawrence&#39;s cell&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 4: A street in Verona&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 5: Capulet&#39;s mansion&quot;</span>,
                                        </li>
                                        <li>
                                            <span className="s">&quot;Act 2 Scene 6: Friar Lawrence&#39;s cell&quot;</span>
                                        </li>
                                        <li>]
</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>You can use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">hasPrefix(_:)</span>
                            </code> method with the
                            <code className="docutils literal notranslate">
                                <span className="pre">romeoAndJuliet</span>
                            </code> array to count the number of scenes in Act 1 of the play:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">var</span>
                                            <span className="nv">act1SceneCount</span> =
                                            <span className="m">0</span>
                                        </li>
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">scene</span>
                                            <span className="k">in</span>
                                            <span className="nv">romeoAndJuliet</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">scene</span>.
                                            <span className="nv">hasPrefix</span>(
                                            <span className="s">&quot;Act 1 &quot;</span>)<mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">act1SceneCount</span> +=
                                            <span className="m">1</span>
                                        </li>
                                        <li>    }
</li>
                                        <li>}
</li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;There are </span>\
                                            <span className="p">(</span>
                                            <span className="nv">act1SceneCount</span>
                                            <span className="p">)</span>
                                            <span className="s"> scenes in Act 1&quot;</span>)
                                        </li>
                                        <li>
                                            <span className="c"> Prints &quot;There are 5 scenes in Act 1&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Similarly, use the 
                            <code className="docutils literal notranslate">
                                <span className="pre">hasSuffix(_:)</span>
                            </code> method to count the number of scenes that take place in or around Capulet’s mansion and Friar Lawrence’s cell:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">var</span>
                                            <span className="nv">mansionCount</span> =
                                            <span className="m">0</span>
                                        </li>
                                        <li>
                                            <span className="k">var</span>
                                            <span className="nv">cellCount</span> =
                                            <span className="m">0</span>
                                        </li>
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">scene</span>
                                            <span className="k">in</span>
                                            <span className="nv">romeoAndJuliet</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="k">if</span>
                                            <span className="nv">scene</span>.
                                            <span className="nv">hasSuffix</span>(
                                            <span className="s">&quot;Capulet&#39;s mansion&quot;</span>)<mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">mansionCount</span> +=
                                            <span className="m">1</span>
                                        </li>
                                        <li>    } 
                                            <span className="k">else</span>
                                            <span className="k">if</span>
                                            <span className="nv">scene</span>.
                                            <span className="nv">hasSuffix</span>(
                                            <span className="s">&quot;Friar Lawrence&#39;s cell&quot;</span>)<mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">cellCount</span> +=
                                            <span className="m">1</span>
                                        </li>
                                        <li>    }
</li>
                                        <li>}
</li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">mansionCount</span>
                                            <span className="p">)</span>
                                            <span className="s"> mansion scenes; </span>\
                                            <span className="p">(</span>
                                            <span className="nv">cellCount</span>
                                            <span className="p">)</span>
                                            <span className="s"> cell scenes&quot;</span>)
                                        </li>
                                        <li>
                                            <span className="c"> Prints &quot;6 mansion scenes; 2 cell scenes&quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="admonition note">
                            <p className="first admonition-title">Note</p>
                            <p className="last">The 
                                <code className="docutils literal notranslate">
                                    <span className="pre">hasPrefix(_:)</span>
                                </code> and
                                <code className="docutils literal notranslate">
                                    <span className="pre">hasSuffix(_:)</span>
                                </code> methods perform a character-by-character canonical equivalence comparison between the extended grapheme clusters in each string, as described in
                              
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section" id="ID301">
                    <h2>Unicode Representations of Strings
                    </h2>
                    <p>When a Unicode string is written to a text file or some other storage, the Unicode scalars in that string are encoded in one of several Unicode-defined 
                        <em>encoding forms</em>. Each form encodes the string in small chunks known as
                        <em>code units</em>. These include the UTF-8 encoding form (which encodes a string as 8-bit code units), the UTF-16 encoding form (which encodes a string as 16-bit code units), and the UTF-32 encoding form (which encodes a string as 32-bit code units).
                    </p>
                    <p>Swift provides several different ways to access Unicode representations of strings. You can iterate over the string with a 
                        <code className="docutils literal notranslate">
                            <span className="pre">for</span>
                        </code>-
                        <code className="docutils literal notranslate">
                            <span className="pre">in</span>
                        </code> statement, to access its individual
                        <code className="docutils literal notranslate">
                            <span className="pre">Character</span>
                        </code> values as Unicode extended grapheme clusters. This process is described in
                       
                    </p>
                    <p>Alternatively, access a 
                        <code className="docutils literal notranslate">
                            <span className="pre">String</span>
                        </code> value in one of three other Unicode-compliant representations:
                    </p>
                    <ul className="simple">
                        A collection of UTF-8 code units (accessed with the string’s 
                            <code className="docutils literal notranslate">
                                <span className="pre">utf8</span>
                            </code> property)
                        
                        A collection of UTF-16 code units (accessed with the string’s 
                            <code className="docutils literal notranslate">
                                <span className="pre">utf16</span>
                            </code> property)
                                                A collection of 21-bit Unicode scalar values, equivalent to the string’s UTF-32 encoding form (accessed with the string’s 
                            <code className="docutils literal notranslate">
                                <span className="pre">unicodeScalars</span>
                            </code> property)
                        
                    </ul>
                    <p>Each example below shows a different representation of the following string, which is made up of the characters 
                        <code className="docutils literal notranslate">
                            <span className="pre">D</span>
                        </code>,
                        <code className="docutils literal notranslate">
                            <span className="pre">o</span>
                        </code>,
                        <code className="docutils literal notranslate">
                            <span className="pre">g</span>
                        </code>,
                        <code className="docutils literal notranslate">
                            <span className="pre">‼</span>
                        </code> (
                        <code className="docutils literal notranslate">
                            <span className="pre">DOUBLE</span>
                            <span className="pre">EXCLAMATION</span>
                            <span className="pre">MARK</span>
                        </code>, or Unicode scalar
                        <code className="docutils literal notranslate">
                            <span className="pre">U+203C</span>
                        </code>), and the 🐶 character (
                        <code className="docutils literal notranslate">
                            <span className="pre">DOG</span>
                            <span className="pre">FACE</span>
                        </code>, or Unicode scalar
                        <code className="docutils literal notranslate">
                            <span className="pre">U+1F436</span>
                        </code>):
                    </p>
                    <div className="highlight-swift notranslate">
                        <div className="code-sample">
                            <div className="Swift highlight">
                                <ol className="code-lines">
                                    <li>
                                        <span className="k">let</span>
                                        <span className="nv">dogString</span> =
                                        <span className="s">&quot;Dog‼&quot;</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="ID302">
                        <h3>UTF-8 Representation
                        </h3>
                        <p>You can access a UTF-8 representation of a 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> by iterating over its
                            <code className="docutils literal notranslate">
                                <span className="pre">utf8</span>
                            </code> property. This property is of type
                            <code className="docutils literal notranslate">
                                <span className="pre">String.UTF8View</span>
                            </code>, which is a collection of unsigned 8-bit (
                            <code className="docutils literal notranslate">
                                <span className="pre">UInt8</span>
                            </code>) values, one for each byte in the string’s UTF-8 representation:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">codeUnit</span>
                                            <span className="k">in</span>
                                            <span className="nv">dogString</span>.
                                            <span className="nv">utf8</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">codeUnit</span>
                                            <span className="p">)</span>
                                            <span className="s"> &quot;</span>,
                                            <span className="nv">terminator</span>:
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>
                                            <span className="c"> Prints &quot;68 111 103 226 128 188 240 159 144 182 &quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>In the example above, the first three decimal 
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">68</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">111</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">103</span>
                            </code>) represent the characters
                            <code className="docutils literal notranslate">
                                <span className="pre">D</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">o</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">g</span>
                            </code>, whose UTF-8 representation is the same as their ASCII representation. The next three decimal
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">226</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">128</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">188</span>
                            </code>) are a three-byte UTF-8 representation of the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOUBLE</span>
                                <span className="pre">EXCLAMATION</span>
                                <span className="pre">MARK</span>
                            </code> character. The last four
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">240</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">159</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">144</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">182</span>
                            </code>) are a four-byte UTF-8 representation of the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOG</span>
                                <span className="pre">FACE</span>
                            </code> character.
                        </p>
                    </div>
                    <div className="section" id="ID303">
                        <h3>UTF-16 Representation
                        </h3>
                        <p>You can access a UTF-16 representation of a 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> by iterating over its
                            <code className="docutils literal notranslate">
                                <span className="pre">utf16</span>
                            </code> property. This property is of type
                            <code className="docutils literal notranslate">
                                <span className="pre">String.UTF16View</span>
                            </code>, which is a collection of unsigned 16-bit (
                            <code className="docutils literal notranslate">
                                <span className="pre">UInt16</span>
                            </code>) values, one for each 16-bit code unit in the string’s UTF-16 representation:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">codeUnit</span>
                                            <span className="k">in</span>
                                            <span className="nv">dogString</span>.
                                            <span className="nv">utf16</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">codeUnit</span>
                                            <span className="p">)</span>
                                            <span className="s"> &quot;</span>,
                                            <span className="nv">terminator</span>:
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>
                                            <span className="c"> Prints &quot;68 111 103 8252 55357 56374 &quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>Again, the first three 
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">68</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">111</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">103</span>
                            </code>) represent the characters
                            <code className="docutils literal notranslate">
                                <span className="pre">D</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">o</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">g</span>
                            </code>, whose UTF-16 code units have the same values as in the string’s UTF-8 representation (because these Unicode scalars represent ASCII characters).
                        </p>
                        <p>The fourth 
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> value (
                            <code className="docutils literal notranslate">
                                <span className="pre">8252</span>
                            </code>) is a decimal equivalent of the hexadecimal value
                            <code className="docutils literal notranslate">
                                <span className="pre">203C</span>
                            </code>, which represents the Unicode scalar
                            <code className="docutils literal notranslate">
                                <span className="pre">U+203C</span>
                            </code> for the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOUBLE</span>
                                <span className="pre">EXCLAMATION</span>
                                <span className="pre">MARK</span>
                            </code> character. This character can be represented as a single code unit in UTF-16.
                        </p>
                        <p>The fifth and sixth 
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">55357</span>
                            </code> and
                            <code className="docutils literal notranslate">
                                <span className="pre">56374</span>
                            </code>) are a UTF-16 surrogate pair representation of the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOG</span>
                                <span className="pre">FACE</span>
                            </code> character. These values are a high-surrogate value of
                            <code className="docutils literal notranslate">
                                <span className="pre">U+D83D</span>
                            </code> (decimal value
                            <code className="docutils literal notranslate">
                                <span className="pre">55357</span>
                            </code>) and a low-surrogate value of
                            <code className="docutils literal notranslate">
                                <span className="pre">U+DC36</span>
                            </code> (decimal value
                            <code className="docutils literal notranslate">
                                <span className="pre">56374</span>
                            </code>).
                        </p>
                    </div>
                    <div className="section" id="ID304">
                        <h3>Unicode Scalar Representation
                        </h3>
                        <p>You can access a Unicode scalar representation of a 
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> value by iterating over its
                            <code className="docutils literal notranslate">
                                <span className="pre">unicodeScalars</span>
                            </code> property. This property is of type
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalarView</span>
                            </code>, which is a collection of values of type
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalar</span>
                            </code>.
                        </p>
                        <p>Each 
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalar</span>
                            </code> has a
                            <code className="docutils literal notranslate">
                                <span className="pre">value</span>
                            </code> property that returns the scalar’s 21-bit value, represented within a
                            <code className="docutils literal notranslate">
                                <span className="pre">UInt32</span>
                            </code> value:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">scalar</span>
                                            <span className="k">in</span>
                                            <span className="nv">dogString</span>.
                                            <span className="nv">unicodeScalars</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">scalar</span>.
                                            <span className="nv">value</span>
                                            <span className="p">)</span>
                                            <span className="s"> &quot;</span>,
                                            <span className="nv">terminator</span>:
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;&quot;</span>)
                                        </li>
                                        <li>
                                            <span className="c"> Prints &quot;68 111 103 8252 128054 &quot;</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <p>The 
                            <code className="docutils literal notranslate">
                                <span className="pre">value</span>
                            </code> properties for the first three
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalar</span>
                            </code> values (
                            <code className="docutils literal notranslate">
                                <span className="pre">68</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">111</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">103</span>
                            </code>) once again represent the characters
                            <code className="docutils literal notranslate">
                                <span className="pre">D</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">o</span>
                            </code>, and
                            <code className="docutils literal notranslate">
                                <span className="pre">g</span>
                            </code>.
                        </p>
                        <p>The fourth 
                            <code className="docutils literal notranslate">
                                <span className="pre">codeUnit</span>
                            </code> value (
                            <code className="docutils literal notranslate">
                                <span className="pre">8252</span>
                            </code>) is again a decimal equivalent of the hexadecimal value
                            <code className="docutils literal notranslate">
                                <span className="pre">203C</span>
                            </code>, which represents the Unicode scalar
                            <code className="docutils literal notranslate">
                                <span className="pre">U+203C</span>
                            </code> for the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOUBLE</span>
                                <span className="pre">EXCLAMATION</span>
                                <span className="pre">MARK</span>
                            </code> character.
                        </p>
                        <p>The 
                            <code className="docutils literal notranslate">
                                <span className="pre">value</span>
                            </code> property of the fifth and final
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalar</span>
                            </code>,
                            <code className="docutils literal notranslate">
                                <span className="pre">128054</span>
                            </code>, is a decimal equivalent of the hexadecimal value
                            <code className="docutils literal notranslate">
                                <span className="pre">1F436</span>
                            </code>, which represents the Unicode scalar
                            <code className="docutils literal notranslate">
                                <span className="pre">U+1F436</span>
                            </code> for the
                            <code className="docutils literal notranslate">
                                <span className="pre">DOG</span>
                                <span className="pre">FACE</span>
                            </code> character.
                        </p>
                        <p>As an alternative to querying their 
                            <code className="docutils literal notranslate">
                                <span className="pre">value</span>
                            </code> properties, each
                            <code className="docutils literal notranslate">
                                <span className="pre">UnicodeScalar</span>
                            </code> value can also be used to construct a new
                            <code className="docutils literal notranslate">
                                <span className="pre">String</span>
                            </code> value, such as with string interpolation:
                        </p>
                        <div className="highlight-swift notranslate">
                            <div className="code-sample">
                                <div className="Swift highlight">
                                    <ol className="code-lines">
                                        <li>
                                            <span className="k">for</span>
                                            <span className="nv">scalar</span>
                                            <span className="k">in</span>
                                            <span className="nv">dogString</span>.
                                            <span className="nv">unicodeScalars</span><mark>prenthisis</mark>
                                        </li>
                                        <li>
                                            <span className="nv">print</span>(
                                            <span className="s">&quot;</span>\
                                            <span className="p">(</span>
                                            <span className="nv">scalar</span>
                                            <span className="p">)</span>
                                            <span className="s"> &quot;</span>)
                                        </li>
                                        <li>}
</li>
                                        <li>
                                            <span className="c"> D</span>
                                        </li>
                                        <li>
                                            <span className="c"> o</span>
                                        </li>
                                        <li>
                                            <span className="c"> g</span>
                                        </li>
                                        <li>
                                            <span className="c"> ‼</span>
                                        </li>
                                        
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </main>
      </div>  
    );
  }
}

export default Advance;