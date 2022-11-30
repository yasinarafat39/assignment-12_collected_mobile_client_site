import React from 'react';

const BlogsPage = () => {
    return (
        <section className="bg-gray-100 text-gray-800 mt-20">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center">WelCome to Blogs Page.</h2>
                <p className="mt-4 mb-8 text-gray-600"></p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">What are the different ways to manage a state in a React Application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The Four Kinds of React State to Manage

                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>


                            <p>  <strong>Local (UI) state</strong> – Local state is data we manage in one or another component.</p>

                            <p>Local state is most often managed in React using the useState hook.</p>


                            <p>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>



                            <p>  <strong>Global (UI) state</strong> – Global state is data we manage across multiple components.</p>

                            <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>


                            <p>A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>

                            <p>Sometimes state we think should be local might become global.</p>



                            <p>  <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state.</p>

                            <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>


                            <p>There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>

                            <p>Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>



                            <p>  <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters.</p>

                            <p>URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>


                            <p>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p> </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">How does prototypal inheritance work ?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </p>
                        <img src="image: https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">What is unit test? Why should we write unit tests?</summary>
                        <h3>What is Unit Testing?</h3>

                        <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. </p>


                        <p>There are two types of unit testing:</p>

                        <li><bold>Manual</bold> : As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them. </li>

                        <li><bold>Automated</bold> : This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.</li>


                        <h3>Why should we write Unit Testes?</h3>

                        <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>

                        <li>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</li>

                        <li>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>

                        <li>It simplifies the debugging process.</li>

                        <li>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</li>

                        <li>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</li>

                        <li>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-green-600">React vs. Angular vs. Vue?</summary>
                        <h3>Quick Overview</h3>

                        <p><bold>Angular </bold> is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: </p>

                        <p>“The modern web developer’s platform”</p>

                        <p>It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.</p>

                        <p><bold>React </bold> is considered a UI library. They define themselves as:</p>

                        <p>“A JavaScript library for building user interfaces”</p>

                        <p><bold>Facebook  </bold> developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.</p>


                        <p>Last but not least, Vue.js is, according to its site:</p>


                        <p>“A progressive JavaScript framework”</p>

                        <p>Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.</p>

                        <p>These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.</p>                    </details>
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;