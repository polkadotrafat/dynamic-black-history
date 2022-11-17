import React, { Component } from "react";
import "./Create.scss";
import "mdbreact/dist/css/mdb.css";
import { MDBFile } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

class Create extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      description: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    console.log(this.state.description);
  };
  render() {
    const myStyle = {
      background: "white",
      color: "black",
      borderRadius: "10px",
    };
    return (
      <div className="main">
        <div className="rn-breadcrumb-inner ptb--30">
          <div className="container1">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <h4 cclassName="pageTitle text-center text-md-start">
                  Create New Proposal
                </h4>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ul className="breadcrumb-list">
                  <li className="item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="separator">
                    <Icon.ChevronRight />
                  </li>
                  <li className="item current">Create New Proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6" style={{ color: "yellow" }}>
              <div className="container ">
                <form>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="name"
                      style={{ color: "yellow" }}
                    >
                      Name
                    </label>
                    <textarea
                      style={myStyle}
                      id="name"
                      rows="1"
                      cols="30"
                      placeholder="Your Name"
                      name="name"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="email"
                      style={{ color: "yellow" }}
                    >
                      Email
                    </label>
                    <textarea
                      style={myStyle}
                      id="email"
                      rows="1"
                      cols="30"
                      placeholder="Your Email"
                      name="email"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      className="form-label"
                      htmlFor="Telnumber"
                      style={{ color: "yellow" }}
                    >
                      Phone Number
                    </label>
                    <textarea
                      style={myStyle}
                      id="name"
                      rows="1"
                      cols="40"
                      placeholder=" Your Phone Number"
                      name="phone number"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div
                className="upload-formate "
                style={{ color: "yellow", marginLeft: "10px" }}
              >
                <strong>Upload Asset file</strong>

                <span> (Drag or choose a file to upload)</span>
              </div>
              <div
                className="upload-area  ml-2"
                style={{
                  border: "dashed",
                  backgroundColor: "black",
                  marginLeft: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="upload"
                  style={{ color: "red", fontWeight: "Bold", fontSize: "20px" }}
                >
                  <Icon.Upload />
                  <MDBFile label="Choose a Cover/NFT" id="customFile" />
                </div>
                <span>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb</span>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4 "
              style={{
                background: "black",
                color: "yellow",
                maxWidth: "470px",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <Box component="form" onClick={this.handleClick}>
                <label htmlFor="name" className="form-label mb-3">
                  Title
                </label>
                <textarea
                  onChange={this.handleChange}
                  style={myStyle}
                  id="title"
                  rows="1"
                  cols="48"
                  placeholder="Format: `Name_Date_Historian-Initials.Org`"
                  name="title"
                ></textarea>
                <label htmlFor="Description" className="form-label mb-3 mt-5">
                  Description
                </label>
                <textarea
                  onChange={this.handleChange}
                  id="description"
                  rows="6"
                  cols="48"
                  style={{ backgroundColor: "darkgrey", borderRadius: "10px" }}
                  placeholder="e.g. “Martin Luther King Jr. was a social activist and Baptist minister who played a key role in the American civil rights movement from the mid-1950s until his assassination in 1968.”"
                  name="description"
                ></textarea>
                <div className="btn-group">
                  <button
                    className="btn btn-large  btn-space  mt-5"
                    type="submit"
                    data-btn="preview"
                    style={{
                      margin: "5px 35px 5px 0px ",
                      borderRadius: "10px",
                      backgroundColor: "rgb(63, 66, 87)",
                    }}
                  >
                    <span>Preview</span>
                  </button>{" "}
                  <button
                    onClick={this.handleClick}
                    className="btn btn-large btn-primary btn-space  mt-5 "
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      margin: "5px 0px 5px 0px ",
                      width: "250px",
                    }}
                  >
                    <span>Make Proposal</span>
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
