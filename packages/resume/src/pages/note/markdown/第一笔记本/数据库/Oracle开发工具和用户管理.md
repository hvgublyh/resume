---
title: Oracle开发工具和用户管理
updated: 2019-08-02T08:12:49
created: 2019-07-29T14:01:39
---

一、Oracle相关概念
1、Oracle属于关系型数据库（数据库分类：网状型，层次型，关系型）

2、Oracle数据库的体系结构

1）数据库实例（Oracle实例），就是我们平常所说的服务

2）表空间，Oracle数据库是通过表空间来储存表，一个数据库实例可以有多个表空间，

一个表空间下可以有多张表

3）用户，Oracle数据库创建好以后，要想在库里建表，必须先创建用户，为用户指明表空间，

不指定的话默认为users表空间

4）由行和列组成的二维数据结构，用来储存行记录

5）数据，表中的行记录

二、Oracle的系统用户
1、sys和system

 sys system
<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 30%" />
<col style="width: 38%" />
</colgroup>
<tbody>
<tr class="odd">
<td>地位</td>
<td><p>Oracle的超级用户</p>
<p>拥有DBA权限</p></td>
<td>Oracle默认的系统管理员</td>
</tr>
<tr class="even">
<td>作用</td>
<td><p>主要用来维护系统</p>
<p>信息和管理实例</p></td>
<td><p>通常用来管理用户、权限</p>
<p>和存储等</p></td>
</tr>
<tr class="odd">
<td>登录身份</td>
<td><p>只能以sysdba或</p>
<p>sysoper登录</p></td>
<td>只能以normal方式登录</td>
</tr>
</tbody>
</table>

2、scott是系统默认的普通用户，安装数据库时可解锁，若未解锁，可使用以下命令进行解锁：alter user scott unclock；解锁scott用户
三、sqlplus工具
sqlplus的常用命令：

1、查看当前用户：show user

2、切换用户：conn 用户名/密码 @orcl(连接到实例) as(登录身份)

3、断开与数据库的连接：disc

4、更改密码：passw 用户名

5、退出：exit，断开与数据库的连接并退出sqlplus

6、创建用户

前提条件：只有拥有DBA权限的用户才能创建用户

create user 用户名 identified by 密码;

注意：新创建的用户不能立即登录，需要权限

创建用户时未指明表空间，默认表空间为users

7、给用户授权

前提：拥有DBA权限的用户才能给用户授权

DBA:系统最高权限，可以创建用户、给用户授权、撤销权限等

resource:可以创建表、视图、索引等

connect:会话权限，只能登录数据库

grant connect,resource to hvgu

注意：普通用户只赋予connect及resource即可

8、收回用户权限

前提：拥有DBA权限的用户才能收回权限

revoke connect,resource from hvgu;

9、前提条件：只有拥有DBA权限的用户才能删除用户

drop user 用户名 cascade;

注意：当用户拥有自己的表或视图等对象时，加上cascade可一并删除

10、忘记密码

1）系统管理员忘记密码

看课件！！！

2）普通用户忘记密码

以DBA身份登录

使用passw用户名来修改密码

