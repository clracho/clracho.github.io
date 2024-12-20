
import portcraneRoadImg from '../assets/portcrane_road_img.JPG';
import lakeplacidImg from '../assets/on_mt_marcy_img.JPG';
import courthouseImg from '../assets/binghamton_court_building_img.JPG';
import mudvalleysImg from  '../assets/mud_valleys2_img.JPG';

function PhotographyPage () {
    return (
    <body className="d-flex flex-column">
    <main>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-7 mt-5">
                    <div className="h1 display-5">[ photography ]</div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="card-group">
                    <div className="card text-bg-dark">
                        <img src={portcraneRoadImg} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-row-reverse align-items-end">
                          <h5 className="card-title">Port Crane, NY</h5>
                        </div>
                      </div>
                      <div className="card text-bg-dark">
                        <img src={lakeplacidImg} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-row-reverse align-items-end">
                            <h5 className="card-title">Lake Placid, NY</h5>
                        </div>
                      </div>
                  </div>
            </div>
            <div className="row">
                <div className="card-group">
                    <div className="card text-bg-dark">
                        <img src={courthouseImg} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-row-reverse align-items-end">
                          <h5 className="card-title">Binghamton, NY</h5>
                        </div>
                      </div>
                      <div className="card text-bg-dark">
                        <img src={mudvalleysImg} className="card-img" alt="..."/>
                        <div className="card-img-overlay d-flex flex-row-reverse align-items-end">
                            <h5 className="card-title">Ithaca, NY</h5>
                        </div>
                      </div>
                  </div>
            </div>
            <div className="row mt-5"></div>
        </div>
    </main>
  </body>
    );
}

export default PhotographyPage;