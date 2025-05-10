const planningForm = document.getElementById('planning-form');
const tripFormSection = document.getElementById('trip-form');
const tripResultsSection = document.getElementById('trip-results');

function showNotification(message) {
    const modal = document.createElement('div');
    modal.className = 'notification-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'notification-content';
    
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.className = 'notification-message';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'btn btn-primary notification-close';
    closeButton.textContent = 'Aizvērt';
    
    modalContent.appendChild(messageText);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

planningForm.addEventListener('submit', (event) => {
    event.preventDefault();
        
    setTimeout(() => {
        tripFormSection.style.display = 'none'; // paslept formu
        tripResultsSection.style.display = 'block'; // paradit rezultatu
    }, 500);
    
    const editPlanButton = document.getElementById('edit-plan');
    editPlanButton.addEventListener('click', (event) => {
        event.preventDefault();
        tripResultsSection.style.display = 'none';
        tripFormSection.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('.plan-actions .btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', (event) => {
            event.preventDefault();
            showNotification('Plāns veiksmīgi saglabāts Jūsu profilā!');
        });
    }
});