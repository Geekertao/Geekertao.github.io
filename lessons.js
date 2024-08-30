
  document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const autoplay = queryParams.get('autoplay');

    console.log('Autoplay:', autoplay); // 添加调试信息

    switch (autoplay) {
      case '1':
        showVideo1();
        break;
      case '0':
        showVideo();
        break;
      case '2':
        showVideo5();
        break;
      case '3':
        showVideo4()
        break;
      default:
        console.log('参数无效');
        break;
    }
  });

