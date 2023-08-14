import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/png/logo.png'
import { Link } from 'react-router-dom'
import up_arrow from '../assets/images/svg/Up arrow.svg'

const Footer = () => {
    return (
        <footer className='bg_252B42 py-5'>
            <Container className='py-lg-5'>
                <Row>
                    <Col lg={6} className='mb-5 mb-lg-0'data-aos="fade-down"data-aos-duration="2000"data-aos-delay="500">
                        <div className=' d-flex flex-column flex-sm-row'>
                            <div className='me-5 pe-3 mb-sm-0 mb-4'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                <p className='ff_jost fw-normal text_ffffff fs_xmd'>123 Market St. #22B
                                    <span className='d-lg-block'>Charlottesville, California</span> 44635</p>
                                <p className='ff_poppins fw-normal text_ffffff fs_2xsm mb-0 ex_page'>contact@exmpl.page</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-down"data-aos-duration="2000"data-aos-delay="400">
                        <Row>
                            <Col col={4}  className='d-flex justify-content-lg-end'>
                                <ul>
                                    <li><Link className='footer_links Link'>About</Link></li>
                                    <li><Link className='footer_links Link'>Growers</Link></li>
                                    <li><Link className='footer_links Link'>Merchants</Link></li>
                                    <li><Link className='footer_links Link'>Partners</Link></li>
                                    <li><Link className='footer_links Link'>Contact</Link></li>
                                </ul>
                            </Col>
                            <Col col={4} className='d-flex justify-content-lg-end'>
                                <ul>
                                    <li><Link className='footer_links Link'>Facebook</Link></li>
                                    <li><Link className='footer_links Link'>Telegram</Link></li>
                                    <li><Link className='footer_links Link'>Watsapp</Link></li>
                                    <li><Link className='footer_links Link'>Instagram</Link></li>
                                </ul>
                            </Col>
                            <Col col={4} className='d-flex justify-content-sm-end justify-content-center'>
                                <div className='cursor_pointer'><img src={up_arrow} alt="up-arwow" /></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <p className='ff_poppins fs_3xsm text_ffffff fw-normal text-center mt-5 opacity-75 pt-lg-5'data-aos="fade-up"data-aos-duration="2000"data-aos-delay="600">© 2022 Invest Coin. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer