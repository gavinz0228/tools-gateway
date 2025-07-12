document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/tools')
        .then(response => response.json())
        .then(tools => {
            const toolsContainer = document.getElementById('tools-container');
            tools.forEach(tool => {
                const toolCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${tool.name}</h5>
                                <p class="card-text">${tool.description}</p>
                                <a href="${tool.link}" class="btn btn-primary mt-auto">Use Tool</a>
                            </div>
                        </div>
                    </div>
                `;
                toolsContainer.innerHTML += toolCard;
            });
        });
});