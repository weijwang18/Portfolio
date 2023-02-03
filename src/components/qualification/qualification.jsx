import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Epicodus </h3>
                <span className="qualification_subtitle">Online Coding Bootcamp</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> May 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">University of Washington</h3>
                <span className="qualification_subtitle">Master’s Degree · Library and Information Science</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">University of California, Berkeley</h3>
                <span className="qualification_subtitle">Bachelor’s Degree · Art Practice</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2015
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Full-stack Developer</h3>
                <span className="qualification_subtitle">EyeCue Lab · Internship</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Editor</h3>
                <span className="qualification_subtitle">TapRead web-novel · Full-time</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2019 - Apr 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
