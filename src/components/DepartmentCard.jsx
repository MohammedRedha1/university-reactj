// import "../../public/styles/department.min.css";
import { CustomLink } from "../components/NavBar";
import { useMatch, useResolvedPath } from "react-router-dom";
function DepartmentCard({ heading, iconSrc, content, to, currentDepartment }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <CustomLink
            to={to}
            isActive={isActive}
            className="department-card"
            currentDepartment={currentDepartment}
        >
            <div className="department-img-box">
                <img src={iconSrc} alt="icon" />
            </div>
            <h3 key={Math.random()} className="heading-300 fade-in">
                {heading}
            </h3>
            <p key={Math.random()} className="department-content fade-in">
                {content}
            </p>
        </CustomLink>
    );
}

export default DepartmentCard;
