import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src=" https://res.cloudinary.com/nibmsa/image/upload/v1717932221/nodejs_asoium.png"
                    alt="Node JS"
                  />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717933058/React_bmdl7u.png"
                    alt="React JS"
                  />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717933758/js_eclcrg.png"
                    alt="JavaScript"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934373/images_acaow0.png"
                    alt="TypeScript"
                  />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717933058/React_bmdl7u.png"
                    alt="React Native"
                  />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934766/1720090_wiwrae.webp"
                    alt="Flutter"
                  />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934845/mongodb_ivzwxr.png"
                    alt="MongoDB"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934926/unnamed_brezch.png"
                    alt="Express"
                  />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717935696/176-1766942_our-github-repos-are-here-github-icon-hd-removebg-preview_nwjat2.png"
                    alt="Git"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717935148/Firebase_icon.svg_axifdx.png"
                    alt="Firebase"
                  />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717935224/css-3-icon_kagc9h.png"
                    alt="CSS"
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717935295/azure-v2_ycfbx6.svg"
                    alt="Azure"
                  />
                  <h5>Azure</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934052/java_wmniwz.webp"
                    alt="Java"
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934207/boostrap_lnzzqu.png"
                    alt="Bootstrap"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934461/c_rlcckb.png"
                    alt="C++"
                  />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1717934618/4943029_fatgbe.png"
                    alt="HTML"
                  />
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background Image"
      />
    </section>
  );
};
