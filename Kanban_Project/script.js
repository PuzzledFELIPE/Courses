dragElement(document.getElementById('project1'));
dragElement(document.getElementById('project2'));

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

// Reset button functionality
const resetButton = document.getElementById('reset-btn');

if (resetButton) {
    resetButton.addEventListener('click', () => {
        // Reset positions of all projects to their initial state
        for (let i = 1; i <= 2; i++) {
            const project = document.getElementById(`project${i}`);
            project.style.top = '';
            project.style.left = '';
        }
    });
}