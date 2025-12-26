function updateDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // 更新页面元素
    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');
    const signinDateElement = document.querySelector('.info-details .info-item .value');
    
    if (dateElement) {
        dateElement.textContent = dateString;
    }
    
    if (timeElement) {
        timeElement.textContent = timeString;
    }
    
    if (signinDateElement) {
        signinDateElement.textContent = dateString;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    const viewButton = document.querySelector('.view-button');
    if (viewButton) {
        viewButton.addEventListener('click', function() {
        });
    }
});

window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});


// yhs