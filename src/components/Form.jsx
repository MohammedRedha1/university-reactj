function Form({ form, language }) {
    function handleManagingNumericInput(
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
        <div className="form-wrapper">
            <form className="apply-form" onSubmit={(e) => e.preventDefault()}>
                {form.inputFields.map((input) => {
                    if (input.type !== "select")
                        return (
                            <div className="form-group" key={input.id}>
                                <label htmlFor={input.id}>
                                    {input.label[language]}
                                </label>
                                <input
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
                                                  handleManagingNumericInput(
                                                      e,
                                                      15
                                                  )
                                            : input.id === "gpa"
                                            ? (e) =>
                                                  handleManagingNumericInput(
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
                <button className="form-btn" type={form.buttonType}>
                    {form.buttonContent[language]}
                </button>
            </form>
        </div>
    );
}

export default Form;
