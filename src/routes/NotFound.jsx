function NotFound({ language }) {
    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h2>{language === "en" ? "Not found!" : "الصفحة غير متوفرة"}</h2>
            <p>
                {language === "en"
                    ? ` The page you are looking for might have been removed, had its
                    name changed or is temporarily unavailable.`
                    : `الصفحة التي تبحث عنها قد تمت إزالتها أو تغيير اسمها أو غير متاحة مؤقتًا.`}
            </p>
        </div>
    );
}

export default NotFound;
