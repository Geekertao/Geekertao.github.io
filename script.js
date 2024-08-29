function downloadApp(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // 假设 API 返回的是 JSON 格式的数据
        })
        .then(data => {
            if (data.code === 200 && data.data && data.data.downloadurl) {
                const downloadUrl = data.data.downloadurl;
                const filename = data.data.filename || 'file'; // 如果没有提供文件名，默认为 'file'
                // 创建一个隐藏的<a>元素
                var link = document.createElement("a");
                link.style.display = "none";
                link.href = downloadUrl;
                link.download = filename; // 使用从数据中获取的文件名
                // 将<a>元素添加到文档中
                document.body.appendChild(link);
                // 模拟点击<a>元素以触发下载
                link.click();
                // 清理添加的<a>元素
                document.body.removeChild(link);
            } else {
                console.error("无法获取下载链接，响应数据不正确或未成功。", data);
            }
        })
        .catch(error => {
            console.error("请求 API 或处理响应失败:", error);
        });
}


function toggleLayout() {
    var appContainer = document.querySelector('.app-container');
    var toggleButton = document.getElementById('toggleButton');
    if (appContainer.classList.contains('single-column')) {
        appContainer.classList.remove('single-column');
        toggleButton.textContent = '切换至点读笔/手机视图';
    } else {
        appContainer.classList.add('single-column');
        toggleButton.textContent = '切换至电脑视图';
    }
}
        




function startAnimation(dot) {

    // 应用动画
    dot.style.animation = `move-dot 9s linear infinite, size-dot 5s ease-in-out infinite`;
}

function stopAnimation(dot) {
    dot.style.animation = 'none'; // 停止动画
}

// 点击应用容器时启动动画
// 鼠标进入应用容器时启动动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseenter', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            startAnimation(dot);
        }
    });
});

// 鼠标离开应用容器时停止动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseleave', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            stopAnimation(dot);
        }
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-list');
    if (nav.style.left === '0px') {
        nav.style.left = '-100%';
    } else {
        nav.style.left = '0px';
    }
});
