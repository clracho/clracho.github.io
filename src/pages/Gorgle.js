

import GorgleGame from '../components/GorgleGame';


function GorglePage () {
    return (
    <div>
    <div className="d-flex flex-column">
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg mt-5 d-flex justify-content-center">
                    <div className="h1 display-5">[ gorgle ]</div>
                </div>
            </div>
          </div>
    </div>
    <GorgleGame/>
    <div className='d-flex px-5 py-5'>
    <p>Objective: Guess the word using clues provided from previous guesses.<br/><br/>Yellow: Letter is somewhere in the word.<br/>Green: Letter is in the correct place.</p>
    </div>
    </div>
    );
}

export default GorglePage;