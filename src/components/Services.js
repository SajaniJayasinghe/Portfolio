import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Services = () => {
  return (
    <section className="services" id="services">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2
                style={{
                  marginBottom: "40px",
                  marginTop: "50px",
                  textAlign: "center",
                  fontSize: "45px",
                  fontWeight: "700",
                }}
              >
                Services
              </h2>
              <Row className="justify-content-center">
                <Col md={4}>
                  <Card
                    className="services-card d-flex flex-row align-items-center"
                    style={{
                      background: "#CCCCFF",
                      marginBottom: "100px",
                      textAlign: "center",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontFamily: "times new roman",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <div className="services-img">
                          <img
                            src="https://res.cloudinary.com/nibmsa/image/upload/v1717957285/setting_prmw3m.png"
                            alt="services"
                            style={{
                              width: "100px",
                              height: "100px",
                              marginRight: "30px",
                              marginLeft: "30px",
                            }}
                          />
                        </div>
                        Backend Development
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    className="services-card d-flex flex-row align-items-center"
                    style={{
                      background: "#CCCCFF",
                      marginBottom: "30px",
                      textAlign: "center",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontFamily: "times new roman",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <div className="services-img">
                          <img
                            src="https://res.cloudinary.com/nibmsa/image/upload/v1717957663/images__1_-removebg-preview_1_yesftr.png"
                            alt="services"
                            style={{
                              width: "100px",
                              height: "100px",
                              marginRight: "30px",
                              marginLeft: "30px",
                            }}
                          />
                        </div>
                        Frontend Development
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
