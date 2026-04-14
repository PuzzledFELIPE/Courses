dragElement(document.getElementById('project1'));

function dragElement(projectElement) {
    let startX = 0;
    let startY = 0;
    let startTop = 0;
    let startLeft = 0;
    let activePointerId = null;

    projectElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        // Prevent default browser behavior (like text selection)
        e.preventDefault();
        activePointerId = e.pointerId;
        projectElement.setPointerCapture(e.pointerId);

        const computedStyle = window.getComputedStyle(projectElement);
        startTop = parseFloat(computedStyle.top) || projectElement.offsetTop;
        startLeft = parseFloat(computedStyle.left) || projectElement.offsetLeft;
        
        // Capture the initial mouse/touch position
        startX = e.clientX;
        startY = e.clientY;
        
        // Set up event listeners for the dragging process
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // Apply the movement to the element's position
        projectElement.style.top = (startTop + (e.clientY - startY)) + 'px';
        projectElement.style.left = (startLeft + (e.clientX - startX)) + 'px';
    }

    function stopElementDrag() {
        // Remove the document-level event listeners
        document.onpointerup = null;
        document.onpointermove = null;

        if (activePointerId !== null && projectElement.hasPointerCapture(activePointerId)) {
            projectElement.releasePointerCapture(activePointerId);
        }

        activePointerId = null;
    }
}
    
let Project = document.getElementById('project1');
const addButton = document.getElementById('add-workspace-btn');
const workspacesContainer = document.querySelector('.workspaces');

addButton.addEventListener('click', () => {
    const projects = document.querySelectorAll('.project');
    const lastProject = projects[projects.length - 1];
    const gap = 20;

    const newProject = Project.cloneNode(true);
    const newProjectNumber = projects.length + 1;
    newProject.id = `project${newProjectNumber}`;

    // Put the new card right below the previous card.
    newProject.style.top = `${lastProject.offsetTop + lastProject.offsetHeight + gap}px`;
    newProject.style.left = `${lastProject.offsetLeft}px`;

    workspacesContainer.appendChild(newProject);
    dragElement(newProject);
});

/*Teste para fazer em uma branch nova
const addButton = document.getElementById('add-workspace-btn');
const workspacesContainer = document.querySelector('.workspacesContainer');
let i = 0;

addButton.addEventListener('click', () => {
    const newProject = document.createElement('div');
    newProject.className = 'project';
    i = i + 1;

    if (i === 1) {
        newProject.style.top = '20px';
        newProject.style.left = '20px';
        const newProjectNumber = 1;
        newProject.id = `project${newProjectNumber}`;
    } else {
        const newProjectNumber = projects.length + 1;
        newProject.id = `project${newProjectNumber}`;
        const lastProject = document.getElementById(`project${newProjectNumber - 1}`);
        const gap = 20; // Gap between projects in pixels
        newProject.style.top = `${lastProject.offsetTop + lastProject.offsetHeight + gap}px`;
        newProject.style.left = `${lastProject.offsetLeft}px`;
        // Put the new card right below the previous card.
    }

    console.log(`Adding project`);
    workspacesContainer.appendChild(newProject);
    dragElement(newProject);
});*/

    