import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

const Investments = () => {
  const investment = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
  };
  return (
    <section className='bg_252B42 py-5'>
      <Container className='mt-lg-5 pb-lg-4'>
        <h2 className='fw-normal text_ffffff ff_open_sans fs_2xlg text-center'data-aos="fade-right"data-aos-duration="2000"data-aos-delay="300">Инвестиции</h2>
        <p className='fs_md fw-normal text_ffffff ff_open_sans text-center pb-4'data-aos="fade-left"data-aos-duration="2000"data-aos-delay="500">Самые оптимальные варианты инвестиций.  Каждый найдет свой путь и <span className='d-lg-block'>начнет уверенно шагать по нему.</span></p>
        <Slider {...investment} className=' py-5'>
          <div className='d-flex justify-content-center'data-aos="flip-left"data-aos-duration="2000"data-aos-delay="300">
            <div className='investment_cards my-5'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='ff_open_sans fw-bold text_252B42 fs_3xmd'>FREE</h2>
                <p className='ff_open_sans fw-normal fs_xsm text_222B32 text-center mb-3'>Organize across all
                  <span className='d-lg-block'>apps by hand</span></p>
                <div className='d-flex align-items-center'>
                  <p className='ff_open_sans text_252B42 fw-bold fs_2xl mb-0'>0</p>
                  <div className='ps-2 ms-1'>
                    <p className='mb-0 ff_open_sans text_252B42 fw-bold fs_3xmd'>$</p>
                    <p className='ff_open_sans fs_xsm fw-normal text_222B32 mb-0'>Per Month</p>
                  </div>
                </div>
                <div>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                </div>
                <button className='order_btn w-100 ff_open_sans fw-normal fs_3xmd text_ffffff mt-3 border-0'>Order Now</button>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'data-aos="flip-left"data-aos-duration="2000"data-aos-delay="600">
            <div className='investment_cards my-5'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='ff_open_sans fw-bold text_252B42 fs_3xmd'>STANDARD</h2>
                <p className='ff_open_sans fw-normal fs_xsm text_222B32 text-center mb-3'>Organize across all
                  <span className='d-lg-block'>apps by hand</span></p>
                <div className='d-flex align-items-center'>
                  <p className='ff_open_sans text_252B42 fw-bold fs_2xl mb-0'>10</p>
                  <div className='ps-2 ms-1'>
                    <p className='mb-0 ff_open_sans text_252B42 fw-bold fs_3xmd'>$</p>
                    <p className='ff_open_sans fs_xsm fw-normal text_222B32 mb-0'>Per Month</p>
                  </div>
                </div>
                <div>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                </div>
                <button className='order_btn w-100 ff_open_sans fw-normal fs_3xmd text_ffffff mt-3 border-0'>Order Now</button>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'data-aos="flip-left"data-aos-duration="2000"data-aos-delay="900">
            <div className='investment_cards my-5'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='ff_open_sans fw-bold text_252B42 fs_3xmd'>BUSINESS</h2>
                <p className='ff_open_sans fw-normal fs_xsm text_222B32 text-center mb-3'>Organize across all
                  <span className='d-lg-block'>apps by hand</span></p>
                <div className='d-flex align-items-center'>
                  <p className='ff_open_sans text_252B42 fw-bold fs_2xl mb-0'>99</p>
                  <div className='ps-2 ms-1'>
                    <p className='mb-0 ff_open_sans text_252B42 fw-bold fs_3xmd'>$</p>
                    <p className='ff_open_sans fs_xsm fw-normal text_222B32 mb-0'>Per Month</p>
                  </div>
                </div>
                <div>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                  <p className='mb-4 ff_open_sans text_252B42 fw_normal fs_xsm'>Pricing Feature</p>
                </div>
                <button className='order_btn w-100 ff_open_sans fw-normal fs_3xmd text_ffffff mt-3 border-0'>Order Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default Investments