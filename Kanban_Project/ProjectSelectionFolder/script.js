const STORAGE_KEY = "kanbanData_v1";

const projectForm = document.getElementById("project-form");
const filterInput = document.getElementById("filter");
const projectsList = document.getElementById("projects-list");
const emptyState = document.getElementById("empty-state");

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

function createId(prefix) {
    return `${prefix}-${crypto.randomUUID()}`;
}

function createProject(name, description) {
    return {
        id: createId("project"),
        name: name.trim(),
        description: description.trim(),
        createdAt: Date.now(),
        tasks: []
    };
}

function projectMatchesFilter(project, filterText) {
    const query = filterText.trim().toLowerCase();
    if (!query) {
        return true;
    }

    return (
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );
}

function renderProjects() {
    const data = loadData();
    const filterText = filterInput.value;
    const visibleProjects = data.projects.filter((project) => projectMatchesFilter(project, filterText));

    projectsList.innerHTML = "";

    visibleProjects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent = project.description || "No description.";

        const meta = document.createElement("p");
        meta.className = "project-meta";
        meta.textContent = `Tasks: ${project.tasks.length}`;

        const actions = document.createElement("div");
        actions.className = "project-actions";

        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.textContent = "Open Board";
        openButton.addEventListener("click", () => {
            const encodedId = encodeURIComponent(project.id);
            window.location.href = `../ProjectTasksFolder/ProjectTasks.html?projectId=${encodedId}`;
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "danger";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            const confirmed = window.confirm(`Delete project "${project.name}"?`);
            if (!confirmed) {
                return;
            }

            const nextData = loadData();
            nextData.projects = nextData.projects.filter((item) => item.id !== project.id);
            saveData(nextData);
            renderProjects();
        });

        actions.append(openButton, deleteButton);
        card.append(title, description, meta, actions);
        projectsList.appendChild(card);
    });

    const hasProjects = visibleProjects.length > 0;
    emptyState.hidden = hasProjects;
}

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("project-name");
    const descriptionInput = document.getElementById("project-description");
    const name = nameInput.value;
    const description = descriptionInput.value;

    if (!name.trim()) {
        nameInput.focus();
        return;
    }

    const data = loadData();
    data.projects.unshift(createProject(name, description));
    saveData(data);

    projectForm.reset();
    renderProjects();
});

filterInput.addEventListener("input", renderProjects);

renderProjects();

    