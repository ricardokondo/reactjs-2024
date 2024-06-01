import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import img1 from '../img/portfolio/1.jpg';
import img2 from '../img/portfolio/2.jpg';
import img3 from '../img/portfolio/3.jpg';
import img4 from '../img/portfolio/4.jpg';
import img5 from '../img/portfolio/5.jpg';
import img6 from '../img/portfolio/6.jpg'; 

function Portfolio() {
   const imagesList = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="portfolio py-5" id="portfolio">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Últimos Trabalhos</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {imagesList.map((img, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <img className="w-100 img-thumbnail" src={img} alt={`Imagem ${index + 1} do portfolio`} />
              <h3 className="text-capitalize fs-5 my-2">
                {["Seção do Time", "App Landing Page", "E-commerce", "Stream App", "Portfólio", "Galeria de Fotos"][index]}
              </h3>
              <p className="mb-4">
                <a className="text-danger text-decoration-none" href="#">Demo</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
