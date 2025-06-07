import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import { themeContext } from "../Context";
import { useContext } from "react";

export const Timeline = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [linecolor, setlinecolor] = React.useState(
    darkMode === "true" ? "white" : "black"
  );

  React.useEffect(() => {
    if (darkMode === "true") {
      setlinecolor("white");
    } else {
      setlinecolor("black");
    }
  }, [darkMode]);

  return (
    <div
      className="section mainsection"
      id="timeline"
      style={{ background: darkMode ? "rgb(23, 23, 23)" : "" }}
    >
      <h2 className="section__title" data-aos="fade-right">
        <h2 style={{ color: darkMode ? "white" : "" }}>
          About <span>Me</span>
        </h2>
      </h2>
      <VerticalTimeline lineColor={darkMode ? "white" : "black"}>
        <VerticalTimelineElement
          date={"July2024 - Sept2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Web-Developer Intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            BrainWave Matrix Solution
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            My Role: Web Developer
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date={"Feb2024 - Apr2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            GUVI GEEK NETWORKS PVT.LTD
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            My Role: Tech-Support
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={"Oct2023 - Jul2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Student
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            GUVI GEEK NETWORKS PVT.LTD
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            Joined in Guvi to learn MERN Stack Development for re-built my
            carrier. Also get to learn lot more other skills as well.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"Jan 2021 - Nov 2023"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Quality and Sales Executive
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            Sri Balaji Instruments, Tiruvannamalai
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            My Role: To Check the quality of incoming/outgoing products.and driving sales
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={" Jun 2017 - Oct 2019"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid  red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            CNC Operator (Full Time)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            Aqua Sub Engineering, Coimbathore (TN)
          </h4>
          <p data-aos="fade-right"></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={" Sept 2013 - May 2017"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Student [BE. (Mechanical. Engineering)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            SKP-Institute of technology, Anna University,(TN)
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            Studied Mechanical Engineering which consists of all the subjects
            accross all engineering and mechanical streams. Passed with 6.87
            CGPA
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"Jun 2012 - May 2013"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Student [HSC-Math Biology]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            A.S.Murugaiyan model higher secondary school
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            Studied & Passed with 78 Percentage.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"Jun 2010 - May 2011"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid ",
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: darkMode ? "black" : "white",
            textAlign: "center",
            color: darkMode ? "white" : "black",
          }}
          contentArrowStyle={{
            borderRight: "16px solid red",
          }}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
            style={{ color: "rgb(107, 20, 220)" }}
          >
            Student [SSLC]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
            style={{ color: darkMode ? "white" : "" }}
          >
            A.S.Murugaiyan model higher secondary school
          </h4>
          <p data-aos="fade-right" style={{ color: darkMode ? "white" : "" }}>
            Studied & Passed with 87 Percentage.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<StarRateIcon />}
          iconStyle={{
            border: ` 3px solid `,
            borderStyle: darkMode ? "white" : "rgb(107, 20, 220)",
            backgroundColor: "",
            color: "",
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
