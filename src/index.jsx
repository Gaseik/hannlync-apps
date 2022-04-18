import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { color } from "./style.jsx";
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, Tooltip, Collapse } from "@mui/material";
// import {Collapse} from '@material-ui/core';
import { makeStyles } from "@mui/styles";
import { contents_url, epg_url } from "./api.js";

import { IoBriefcaseOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

const ServesStyles = makeStyles({
  icon: {
    cursor: "pointer",
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    margin: "0 1rem",
    transition: "all .2s ease-in-out",
  },
  container: {
    position: "absolute",
    top: 55,
    // transition: "all .3s ease-in-out",
    right: 40,
  },
  pannel: {
    padding: "2rem",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    width: "300px",
    overflow: "hidden",
    minHeight: "360px",
    borderRadius: "4px",
    background: (props) => (props.color ? color.black : color.white),
    display: "flex",
    color: "#fff",
    fontSize: 12,
    position: "relative",
  },
  ser: {
    // border: "1px solid #000",
    width: "100%",
    height: "170px",
    borderRadius: "8px",
    color: props=>props.color?"#fff":"#858585",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    background: (props) =>
      props.color
        ? "linear-gradient(220.1deg, rgba(255, 255, 255, 0.04) 3.99%, rgba(255, 255, 255, 0.056) 115.92%)"
        : "linear-gradient(220.1deg, rgba(60, 60, 60, 0.04) 3.99%, rgba(0, 0, 0, 0.056) 115.92%)",
    fontSize: 14,
    cursor: "pointer",
    "& path": {
      stroke: (props) => (props.color ? "#fff" : "#858585"),
      fill: (props) => (props.color ? "#fff" : "#858585"),
    },
    "&:hover": {
      opacity: 0.7,
      transition: "all 0.3s ease-in-out",
    },
  },
  disSer: {
    borderRadius: "8px",
    width: "100%",
    height: "170px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 14,
    cursor: "",
    color: "#5e5e5e",
    transition: "all .3s ease-in-out",
  },
  disicon: {
    "& path": {
      fill: "#5e5e5e",
    },
  },
  sicon: {
    fontSize: 40,
    marginBottom: ".5rem",
  },
});

// const ServesStyles = () => ({
//   icon: css({
//     cursor: "pointer",
//     fontSize: 20,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "40px",
//     margin: "0 1rem",
//     transition: "all .2s ease-in-out",
//   }),
//   container: css({
//     position: "absolute",
//     top: 55,
//     // transition: "all .3s ease-in-out",
//     right: 40,
//   }),
//   pannel: css({
//     padding: "2rem",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
//     // width: "100%",
//     width: "300px",
//     overflow: "hidden",
//     minHeight: "360px",
//     // height:'100%',
//     // backgroundColor: "#fff",
//     borderRadius: "4px",
//     background: "#2F2F2F",
//     // opacity: (props) => (props.open ? 1 : 1),
//     // zIndex: (props) => (props.open ? 1 : 1),
//     // pointerEvents: (props) => (props.open ? "" : "none"),
//     display: "flex",
//     color: "#fff",
//     fontSize: 12,
//     position: "relative",
//   }),
//   ser: css({
//     // border: "1px solid #000",
//     width: "100%",
//     height: "170px",
//     borderRadius: "8px",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     textDecoration: "none",
//     background:
//       "linear-gradient(220.1deg, rgba(255, 255, 255, 0.04) 3.99%, rgba(255, 255, 255, 0.056) 115.92%)",
//     fontSize: 14,
//     cursor: "pointer",
//     "& path": {
//       stroke: "#fff",
//     },
//     "&:hover": {
//       opacity: 0.7,
//       transition: "all 0.3s ease-in-out",
//     },
//   }),
//   disSer: css({
//     borderRadius: "8px",
//     width: "100%",
//     height: "170px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     fontSize: 14,
//     cursor: "",
//     color: "#5e5e5e",
//     transition: "all .3s ease-in-out",
//   }),
//   disicon: css({
//     "& path": {
//       fill: "#5e5e5e",
//     },
//   }),
//   sicon: css({
//     fontSize: 40,
//     marginBottom: ".5rem",
//   }),
// });

function Serves({ open, set, color, navbar }) {
  // const [openss, setss] = useState(false);

  const [serves, setServers] = React.useState([
    {
      name: "EPG",
      icon: EPG,
      id: "epg",
      disable: false,
      url: epg_url,
    },
    {
      name: "Contents",
      id: "contents",
      icon: Contents,
      disable: false,
      url: contents_url,
    },
    {
      name: "Public Metaverse",
      icon: Meta,
      disable: true,
    },

    {
      name: "Maneged Serves",
      icon: IoBriefcaseOutline,
      disable: true,
    },
    {
      name: "Mercury",
      icon: Mercury,
      disable: true,
    },
  ]);
  const classes = ServesStyles({ color: color });

  React.useEffect(() => {
    serves.forEach((s, index) => {
      if (window.location.hostname.includes(s.id)) {
        setServers(serves.filter((se) => se.id !== s.id));
      }
    });
  }, []);
  const handle = (e) => {
    e.stopPropagation();
    if (open === "servers") {
      set(false);
    } else {
      set("servers");
    }
  };

  return (
    <div>
      <Tooltip title="Hannlync Apps">
        <div className={classes.icon}>
          <CgMenuGridO
            fontSize={24}
            color={!color ? "#000" : "#fff"}
            onClick={handle}
          />
        </div>
      </Tooltip>
      <div className={classes.container}>
        <Collapse in={open === "servers"}>
          {/* {open ? ( */}
          <div
            className={classes.pannel}
            onClick={(e) => {
              e.stopPropagation();
              set("serves");
            }}
          >
            <Grid container spacing={3}>
              {serves.map((s) => (
                <Grid item xs={6} key={s.name}>
                  {s.disable ? (
                    <div className={classes.disSer}>
                      <div className={`${classes.sicon} ${classes.disicon}`}>
                        {" "}
                        <s.icon fill="#5e5e5e" />
                      </div>

                      <div className={classes.title}>{s.name}</div>
                    </div>
                  ) : (
                    <a
                      className={classes.ser}
                      href={"https://epg.dev.hannlync.com"}
                    >
                      <div className={classes.sicon}>
                        {" "}
                        <s.icon />
                      </div>
                      <div className={classes.title}>{s.name}</div>
                    </a>
                  )}
                </Grid>
              ))}
            </Grid>
          </div>
          {/* ) : null} */}
        </Collapse>
      </div>
    </div>
  );
}

export default Serves;

const Meta = (props) => {
  return (
    <svg
      width={48}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.304.403H2.456A2.381 2.381 0 0 0 .091 2.768v23.79c0 1.339 1.071 2.41 2.365 2.41h11.917a4.756 4.756 0 0 0 4.33-2.812l2.053-4.597c.58-1.294 1.785-2.143 3.08-2.143 1.294 0 2.5.804 3.08 2.143l2.052 4.597a4.756 4.756 0 0 0 4.33 2.812h11.917a2.381 2.381 0 0 0 2.365-2.366V2.768C47.67 1.474 46.6.403 45.305.403ZM12.008 18.256a4.781 4.781 0 0 1-4.776-4.776 4.781 4.781 0 0 1 4.776-4.775 4.781 4.781 0 0 1 4.776 4.775c0 2.634-2.187 4.776-4.776 4.776Zm23.79 0a4.781 4.781 0 0 1-4.776-4.776c0-2.633 2.142-4.73 4.775-4.73a4.781 4.781 0 0 1 4.776 4.775c0 2.633-2.142 4.731-4.776 4.731Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

const Mercury = (props) => {
  return (
    <svg
      width={50}
      height={47}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="#C4C4C4">
        <path d="m40.976 12.694 8.693-8.942-1.641-1.593-8.693 8.881 1.641 1.654ZM8.879 34.315l.547.919.182.245 1.52-1.532-.122-.183-.547-.919C9 30.211 8.149 27.21 7.967 24.209c-.061-1.164 0-2.389.121-3.553.547-4.47 2.493-8.452 5.654-11.637 3.16-3.185 7.173-5.145 11.55-5.696 1.154-.123 2.31-.184 3.525-.123 3.1.184 6.08 1.042 8.693 2.512l.912.55.121.062 1.52-1.592-.243-.123-.912-.551C35.443 1.975 31.431.934 27.298.995l-.122-.06-.122.122a21.69 21.69 0 0 0-14.771 6.43c-3.952 3.982-6.2 9.25-6.383 14.884l-.122.123.122.122a21.948 21.948 0 0 0 2.979 11.699ZM47.785 13.919a7.344 7.344 0 0 0-.487-.98l-.121-.306-1.58 1.592.06.123c.182.306.304.673.425.98.851 2.082 1.398 4.349 1.52 6.615v.857c.06 5.451-2.006 10.535-5.775 14.332-3.769 3.798-8.693 5.82-13.981 5.82h-1.033c-2.25-.123-4.499-.613-6.627-1.532-.303-.123-.668-.306-.972-.429l-.122-.061-1.58 1.593.304.122c.364.184.668.367.972.49 2.918 1.347 6.018 1.96 9.058 1.96a22.165 22.165 0 0 0 15.562-6.431c6.383-6.37 8.145-16.354 4.377-24.745Z" />
        <path d="m17.997 36.214-1.64-1.654-7.903 8.085-6.505-7.105-1.702 1.593 6.565 7.166v.06l1.398 1.41.244.183v.062l1.398-1.41.243-.244 7.902-8.146ZM34.105 30.273h2.614l2.128-9.249c.303-1.225.303-2.205.06-2.94a3.113 3.113 0 0 0-.547-.98c-.304-.306-.608-.551-1.094-.735a9.933 9.933 0 0 0-.669-.183 9.14 9.14 0 0 0-1.398-.123h-.364c-.79.061-1.581.245-2.31.551-.851.368-1.642.919-2.371 1.654-.183-.613-.486-1.041-.79-1.409-.608-.551-1.52-.796-2.675-.796-1.034 0-2.067.245-2.979.796-.547.306-1.216.796-1.945 1.47l.425-1.96h-2.492l-3.16 13.965h2.491l1.642-7.411c.425-1.776 1.094-3.001 2.006-3.736.912-.674 1.884-1.042 2.796-1.042 1.034 0 1.702.307 1.945.98.122.43.122 1.103-.121 2.083l-.73 3.307-.547 2.45-.243 1.103-.486 2.205h2.553l.73-3.246.546-2.39.243-1.102.305-1.347c.121-.49.243-.919.425-1.286l2.25-2.328c.607-.245 1.215-.429 1.823-.429h.365c.243 0 .486.062.668.123.243.061.426.184.608.367.182.123.243.307.365.49.121.368.121.797 0 1.41l-2.067 9.738Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            transform="translate(.247 .934)"
            d="M0 0h49.543v45.08H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const EPG = (props) => {
  return (
    <svg
      width={40}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.8 0h-28C2.6 0 0 2.585 0 5.77v18.46C0 27.416 2.599 30 5.8 30h28c3.201 0 5.8-2.585 5.8-5.77V5.77C39.6 2.584 36.993 0 33.8 0Zm-7.588 15.977-9.282 5.77a1.145 1.145 0 0 1-1.176.03 1.145 1.145 0 0 1-.595-1.008V9.231c0-.423.232-.808.596-1.008.371-.2.82-.192 1.175.03l9.282 5.77c.34.208.541.577.541.977s-.2.761-.541.977Z"
        fill="#fff"
      />
    </svg>
  );
};

const Contents = (props) => {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 16v10.984C6.074 26.675 1.325 21.925 1.016 16H12Z"
        stroke="#1D1D1D"
        strokeWidth={2}
      />
      <path
        d="M16 1h10.984C26.672 6.924 21.924 11.672 16 11.984V1Z"
        stroke="#0090FD"
        strokeWidth={2}
      />
      <path
        d="M1.041 12C1.522 6.17 6.171 1.522 12 1.041V12H1.041ZM16 16h10.984c-.312 5.924-5.06 10.672-10.984 10.984V16Z"
        stroke="#1D1D1D"
        strokeWidth={2}
      />
    </svg>
  );
};
