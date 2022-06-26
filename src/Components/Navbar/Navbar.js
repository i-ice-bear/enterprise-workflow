import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function Navbar(props) {
  const [navbarForm, setNavbarForm] = React.useState(false);
  const [navbarText, setNavbarText] = React.useState('light');
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 300) {
      setNavbarForm(true);
      setNavbarText("dark")
      console.log("state changes of navbar ");
    } else {
      setNavbarForm(false);
      setNavbarText("light")
      console.log("state changes of navbar into default");
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav
        className={
          navbarForm
            ? `navbar fixed-top navbar-light active`
            : `navbar navbar-light fixed-top`
        }
        id="mainNav"
      >
        <div className="container-fluid">
          <div className="navbar-brand-container">
            <a
              className={
                navbarForm
                  ? `navbar-brand text-${navbarText}`
                  : `navbar-brand`
              }
              href="#"
            >
              BL Envirotech
            </a>
          </div>
          <div className="d-flex" id="button-onset-container">
            <ul className="navbar-nav d-flex" id="main-nav-uppersection">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    props.mode === "dark"
                      ? `text-light active nav-link`
                      : `text-dark active nav-link`
                  }
                  
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={
                    navbarForm ? ` nav-link active` : ` nav-link active`
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/team"
                  className={
                    navbarForm ? `nav-link active` : ` nav-link active`
                  }
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Button
                  variant="contained"
                  id="nav-btn"
                >
                  Get started
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0"
                      height="0"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </span>
                </Button>
              </li>
              <li className="nav-link">
                <FormControlLabel
                  id="switch-set-dark-mode"
                  onClick={props.darkModeToggle}
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </li>
            </ul>
            <button
              className="navbar-toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div
              className={`offcanvas-header bg-${props.mode}`}
              style={{ border: "none" }}
            >
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className={`offcanvas-body bg-${props.mode}`}
              style={{ border: "none" }}
            >
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      props.mode === "dark"
                        ? `text-light active nav-link`
                        : `text-dark active nav-link`
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/projects"
                    className={
                      props.mode === "dark"
                        ? `text-light active nav-link`
                        : `text-dark active nav-link`
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/i-ice-bear/enterprise-workflow"
                    className={
                      props.mode === "dark"
                        ? `text-light active nav-link`
                        : `text-dark active nav-link`
                    }
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <Button
                    style={{ padding: "15px 15px" }}
                    variant="contained"
                    className={
                      props.mode === "dark"
                        ? `text-light active nav-link`
                        : `text-dark active nav-link`
                    }
                    id="nav-btn"
                  >
                    Get started
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0"
                        height="0"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </span>
                  </Button>
                </li>
                <li className="nav-link">
                  <FormControlLabel
                    id="switch-set-dark-mode"
                    onClick={props.darkModeToggle}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
