const planningForm = document.getElementById('planning-form');
const tripFormSection = document.getElementById('trip-form');
const tripResultsSection = document.getElementById('trip-results');

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

