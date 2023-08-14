import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import coin_calender from '../assets/images/svg/coin_calender.svg'
import experience from '../assets/images/svg/experience.svg'
import transprecy from '../assets/images/svg/transprecy.svg'
import invest_coin_laptop from '../assets/images/png/invest_coin_laptop.png'
import coin_img_1 from '../assets/images/png/invest_coin_img_1.png'
import coin_img_2 from '../assets/images/png/invest_coin_img_2.png'
import coin_img_3 from '../assets/images/png/invest_coin_img_3.png'
import boy_image from '../assets/images/png/invest_coin_boy_img.png'
import girl_image from '../assets/images/png/invest_coin_girl_img.png'
import girl_image_2 from '../assets/images/png/invest_coin_girl_img_2.png'
import play_btn from '../assets/images/svg/play_btn.svg'
import Slider from 'react-slick'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InvestCoin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const center = {
        dots: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 2.37,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className='py-5'>
            <Container className='pb-lg-5 mb-lg-4 pt-lg-4'>
                <h2 className='text-center mb-4 pb-1 ff_open_sans fw-normal text_252B42 fs_2xlg mt-lg-5' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">Как “Invest Coin” работает? </h2>
                <p className='text-center ff_open_sans fw-normal text_222B32 fs_md mb-5 pb-5' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Invest Coin - это команда оптыных инвесторов, аналитиков и программистов. <span className='d-lg-block'>Мы работаем на площадках криптовалют (и не только) уже более 4 года и</span> имеем конкурентоспособное портфолио. Все встречи, общения и <span className='d-lg-block'>договоренности с нашими партнерами (клиентами) проходят в прозрачной</span> форме.</p>
                <Row>
                    <Col lg={4} sm={6} xs={12} className='d-flex flex-column justify-content-center' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        <div className='invest_cards'>
                            <div className='d-flex justify-content-center mb-3'>
                                <img src={coin_calender} alt="coin" />
                            </div>
                            <h2 className='ff_open_sans fs_3xmd fw-bold text_252B42 text-center mb-4'>Надежность</h2>
                            <p className='ff_open_sans fs_sm fw-normal text_222B32 text-center'>Slate helps you see how
                                <span className='d-lg-block'> many more days you need</span>
                                <span className='d-lg-block'> to work to reach your</span>
                                financial goal.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={12} className='d-flex flex-column justify-content-center' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
                        <div className='invest_cards'>
                            <div className='d-flex justify-content-center mb-3'>
                                <img src={experience} alt="coin" />
                            </div>
                            <h2 className='ff_open_sans fs_3xmd fw-bold text_252B42 text-center mb-4'>Опыт</h2>
                            <p className='ff_open_sans fs_sm fw-normal text_222B32 text-center'>Slate helps you see how
                                <span className='d-lg-block'> many more days you need</span>
                                <span className='d-lg-block'> to work to reach your</span>
                                financial goal.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} xs={12} className='d-flex flex-column justify-content-center' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        <div className='invest_cards'>
                            <div className='d-flex justify-content-center mb-3'>
                                <img src={transprecy} alt="coin" />
                            </div>
                            <h2 className='ff_open_sans fs_3xmd fw-bold text_252B42 text-center  mb-4'>Прозрачность</h2>
                            <p className='ff_open_sans fs_sm fw-normal text_222B32 text-center'>Slate helps you see how
                                <span className='d-lg-block'> many more days you need</span>
                                <span className='d-lg-block'> to work to reach your</span>
                                financial goal.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Slider {...center}>
                <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" className='px-5 py-5' src={coin_img_1} alt="" />
                <img data-aos="flip-left" data-aos-delay="500" data-aos-duration="1000" className='px-5 py-5' src={coin_img_2} alt="" />
                <img data-aos="flip-left" data-aos-delay="700" data-aos-duration="1000" className='px-5 py-5' src={coin_img_3} alt="" />
            </Slider>
            <Container className='pt-lg-5 mt-5'>
                <Row className='align-items-center pt-lg-5 mt-4'>
                    <Col lg={6}>
                        <h2 className='ff_open_sans fs_2xlg fw-normal text_252B42 mb-4' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">Invest Coin - это про
                            <span className='d-lg-block'>безопасность!</span></h2>
                        <p className='fs_2xmd ff_open_sans text_222B32 fw-normal pb-4' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">И как выражается безопасность?<span className='d-lg-block'>Чем меньше вложений в инвестиции, тем</span> <span className='d-lg-block'>больше риска потерпеть неудачу. Чем больше</span> вложений, тем тем меньше риска.
                            <span className='d-lg-block'>Безопасность инвестии означает что ваши</span> вложения (10$ или 100$) отдельно не <span className='d-lg-block'>инвестируются. Наши опытные инвесторы</span> делают ставки с общего счета, где на балансе <span className='d-lg-block mb-4'>всегда больше 100 000$.</span>

                            Нажмите на кнопку ниже и узнайте все лично от <span className='d-lg-block'>наших менеджеров</span></p>
                    </Col>
                    <Col lg={6}>
                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="600">
                            <img className='w-100' src={invest_coin_laptop} alt="laptop" />
                        </div>
                    </Col>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        <button className='fs_3xmd fw-bold text_ffffff ff_open_sans learn_more_btn mt-5'>Узнать подробнее</button>
                    </div>
                </Row>
            </Container>
            <Container className='py-lg-5 mt-5'>
                <Row className='pt-lg-5 align-items-center'>
                    <Col lg={8} className='mb-5 mb-lg-0'>
                        <div className='d-flex flex-wrap justify-content-center'>
                            <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className='boy_transform' src={boy_image} alt="boy" />
                            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className='position-relative me-lg-2'>
                                <img className='rounded-5' src={girl_image_2} alt="girl" />
                                <img className='play_btn_abs' src={play_btn} alt="play_btn" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" className='position-relative'>
                                <img className='rounded-5 mt-5' src={girl_image} alt="girl" />
                                <img className='play_btn_abs' onClick={handleShow} src={play_btn} alt="play_btn" />
                            </div>
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <h2>Amazon</h2>
                                </Modal.Header>
                                <Modal.Body>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/yN9t3Myv97c"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <a
                                        target="blank"
                                        className="ff-bold fc_black d-inline-block full_screen ff_open_sans fs_14 "
                                        variant="primary"
                                        onClick={handleClose}
                                        href="https://youtu.be/5e9_hp0nh1Q"
                                    >
                                        Full Screen
                                    </a>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Col>
                    <Col lg={4} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        <h4 className='ff_open_sans text_252B42 fs_3xmd fw-bold'>Обучение?</h4>
                        <p className='ff_open_sans text_252B42 fs_xlg fw-normal'>Конечно! Индивидуальные уроки тем кто хочет научиться инвестировать.</p>
                        <p className='ff_open_sans text_252B42 fs_3xmd fw-bold'>Подробнее посмотрите на видео</p>
                        <p className='ff_open_sans text_222B32 fs_sm fw-normal'>Или напишите менеджеру</p>
                        <button className='ff_open_sans fs_3xmd fw-normal text_ffffff write_btn'>Написать</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InvestCoin