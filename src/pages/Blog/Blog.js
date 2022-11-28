import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='mx-5 my-20'>
                <h3 className='text-3xl font-bold uppercase text-center my-10'>Blog</h3>
                <div>
                    <h5 className='text-xl md:text-2xl font-semibold mt-5'>1. What are the different ways to manage a state in a React application?</h5>
                    <p className='text-lg'>
                        The Four Kinds of React State to Manage
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </p>
                </div>
                <div>
                    <h5 className='text-xl md:text-2xl font-semibold mt-5'>2. How does prototypical inheritance work?</h5>
                    <p className='text-lg'>
                        The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                    </p>
                </div>
                <div>
                    <h5 className='text-xl md:text-2xl font-semibold mt-5'>3. What is a unit test? Why should we write unit tests?</h5>
                    <p className='text-lg'>
                        Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
                        <br />
                        <li> Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>
                        <li>It simplifies the debugging process.</li>
                        <li>Unit testing is an integral part of extreme programming. Extreme programming is basically a "test-everything-that-can-possibly-break" programming strategy.</li>
                        <li>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</li>
                        <li>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                    </p>
                </div>
                <div>
                    <h5 className='text-xl md:text-2xl font-semibold mt-5'>4. React vs. Angular vs. Vue?</h5>
                    <p className='text-lg'>
                        <strong>React</strong>
                        <br />
                        <span>Ensuring faster loading. The separation of data and presentation is possible with React. Being based on JavaScript, it is simplers to begin. Single file contains both markup and logic (JSX).</span>
                        <br />
                        <strong>Angular</strong>
                        <br />
                        <span>Ensuring excellent app performance. Providing offline support and PWA capabilities for the app development. Ideal option for creating large scale applications as it provides in-build features. Projects developed with Angular are expandable, scalable, and developed more quickly. It embraces the Angular-CLI command-line tool. Angular provides a basic framework for developing web apps and managing it without any support of other libraries.

                            Ensure end-to-end testing.</span>
                        <br />
                        <strong>VUE</strong>
                        <br />
                        <span>Vue comes up with in-detail documentation. Reusable components of this framework make the development process much faster and easier. There is a possibility of Component-based Architecture (CBA). It provides flexibility and simplicity for app development. Vue provides a list of tools and libraries such as official CLI, Development tools, Vue Router, State Management, and more.</span>
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;