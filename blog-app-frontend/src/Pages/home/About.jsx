import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../../css/about.css";
export default function About() {
  return (
    <>
      <div class="container">
        <div class="row my-5">
          <div class="col-md-12">
            <h2 class="text-center my-3 alert alert-danger">who is H3ROES ?</h2>
            <p class="lead py-4 alert alert-default text-center">
              A group of young creatives in their field, carefully selected by
              Misk and general assembly after conducting preliminary tests and a
              personal interview, to help them develop in their field and serve
              their country with the help of five skilled trainers.
            </p>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide my-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner  text-center">
          <div class="carousel-item active" data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Saad iqbal</h5>
              <h5 className="col-md-2 ">Sara Kuddah</h5>
              <h5 className="col-md-2 ">Sager Alarifi</h5>
              <h5 className="col-md-2">Yasir Almuhtrish</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Nawaf Alabra</h5>
              <h5 className="col-md-2 ">Fahad</h5>
              <h5 className="col-md-2 ">salma alharoon</h5>
              <h5 className="col-md-2">Reem Alsenan</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Ammar Bahasan</h5>
              <h5 className="col-md-2 ">Haneen Alharbi</h5>
              <h5 className="col-md-2 ">Shahad Albawardi</h5>
              <h5 className="col-md-2">Hanan hakami</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Shahad Albaydhani</h5>
              <h5 className="col-md-2 ">Danah Almuqrin</h5>
              <h5 className="col-md-2 ">Mohammed Al-Attas</h5>
              <h5 className="col-md-2">Sulaiman AlRomaih</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Abdullah Faden</h5>
              <h5 className="col-md-2 ">Ahoud kensara</h5>
              <h5 className="col-md-2 ">Mona Alsaiqal</h5>
              <h5 className="col-md-2">Ali Almarhoun</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">maha alharbi</h5>
              <h5 className="col-md-2 ">Nawaf Alsaif</h5>
              <h5 className="col-md-2 ">Abdullah Basheer</h5>
              <h5 className="col-md-2">Amerah Almutairi</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Rawan Alshehri</h5>
              <h5 className="col-md-2 ">Mona Al-dawsari</h5>
              <h5 className="col-md-2 ">Talal Alqarni</h5>
              <h5 className="col-md-2">Sarah Alsharif</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Haneen Alhonayan</h5>
              <h5 className="col-md-2 ">hussain alsadun</h5>
              <h5 className="col-md-2 ">Hind Fhad</h5>
              <h5 className="col-md-2">Raghad alawaji</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Njoud Aldarbas</h5>
              <h5 className="col-md-2 ">Muneerah Yaheya</h5>
              <h5 className="col-md-2 ">Ali Al-Khamees</h5>
              <h5 className="col-md-2">Rahaf Alawwad</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Hajar Alharazi</h5>
              <h5 className="col-md-2 ">Banan Alasmari</h5>
              <h5 className="col-md-2 ">Bader Almazmumi</h5>
              <h5 className="col-md-2">Mariam Alrashidi</h5>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div className="row row-car text-center ml-5">
              <h5 className="col-md-2 head">Manal Alotaibi</h5>
              <h5 className="col-md-2 ">Amjad Alshukr</h5>
              <h5 className="col-md-2 "></h5>
              <h5 className="col-md-2"></h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
