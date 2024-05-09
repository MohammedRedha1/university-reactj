import axios from "axios";
import ApplicationStatus from "./ApplicationStatus";
import { useRef, useState, useEffect } from "react";
function Form({ form, language, chooseTextLanguage }) {
    const [status, setStatus] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [statusResponse, setStatusResponse] = useState(null);
    const popupRef = useRef(null);
    const [shownForm, setShownForm] = useState("apply"); // apply or check
    useEffect(() => {
        popupRef.current = document.querySelector(".popup");
        if (isOpen && popupRef.current) {
            popupRef.current.showModal();
        } else if (popupRef.current) {
            popupRef.current.close();
        }
    }, [isOpen]);
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            department: formData.get("department"),
            examid: formData.get("examid"),
            gpa: formData.get("gpa"),
        };
        try {
            const response = await axios.post(
                "http://localhost:8080/apply",
                JSON.stringify(data),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response);
            setResponseMessage(response.data.message[language]);
            setStatus(response.status); // Set status to a non-null value
            setIsOpen(true); // Open the dialog
        } catch (error) {
            console.error(error.response.data.message[language]);
            setResponseMessage(error.response.data.message[language]);
            setStatus(error.response.status); // Set status to a non-null value
            setIsOpen(true); // Open the dialog
        }
    }
    async function handleCheckStatus(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget.form);
        const data = {
            examid_st: formData.get("examid_st"),
        };
        try {
            const response = await axios.post(
                "http://localhost:8080/check",
                JSON.stringify(data),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response);
            setStatusResponse(response.data.message[language]);
        } catch (error) {
            console.error(error.response.data.message[language]);
            setStatusResponse(error.response.data.message[language]);
        }
    }
    function handleNumericInput(
        e,
        maxLength = Infinity,
        min = -Infinity,
        max = Infinity
    ) {
        let value = e.target.value;
        if (isNaN(parseInt(value.slice(-1))))
            e.target.value = e.target.value.slice(0, -1);
        if (!isNaN(max) && !isNaN(min)) {
            if (
                parseInt(e.target.value) > max ||
                parseInt(e.target.value) * 1 < min
            ) {
                e.target.value = e.target.value.slice(0, -1);
            }

            if (!isNaN(maxLength)) {
                if (e.target.value.length > maxLength) {
                    e.target.value = e.target.value.slice(0, -1);
                }
            }
        }
    }
    return (
        <>
            <div className="form-wrapper">
                <form className="apply-form" onSubmit={handleSubmit}>
                    <div className="form-tabs">
                        <button
                            className={
                                "form-tab" +
                                (shownForm === "apply" ? " active" : "")
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setShownForm("apply");
                                setStatusResponse(null);
                            }}
                        >
                            {chooseTextLanguage("Apply", "قدّم")}
                        </button>
                        <button
                            className={
                                "form-tab" +
                                (shownForm === "check" ? " active" : "")
                            }
                            onClick={(e) => {
                                setShownForm("check");
                                e.preventDefault();
                            }}
                        >
                            {chooseTextLanguage(
                                "Check application status",
                                "تحقّق من حالة التقديم"
                            )}
                        </button>
                    </div>
                    {shownForm === "apply" &&
                        form.inputFields.map((input) => {
                            if (input.type !== "select")
                                return (
                                    <div className="form-group" key={input.id}>
                                        <label htmlFor={input.id}>
                                            {input.label[language]}
                                        </label>
                                        <input
                                            required
                                            type={input.type}
                                            {...(input.type === "tel"
                                                ? { pattern: "[0-9]*" }
                                                : {})}
                                            id={input.id}
                                            name={input.id}
                                            placeholder={input.label[language]}
                                            onInput={
                                                input.type === "tel" ||
                                                input.id === "examid"
                                                    ? (e) =>
                                                          handleNumericInput(
                                                              e,
                                                              15
                                                          )
                                                    : input.id === "gpa"
                                                    ? (e) =>
                                                          handleNumericInput(
                                                              e,
                                                              3,
                                                              0,
                                                              100
                                                          )
                                                    : null
                                            }
                                        />
                                    </div>
                                );
                            return (
                                <div className="form-group" key={input.id}>
                                    <label htmlFor={input.id}>
                                        {input.label[language]}
                                    </label>
                                    <select id={input.id} name={input.id}>
                                        {input.options.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label[language]}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            );
                        })}
                    {shownForm === "apply" && (
                        <button className="form-btn" type="submit">
                            {form.buttonContent[language]}
                        </button>
                    )}
                    {shownForm === "check" && (
                        <div className="form-group check">
                            <label htmlFor="examid_st">
                                {chooseTextLanguage("Exam ID", "رقم الامتحان")}
                            </label>
                            <input
                                required
                                type="tel"
                                id="examid_st"
                                name="examid_st"
                                placeholder={chooseTextLanguage(
                                    "Exam ID",
                                    "رقم الامتحان"
                                )}
                                onInput={(e) => handleNumericInput(e, 15)}
                            />
                            <button
                                className="form-btn"
                                type="submit"
                                onClick={handleCheckStatus}
                            >
                                {chooseTextLanguage("Check", "تحقّق")}
                            </button>
                            <p className="status-result">
                                {statusResponse === null
                                    ? chooseTextLanguage(
                                          "Enter your exam ID to check your application status",
                                          "أدخل رقم الامتحان للتحقق من حالة التقديم"
                                      )
                                    : statusResponse}
                            </p>
                        </div>
                    )}
                </form>
            </div>
            {status !== null && (
                <ApplicationStatus
                    message={responseMessage}
                    isSuccessful={status === 200}
                    setStatus={setStatus}
                    chooseTextLanguage={chooseTextLanguage}
                    setIsOpen={setIsOpen}
                />
            )}
        </>
    );
}

export default Form;
