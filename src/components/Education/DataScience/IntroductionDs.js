import React,{Component} from 'react';
class IntroductionDs extends Component {
  render() { 
    return ( 
      <div className="container text-muted">
          <p>
          Computer science as an academic discipline began in the 1960’s. Emphasis was on
          programming languages, compilers, operating systems, and the mathematical theory that
          supported these areas. Courses in theoretical computer science covered finite automata,
          regular expressions, context-free languages, and computability. In the 1970’s, the study
          of algorithms was added as an important component of theory. The emphasis was on
          making computers useful. Today, a fundamental change is taking place and the focus is
          more on a wealth of applications. There are many reasons for this change. The merging
          of computing and communications has played an important role. The enhanced ability
          to observe, collect, and store data in the natural sciences, in commerce, and in other
          fields calls for a change in our understanding of data and how to handle it in the modern
          setting. The emergence of the web and social networks as central aspects of daily life
          presents both opportunities and challenges for theory.
          </p>
          <p>
          While traditional areas of computer science remain highly important, increasingly re-
          searchers of the future will be involved with using computers to understand and extract
          usable information from massive data arising in applications, not just how to make com-
          puters useful on specific well-defined problems. With this in mind we have written this
          book to cover the theory we expect to be useful in the next 40 years, just as an under-
          standing of automata theory, algorithms, and related topics gave students an advantage
          in the last 40 years. One of the major changes is an increase in emphasis on probability,
          statistics, and numerical methods
          </p>
          <h1>The Law of Large Numbers</h1>
          <p>
              If one generates random points in d-dimensional space using a Gaussian to generate
              coordinates, the distance between all pairs of points will be essentially the same when d
              is large. The reason is that the square of the distance between two points  <b>y</b> and <b>z</b>,
          </p>
          
      </div>
     );
  }
}
 
export default IntroductionDs;