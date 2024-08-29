import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SamplePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof Tally !== 'undefined') {
        // eslint-disable-next-line no-undef
        Tally.loadEmbeds();
      } else {
        const checkTallyInterval = setInterval(() => {
          if (typeof Tally !== 'undefined') {
            // eslint-disable-next-line no-undef
            Tally.loadEmbeds();
            clearInterval(checkTallyInterval);
          }
        }, 100);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand" href="#">
          <img src="pnglog.png" alt="Logo" style={{ height: '80px' }} />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#know-more">Know More</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content" style={{ textAlign: 'center' }}>
        <h1>Welcome to MONETO_INSIGHT</h1>
        <p>Use this site for Financial Management.</p>
      </div>

      <div className="grid-section">
        <div className="container">
          <div className="row equal-height">
            <div className="col-md-4">
              <img src="wallstrret.jpg" alt="Descriptive Image" className="image-container" style={{ width: '500px' }} />
            </div>
            <div className="col-md-8">
              <h2>About Moneto-Insight</h2>
              <ul>
                <li>
                  Moneto-Insight is an innovative platform for financial management, created to help both individuals and businesses confidently and effortlessly manage their finances.
                </li>
                <li>
                  <b>Our Offerings:</b>
                  <ol>
                    <li>Personal Finance Management: Keep a close eye on your income, expenditures, and savings with ease.</li>
                    <li>Budget Planning: Create, manage, and adjust budgets that are tailored to your financial goals.</li>
                    <li>Investment Insights: Leverage professional analysis and tools to efficiently oversee and grow your investments.</li>
                    <li>Real-time Analytics: Access up-to-the-minute analytics and comprehensive reports to monitor your financial health.</li>
                    <li>Goal Setting and Tracking: Set financial goals and conveniently monitor your progress toward achieving them.</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'white' }}>Budget Ninja</h2>
          <iframe
            data-tally-src="https://tally.so/embed/nrVZdR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="300"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Budget Ninja"
          />
        </div>
      </div>

      <div className="grid-section">
        <div className="container">
          <div className="row equal-height">
            <div className="col-md-7">
              <h2>About Budget Ninja</h2>
              <ul>
                <li>Budget Ninja is an intuitive and dynamic financial management tool designed to help you track and manage your expenses effortlessly. It provides a seamless user experience by embedding a powerful budget form directly into your webpage. With a transparent interface and automatic adjustment to various screen sizes, Budget Ninja ensures accessibility and ease of use across devices.</li>
                <ul>
                  <li>Seamless Integration: The Budget Ninja form is embedded directly into your page, offering a clean and organized layout without any extra pop-ups or redirects.</li>
                  <li>Responsive Design: The form adapts dynamically to different screen sizes, ensuring a smooth experience whether you're on a desktop, tablet, or mobile device.</li>
                  <li>User-Friendly: With its minimalist design, Budget Ninja allows you to focus on what matters most—your finances—without the distraction of unnecessary elements or headers.</li>
                </ul>
              </ul>
            </div>

            <div className="col-md-5">
              <img src="women-removebg-preview.png" alt="" style={{ marginTop: '-180px', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
