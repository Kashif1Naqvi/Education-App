 import React,{Component} from 'react';
class BasicDs extends Component {
  render() {
    return (
      <div className="container text-muted">
        <h3>Growth Models</h3>
        <p>
        Many graphs that arise in the outside world started as small graphs that grew over
        time. In a model for such graphs, vertices and edges are added to the graph over time.
        In such a model there are many ways in which to select the vertices for attaching a new
        edge. One is to select two vertices uniformly at random from the set of existing vertices.
        Another is to select two vertices with probability proportional to their degree. This latter
        method is referred to as preferential attachment. A variant of this method would be to
        add a new vertex at each unit of time and with probability δ add an edge where one
        end of the edge is the new vertex and the other end is a vertex selected with probability
        proportional to its degree. The graph generated by this latter method is a tree with a
        power law degree distribution.
        </p>
      </div>);
  }
}
export default BasicDs;