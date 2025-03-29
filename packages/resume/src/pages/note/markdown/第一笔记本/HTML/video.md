---
title: video
updated: 2020-01-15T14:58:51
created: 2019-12-06T16:53:19
---

==\<video id="myVideo"width="100%"height="100%"controls draggable="true" ondragstart="dragStart(event)"\>==
==\<source src="video/mov_bbb.mp4"type="video/mp4"\>==
==\<source src="video/mov_bbb.mp4"type="video/ogg"\>==
==\<source src="video/mov_bbb.mp4"type="video/webm"\>==
==\<object data="video/mov_bbb.mp4"width="320"height="240"\>==
==\<embed src="video/mov_bbb.mp4"width="320"height="240"\>==
==\</object\>==
==\</video\>==

video方法:
el.play();

el.pause();

el.requestFullScreen();//实现全屏播放

el.msRequestFullscreen;//实现全屏播放

el.webkitRequestFullScreen();//谷歌实现全屏播放

el.media.mozRequestFullScreen();//火狐实现全屏播放
