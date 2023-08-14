import React from 'react'
import { Container } from 'react-bootstrap'
import bitcoin from '../assets/images/png/bitcoin.png'
import chainlink from '../assets/images/png/chainlink.png'
import ethereum from '../assets/images/png/ethereum.png'
import liticoin from '../assets/images/png/litecoin.png'
import tezos from '../assets/images/png/tezos.png'
import ton from '../assets/images/png/ton.png'
import leo from '../assets/images/svg/leo.svg'
import fill_star from '../assets/images/svg/fill_star.svg'
import empty_star from '../assets/images/svg/empty_star.svg'
import Slider from 'react-slick'
const OurSites = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
    ],
  }
  const sites = {
    dots: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='mt-lg-5 py-5'>
      <Container>
        <h2 className='text-center ff_open_sans text_252B42 fw-normal fs_2xlg mb-4' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">Наши площадки</h2>
        <p className=' text-center ff_open_sans fw-normal text_222B32 fs_md mb-lg-5 pb-5' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">Наш проект работает только с проверенными площадками для<span className='d-lg-block'>инвестиций, чтобы максимально снизить риски.</span></p>
      </Container>
      <Slider {...sites} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="400">
        <div><img className='filter_darkgray' src={bitcoin} alt="bitcoin" /></div>
        <div><img className='filter_darkgray' src={liticoin} alt="litecoin" /></div>
        <div><img className='filter_darkgray' src={tezos} alt="tezos" /></div>
        <div><img className='filter_darkgray' src={ethereum} alt="ethereum" /></div>
        <div><img className='filter_darkgray' src={chainlink} alt="chainlink" /></div>
        <div><img className='filter_darkgray' src={ton} alt="ton" /></div>
      </Slider>
      <div className='d-flex justify-content-center mt-5 pt-lg-4'>
        <span className='bottom_line'></span>
      </div>
      <Container className='mb-lg-5 pb-5'>
        <h2 className='text-center ff_open_sans fw-normal text_252B42 fs_lg mt-5' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">Отзывы наших партнеров</h2>
        <p className='text-center ff_open_sans fw-normal fs_md text_222B32 mb-5 pb-lg-5' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">Каждый отзыв по-особенному  ценный для нас. Ведь для этого было <span className='d-lg-block'>проделано большой совместный путь. Успех состоит из доверие,</span> готовности к развитию и перемен.</p>
        <Slider {...settings} className='pt-4 mb-5 pb-4'>
          <div className=' d-flex justify-content-center' data-aos="flip-left" data-aos-duration="2000" data-aos-delay="400">
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img className='ps-1' src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Али</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Узбекистан</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <p className='ff_open_sans fs_xsm fw-normal text_ffffff ms-4 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
            </div>
          </div>
          <div className=' d-flex justify-content-center' data-aos="flip-left" data-aos-duration="2000" data-aos-delay="600">
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img className='ps-1' src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Leo</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Таджикистан</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <p className='text_ffffff ff_open_sans fs_sm fw-bold mt-4 ms-3 mb-0'>It was a very good experience</p>
              <p className='ff_open_sans fs_3xsm fw-normal text_ffffff ms-3 mt-2'>Lorem ipsum dolor sit amet, consectetur . Cursus nibh mauris, nec turpis orci . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
            </div>
          </div>
          <div className=' d-flex justify-content-center' data-aos="flip-left" data-aos-duration="2000" data-aos-delay="900">
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Leo</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Lead Designer</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <h2 className='text_ffffff ff_open_sans fs_sm fw-bold mt-4 ms-3'>It was a very good experience</h2>
              <p className='ff_open_sans fs_3xsm fw-normal text_ffffff ms-3 mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur . Cursus nibh mauris, nec turpis orci . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
            </div>
          </div>
          <div className=' d-flex justify-content-center'>
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img className='ps-1' src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Али</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Узбекистан</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <p className='ff_open_sans fs_xsm fw-normal text_ffffff ms-4 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
            </div>
          </div>
          <div className=' d-flex justify-content-center'>
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img className='ps-1' src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Leo</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Таджикистан</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <p className='text_ffffff ff_open_sans fs_sm fw-bold mt-4 ms-3 mb-0'>It was a very good experience</p>
              <p className='ff_open_sans fs_3xsm fw-normal text_ffffff ms-3 mt-2'>Lorem ipsum dolor sit amet, consectetur . Cursus nibh mauris, nec turpis orci . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
            </div>
          </div>
          <div className=' d-flex justify-content-center'>
            <div className='slider_box'>
              <div className='d-flex align-items-center'>
                <img src={leo} alt="leo" />
                <div className='ms-2'>
                  <h3 className='ff_open_sans fs_sm fw-bold text_ffffff mb-0'>Leo</h3>
                  <div className='d-flex'>
                    <p className='ff_open_sans fs_3xsm text_ffffff fw-normal mb-0 me-4'>Lead Designer</p>
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img className='me-1' src={fill_star} alt="fill_star" />
                    <img src={empty_star} alt="empty_star" />
                  </div>
                </div>
              </div>
              <h2 className='text_ffffff ff_open_sans fs_sm fw-bold mt-4 ms-3'>It was a very good experience</h2>
              <p className='ff_open_sans fs_3xsm fw-normal text_ffffff ms-3 mt-2 text-center'>Lorem ipsum dolor sit amet, consectetur . Cursus nibh mauris, nec turpis orci . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default OurSites