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
    
    // 更新顶部会动的时钟（保持不变）
    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');
    
    if (dateElement) dateElement.textContent = dateString;
    if (timeElement) timeElement.textContent = timeString;

    // 【关键改动】这里删除了原来更新 signinDateElement 的代码，
    // 这样这一行就不会跟着每秒乱动了。
}

document.addEventListener('DOMContentLoaded', function() {
    // --- 新增：固定签到时间的逻辑 (只在加载时运行一次) ---
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 格式：日期xx:xx:xx，中间无空格
    const fixedTime = `${year}-${month}-${day}${hours}:${minutes}:${seconds}`;
    const fixedElement = document.getElementById('fixed-signin-time');
    if (fixedElement) {
        fixedElement.textContent = fixedTime;
    }
    // ----------------------------------------------

    updateDateTime();
    setInterval(updateDateTime, 1000); // 这里依然控制顶部时钟每秒跳动

    const viewButton = document.querySelector('.view-button');
    if (viewButton) {
        viewButton.addEventListener('click', function() {
            // 你的原有逻辑
        });
    }
});

// window.addEventListener('load', ...) 动画部分不需要动

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
