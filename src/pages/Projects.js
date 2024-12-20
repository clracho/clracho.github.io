
import robotMazeImg from '../assets/pololu_3pi_robot_maze_img.jpg';
import chessGameImg from '../assets/chessboard_project_img.png';
import fpgaIMG from '../assets/basys_board_7seg_img.PNG';
import openglIMG from  '../assets/applecube.JPG';

function ProjectsPage () {
    return (
    <body className="d-flex flex-column">
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-7 mt-5">
                    <div className="h1 display-5">[ projects ]</div>
                    <div className="h5 mt-4">Here is a sample of projects I have worked on:</div>
					<div className="h5 mt-4">View the source code here: <a href="https://github.com/clracho">github.com/clracho</a></div>
                </div>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <div className="card">
                        {<img src={robotMazeImg} className="card-img-top img-project" alt="..."/>}
                        <div className="card-body">
                          <h5 className="card-title">Pololu 3pi Robot Maze Navigation Algorithm - C</h5>
                          <p className="card-text">
                            Worked on a team to develop an algorithm to navigate a grid and detect obstacles. 
                            Port mapping was utilized to control sensors and motors. An LCD display was 
                            programmed for the user to select robot speed and set search conditions.</p>
                        </div>
                        {/* <!--
                        <div className="card-footer">
                            <small><a>More Information</a></small>
                        </div>      
                          -->               */}
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src={chessGameImg} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Chess Game - Python</h5>
                          <p className="card-text">Interactive chess game with movable pieces, game logic, and board editor feature.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col pb-4">
                      <div className="card">
                        <img src={fpgaIMG} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Basys 3 FPGA Calculator - Verilog</h5>
                          <p className="card-text">Worked as a team to utilize a hardware description language (Verilog) to create a calculator on
                            an FPGA board. Utilized hardware-level components to implement operations such as addition and multiplication. A driver
                            was created to use a seven-segment display as a user interface. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col pb-4">
                      <div className="card">
                        <img src={openglIMG} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">OpenGL 3D Cube Rendering Engine - C++</h5>
                          <p className="card-text">Used Visual Studio and OpenGL to implement a graphics engine for rendering a 3D cube, with texturing and shadering.
                            Application integrated with keyboard and mouse controls, allowing for first person camera and movement. Used various linear algebra
                            concepts such as rotational and transform matrices.
                          </p>
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

export default ProjectsPage;