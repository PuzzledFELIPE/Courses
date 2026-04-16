const STORAGE_KEY = "kanbanData_v1";

const projectTitle = document.getElementById("project-title");
const taskForm = document.getElementById("task-form");
const taskFilterInput = document.getElementById("task-filter");
const dropzones = document.querySelectorAll(".dropzone");

const params = new URLSearchParams(window.location.search);
const projectId = params.get("projectId");

let dragTaskId = null;

function loadData() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        return { projects: [] };
    }

    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.projects)) {
            return { projects: [] };
        }
        return parsed;
    } catch (error) {
        console.error("Could not parse localStorage data", error);
        return { projects: [] };
    }
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCurrentProject(data) {
    return data.projects.find((project) => project.id === projectId);
}

function createTask(title, description, priority) {
    return {
        id: `task-${crypto.randomUUID()}`,
        title: title.trim(),
        description: description.trim(),
        priority,
        status: "backlog",
        createdAt: Date.now()
    };
}

function taskMatchesFilter(task, filterText) {
    const query = filterText.trim().toLowerCase();
    if (!query) {
        return true;
    }

    return (
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
    );
}

function priorityLabel(priority) {
    if (priority === "high") {
        return "High";
    }
    if (priority === "low") {
        return "Low";
    }
    return "Medium";
}

function renderBoard() {
    const data = loadData();
    const project = getCurrentProject(data);

    if (!projectId || !project) {
        projectTitle.textContent = "Project not found";
        taskForm.querySelector("button").disabled = true;
        dropzones.forEach((zone) => {
            zone.innerHTML = "<p class=\"empty\">Open a valid project from the projects page.</p>";
        });
        return;
    }

    projectTitle.textContent = project.name;
    const filterText = taskFilterInput.value;

    dropzones.forEach((zone) => {
        const status = zone.dataset.status;
        const visibleTasks = project.tasks.filter(
            (task) => task.status === status && taskMatchesFilter(task, filterText)
        );

        zone.innerHTML = "";

        if (!visibleTasks.length) {
            zone.innerHTML = "<p class=\"empty\">No tasks here.</p>";
            return;
        }

        visibleTasks.forEach((task) => {
            const card = document.createElement("article");
            card.className = `task-card priority-${task.priority}`;
            card.draggable = true;
            card.dataset.taskId = task.id;

            const title = document.createElement("h3");
            title.textContent = task.title;

            const description = document.createElement("p");
            description.className = "task-description";
            description.textContent = task.description || "No description.";

            const meta = document.createElement("p");
            meta.className = "task-meta";
            meta.textContent = `Priority: ${priorityLabel(task.priority)}`;

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-task";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                const nextData = loadData();
                const nextProject = getCurrentProject(nextData);
                if (!nextProject) {
                    return;
                }

                nextProject.tasks = nextProject.tasks.filter((item) => item.id !== task.id);
                saveData(nextData);
                renderBoard();
            });

            card.addEventListener("dragstart", () => {
                dragTaskId = task.id;
                card.classList.add("dragging");
            });

            card.addEventListener("dragend", () => {
                dragTaskId = null;
                card.classList.remove("dragging");
            });

            card.append(title, description, meta, deleteButton);
            zone.appendChild(card);
        });
    });
}

function moveTask(taskId, newStatus) {
    const data = loadData();
    const project = getCurrentProject(data);
    if (!project) {
        return;
    }

    const task = project.tasks.find((item) => item.id === taskId);
    if (!task) {
        return;
    }

    task.status = newStatus;
    saveData(data);
    renderBoard();
}

dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault();
        zone.classList.add("over");
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("over");
    });

    zone.addEventListener("drop", (event) => {
        event.preventDefault();
        zone.classList.remove("over");

        if (!dragTaskId) {
            return;
        }

        moveTask(dragTaskId, zone.dataset.status);
    });
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = loadData();
    const project = getCurrentProject(data);
    if (!project) {
        return;
    }

    const titleInput = document.getElementById("task-title");
    const descriptionInput = document.getElementById("task-description");
    const priorityInput = document.getElementById("task-priority");

    if (!titleInput.value.trim()) {
        titleInput.focus();
        return;
    }

    project.tasks.unshift(createTask(titleInput.value, descriptionInput.value, priorityInput.value));
    saveData(data);

    taskForm.reset();
    document.getElementById("task-priority").value = "medium";
    renderBoard();
});

taskFilterInput.addEventListener("input", renderBoard);

renderBoard();
