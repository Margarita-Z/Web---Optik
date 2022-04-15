import React from 'react';
import 'react-slideshow-image/dist/styles.css';
//import { Zoom, Slide } from 'react-slideshow-image';
import {Carousel, Button, Container, Form, Col, Row } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import Brends from './Brends';
import './style/home.css';



function Home() {


  const images = [
    'https://www.clarus.si/cache/optikac/30--15_soncna-web-02_sl-4b145844695ac3f0.jpg',
    'https://www.clarus.si/cache/optikac/40-web_sl-4976d4c217bc9048.jpg',
    'https://www.clarus.si/cache/optikac/22-banner_web_sl-d0565cb57aba863f.jpg',
    'https://www.clarus.si/cache/optikac/32-web_sl-be48bf3bcec8e4e8.jpg'
  ];

  return (
    <div className='home'>
      <div className='promocija'>

      <Carousel fade >

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bellavista.mk/images/first1_m.png"
              alt="First slide"
              style={{ width: '1900px', height: '590px' }}

            />
            <Carousel.Caption>
              <h2>Подготвени за сончеви денови?</h2>
              <p>Подготвени за сончеви денови? </p>
              <Button variant="primary">Повеќе </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.clarus.si/cache/optikac/32-web_sl-be48bf3bcec8e4e8.jpg"
              alt="Second slide"

            />

            <Carousel.Caption>
              <h3>Роденденски попуст</h3>
              <p>Посетете не и искористејте 15 % попуст</p>
              <Button variant="primary">Повеќе </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.clarus.si/cache/optikac/40-web_sl-4976d4c217bc9048.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Нова колекција пролет/лето</h2>
              <p>Богат избор на наочари...</p>
              <Button variant="primary">Повеќе </Button>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.clarus.si/cache/optikac/22-banner_web_sl-d0565cb57aba863f.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Твое лето, твој попуст</h2>
              <p>Посетете не и искористејте го попустот на сите видови наочари и контактни леки</p>
              <Button variant="primary">Повеќе </Button>
            </Carousel.Caption>
          </Carousel.Item>

  </Carousel>

      </div>
      <section className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <div className='m_first'>
                <h3 className='prvTekst'>Добредојдовте на сплетната страна на <strong>М оптика</strong></h3>
                <h4 className='vtorTekst'>Сертифицирани производи!
                  <br />
                  Посетете не!
                </h4>
              </div>
              <div className='zaPozadina'>
                <Figure className='snip1504'>
                  {/*<img src='https://www.bellavista.mk/images/first.png' title='Оптички очила' alt='' className='image'/>*/}
                  <img src='https://www.clarus.si/cache/optikac/40-okulisticni-pregled-1f4657b64712f824.jpg' title='Оптички очила' alt='' className='image' />
                  <FigureCaption className='text'>
                    <h3>Оптички очила</h3>
                    <h5>Женски / Машки / Детски</h5>
                  </FigureCaption>
                  <a href='/oптички очила' />
                </Figure>

                <Figure className='snip1504'>
                  {/*<img src='https://www.bellavista.mk/images/second.png' title='Очила за сонце' alt='' className='image'/>*/}
                  <img src='https://www.clarus.si/cache/optikac/39-soncna_ocala-899c65cbbb38e502.jpg' title='Очила за сонце' alt='' className='image' />
                  <FigureCaption className='text'>
                    <h3>Очила за сонце</h3>
                    <h5>Женски / Машки / Детски</h5>
                  </FigureCaption>
                  <a href='/oчила за сонце' />
                </Figure>

                <Figure className='snip1504'>
                  {/*<img src='https://glamur.mk/wp-content/uploads/2020/04/%D0%BB%D0%B5%D1%9C%D0%B8.jpg' title='Контактни леќи' alt='' className='image' style={{width: '300px',height: '114px'}}/>*/}
                  <img src='https://www.clarus.si/cache/optikac/41-kontaktne_lece-1a5da935d2e3624d.jpg' title='Контактни леќи' alt='' className='image' />
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


      <div className='za_nas'>
        <div className='container'>
          <div className='all'>
            <div className='za_nas_left'>
              <div className='za_nas-naslov'>
                <h1>За нас</h1>
              </div>
              <div className='za_nas_slika'>
                <img src="https://www.clarus.si/cache/optikac/10000069-optika-clarus-brezplacno-osebno-svetovanje-2bbd490eaf650904.png" alt="За нас" width="530" height="533" />
              </div>
            </div>
            <div className='za_nas_tekst'>
              <div class="spacer">
                <h3><strong>Оптика ...</strong></h3>
                <p>Vaša varnost in zdravje oči so na našem prvem mestu, zato smo v naših poslovalnicah poskrbeli za varne nakup očal v skladu z NIJZ priporočili. Naročite se na osebno svetovanje, kjer je čas namenjen izključno vam, osebni svetovalec pa vam bo pomagal izbrati popolna očala. Osebno svetovanje je </p>
                <button>Повеќе...</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pregled'>
        <div className='container'>
          <div className='pregled_box'>
            <div className='pregled_tekst'>
              <h3>Пријава за преглед</h3>
              <div className='pregled_forma'>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='prednosti'>
        <div className='container'>
          <div className='prednosti_box'>
            <div className="prednosti_title">
              <h1>Зошто оптика ....?</h1>
              <h5>Наши предности</h5>
            </div>
            <div className='prednosti_content'>
              <div className='prednosti_slika'>
                <img src="https://www.clarus.si/cache/optikac/10000006-predstavitev_home-f3dfdcfcf8a56e25.jpg"></img>
              </div>
              <div className='prednosti_lista'>
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
        </div>
      </div>


      <div className='soveti'>
        <div className='container'>
          <div className='soveti_box'>
            <div className='soveti_box1'>
              <Row className="mb-3">
                <Col>
              <div className='soveti_box_slika1'>
                <img src='https://www.cvikeri.com/sites/default/files/styles/news_teaser/public/2021-10/virtual%20mirror_0.jpg?itok=1JrQ4V-O' alt='' style={{width:'580px', height:'390px'}} />
              </div>
              </Col>
              <Col>
              <div className='soveti_boxParagraph1'>
                <div className='soveti_boxTitle1'>
                  <h3>Изберете го совршениот пар очила за Вас со помош на <strong>виртуелно огледало</strong></h3>
                </div>
                <div className='soveti_box_description'>
                  <p>Виртуелното огледало ќе Ви помогне да најдете рамка која совршено одговара на Вашето лице. Со фантастичен реализам, пробајте каква било рамка со помош на камерата на Вашиот уред.</p>
                </div>
                <div className='soveti_boxButton1'>
                  <a href='' ><p>Повеќе...</p></a>
                </div>
              </div>
              </Col>
              </Row>
            </div>
            <div className='soveti_box1'>

              <div className='soveti_boxParagraph1'>
                <Row className="mb-3">
                  <Col>
                  <div className='soveti_boxTitle1'>
                    <h3>Совети за носењето на <strong>прогресивни очила</strong> </h3>
                  </div>
                  <div className='soveti_box_description'>
                    <p>Секогаш штом правите нови очила, вашиот мозок треба да се навикне на новите стакла / очила. Општо земено, периодот на адаптација на прогресивните стакла може да варира од еден ден до три недели, на што влијаат неколку фактори.</p>
                  </div>
                  
                  <div className='soveti_boxButton1'>
                    <a href='' ><p>Повеќе...</p></a>
                  </div>
                  </Col>
                  <Col>
                  <div className='soveti_box_slika1'>
                    <img src='https://www.cvikeri.com/sites/default/files/styles/news_teaser/public/2021-05/progresivne-naocare_0.jpg?itok=IwB7CGu6' alt=''style={{width:'580px', height:'390px'}} />
                  </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

<Brends />


<section className='proba'>
  <h1>zdravo</h1>
</section>









    

    </div>
  )
}
export default Home