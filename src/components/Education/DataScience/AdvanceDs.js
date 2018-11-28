import React,{Component} from 'react';
class AdvanceDs extends Component {
  render() { 
    return (
      <div className="container text-muted" >
        <h3>Topic Models</h3>
        <p>
          
            Topic Modeling is the problem of fitting a certain type of stochastic model to a given
            collection of documents. The model assumes there exist r “topics”, that each document is
            a mixture of these topics, and that the topic mixture of a given document determines the
            probabilities of different words appearing in the document. For a collection of news arti-
            cles, the topics may be politics, sports, science, etc. A topic is a set of word frequencies.
            For the topic of politics, words like “president” and “election” may have high frequencies,
            whereas for the topic of sports, words like “pitcher” and “goal” may have high frequencies.
            A document (news item) may be 60% politics and 40% sports. In that case, the word
            frequencies in the document are assumed to be convex combinations of word frequencies
            for each of these topics with weights 0.6 and 0.4 respectively.
            Each document is viewed as a “bag of words” or terms. 37 . Namely, we disregard the
            order and context in which each word occurs in the document and instead only list the
            frequency of occurrences of each word. Frequency is the number of occurrences of the
            word divided by the total count of all words in the document. Throwing away context
            information may seem wasteful, but this approach works fairly well in practice. Each doc-
            ument is a vector with d components where d is the total number of different terms that
            exist; each component of the vector is the frequency of a particular term in the document.
        </p>
        <h3>An Idealized Model</h3>
        <p>
            The Topic Model inference problem is in general computationally hard. But under
            certain reasonable assumptions, it can be solved in polynomial time as we will see in this
            chapter. We start here with a highly idealized model that was historically the first for
            which a polynomial time algorithm was devised. In this model, we make two assumptions:
        </p>
        <h3>Asymptotic Notation</h3>
        <p>
          We introduce the big O notation here. A motivating example is analyzing the running
          time of an algorithm. The running time may be a complicated function of the input length
          n such as 5n 3 + 25n 2 ln n − 6n + 22. Asymptotic analysis is concerned with the behavior
          as n → ∞ where the higher order term 5n 3 dominates. Further, the coefficient 5 of 5n 3
          is not of interest since its value varies depending on the machine model. So we say that
          the function is O(n 3 ). The big O notation applies to functions on the positive integers
          taking on positive real values.  
        </p>
        <h2>Lloyd’s Algorithm</h2>
        <p>   Corollary 7.2 suggests the following natural strategy for k-means clustering, known as
              Lloyd’s algorithm. Lloyd’s algorithm does not necessarily find a globally optimal solution
              but will find a locally-optimal one. An important but unspecified step in the algorithm is
              its initialization: how the starting k centers are chosen. We discuss this after discussing
              the main algorithm.
        </p>
        <h3>Ward’s Algorithm</h3>
        <p>
            Another popular heuristic for k-means clustering is Ward’s algorithm. Ward’s algo-
            rithm begins with each data point in its own cluster, and then repeatedly merges pairs of
            clusters until only k clusters remain. Specifically, Ward’s algorithm merges the two clus-
            ters that minimize
            the immediate increase in k-means cost. That is, for a cluster C, define
            P
            cost(C) = a i ∈C d 2 (a i , c), where c is the centroid of C. Then Ward’s algorithm merges
            the pair (C, C 0 ) minimizing cost(C ∪ C 0 ) − cost(C) − cost(C 0 ). Thus, Ward’s algorithm
            can be viewed as a greedy k-means algorithm.
        </p>
      </div> 
      );
  }
}
 
export default AdvanceDs;