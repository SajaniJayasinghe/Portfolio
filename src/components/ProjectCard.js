import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  subdescription,
  githubLink,
}) => {
  return (
    <Col size={18} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span style={{ display: "block" }}>{description}</span>
          <span style={{ display: "block" }}>{subdescription}</span>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button
                style={{
                  backgroundColor: "#151B54",
                  borderColor: "#151B54",
                  marginTop: "10px",
                }}
              >
                View
              </Button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
