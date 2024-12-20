

function Footer () {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let monthShown = months[d.getMonth()];
    let yearShown = d.getFullYear();
    return (
    <footer className="footer py-3 bg-dark">
        <div className="container d-flex justify-content-between">
            <span className="text-muted">
                Designed by Chris in Binghamton, NY.
            </span>
            <span className="text-muted">
                Last modified: { monthShown } { yearShown }.
            </span>
        </div>
    </footer>
    );
}

export default Footer;