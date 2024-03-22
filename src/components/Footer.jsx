import Navbar from "./NavBar";
function Footer({ chooseTextLanguage }) {
    return (
        <footer className="footer">
            <Navbar
                optionalStyle={"color"}
                className="footer-nav"
                chooseTextLanguage={chooseTextLanguage}
            />
        </footer>
    );
}

export default Footer;
