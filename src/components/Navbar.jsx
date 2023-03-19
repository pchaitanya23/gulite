import React from 'react'
import css from './Navbar.module.css'
import {Outlet,Link } from "react-router-dom";
import gultieLogo from '../assets/XIII.png'
export default function Navbar() {
  return (
    <>
<header id={css.header} className="fixed-top">
<div className="container d-flex align-items-center justify-content-between">
  <div className='d-flex justify-content-center align-items-center'>
    <a href='/home'><img src={gultieLogo} alt="" className={css.gultieLogo}/></a>
    <h1 className={css.logo}><a href="/home">Gultie Premier League</a></h1>
  </div>
  <nav id="navbar" className={css.navbar}>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/our-story">Our Story</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li className={css.dropdown}><a href="#"><span>Drop Down</span><i className="fa-solid fa-chevron-up"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className={css.dropdown}><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/livescore">Live Score</a></li>
      <li><a href="/betting">Betting</a></li>
      {/* <li><a href="/login">Login</a></li> */}
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>

</div>
</header> 
    </>
  )
}



/*
<header id="header" className="fixed-top">
<div className="container d-flex align-items-center justify-content-between">

  <h1 className="logo"><a href="index.html">Gultie Premier League</a></h1>

  <nav id="navbar" className="navbar">
    <ul>
      <li><a className="active" href="index.html">Home</a></li>
      <li><a href="our-story.html">Our Story</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>

</div>
</header> 
*/