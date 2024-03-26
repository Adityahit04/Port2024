import React from 'react'
import './Skills.css'
import UIDesign from '../assets/ui-design.png'
import webDesign from '../assets/website-design.png'
import AppDesign from '../assets/app-design.png'

function Skills() {
  return (
    <>
      <section id="skills">
        <span className="skillsTitle">What I Do</span>
        <span className="skillsDesc">
          Web Development Languages: Working with languages such as HTML, CSS,
          and JavaScript , React Js. HTML is used for structuring the content of
          web pages, CSS for styling and layout, and JavaScript for adding
          interactivity and functionality to web pages.I ensure that websites
          are accessible and functional across various devices and screen sizes.
          This involves using techniques like media queries and flexible layouts
          to adapt to different viewport sizes.I collaborate with UI designers
          to implement designs into code, ensuring that the user interface is
          visually appealing, intuitive, and functional.I use front-end
          frameworks and libraries such as React.js to streamline development,
          manage state, and create interactive user interfaces.I test and ensure
          that websites work consistently across different web browsers such as
          Chrome, Firefox, Safari, and Edge. Performance Optimization: optimize
          websites for speed and performance, minimizing load times and
          optimizing assets such as images, scripts, and stylesheets. Version
        </span>
        <div className="skillsBars">
          <div className="skillsBar">
            <img src={UIDesign} alt="UIDesign" className="skillsbarimg" />
            <div className="skillBarText">
              <h2>UI/UX</h2>
              <p>
                User Interface (UI) and User Experience (UX) are two critical
                components of modern digital design. UI refers to the visual
                elements and interactive features of a product, while UX
                encompasses the overall experience a user has when interacting
                with that product. In essence, UI focuses on the aesthetics and
                functionality of the interface, including layout, typography,
                colors, and interactive elements, aiming to create an intuitive
                and visually appealing design. On the other hand, UX
                concentrates on understanding the user's needs, behaviors, and
                emotions throughout their journey with the product, ensuring
                that interactions are seamless, efficient, and enjoyable. Both
                UI and UX are interconnected, as a well-designed UI enhances the
                overall UX by providing users with clear navigation, engaging
                visuals, and intuitive interactions. Therefore, a successful
                digital product requires careful consideration and collaboration
                between UI and UX designers to create a cohesive and delightful
                user experience.
              </p>
            </div>
          </div>
          <div className="skillsBar">
            <img src={webDesign} alt="webDesign" className="skillsbarimg" />
            <div className="skillBarText">
              <h2>Website</h2>
              <p>
                Responsive websites are crucial in today's digital landscape,
                where users access the internet from a variety of devices with
                different screen sizes and resolutions. A responsive website
                dynamically adjusts its layout and content to provide an optimal
                viewing experience across desktops, laptops, tablets, and
                smartphones. This adaptation is achieved through the use of
                flexible grids, images, and CSS media queries, allowing the
                website to resize, reposition, and hide elements as needed to
                fit the screen. By embracing responsive design principles,
                websites can ensure that content remains accessible and
                readable, regardless of the device being used. This approach not
                only improves user satisfaction and engagement but also
                contributes to better search engine rankings, as search engines
                like Google prioritize mobile-friendly websites in their
                results. Ultimately, responsive websites play a fundamental role
                in providing a consistent and user-friendly experience across
                all devices, thereby enhancing usability, accessibility, and
                overall effectiveness in reaching and engaging with audiences.
              </p>
            </div>
          </div>
          <div className="skillsBar">
            <img src={AppDesign} alt="AppDesign" className="skillsbarimg" />
            <div className="skillBarText">
              <h2>Skills Development</h2>
              <p>
                Developing skills in front-end development requires a
                combination of structured learning, practical experience, and
                ongoing self-improvement. Initially, mastering the fundamentals
                of HTML, CSS, and JavaScript forms the foundation. Online
                tutorials, courses, and books provide structured learning
                resources, while hands-on projects help reinforce concepts and
                develop problem-solving abilities. Engaging with online
                communities, forums, and coding challenges fosters collaboration
                and exposes developers to diverse perspectives and techniques.
                Additionally, exploring modern front-end frameworks like
                React.js, Angular, or Vue.js expands one's skill set and
                understanding of industry trends. Continuous practice and
                experimentation, combined with seeking feedback from peers and
                mentors, accelerate skill development. Keeping abreast of
                emerging technologies, attending workshops, and participating in
                hackathons contribute to staying current and adaptable in this
                rapidly evolving field. Ultimately, honing front-end development
                skills requires a blend of dedication, persistence, and a
                proactive approach to learning and growth.?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills