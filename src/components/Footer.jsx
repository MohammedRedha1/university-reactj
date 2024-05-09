import Navbar from "./NavBar";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const socialMediaLinks = [
    "https://www.facebook.com/ihcoedu",
    "https://twitter.com/ihcoedu",
    "https://t.me/IHCOEDU",
    "https://www.youtube.com/channel/UCeeZHbqwMj_7dXQvnLNwaHQ",
    "https://www.linkedin.com/company/98823969/admin/feed/posts/",
    "https://www.instagram.com/ihcoedu/",
];

function Footer({ chooseTextLanguage, currentTheme }) {
    return (
        <footer className="footer" data-aos="fade-down">
            <Navbar
                optionalStyle={"color"}
                className="footer-nav"
                chooseTextLanguage={chooseTextLanguage}
                isAnimated={false}
            />
            <div className="social-links">
                {socialMediaLinks.map((link) => {
                    return (
                        <SocialIcon
                            // style={{ marginBottom: "5rem" }}
                            target="_blank"
                            key={link}
                            url={link}
                            className="social-icon"
                            bgColor="transparent"
                            fgColor={
                                currentTheme === "dark"
                                    ? "hsl(200, 43%, 99%)"
                                    : "hsl(200, 35%, 15%)"
                            }
                        />
                    );
                })}
            </div>
        </footer>
    );
}

export default Footer;
