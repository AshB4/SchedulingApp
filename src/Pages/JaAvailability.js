import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LoginCard from '../Components/LoginCard';
import flagBack from '../Imgs/BGD.png';
import flagLogo from '../Imgs/Logo.png' ;

const JaAvailability = () => {
  return (
    <div>
      {/* Background Flag logo */}
      <div
        style={{
          display: "flex",
          margin: "-10px",
          flexDirection: "row",
          backgroundSize: "cover",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "30vw",
            backgroundColor: "#002B49", //Sparq Color add here
            padding: "114px 64px 96px 64px",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <div
                style={{
                  flexGrow: "1",
                  height: "200px",
                  backgroundImage: `url(${flagLogo})`,
                  display: "flex",
                  position: "top",
                  flexDirection: "column",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  justifyContent: "center",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                alignItems: "flex-start",
                flexDirection: "column",
                textAlign: "left",
                fontFamily: "sans-serif",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  color: "white",
                  fontFamily: "sans-serif !important",
                  fontSize: "48px ",
                  marginLeft: "left",
                }}
              >
                JA Availability
              </p>

              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <p
                  style={{
                    display: "flex",
                    color: "white",
                    fontFamily: "Inter , sans-serif",
                    fontSize: "16px",
                    marginTop: "0",
                    marginBottom: "0",
                    alignItems: "flex-start",
                    flexGrow: "1",
                  }}
                >
                  Welcome to the JA Availability application. This will allow
                  users to see how many JA's are available broken down by time
                  blocks for optimal scheduling.
                </p>
              </div>
              <div style={{ height: "200px" }}></div>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    float: "right",
                    textAlign: "right",
                  }}
                >
                  APP. VERSION 1.0.0{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexGrow: "1",
            backgroundImage:`url(${flagBack})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "480px",
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "15px",
              border: "0px solid black",
              boxShadow: " 0px 10px 15px -3px grey",
            }}
          >
     {/* <Authenticator>
     </Authenticator> */}
    <LoginCard></LoginCard>
          </div>
        </div>
      </div>
    </div>
  );
};


export default JaAvailability;
