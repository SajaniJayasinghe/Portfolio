import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const toRotate = ["Full Stack Developer"];
    const period = 2000;

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1 style={{ fontSize: "50px", marginTop: "-18px" }}>
                    Hello!
                    <span
                      style={{
                        fontSize: "40px",
                        marginTop: "10px",
                        fontFamily: "Abril Fatface",
                        display: "block",
                      }}
                    >
                      I'm Sajani Sathsarani Jayasinghe
                    </span>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Full Stack Developer"]'
                    >
                      <span
                        className="wrap"
                        style={{ color: "#5CB3FF", fontFamily: "serif" }}
                      >
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p style={{ textAlign: "justify", marginTop: "30px" }}>
                    "The expert in anything was once a beginner," and so am I.
                    As a Full Stack Developer, I specialize in Node.js and .NET
                    technologies. Additionally, I bring a wealth of experience
                    in frontend development, having worked extensively with
                    AngularJS, ReactJS, HTML, CSS, and JavaScript. Furthermore,
                    my expertise extends to mobile development, encompassing
                    React Native, Flutter, Android, and Swift platforms.
                  </p>
                  <Button
                    href="https://drive.google.com/drive/u/0/folders/1vPNHFezAU7lc9VUkXlMInjss2heFRY8M"
                    download
                    style={{
                      backgroundColor: "#357EC7",
                      borderColor: "#357EC7",
                      marginTop: "40px",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Download CV
                  </Button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717938948/WhatsApp_Image_2024-06-09_at_15.49.53_slxe2f.jpg"
                    style={{ width: "70%", borderRadius: "50%" }}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
