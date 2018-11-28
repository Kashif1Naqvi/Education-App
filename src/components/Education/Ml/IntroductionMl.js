import React,{Component} from 'react';

class Introduction extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4" >
              <div className="embed-responsive embed-responsive-16by9" >
                  <iframe width="530" height="325" src="https://www.youtube.com/embed/h0e2HAPTGF4" title="machine learning introdution"  className="embed-responsive-item" ></iframe>
              </div>
              <h3>Machine learning</h3>
              
                        Machine learning (ML) is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed.
                        The name machine learning was coined in 1959 by Arthur Samuel. Machine learning explores the study and construction of algorithms that can learn from and make predictions on data[3] – such algorithms overcome following strictly static program instructions by making data-driven predictions or decisions, through building a model from sample inputs. Machine learning is employed in a range of computing tasks where designing and programming explicit algorithms with good performance is difficult or infeasible; example applications include email filtering, detection of network intruders, and computer vision.
                        Machine learning is closely related to (and often overlaps with) computational statistics, which also focuses on prediction-making through the use of computers. It has strong ties to mathematical optimization, which delivers methods, theory and application domains to the field. Machine learning is sometimes conflated with data mining, where the latter subfield focuses more on exploratory data analysis and is known as unsupervised learning.
                        Within the field of data analytics, machine learning is a method used to devise complex models and algorithms that lend themselves to prediction; in commercial use, this is known as predictive analytics. These analytical models allow researchers, data scientists, engineers, and analysts to "produce reliable, repeatable decisions and results" and uncover "hidden insights" through learning from historical relationships and trends in the data.
            
          </div>
          <div className="col-sm-4" >
            <div className="embed-responsive embed-responsive-16by9" >
               <iframe width="560" height="315" src="https://www.youtube.com/embed/_PwhiWxHK8o" title="machine learning " className="embed-responsive-item" ></iframe>
            </div>
                <h2>Overview</h2>
                   Tom M. Mitchell provided a widely quoted, more formal definition of the algorithms studied in the machine learning field: "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E."[9] This definition of the tasks in which machine learning is concerned offers a fundamentally operational definition rather than defining the field in cognitive terms. This follows Alan Turing's proposal in his paper "Computing Machinery and Intelligence", in which the question "Can machines think?" is replaced with the question "Can machines do what we (as thinking entities) can do?".[10] In Turing's proposal the various characteristics that could be possessed by a thinking machine and the various implications in constructing one are exposed.
                    Machine learning tasks are typically classified into several broad categories:
                    Supervised learning: The computer is presented with example inputs and their desired outputs, given by a "teacher", and the goal is to learn a general rule that maps inputs to outputs. As special cases, the input signal can be only partially available, or restricted to special feedback.
                    Semi-supervised learning: The computer is given only an incomplete training signal: a training set with some (often many) of the target outputs missing.
                    Active learning: The computer can only obtain training labels for a limited set of instances (based on a budget), and also has to optimize its choice of objects to acquire labels for. When used interactively,
                    these can be presented to the user for labeling. Unsupervised learning: No labels are given to the learning algorithm, leaving it on its own to find structure in its input. Unsupervised learning can be a goal in itself (discovering hidden patterns in data) or a means towards an end (feature learning).
            </div>
          <div className="col-sm-4" >
            <div className="embed-responsive embed-responsive-16by9" >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/cyQZP23YbCY" title="machine learning introdutions" className="embed-responsive-item" ></iframe>
            </div> 
              <h5>History and relationships to other fields</h5>
            <i>
                Reinforcement learning: Data (in form of rewards and punishments) are given only as feedback to the program's actions in a dynamic environment, such as driving a vehicle or playing a game against an opponent.
                Arthur Samuel, an American pioneer in the field of computer gaming and artificial intelligence, coined the term "Machine Learning" in 1959 while at IBM[11]. As a scientific endeavour, machine learning grew out of the quest for artificial intelligence. Already in the early days of AI as an academic discipline, some researchers were interested in having machines learn from data. They attempted to approach the problem with various symbolic methods, as well as what were then termed "neural networks"; these were mostly perceptrons and other models that were later found to be reinventions of the generalized linear models of statistics.[12] Probabilistic reasoning was also employed, especially in automated medical diagnosis.[13]:488
                However, an increasing emphasis on the logical, knowledge-based approach caused a rift between AI and machine learning. Probabilistic systems were plagued by theoretical and practical problems of data acquisition and representation.[13]:488 By 1980, expert systems had come to dominate AI, and statistics was out of favor.[14] Work on symbolic/knowledge-based learning did continue within AI, leading to inductive logic programming, but the more statistical line of research was now outside the field of AI proper, in pattern recognition and information retrieval.[13]:708–710; 755 Neural networks research had been abandoned by AI and computer science around the same time. This line, too, was continued outside the AI/CS field, as "connectionism", by researchers from other disciplines including Hopfield, Rumelhart and Hinton. Their main success came in the mid-1980s with the reinvention of backpropagation.
            </i>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduction;