import { Container, Row, Col, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "react-multi-carousel/lib/styles.css";

export const Education = () => {
  return (
    <section className="educations" id="educations">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2
                style={{
                  marginBottom: "50px",
                  textAlign: "center",
                  fontSize: "45px",
                  fontWeight: "700px",
                }}
              >
                Education
              </h2>
              <div>
                <Row className="d-flex align-items-start">
                  <Col md={4}>
                    <div className="education-img">
                      <img
                        src="https://res.cloudinary.com/nibmsa/image/upload/v1717945853/Screenshot_2024-06-09_at_20.39.59-removebg-preview_jxjha8.png"
                        alt="Education"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "100px",
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card
                      className="education-card d-flex flex-row align-items-center"
                      style={{ background: "#E6E6FA", marginBottom: "20px" }}
                    >
                      <div className="education-img">
                        <img
                          src="https://res.cloudinary.com/nibmsa/image/upload/v1717942902/SLIIT_Logo_Crest_n9kjuq.png"
                          alt="Education"
                          style={{
                            width: "80px",
                            height: "100px",
                            marginRight: "30px",
                            marginLeft: "30px",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontFamily: "times new roman",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          Sri Lanka Institute of Information Technology
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          2020 - 2013
                        </Card.Subtitle>
                        <Card.Text style={{ fontFamily: "times new roman" }}>
                          I am a recent graduate with a BSc (Hons) in
                          Information Technology, specializing in Software
                          Engineering, from the prestigious Sri Lanka Institute
                          of Information Technology (SLIIT).
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      className="education-card d-flex flex-row align-items-center"
                      style={{ background: "#E6E6FA" }}
                    >
                      <div className="education-img">
                        <img
                          src="https://res.cloudinary.com/nibmsa/image/upload/v1717943907/esoft-logo_vgbedz.png"
                          alt="Education"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginRight: "20px",
                            marginLeft: "20px",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontFamily: "times new roman",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          Esoft Metro Campus, Galle
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          2019 - 2020
                        </Card.Subtitle>
                        <Card.Text style={{ fontFamily: "times new roman" }}>
                          I have successfully completed a dual diploma in
                          Information Technology and English at ESOFT Metro
                          Campus.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      className="education-card d-flex flex-row align-items-center"
                      style={{ background: "#E6E6FA", marginTop: "20px" }}
                    >
                      <div className="education-img">
                        <img
                          src="https://res.cloudinary.com/nibmsa/image/upload/v1717944437/Progress-03_m1mgjt.png"
                          alt="Education"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginRight: "20px",
                            marginLeft: "20px",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontFamily: "times new roman",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          National Institute of Business Management, Galle
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          2017 - 2018
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>

                    <Card
                      className="education-card d-flex flex-row align-items-center"
                      style={{ background: "#E6E6FA", marginTop: "20px" }}
                    >
                      <div className="education-img">
                        <img
                          src="https://res.cloudinary.com/nibmsa/image/upload/v1717944719/images-removebg-preview_nljnvy.png"
                          alt="Education"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginRight: "20px",
                            marginLeft: "20px",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontFamily: "times new roman",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          GCE Advanced Level (2015 - 2017)
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Mahinda Rajapaksa College, Matara
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>

                    <Card
                      className="education-card d-flex flex-row align-items-center"
                      style={{ background: "#E6E6FA", marginTop: "20px" }}
                    >
                      <div className="education-img">
                        <img
                          src="https://res.cloudinary.com/nibmsa/image/upload/v1717944719/images-removebg-preview_1_swfgl2.png"
                          alt="Education"
                          style={{
                            width: "80px",
                            height: "80px",
                            marginRight: "40px",
                            marginLeft: "20px",
                          }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontFamily: "times new roman",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          GCE Ordinary Level (2015 - 2017)
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Godapitiya Central College, Akuressa
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
