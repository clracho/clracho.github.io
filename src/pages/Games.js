
import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import nameCitiesImg from '../assets/namecities_game_img.JPG';
import wordleGif from '../assets/wordle_big_animation2.gif';

function GamePage () {
    const [img1Height, setImg1Height] = useState('400');

    setTimeout(function(){
      let box = document.querySelector('.img1_box');
      let height = box.offsetHeight;
      setImg1Height(height);
    }, 100);

    return (
    <body className="d-flex flex-column">
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-7 mt-5">
                    <div className="h1 display-5">[ games ]</div>
                    <div className="h5 mt-4">Here are a few games you can try out:</div>
                </div>
            <div className="row">
                <div className="row row-cols-md-2 g-4">
                    <div className="col">
                      <div className="card">
                        <Link className="nav-link" to ='/namecities'>
                          <img src={nameCitiesImg} className="card-img-top img-project img1_box" alt="..."/>
                        </Link>
                        <div className="card-body border">
                          <Link className="nav-link" to ='/namecities'>
                            <h5 className="card-title">Name Cities</h5>
                          </Link>
                        </div>
                        <div className="card-footer">
                        <p className="card-text">
                            Test your geography skills by naming as many U.S. cities as you can.</p>
                        </div>      
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <Link className="nav-link" to ='/gorgle'>
                          <img src={wordleGif} className="card-img-top" height={img1Height} alt="..."/>
                        </Link>
                        <div className="card-body border">
                          <Link className="nav-link" to ='/gorgle'>
                            <h5 className="card-title">Gorgle</h5>
                          </Link>
                        </div>
                        <div className="card-footer">
                        <p className="card-text">
                            Wordle-like literary game. Less limitations.</p>
                        </div>   
                      </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
    </body>
    );
}

export default GamePage;