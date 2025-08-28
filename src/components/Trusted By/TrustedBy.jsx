import React from 'react';
import './Trustedby.scss';


// Lucide icons
const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

const PenTool = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l7.5 1.5L13 18l-1.5 1.5z"/><path d="M2 2l7.5 7.5"/>
    </svg>
);

const Users = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const BookOpen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);

const Lightbulb = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M11 17h2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
);

const Rocket = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74.5 5 2c1.26-1.5 5-2 5-2s-.5-3.74-2-5c1.26 1.5 2 5 2 5s-3.74-.5-5-2z"/><path d="M9 18s-1.5-2-2-3.5c-.79-.88-3-3-3-3l1.81-1.81c.7-.71 2.57-2.79 3-3.5 1.5-2 3.5-2 3.5-2L14 12l2-2h-3l-2-2 3-3 2 2 2-2 7-7L18 6l-2 2 2 2-3 3-2 2h-3l-2 2 2 2z"/>
    </svg>
);

const App = () => {
    return (
        <div>
            {/* Embedded CSS for self-contained styling */}
            

            <section className="about" id="about">
                <div className="container">
                    <div className="heading">
                        <h2>About <span>Us</span></h2>
                        <p>
                            Empowering students and researchers to achieve academic excellence through expert guidance and resources.
                            <br className="hidden sm:block" />
                            We cover everything from essay structure to advanced research methodologies.
                        </p>
                    </div>
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src="/images/topmark-writing.jpg"
                                alt="Two people working at a desk"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/top-view-people-working-desk.jpg"; }}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-content">
                            <h3>
                                Your Partner in Academic Success
                            </h3>
                            
                                
                            <div className="features-grid">
                                <div className="feature-item">
                                    <BookOpen /><h4 className="text-lg font-medium text-gray-800">Essay Structuring</h4>
                                </div>
                                <div className="feature-item">
                                    <PenTool /><h4 className="text-lg font-medium text-gray-800">Research Methodology</h4>
                                </div>
                                <div className="feature-item">
                                    <Users /><h4 className="text-lg font-medium text-gray-800">Personalized Guidance</h4>
                                </div>
                                <div className="feature-item">
                                    <Star /><h4 className="text-lg font-medium text-gray-800">Citation & Referencing</h4>
                                </div>
                                <div className="feature-item">
                                    <Lightbulb /><h4 className="text-lg font-medium text-gray-800">Critical Thinking Skills</h4>
                                </div>
                                <div className="feature-item">
                                    <Rocket /><h4 className="text-lg font-medium text-gray-800">Effective Proofreading</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
