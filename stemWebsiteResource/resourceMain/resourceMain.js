function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showBubbleSet(setNumber) {
    // Reset all main bubbles
    document.querySelectorAll('.main-bubble').forEach(bubble => {
        bubble.classList.remove('active');
    });
    
    // Set clicked bubble as active
    const clickedBubble = document.querySelector(`.main-bubble:nth-child(${setNumber})`);
    if (clickedBubble) {
        clickedBubble.classList.add('active');
    }
    
    // Hide all bubble sets
    document.querySelectorAll('.bubble-set').forEach(set => {
        set.classList.add('hidden');
    });
    
    // Show the selected bubble set
    const selectedSet = document.getElementById(`bubble-set-${setNumber}`);
    if (selectedSet) {
        selectedSet.classList.remove('hidden');
    }
}

// Reset bubbles when clicking elsewhere
document.addEventListener('click', function(event) {
    if (!event.target.closest('.bubble-path')) {
        document.querySelectorAll('.main-bubble').forEach(bubble => {
            bubble.classList.remove('active', 'inactive');
        });
        document.querySelectorAll('.bubble-path-column').forEach(path => {
            path.classList.add('hidden');
        });
    }
});