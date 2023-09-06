import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

import { useState } from "react";
import RentalHeader from "components/Headers/RentalHeader.js";

import Checkbox from "@mui/material/Checkbox";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
  
  const Rentals = () => {

    const [prodropdownOpen, setproDropdownOpen] = React.useState(false);
    const [bankdropdownOpen, setbankDropdownOpen] = React.useState(false);
    const [userdropdownOpen, setuserDropdownOpen] = React.useState(false);

    const toggle1 = () => setproDropdownOpen(prevState => !prevState);
    const toggle2 = () => setbankDropdownOpen(prevState => !prevState);
    const toggle3 = () => setuserDropdownOpen(prevState => !prevState);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (e) => {
        // setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

    return (
      <>
        <RentalHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">New Property</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button> */}
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Property information
                    </h6>
                    <div className="pl-lg-4">
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label
                                    className="form-control-label"
                                    htmlFor="input-property"
                                    >
                                    What is the property type? 
                                    </label><br/>
                                    <Dropdown isOpen={prodropdownOpen} toggle={toggle1} >
                                        <DropdownToggle caret style={{ width: '150px'}}>Select &nbsp;&nbsp;&nbsp;&nbsp;</DropdownToggle>
                                        <DropdownMenu style={{ width: '200px'}}>
                                            <DropdownItem header style={{ color: 'blue'}}>Residential</DropdownItem>
                                            <DropdownItem>Townhome</DropdownItem>
                                            <DropdownItem>Multi-family</DropdownItem>
                                            <DropdownItem>Single-family</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem header style={{ color: 'blue'}}>Commercial</DropdownItem>
                                            <DropdownItem>Industrial</DropdownItem>
                                            <DropdownItem>Office</DropdownItem>
                                            <DropdownItem>Retail</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label
                                    className="form-control-label"
                                    htmlFor="input-address"
                                    >
                                    What is the street address?
                                    </label><br/>
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-address"
                                        >
                                        Address
                                        </label>
                                        <Input
                                        className="form-control-alternative"
                                        id="input-address"
                                        placeholder="Address"
                                        type="text"
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="New York"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="United States"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                            
                      
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Owner information
                    </h6>
                    <div className="pl-lg-4">
                    
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Who is the property owner?
                            </label><br/>
                            <label className="label2" style={{fontSize:'0.7rem'}}>This information wiil be used to help prepare owner drawns and 1099s.</label><br/>
                            <span
                                onClick={handleClickOpen}
                                style={{
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontFamily:'monospace',
                                color: 'blue'
                                }}
                            >
                            <b style={{fontSize:'20px'}}>+</b> Add rental owner
            
                            </span>
                            <Dialog open={open} onClose={handleClose}>
                            <DialogTitle style={{ background: '#F0F8FF' }}>Add rental owner</DialogTitle>
                                <DialogContent style={{ width: '100%', maxWidth: '500px'}}>
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0' }}>
                                    <Checkbox onClick={handleChange} style={{ marginRight: '10px' }} /> 
                                    <span>Choose an existing rental owner</span>
                                    </div>

                                    <div className="formInput" style={{ margin: '10px 10px' }}>
                                    <label className="label" style={{ fontFamily: 'monospace', fontSize: '14px' }}>NAME *</label><br />
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="text"
                                        placeholder='First'
                                        style={{ marginRight: '10px', flex: 1 }} // Adjust flex property
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="text"
                                        placeholder='Last'
                                        style={{ flex: 1 }} // Adjust flex property
                                    />
                                    </div>

                                    <div className="formInput" style={{ margin: '30px 10px' }}>
                                        <label className="label" style={{ fontFamily: 'monospace', fontSize: '14px' }}>COMPANY NAME</label><br />
                                        <TextField
                                            id="standard-multiline-static"
                                            className="popinput"
                                            variant="standard"
                                            type="text"
                                            style={{ marginRight: '10px', flex: 1 }} // Adjust flex property
                                        />
                                        <Checkbox onClick={handleChange} style={{ marginRight: '10px' }} /> 
                                        <span>Company</span>
                                    </div>
                                    <div className="formInput" style={{margin:'30px 10px'}}>
                                    <label className="label" style={{fontFamily:'monospace', fontSize:'14px'}}>PRIMARY EMAIL</label><br/>
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="text"
                                        style={{marginRight:'10px',marginTop:'5px',flex:1}}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    </div>
                                    <div className="formInput" style={{margin:'30px 10px'}}>
                                    <label className="label" style={{fontFamily:'monospace', fontSize:'14px'}}>PHONE NUMBERS</label><br/>
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="number"
                                        style={{marginBottom:'30px',marginRight:'10px',marginTop:'5px',flex:1   }}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="number"
                                        style={{marginBottom:'30px',marginRight:'10px',flex:1}}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        className="popinput"
                                        variant="standard"
                                        type="number"
                                        style={{marginBottom:'10px',marginRight:'10px',flex:1}}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <BusinessIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleClose}>Add</Button>
                                </DialogActions>
                            </Dialog>
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="New York"
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="United States"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row> */}
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Bank Account Details
                    </h6>
                    <div className="pl-lg-4">
                                <label
                                    className="form-control-label"
                                    htmlFor="input-property"
                                    >
                                    What is the property's primary bank account? 
                                    </label><br/>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    
                                    <label
                                    className="form-control-label"
                                    htmlFor="input-account"
                                    >
                                    Operating Account
                                    </label><br/>
                                    <Dropdown isOpen={bankdropdownOpen} toggle={toggle2} >
                                        <DropdownToggle caret style={{ width: '150px'}}>Select &nbsp;&nbsp;&nbsp;&nbsp;</DropdownToggle>
                                        <DropdownMenu style={{ width: '200px'}}>
                                            <DropdownItem>JPMorgan Chase Bank</DropdownItem>
                                            <DropdownItem>Bank of America</DropdownItem>
                                            <DropdownItem>Wells Fargo Bank</DropdownItem>
                                            <DropdownItem>Citibank</DropdownItem>
                                            <DropdownItem>U.S.Bank</DropdownItem>
                                            <DropdownItem>Capital One</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label
                                    className="form-control-label"
                                    htmlFor="input-address"
                                    >
                                    Property Reserve
                                    </label><br/>
                                    <FormGroup>
                                        <Input
                                        className="form-control-alternative"
                                        id="input-reserve"
                                        placeholder="$0.00"
                                        type="number"
                                        />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Who will be the primary manager of this property?
                            </label><br/>
                            <label className="label2" style={{fontSize:'0.7rem'}}>If the staff member has not yet been added as a user in your account,they can be added to the account,then as the manager later through the property's summary details.</label><br/>
                            <label
                                    className="form-control-label"
                                    htmlFor="input-address"
                                    >
                                    Manager (Optional)
                                    </label><br/>
                                    <FormGroup>
                                    <Dropdown isOpen={userdropdownOpen} toggle={toggle3} >
                                        <DropdownToggle caret style={{ width: '100%'}}>Select a staff member.. &nbsp;&nbsp;</DropdownToggle>
                                        <DropdownMenu style={{ width: '200px'}}>
                                            <DropdownItem>John Deo</DropdownItem>
                                            <DropdownItem>Noa Jonas</DropdownItem>
                                            <DropdownItem>James Mary</DropdownItem>
                                            <DropdownItem>Richard   Susan</DropdownItem>
                                            <DropdownItem>Thomas Sarah</DropdownItem>
                                            <DropdownItem>Charles Lisa</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    


                    
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    {/* <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Rentals;
  