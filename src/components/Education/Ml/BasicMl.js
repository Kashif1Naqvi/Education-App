import React,{Component} from 'react';

class BasicMl extends Component {
  render(){
    return(
      <div className="container text-muted">
      <div className="page-wrapper">
                    <div className="mh-el page-sidebar single-regular"  data="https://schema.org/Article">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="main-content">
                                        <article  id="post-16901" className="main-content single-post-box">
                                          <div className="text-content">
                                                <div id="ban3_av"></div>
                                                <h2>Introduction</h2>
                                                <p style={{textAlign:" justify"}}>There has been a renewed interest in machine learning in last few years. This revival seems to be driven by strong fundamentals &#8211; loads of data being emitted by sensors across the globe, with cheap storage and lowest ever computational costs!</p>
                                                <p style={{textAlign:" justify"}}>However, not every one around understands what machine learning is. Here are a few examples:</p>
                                                <ul>What is Machine Learning
                                                    <li style={{textAlign:" justify"}}>
                                                        <a target="blank" className="fancy-title" href="http://discuss.analyticsvidhya.com/t/what-is-machine-learning-and-how-is-it-different-from-big-data-and-business-analytics/306"  rel="noopener" data-ember-action="1664">What is Machine Learning and how is it different from Big Data and Business Analytics?</a>
                                                    </li>
                                                    <li style={{textAlign:" justify"}}>
                                                        <a target="blank" className="fancy-title" href="http://discuss.analyticsvidhya.com/t/what-is-the-difference-between-machine-learning-data-analysis-data-mining-data-science-and-ai/572"  rel="noopener" data-ember-action="1667">What is the difference between machine learning, data analysis, data mining, data science and AI?</a>
                                                    </li>
                                                </ul>
                                                <p style={{textAlign:" justify"}}>Here was a little funny (but immensely true) take on the topic we circulated on our 
                                                    <a target="blank" href="http://www.facebook.com/analyticsvidhya"  rel="nofollow noopener">Facebook page</a> recently.
                                                </p>
                                                <p style={{textAlign:" justify"}}>Coming to the point, given the amount of confusion on the topic, we thought to create an awesome introductory series of articles on machine learning. The idea is to do away with all the jargons, which might have intimidated you in past and create something which can be read by a 5 year old (ok&#8230;sorry, may be a high school pass out)!</p>
                                                <p>&nbsp;</p>
                                                <h2 style={{textAlign:" justify"}}>So what exactly is machine learning? My small experiment&#8230;</h2>
                                                <p style={{textAlign:" justify"}}>Just to make sure I don&#8217;t over-estimate (or under-estimate) the capability of the target audience, I got hold of 10 people who were completely new to analytics. None of them had heard about machine learning before (yes, there are people like that!). Here is what they said:</p>
                                                <ul>
                                                    <li>I don&#8217;t know, may be learning from machines?</li>
                                                    <li>Making machines learn something a.k.a. programming machine software</li>
                                                    <li>Learning with help of computers</li>
                                                    <li>Learning through online courses (!!!)</li>
                                                </ul>
                                                <p>&nbsp;</p>
                                                <p>That was fun! Perfect group to explain machine learning to. Here is how I started explaining to these people:</p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>Machine Learning refers to the techniques involved in dealing with vast data in the most intelligent fashion (by developing algorithms) to derive actionable insights.</em>
                                                </p>
                                                <p>By this time, they were looking at me as if I have spoken a few things in front of people from Mars! So, I stopped and then asked them a question in return, which they could relate to more:</p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>KJ:</strong> What do you think happens when you search for something on Google?
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>Group:</strong> Google shows up the most relevant web pages related to that search.
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>KJ:</strong> That&#8217;s good! but what really happens so that Google can show these relevant pages to you?
                                                    </em>
                                                </p>
                                                <p>This time it looked like they were thinking a bit more. Then some one from the group spoke</p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>Group member:</strong> Google looks at the past clicks from the people to understand which pages are more relevant for those searches and then serves those results on top of search.
                                                    </em>
                                                </p>
                                                <p>This was a far better attempt. I also had to control my urge to preach that how Google does this is far more smarter way than this simple concept. But, I thought I had a good hook to explain machine learning here. So, I continued:</p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>KJ:</strong> OK, that sounds like a good approach. But, how many searches and what all kind of searches would Google handle regularly?
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>Group:</strong> Must be a real big number &#8211; may be a trillion searches every year
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>KJ:</strong> So, how do you think Google can serve so many requests with such accuracy? Do you think there are people sitting in Google offices and continuously deciding which search result is relevant and which is not?
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>Group member:</strong> Haven&#8217;t really thought about it, but no, that sounds humanly impossible to do.
                                                    </em>
                                                </p>
                                                <p style={{paddingLeft: "30px"}}>
                                                    <em>
                                                        <strong>KJ:</strong> You are right. This is where machine learning comes into play.
                                                        <strong>Machine learning is a set of techniques, which help in dealing with vast data in the most intelligent fashion (by developing algorithms or set of logical rules) to derive actionable insights (delivering search for users in this case).</strong>
                                                    </em>
                                                </p>
                                                <p>A logical nod from the group, looks like mission accomplished&#8230;yay! But wait&#8230;</p>
                                                <p>&nbsp;</p>
                                                <h2>Now the common question &#8211; How is machine learning different from X?</h2>
                                                <p style={{textAlign:" justify"}}>The minute you start reading about machine learning, you see various rockets bombarding you with high velocity. These are jargons used loosely in the industry. Here are some of them: Artificial Intelligence, Deep Learning, Data Mining and Statistics.</p>
                                                <p style={{textAlign:" justify"}}>For your clear understanding, I have explained these terms below in the simple manner. You will also understand the importance of these terms in context of machine learning:</p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>X = Artificial Intelligence(AI):</h3>
                                                <p style={{textAlign:" justify"}}>It refers to the procedure of 
                                                    <em>programming</em> a computer (machine) to take
                                                    <em>rational</em>
                                                    <strong>
                                                        <em>. </em>
                                                    </strong>Ah! what is rational? Rational is the basis of taking a decision.
                                                </p>
                                                <p style={{textAlign:" justify"}}>I mentioned ‘rational’ instead of intelligence (as expected) because we human beings tend to take decisions which are high on being rational and feasible rather than being explicitly intelligent. This is because 
                                                    <em>all intelligent decisions needn&#8217;t be rational and</em> feasible
                                                    <strong>
                                                        <em> (</em>
                                                    </strong>my hypothesis
                                                    <em>
                                                        <strong>)</strong>.
                                                    </em>Hence, the central motive behind using AI is to achieve the computer (machine) behave in a dandy fashion in lieu of human guidance instead of being doltish!
                                                </p>
                                                <p style={{textAlign:" justify"}}>AI may include programs to check whether certain parameters within a program are behaving normally. For example, the machine may raise an alarm if a parameter say ‘X’ crosses a certain threshold which might in turn affect the outcome of the related process.</p>
                                                <h4 style={{textAlign:" justify"}}>
                                                    <span style={{textAecoration: "underline"}}>Use of Artificial Intelligence in Machine Learning</span>
                                                </h4>
                                                <p style={{textAlign:" justify"}}>
                                                    <em>Machine Learning is a subset of AI</em> where the machine is trained to learn from it’s past experience. The past experience is developed through the data collected. Then it combines with algorithms such as Naïve Bayes, Support Vector Machine(SVM) to deliver the final results.
                                                </p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>X = Statistics:</h3>
                                                <p style={{textAlign:" justify"}}>At this high level stage, I assume you would know about statistics. If you don&#8217;t, here&#8217;s a quick definition, Statistics is that branch of mathematics which utilizes data, either of the entire population or a sample drawn from the population to carry out the analysis and present inferences. Some statistical techniques used are regression,variance, standard deviation, conditional probability and many others. To know about this topic, read 
                                                    <a target="blank" href="https://www.analyticsvidhya.com/blog/2014/07/statistics/"  rel="noopener">How to understand population distributions using statistics?</a>
                                                </p>
                                                <p>&nbsp;</p>
                                                <h4>
                                                    <span style={{textAecoration: "underline"}}>Use of Statistics in Machine Learning</span>
                                                </h4>
                                                <p style={{textAlign:" justify"}}>Let&#8217;s understand this. Suppose, I need to separate the mails in my inbox into two categories: &#8216;spam&#8217; and &#8216;important&#8217;. For identifying the spam mails, I can use a machine learning algorithm known as Naïve Bayes which will check the frequency of the past  spam mails to identify the new email as spam. Naïve Bayes uses the statistical technique Baye’s theorem( commonly known as conditional probability). Hence, we can say machine learning algorithms uses statistical concepts to execute machine learning.</p>
                                                <p>
                                                    <span style={{textAecoration: "underline"}}>Additional Information:</span> The main difference between machine learning and statistical models come from the schools where they originated. While machine learning originated from the department of computer science and statistical modelling came down from department of mathematics. Also any statistical modelling assumes a number of distributions while machine learning algorithms are generally agnostic of the distribution of all attributes.
                                                </p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>X = Deep Learning:</h3>
                                                <p style={{textAlign:" justify"}}>Deep Learning is associated with a machine learning algorithm (Artificial Neural Network, ANN) which uses the concept of human brain to facilitate the modeling of arbitrary functions. ANN requires a vast amount of data and this algorithm is highly flexible when it comes to model multiple outputs simultaneously. ANN is more complex topic and we may do justice to it in an altogether separate article.</p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>X = Data Mining:</h3>
                                                <p style={{textAlign:" justify"}}>During my initial days as an analyst, I always used to muddle the two terms: Machine Learning and Data Mining. But, later I learnt, Data Mining deals with searching specific information. And Machine Learning solely concentrates on performing a given task. Let me cite the example which helped me to remember the difference; Teaching someone how to dance is Machine Learning. And using someone to find best dance centers in the city is Data Mining. Easy!</p>
                                                <p>&nbsp;</p>
                                                <p>Also Read: 
                                                    <a target="blank" href="https://www.analyticsvidhya.com/blog/2015/01/introduction-online-machine-learning-simplified-2/"  rel="noopener">Introduction to Online Machine Learning</a>
                                                </p>
                                                <p>&nbsp;</p>
                                                <h2>But, How exactly do we teach machines?</h2>
                                                <p style={{textAlign:" justify"}}>Teaching the machines involve a structural process where every stage builds a better version of the machine. For simplification purpose, the process of teaching machines can broken down into 3 parts:</p>
                                               
                                                <p style={{textAlign:" justify"}}>I shall be covering each of these 3 steps in detail in my subsequent write-ups. As of now, you should understand, these 3 steps ensures the holistic learning of the machine to perform the given task with equal importance. Success of machine depends on two factors:</p>
                                                <p style={{textAlign:" justify"}}>1. 
                                                    <em>How well the generalization of abstraction data take place.</em>
                                                </p>
                                                <p style={{textAlign:" justify"}}>
                                                    <em>2. H</em>
                                                    <em>ow well the machine is able to put it’s learning into practical usage for predicting the future course of action.</em>
                                                </p>
                                                <p>&nbsp;</p>
                                                <p>Also Read: 
                                                    <a target="blank" href="https://www.analyticsvidhya.com/blog/2015/01/scikit-learn-python-machine-learning-tool/"  rel="noopener">Learn about Scikit-Learn &#8211; Machine Learning tool in Python</a>
                                                </p>
                                                <p>&nbsp;</p>
                                                <h2>What are the steps used in Machine Learning?</h2>
                                                <p style={{textAlign:" justify"}}>There are 5 basic steps used to perform a machine learning task:</p>
                                                <ol>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Collecting data</strong>: Be it the raw data from excel, access, text files etc., this step (gathering past data) forms the foundation of the future learning. The better the variety, density and volume of relevant data, better the learning prospects for the machine becomes.
                                                    </li>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Preparing the data</strong>: Any analytical process thrives on the quality of the data used. One needs to spend time determining the quality of data and then taking steps for fixing issues such as missing data and treatment of outliers.
                                                        <a target="blank" href="https://www.analyticsvidhya.com/blog/2015/02/data-exploration-preparation-model/"  rel="noopener">Exploratory analysis</a> is perhaps one method to study the nuances of the data in details thereby burgeoning the nutritional content of the data.
                                                    </li>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Training a model</strong>: This step involves choosing the appropriate algorithm and representation of data in the form of the model. The cleaned data is split into two parts &#8211; train and test (proportion depending on the prerequisites); the first part (training data) is used for developing the model. The second part (test data), is used as a reference.
                                                    </li>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Evaluating the model</strong>: To test the accuracy, the second part of the data (holdout / test data) is used. This step determines the precision in the choice of the algorithm based on the outcome. A better test to check accuracy of model is to see its performance on data which was not used at all during model build.
                                                    </li>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Improving the performance</strong>: This step might involve choosing a different model altogether or introducing more variables to augment the efficiency. That’s why significant amount of time needs to be spent
                                                        <strong>in data collection and preparation.</strong>
                                                    </li>
                                                </ol>
                                                <p>Be it any model, these 5 steps can be used to structure the technique and when we discuss the algorithms, you shall then find how these five steps appear in every model!</p>
                                                <p>Also Read: 
                                                    <a target="blank" href="https://www.analyticsvidhya.com/blog/2015/05/boosting-algorithms-simplified/"  rel="noopener">Getting Smart with Machine Learning &#8211; Ada Boost and Gradient Boost</a>
                                                </p>
                                                <p>&nbsp;</p>
                                                <h2>What are the types of Machine Learning algorithms?</h2>
                                                <h3>Supervised Learning / Predictive models:</h3>
                                                <p>Predictive model as the name suggests is used to predict the future outcome based on the historical data. Predictive models are normally given clear instructions right from the beginning as in what needs to be learnt and how it needs to be learnt. These className of learning algorithms are termed as 
                                                    <strong>Supervised Learning.</strong>
                                                </p>
                                                <p style={{textAlign:" justify"}}>For example: Supervised Learning is used when a marketing company is trying to find out which customers are likely to churn. We can also use it to predict the likelihood of occurrence of perils like earthquakes, tornadoes etc. with an aim to determine the Total Insurance Value. Some examples of algorithms used are: Nearest neighbour, Naïve Bayes, Decision Trees, Regression etc.</p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>Unsupervised learning / Descriptive models:</h3>
                                                <p style={{textAlign:" justify"}}>It is used to train descriptive models where no target is set and no single feature is important than the other. The case of unsupervised learning can be: When a retailer wishes to find out what are the combination of products, customers tends to buy more frequently. Furthermore, in pharmaceutical industry, unsupervised learning may be used to predict which diseases are likely to occur along with diabetes. Example of algorithm used here is: K- means Clustering Algorithm</p>
                                                <p>&nbsp;</p>
                                                <h3 style={{textAlign:" justify"}}>Reinforcement learning (RL):</h3>
                                                <p style={{textAlign:" justify"}}>It is an example of machine learning where the machine is trained to take specific decisions based on the business requirement with the sole motto to maximize efficiency (performance). The idea involved in reinforcement learning is: The machine/ software agent trains itself on a continual basis based on the environment it is exposed to, and applies it’s enriched knowledge to solve business problems. This continual learning process ensures less involvement of human expertise which in turn saves a lot of time!</p>
                                                <p style={{textAlign:" justify"}}>An example of algorithm used in RL is Markov Decision Process.</p>
                                                <p style={{textAlign:" justify"}}>
                                                    <span style={{textAecoration: "underline"}}>Important Note:</span> There is a subtle difference between Supervised Learning and Reinforcement Learning (RL). RL essentially involves learning by interacting with an environment. An RL agent learns from its past experience, rather from its continual trial and error learning process as against supervised learning where an external supervisor  provides examples.
                                                </p>
                                                <p style={{textAlign:" justify"}}>A good example to understand the difference is self driving cars. Self driving cars use Reinforcement learning to make decisions continuously &#8211; which route to take? what speed to drive on? are some of the questions which are decided after interacting with the environment. A simple manifestation for supervised learning would be to predict fare from a cab going from one place to another.</p>
                                                <p>&nbsp;</p>
                                                <h2>What are the applications  of Machine Learning?</h2>
                                                <p style={{textAlign:" justify"}}>It is very interesting to know the applications of machine learning. Google and Facebook uses ML extensively to push their respective ads to the relevant users. Here are a few applications that you should know:</p>
                                                <ul style={{textAlign:" justify"}}>
                                                    <li>
                                                        <strong>Banking &amp; Financial services</strong>: ML can be used to predict the customers who are likely to default  from paying loans or credit card bills. This is of paramount importance as machine learning would help the banks to identify the customers who can be granted loans and credit cards.
                                                    </li>
                                                </ul>
                                                <ul style={{textAlign:" justify"}}>
                                                    <li>
                                                        <strong>Healthcare</strong>: It is used to diagnose deadly diseases (e.g. cancer) based on the symptoms of patients and tallying them with the past data of similar kind of patients.
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li style={{textAlign:" justify"}}>
                                                        <strong>Retail</strong>: It is used to identify products which sell more frequently (fast moving) and the slow moving products which help the retailers to decide what kind of products to introduce or remove from the shelf. Also, machine learning algorithms can be used to find which two / three or more products sell together. This is done to design customer loyalty initiatives which in turn helps the retailers to develop and maintain loyal customers.
                                                    </li>
                                                </ul>
                                                <p style={{textAlign:" justify"}}>These examples are just the tip of the iceberg. Machine learning has extensive applications practically in every domain. You can check out a few Kaggle problems to get further flavor. The examples included above are easy to understand and at least give a taste of the omnipotence of machine learning.</p>
                                                <p>&nbsp;</p>
                                                <h2>End Notes</h2>
                                                <p style={{textAlign:" justify"}}>In this article, we started by developing a basic understanding of what machine learning is. We also looked at how it gets confused with several other terms. We also covered the process to teach a machine, the essential steps used in machine learning, the algorithms used in machine learning followed by the applications of machine learning.</p>
                                                <p style={{textAlign:" justify"}}>I hope this article helped you to get acquainted with basics of machine learning. We would love to hear about it from you. Did you find it useful? What aspects of machine learning confuse you the most? Feel free to post your thoughts through comments below.</p>
                                                <p>&nbsp;</p>
                                                <p>Syed Kashif</p>
                                                <p style={{textAlign:" justify"}}>
                                                    <em>You can Help For me relative machine learning
                                                        <a target="blank" href="https://www.linkedin.com/in/syed-kashif-8b48a015b/"  rel="nofollow noopener">Syed Kashif Naqvi</a>, before  did his experiment to set the tone. kashif has continue her BSCS with specialization in Big data from National Collage of Bussiness and Administration and eccnomics (NCBA&ECC)]].
                                                    </em>
                                                </p>
                                                
                                            </div> 
    </article>

    </div>
    </div>
    </div>
    </div>
    </div></div></div>
    );
  }
}
export default BasicMl;