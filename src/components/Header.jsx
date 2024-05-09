// import "../../public/styles/header.min.css";

function Header({ chooseTextLanguage, currentTheme }) {
    return (
        <header className="header">
            <h1 className="primary-heading">
                {chooseTextLanguage(
                    "Welcome to The university of Baghdad",
                    "مرحبا بكم في جامعة بغداد"
                )}
            </h1>
            <p className="header-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                quis provident, iste excepturi explicabo necessitatibus
                veritatis exercitationem quod dicta hic alias eaque, numquam
                molestias quaerat accusamus voluptates nihil! Porro, voluptas.
                Placeat, dolor quibusdam! Placeat labore provident eius
                accusamus ad error dolorem beatae, aliquid officiis autem.
            </p>
            <form className="header-form" action="">
                <img src="../assets/images/search.svg" alt="" />
                <input
                    className="fade-in"
                    key={Math.random()}
                    type="text"
                    placeholder={chooseTextLanguage("Search", "بحث")}
                />
                <button
                    className="fade-in"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    key={Math.random()}
                >
                    {chooseTextLanguage("Search", "بحث")}
                </button>
            </form>
        </header>
    );
}

export default Header;
