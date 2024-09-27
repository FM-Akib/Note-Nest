import { Parallax } from "react-parallax";
import image4 from "../../assets/Dedicated.png";
import image3 from "../../assets/DedicatedMobile.png";
import { useState } from "react";
import { useEffect } from "react";
const Dedicated = () => {
  const [bgImage, setBgImage] = useState(image4); 
  const [bgHeightWidth, setbgHeightWidth] = useState(500); 

  useEffect(() => {
      const handleResize = () => {
         
          if (window.innerWidth < 768) { 
              setBgImage(image3); 
              setbgHeightWidth(200)
          } else {
              setBgImage(image4); 
              setbgHeightWidth(500)

          }
      };

     
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []); 

  const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
  };

  return (
      <Parallax
          className="my-20 bg-cover bg-center"
          bgImage={bgImage} 
          strength={200}
          renderLayer={(percentage) => (
              <div>
                  <div
                      style={{
                          position: "absolute",
                          background: `rgba(91, 6, 3, ${percentage * 1})`,
                          left: "50%",
                          top: "50%",
                          borderRadius: "50%",
                          transform: "translate(-50%,-50%)",
                          width: percentage * bgHeightWidth,
                          height: percentage * bgHeightWidth
                      }}
                  />
              </div>
          )}
      >
          <div style={{ height: 500 }}>
              <div style={insideStyles}>
                  <p>Dedicated to</p>
                  <h2 className="font-extrabold text-2xl">16 JULY</h2>
                  <p>IIUC&apos;s Strike</p>
              </div>
          </div>
      </Parallax>
  );
};

export default Dedicated;