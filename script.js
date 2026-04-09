// Enable drag functionality for all 14 plants
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        // Prevent default browser behavior (like text selection)
        e.preventDefault();
        
        // Capture the initial mouse/touch position
        pos3 = e.clientX;  // X coordinate where drag started
        pos4 = e.clientY;  // Y coordinate where drag started
        
        // Set up event listeners for the dragging process
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // Calculate the distance moved since the last event
        pos1 = pos3 - e.clientX;  // Horizontal distance moved
        pos2 = pos4 - e.clientY;  // Vertical distance moved
        
        // Update the current position tracking
        pos3 = e.clientX;  // New current X position
        pos4 = e.clientY;  // New current Y position
        
        // Apply the movement to the element's position
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        // Remove the document-level event listeners
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

// Reset button functionality
document.getElementById('reset-btn').addEventListener('click', () => {
        // Reset positions of all plants to their initial state
        for (let i = 1; i <= 14; i++) {
            const plant = document.getElementById(`plant${i}`);
            plant.style.top = '';
            plant.style.left = '';
        }
    });