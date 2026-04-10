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

addButton.addEventListener('click', () => {
    const newProject = Project.cloneNode(true);
    newProject.id = `project${document.querySelectorAll('.project').length + 1}`;
    newProject.style.top = '';
    newProject.style.left = '';
    document.body.appendChild(newProject);
    dragElement(document.getElementById(`project${document.querySelectorAll('.project').length}`));
});

    