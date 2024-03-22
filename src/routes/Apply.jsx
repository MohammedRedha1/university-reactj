import Animated from "../components/Animated";
import Form from "../components/Form";
import { applyForm } from "../content";
function Apply({ language }) {
    return (
        <Animated>
            <Form form={applyForm} language={language} />
        </Animated>
    );
}

export default Apply;
