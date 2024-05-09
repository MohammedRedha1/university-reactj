import Animated from "../components/Animated";
import Form from "../components/Form";
import { applyForm } from "../content";
function Apply({ language, chooseTextLanguage }) {
    return (
        <Animated>
            <Form
                form={applyForm}
                language={language}
                chooseTextLanguage={chooseTextLanguage}
            />
        </Animated>
    );
}

export default Apply;
