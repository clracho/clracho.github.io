import me from '../assets/me.JPG';

function HomePage () {
    return (
        <body className="d-flex flex-column overflow-hidden">
            <div className="container mt-5" >
                <div className="row">
                    <div className="col-lg-7 mt-5">
                        <div className="h1 display-5">[ about me ]</div>
                        <div className="h1 mt-4">Christopher J. Fehrer</div>
                        <div className="p mt-4">Hello, I'm a student studying computer engineering at Binghamton University.</div>
                        <div className="p mt-4">Feel free to explore my projects and/or send me a message.</div>
                        <div className="p mt-4">&nbsp;</div>
                        <div className="p mt-4">Email: cfeh25@gmail.com</div>
                    </div>
                    <div className="col-lg-5 mt-5 pb-5 ps-5">
                        <img src={me} alt=""/>
                    </div>
                </div>
            </div>
    </body>
    );
}

export default HomePage;