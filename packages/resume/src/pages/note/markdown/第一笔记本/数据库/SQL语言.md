---
title: SQL语言
updated: 2019-10-22T10:32:55
created: 2019-07-30T09:06:31
---

SQL语言
2019年7月30日
9:06
一、SQL语言
SQL是结构化查询语言（Structured Query Language），专门用于数据存取、数据更新及数据库管理等操作。
二、SQL语言分类
三、 创建表--学生信息表infos
create table infos(

stuid varchar2(10) not null,

suname varchar2(20) not null,

sex varchar2(2),

age number(3)

);

1）设置学号为主键列

主键：用来标识唯一一行

--设置学号为主键列（主键约束）

alter table infos add constraint pk_infos primary key(stuid);

2）设置检查约束

--设置性别的值只能是‘男’或‘女’（检查约束）

alter table infos add constraint ch_infos_sex check(sex = '男' or sex = '女');

--设置年龄的值为0-150

alter table infos add constraint number_infos_age check(0 \<= age and age \<=150);

3）设置唯一约束

--设置唯一约束

alter table INFOS

add constraint UN_INFOS_STUNAME unique (SUNAME)

4）设置外键

--设置外键

alter table SCORE

add constraint FK_COURSEID foreign key (COURSEID)

references COURSE (COURSEID);

5）设置非空约束

--非空约束

not null;

四、Oracle常用数据类型
1、char（length）：储存固定长度的字符串，储存字符串长度小于length，用空格补齐

2、varchar2（length）：储存可变长度的字符串，length指定字符串的最大长度

3、number(p,s):存储浮点数，p代表整数+小数，s代表小数位数

4、date:存储年月日、时分秒

5、timestamp：存储年月日、时分秒以及秒以后后六位及时区

select sysdate,systimestamp from dual

6、clob：存储大文本

7、blob：存储二进制对象，如图形、视频、声音等。
五、三个完整性
1、设置数据类型、长度、是否为空保证了列的完整性，也叫实体完整性。

2、通过设置主键，使每一行有了唯一标识，保证了行的完整性。

3、通过设置外键，建立主外键关联，保证了引用完整性。

A表中有一个字段，是B表的主键，那它可以是A表的外键。
六、序列的创建和使用
作用：实现主键自增，避免主键重复

create sequence infos_seq

start with 1

increment by 1

nomaxvalue

select infos_seq.nextval from dual;取序列的下一个值

select infos_seq.currval from dual；取序列的当前值

