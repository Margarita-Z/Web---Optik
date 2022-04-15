import React from 'react';
import map from '../../images/maps.webp';
import '../../style/footer.css';

function Footer1() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_box'>
                    <div className='footer_blokOne'>
                        <div className="footer_box1">
                            <a href=''>Л О Г О</a>
                        </div>
                        <div className='footer_box2'>
                            <h3 className='footer_box_title'>Работно време</h3>
                            <p className='footer_box_decription'><b>Понеделник - Петок:</b> 8:00 - 19:00 <br />
                                <b>Сабота:</b> 8:00 - 13:00 <br />
                                <b>Недела и празник:</b> Затворено
                            </p>
                        </div>
                        <div className='footer_box3'>
                            <h3 className='footer_box_title'>Контакт</h3>
                            <i class="fa-solid fa-phone"></i>032/ 658 - 257<br />
                            <i class="fa-solid fa-mobile-screen"></i>070 459 - 276<br />
                            <i class="fa-solid fa-envelope"> </i>optika@optika.com.mk
                        </div>
                        <div className='footer_box4'>
                            <h3 className='footer_box_title'>Локација</h3>
                            <p><i class="fa-solid fa-location-dot"></i>"Булевар Булевар" 1Ј<br/>
                            1000 Скопје, <br/>
                            Македонија</p>
                            {/*<a href=''><img src={map} alt=''style={{width: '140px',height: "70px"}}></img></a>*/}
                           
                        </div>
                    </div>
                    <div className='footer_blokTwo'>
                        <div className='socialMedia'>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                    </div>
                    <div className='footer_blokTree'>
                        <div className='one'>
                            <p>© 2022  </p>
                        </div>
                        <div className='two'>
                       <p>Create by: <strong>ZM</strong></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer1