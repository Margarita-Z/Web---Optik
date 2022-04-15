import React from 'react';
import { Carousel, Button, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import Brends from '../components/Brends';
import carousel1 from '../images/imagesCarousel/Carousel1.png';
import carousel2 from '../images/imagesCarousel/Carousel2.jpg';
import carousel3 from '../images/imagesCarousel/Carousel3.jpg';
import carousel4 from '../images/imagesCarousel/Carousel4.jpg';
import opticki from '../images/imagesMenu/opticki ocila.jpg';
import soncevi from '../images/imagesMenu/ocila za sonce.jpg';
import leki from '../images/imagesMenu/kontaktni leki.jpg';
import aboutUs from '../images/aboutUs.png';
import '../style/homePage.css';


function HomePage() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal1");
    var reveals2 = document.querySelectorAll(".reveal2");
    var reveals3 = document.querySelectorAll(".reveal3");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        reveals2[i].classList.add("active");
        reveals3[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        reveals2[i].classList.remove("active");
        reveals3[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

 
   return (
    <div className='homePage'>

      <section className='section1'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="First slide"
              style={{ width: '1900px', height: '590px', filter: "brightness(0.6)" }}
            />
            <span className='filter1'></span>
            <span className='filter2'></span>

            <Carousel.Caption>
              <h3 className='carouselTitle'>Подготвени за сончеви денови?</h3>
              <p className='carouselDescription'>Посетете не и одберете очила за сонце од најновата колекција пролет/лето.</p>
              <a href='' className='carouselButton'>Повеќе </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="Second slide"
              style={{ width: '1900px', height: '590px', filter: "brightness(0.6)" }}
            />

            <Carousel.Caption>
              <h3 className='carouselTitle'>Уникатни детски оптички рамки</h3>
              <p className='carouselDescription'>Детските оптички рамки што ги нудиме се долготрајни</p>
              <a href='' className='carouselButton'>Повеќе </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
              style={{ width: '1900px', height: '590px', filter: "brightness(0.6)" }}
            />

            <Carousel.Caption>
              <h3 className='carouselTitle'>Твое лето, твој попуст</h3>
              <p className='carouselDescription'>Летен попуст до 50% на сите видови очила за сонце.</p>
              <a href='' className='carouselButton'>Повеќе </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel4}
              alt="Ford slide"
              style={{ width: '1900px', height: '590px', filter: "brightness(0.6)" }}
            />

            <Carousel.Caption>
              <h3 className='carouselTitle'>Нови модели на оптички очила</h3>
              <p className='carouselDescription'>Сертифицирани, уникатни и со висок квалитет!</p>
              <a href='' className='carouselButton'>Повеќе </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className='section2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <div >
                <h3 className='prvTekst'>Добредојдовте на сплетната страна на <strong>М оптика</strong></h3>
                <h4 className='vtorTekst'>Сертифицирани производи!
                  <br />
                  Посетете не!
                </h4>
              </div>
              <div /*className='animated-slow  animated fadeInLeft'*/>
                <Figure className='snip1504 reveal1'>
                  <img src={opticki} title='Оптички очила' alt='' className='images' />
                  <FigureCaption className='text'>
                    <h3>Оптички очила</h3>
                    <h5>Женски / Машки / Детски</h5>
                  </FigureCaption>
                  <a href='/oптички очила' />
                </Figure>

                <Figure className='snip1504  reveal2'>
                  <img src={soncevi} title='Очила за сонце' alt='' className='images' />
                  <FigureCaption className='text'>
                    <h3>Очила за сонце</h3>
                    <h5>Женски / Машки / Детски</h5>
                  </FigureCaption>
                  <a href='/oчила за сонце' />
                </Figure>

                <Figure className='snip1504  reveal3'>
                  <img src={leki} title='Контактни леќи' alt='' className='images' />
                  <FigureCaption className='text'>
                    <h3>Контактни леќи</h3>
                    <h5>Дневни / Месечни / Во боја</h5>
                  </FigureCaption>
                  <a href='/kонтактни леќи' />
                </Figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section3'>
        <div className='container'>
          <div className='section3_box'>
            <div className='za_nas_left'>
              <div className='za_nas-naslov'>
                <h1>За нас</h1>
              </div>
              <div className='za_nas_slika'>
                <img src={aboutUs} alt="За нас" width="530" height="533" />
              </div>
            </div>
            <div className='za_nas_tekst'>
              <div class="spacer">
                <h3><strong>Оптика ...</strong></h3>
                <p>Vaša varnost in zdravje oči so na našem prvem mestu, zato smo v naših poslovalnicah poskrbeli za varne nakup očal v skladu z NIJZ priporočili. Naročite se na osebno svetovanje, kjer je čas namenjen izključno vam, osebni svetovalec pa vam bo pomagal izbrati popolna očala. Osebno svetovanje je </p>
                <a href='/заНас'>Повеќе...</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section4'>
        <div className='container'>
          <div className='pregled_box'>
            <div className='pregled_tekst'>
              <h3>Електронска пријава за преглед</h3>
              <div className='pregled_forma'>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Име *</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Презиме *</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Телефон *</Form.Label>
                      <Form.Control type="number" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Е маил</Form.Label>
                      <Form.Control type="email" placeholder="" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Преглед</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Преглед за оптички очила</option>
                      <option>Преглед за контактни леќи</option>
                      <option>Прв оптички преглед</option>
                      <option>Контрола</option>
                      <option>Контрола на очен притисок</option>
                    </Form.Select>
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Датум</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Час</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Row>
                  <>
                    <Form.Label>Порака</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" >

                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>
                  </>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Се согласувам моите лични податоци да се користат само во намена на пријавата за преглед  " />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Пријави се
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section5'>
        <div className='container'>
          <div className='prednosti_box'>
            <div className='prednostiPrvBlok'>


              <div className='prednosti_slika'>
                <img src="https://www.clarus.si/cache/optikac/10000006-predstavitev_home-f3dfdcfcf8a56e25.jpg" style={{ width: '460px', height: '370px' }}></img>
              </div>
            </div>
            <div className='prednosti_lista'>
              <div className="prednosti_title">
                <h1>Зошто оптика M?</h1>
                <h5>Наши предности</h5>
              </div>
              <div class="row">
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/42-eye-outline-with-lashes-82f273f595653795.svg" />
                  <div className='cel2_tekst'>
                    <p>безбедност, грижа и промоција на детското здравје</p>
                  </div>
                </div>
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/43-snellen-4de06a4d6401e4e8.svg" />
                  <div className='cel2_tekst'>
                    <p>соработка со родители во обезбедување на доволно добра грижа и едукација;</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/44-team-b5dddf941d45599d.svg" />
                  <div className='cel2_tekst'>
                    <p>можност за забава и учење низ игра;</p>
                  </div>
                </div>
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/45-glasses-66a6d4afb510e5a2.svg" />
                  <div className='cel2_tekst'>
                    <p >охрабрување на децата во градењето на нивната сигурност и самодоверба;</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/47-ophthalmologist_1-4348bfab4a6e759b.svg" />
                  <div className='cel2_tekst'>
                    <p>социјализација со возрасни и деца од најразлична возраст и култура ослободени од било каква дискриминација;</p>
                  </div>
                </div>
                <div class="cel2">
                  <img src="https://www.clarus.si/cache/optikac/46-shop_1-410eda0fce72d59f.svg" />
                  <div className='cel2_tekst'>
                    <p>охрабрување на децата во развивањето на свест за потребите на другите, респект за другите култури, чувства, јазик;</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='section6'>
        <div className='container'>
          <div className='soveti_box'>
            <div className='soveti_box_slika'>
              <img src='https://www.cvikeri.com/sites/default/files/styles/news_teaser/public/2021-10/virtual%20mirror_0.jpg?itok=1JrQ4V-O' alt='' style={{ width: '580px', height: '390px' }} />
            </div>

            <div className='soveti_boxParagraph'>
              <div className='soveti_boxTitle'>
                <h3>Изберете го совршениот пар очила за Вас со помош на <strong>виртуелно огледало</strong></h3>
              </div>
              <div className='soveti_box_description'>
                <p>Виртуелното огледало ќе Ви помогне да најдете рамка која совршено одговара на Вашето лице. Со фантастичен реализам, пробајте каква било рамка со помош на камерата на Вашиот уред.</p>
              </div>
              <div className='soveti_boxButton'>
                <a href='' ><p>Повеќе...</p></a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='section7'>
        <div className='container'>
          <div className='soveti_box_one'>
            <div className="soveti_box_one_paragraph">
              <div className='soveti_box_one_title'>
                <h3>Совети за носењето на <strong>прогресивни очила</strong> </h3>
              </div>
              <div className="soveti_box_one_description">
                <p>Секогаш штом правите нови очила, вашиот мозок треба да се навикне на новите стакла / очила. Општо земено, периодот на адаптација на прогресивните стакла може да варира од еден ден до три недели, на што влијаат неколку фактори.</p>
              </div>
              <div className='soveti_box_one_button'>
                <a href='' ><p>Повеќе...</p></a>
              </div>
            </div>
            <div className='soveti_box_one_slika'>
              <img src='https://www.cvikeri.com/sites/default/files/styles/news_teaser/public/2021-05/progresivne-naocare_0.jpg?itok=IwB7CGu6' alt='' style={{ width: '580px', height: '390px' }} />
            </div>
          </div>
        </div>

      </section>

<section className="section8">
  <Brends />
</section>

    
    </div>
  )
}
export default HomePage