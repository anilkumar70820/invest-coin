import React, { useState } from 'react'
import header_logo from '../assets/images/svg/header_logo.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import instagram from '../assets/images/svg/mdi_instagram.svg'
import telegram from '../assets/images/svg/la_telegram.svg'
import whatsapp from '../assets/images/svg/fa_whatsapp.svg'

const Hero = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
  
    return (
        <section className='hero_bg py-5'>
            <header className='mt-lg-4'>
                <Container>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <img className='me-sm-5 pe-sm-5 me-2 cursor_pointer' src={header_logo} alt="logo" />
                            <ul className={`${showNavbar ? 'd-flex align-items-center gap-5 mb-0 nav_sm' : 'd-flex align-items-center gap-5 mb-0 nav_sm nav_show p-0'} `}>
                                <li className='me-4'><Link onClick={() => setShowNavbar(true)} className='ff_open_sans fs_2xmd text_ffffff fw-light Link'>Особенности</Link></li>
                                <li className='me-4'><Link onClick={() => setShowNavbar(true)} className='ff_open_sans fs_2xmd text_ffffff fw-light Link'>Отзывы</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='ff_open_sans fs_2xmd text_ffffff fw-light Link'>Инвестиция</Link></li>
                                <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                            </ul>
                        </div>
                        <div>
                            <a className='me-3' href="https://instagram.com"><img className='social_media_app' src={instagram} alt="instagram" /></a>
                            <a className='me-3' href="https://telegram.com"><img className='social_media_app' src={telegram} alt="telegram" /></a>
                            <a href="https://whatsapp.com"><img className='social_media_app' src={whatsapp} alt="whatsapp" /></a>
                        </div>
                        <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <Container className='my-lg-5 py-lg-5'>
                <Row>
                    <Col lg={6}>
                    </Col>
                    <Col lg={6}>
                        <h3 className='ff_open_sans fs_md fw-normal text_8093F6 mb-3'>Лучший проект</h3>
                        <h1 className='ff_open_sans fs_2xl fw-bolder text_ffffff mb-3'>Крипто
                            <span className='d-block text_8093F6'>Инвестиции</span> </h1>
                        <p className='ff_open_sans fs_md fw-normal text_ffffff mb-4'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                        <div className='mb-5'>
                            <button className='ff_open_sans fs_3xmd fw-bold text_ffffff join_btn me-sm-5 me-0  mb-4'>Присоединиться</button>
                            <button className='ff_open_sans fs_3xmd fw-bold text_252B42 more_btn d-inline-block'>Подробнее</button>
                        </div>
                        <div className='d-flex align-items-sm-center flex-column flex-sm-row'>
                            <div className='d-flex me-sm-5 me-0 align-items-center mb-3 mb-sm-0'>
                                <h2 className='ff_open_sans fw-bold text_8093F6 fs_xl mb-0 me-2'>330</h2>
                                <p className='ff_open_sans fs_2xsm fw-normal text_8093F6 mb-0'>Довольных
                                    <span className='d-block'>клиентов</span></p>
                            </div>
                            <div className='d-flex ps-0 ps-sm-4 align-items-center'>
                                <h2 className='ff_open_sans fw-bold text_8093F6 fs_xl mb-0 me-2'>360K</h2>
                                <p className='ff_open_sans fs_2xsm fw-normal text_8093F6 mb-0'>заработанных
                                    <span className='d-block'>долларов</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero