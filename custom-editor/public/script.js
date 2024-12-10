let logoRotation = 0; 
document.getElementById('rotateLogo').addEventListener('click', function() {
    logoRotation = (logoRotation + 90) % 360; 
    alert(`Logo will be rotated by ${logoRotation} degrees.`);
});

document.getElementById('mergeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    const logo = document.getElementById('logo').files[0];
    const logoPercentage = document.getElementById('logoPercentage').value;
    const stencil = document.getElementById('stencil').files[0];
    const stencilPercentage = document.getElementById('stencilPercentage').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    formData.append('logo', logo);
    formData.append('logoPercentage', logoPercentage);
    formData.append('logoRotation', logoRotation); 
    formData.append('stencilPercentage', stencilPercentage);
    formData.append('width', width);
    formData.append('height', height);

    if (stencil) {
        formData.append('stencil', stencil);
    }

    fetch('/backend/custom/merge', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const mergedImage = document.getElementById('mergedImage');
        const downloadButton = document.getElementById('downloadButton');

        document.getElementById('resultSection').style.display = 'block';

        mergedImage.src = url;

        downloadButton.href = url;
    })
    .catch(error => console.error('Error:', error));
});

document.querySelectorAll('.default-stencil').forEach(button => {
    button.addEventListener('click', function() {
        const stencilPath = this.dataset.stencil;
        fetch(`/backend/default/${stencilPath}`)
            .then(response => response.blob())
            .then(blob => {
                const file = new File([blob], stencilPath, { type: 'image/png' });
                document.getElementById('stencil').files = createFileList(file);
            })
            .catch(error => console.error('Error:', error));
    });
});
document.getElementById('logo').addEventListener('change', function() {
    const logo = this.files[0];
    if (logo) {
        const logoPreview = document.getElementById('logoPreview');
        const reader = new FileReader();
        reader.onload = function(e) {
            logoPreview.innerHTML = `<img src="${e.target.result}" alt="Logo Preview" class="preview-image">`;
        };
        reader.readAsDataURL(logo);
    }
});

document.getElementById('stencil').addEventListener('change', function() {
    const stencil = this.files[0];
    if (stencil) {
        const stencilPreview = document.getElementById('stencilPreview');
        const reader = new FileReader();
        reader.onload = function(e) {
            stencilPreview.innerHTML = `<img src="${e.target.result}" alt="Stencil Preview" class="preview-image">`;
        };
        reader.readAsDataURL(stencil);
    }
});

function createFileList(file) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    return dataTransfer.files;
}


