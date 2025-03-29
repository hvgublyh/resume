---
title: filter
updated: 2020-01-02T10:35:08
created: 2020-01-02T10:19:09
---

相关链接 : <https://www.cnblogs.com/coco1s/p/7519460.html>
{
filter: blur(5px); //高斯模糊
filter: brightness(0.4); //亮度
filter: contrast(200%); //对比度
filter: drop-shadow(16px 16px 20px blue) invert(75%); //设置阴影,前两个值必选
filter: grayscale(50%); //转换为灰度图像
filter: hue-rotate(90deg); //色相旋转, 0deg 到360deg,360deg相当于旋转一圈
filter: invert(75%); //反转输出图像 ,100% 是完全反转 ,0%则图像无变化,0% 到 100% 为效果的线性乘子
filter: opacity(25%); //透明度
filter: saturate(30%); //饱和度
filter: sepia(60%); //图像转为深褐色
/\* Apply multiple filters \*/
filter: contrast(175%) brightness(3%); //复合函数
/\* Global values \*/
filter: inherit; //继承
filter: initial; //初始值
filter: unset; //不设置
}
