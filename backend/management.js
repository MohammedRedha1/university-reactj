async function manageApplicationsPage() {
    const tableBody = document.querySelector("#data-table-body");

    // Fetch initial data
    try {
        const response = await fetch("http://localhost:8080/pending");
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error(`Failed to load applications: ${error}`);
    }

    // Establish a WebSocket connection
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = function () {
        console.log("WebSocket is connected.");
    };

    // Listen for messages from the server
    socket.onmessage = function (event) {
        console.log("new");
        let data = JSON.parse(event.data);

        // Check if data is an array. If not, convert it into an array
        if (!Array.isArray(data)) {
            data = [data];
        }

        // Add new rows to the table
        populateTable(data);
    };

    socket.onerror = function (event) {
        console.error(`WebSocket error: ${event.message}`);
    };

    socket.onclose = function () {
        console.log("WebSocket is closed.");
    };
}

async function manageAcceptedApplicationsPage() {
    try {
        const response = await fetch("http://localhost:8080/accepted");
        const data = await response.json();
        console.log(data);
        populateTable(data);
    } catch (error) {
        console.error(`Failed to load applications: ${error}`);
    }
}

async function manageRejectedApplicationsPage() {
    try {
        const response = await fetch("http://localhost:8080/rejected");
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error(`Failed to load applications: ${error}`);
    }
}

function populateTable(data) {
    const tableBody = document.querySelector("#data-table-body");
    data.forEach((item) => {
        const tr = document.createElement("tr");

        // Create table data for each property
        const tdName = document.createElement("td");
        tdName.textContent = item.name;
        tr.appendChild(tdName);

        const tdEmail = document.createElement("td");
        tdEmail.textContent = item.email;
        tr.appendChild(tdEmail);

        const tdExamId = document.createElement("td");
        tdExamId.textContent = item.examid;
        tr.appendChild(tdExamId);

        const tdPhone = document.createElement("td");
        tdPhone.textContent = item.phone;
        tr.appendChild(tdPhone);
        const tdGPA = document.createElement("td");
        tdGPA.textContent = item.gpa;
        tr.appendChild(tdGPA);
        if (item.department) {
            const tdDepartment = document.createElement("td");
            tdDepartment.textContent = item.department;
            tr.appendChild(tdDepartment);
        }

        if (document.body.id === "pending") {
            const tdAction = document.createElement("td");
            tdAction.classList.add("actions");
            const acceptButton = document.createElement("button");
            acceptButton.textContent = "Accept";
            acceptButton.classList.add("accept");
            acceptButton.addEventListener("click", async () => {
                if (
                    !confirm(
                        "Are you sure you want to accept this application?"
                    )
                )
                    return;
                try {
                    console.log("Accepting:", item);

                    const response = await fetch(
                        `http://localhost:8080/accept/${item._id}`,
                        { method: "POST" }
                    );
                    if (response.ok) {
                        tr.remove();
                    } else {
                        console.error(
                            `Failed to accept application: ${response.statusText}`
                        );
                    }
                } catch (error) {
                    console.error(`Failed to accept application: ${error}`);
                }
            });
            tdAction.appendChild(acceptButton);

            tr.appendChild(tdAction);

            const rejectButton = document.createElement("button");
            rejectButton.textContent = "Reject";
            rejectButton.addEventListener("click", async () => {
                if (
                    !confirm(
                        "Are you sure you want to reject this application?"
                    )
                )
                    return;
                try {
                    console.log("Rejecting:", item);

                    const response = await fetch(
                        `http://localhost:8080/reject/${item._id}`,
                        { method: "POST" }
                    );
                    if (response.ok) {
                        tr.remove();
                    } else {
                        console.error(
                            `Failed to reject application: ${response.statusText}`
                        );
                    }
                } catch (error) {
                    console.error(`Failed to reject application: ${error}`);
                }
            });
            rejectButton.classList.add("reject");
            tdAction.appendChild(rejectButton);
            tr.appendChild(tdAction);
        }

        tableBody.appendChild(tr);
    });
}

window.addEventListener("load", () => {
    if (document.body.id === "pending") {
        manageApplicationsPage();
        return;
    }
    if (document.body.id === "accepted") {
        manageAcceptedApplicationsPage();
        return;
    }
    manageRejectedApplicationsPage();
});
