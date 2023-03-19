import React from 'react'
import Navbar from './Navbar.jsx'
import css from './Gallery.module.css'
import {SiLinkedin} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'
import {SiSkypeforbusiness} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
import cricket from '../assets/cricket.jpg'

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <main id="main">
      <div class={css.gallery}>
        <div class={css.row}>
            <div class={css.text}>
                <h1>
                    Gultie Premier League
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sequi aut repellendus minus in
                    architecto accusamus laudantium, quis laboriosam? Reiciendis culpa id amet! Quasi, quidem. Est,
                    maxime quae fugiat illo officia itaque corrupti repellat facilis.</p>
            </div>
            <div class={css.photo}>
                <img src={cricket} alt="alt-text"/>
            </div>
        </div>

        <div class={css.row}>
            <div class={css.text}>
                <h1>
                    Gultie Premier League
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sequi aut repellendus minus in
                    architecto accusamus laudantium, quis laboriosam? Reiciendis culpa id amet! Quasi, quidem. Est,
                    maxime quae fugiat illo officia itaque corrupti repellat facilis.</p>
            </div>
            <div class={css.photo}>
                <img src={cricket} alt="alt-text"/>
            </div>
        </div>
    </div>
    {/* <div class={css.footer}>
        <div class={css.soc}><i class="fa-brands fa-instagram"></i></div>
        <div class="soc"><i class="fa-brands fa-instagram"></i></div>
        <div class="soc"><i class="fa-brands fa-instagram"></i></div>

    </div> */}
      </main>
      {/* <!-- End #main --> */}

    <div className={css.another}>
      <div className={css.anrow}>
        <img src={cricket} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi esse dolore maiores adipisci facere quis voluptas, dolores nulla quisquam sint. Natus asperiores dignissimos tenetur illum in odit at molestiae maiores repellendus, consectetur suscipit?</h3>
      </div>
      <div className={css.anrow}>
        <img src={cricket} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consequatur rem explicabo vero dignissimos hic eum accusamus distinctio. Asperiores laudantium possimus officiis odit corporis? Aut laudantium veritatis necessitatibus eum sit nihil architecto qui minus.</h3>
      </div>
      <div className={css.anrow}>
        <img src={cricket} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam necessitatibus repellendus sunt maiores ab vitae suscipit minus. Totam quo culpa magnam dolore asperiores amet itaque facilis sequi iure dolorum libero, facere repudiandae non.</h3>
      </div>
    </div>

      {/* <!-- ======= Footer ======= --> */}
      <footer id={css.footer}>
                <div class="container">
                    <h3>Gultie Premier League</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div class={css.socialLinks}>
                        <a href="#" class="twitter"><SiFacebook/></a>
                        <a href="#" class="facebook"><SiTwitter/></a>
                        <a href="#" class="instagram"><SiInstagram/></a>
                        <a href="#" class="google-plus"><SiSkypeforbusiness/></a>
                        <a href="#" class="linkedin"><SiLinkedin/></a>
                    </div>
                    <div class={css.copyright}>
                        &copy; Copyright <strong><span>Gultie Premier League</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        {/* <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/family-multipurpose-html-bootstrap-template-free/ --> */}
                        Designed by <a href="https://www.instagram.com/gultiecricket_nitr/">Gultie Premier League</a>
                    </div>
                </div>
            </footer>
      {/* <!-- End Footer --> */}

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
  )
}
