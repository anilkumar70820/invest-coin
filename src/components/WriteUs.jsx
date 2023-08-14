import React from 'react'
import boy from '../assets/images/png/boy.png'
import { Col, Container, Row } from 'react-bootstrap'

const WriteUs = () => {
    return (
        <section className='overflow-hidden py-5'>
            <Container className='mb-5'>
                <h2 className='text-center ff_open_sans fw-normal text_252B42 fs_2xlg' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">Напишите нам</h2>
                <p className='text-center ff_open_sans fw-normal text_252B42 fs_md' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить <span className='d-lg-block'>быстро и нам важно узнать ваше мнение.</span></p>
                <Row className='mt-5 position-relative'>
                    <Col xl={6}>
                        <div className='d-flex flex-column gap-5 pb-4'>
                            <input data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300" className='width_md_100' type="text" placeholder='Ваше имя' />
                            <input data-aos="fade-right" data-aos-duration="2000" data-aos-delay="600" className='width_md_100' type="text" placeholder='Страна' />
                            <textarea data-aos="fade-right" data-aos-duration="2000" data-aos-delay="900" name="Сообщение" id="" cols="30" rows="5" placeholder='Сообщение' className='width_md_100 ff_poppins fs_2xmd fw-medium text_252B42'></textarea>
                        </div>
                        <button className=' send_btn ff_open_sans fs_3xmd text_ffffff fw-bold mt-5'>Отправить</button>
                    </Col>
                    <Col xl={6} className='boy_abs' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                        <div className='d-flex justify-content-center'>
                            <img className='width_100' src={boy} alt="boy" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WriteUs  