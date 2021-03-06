/***
 *@name 数据结构复习笔记
 *@plain 复习巩固，探索求新
 *@author xiaobaicai
 *@startTime 2018-6-28
 ***
 
*** 数据结构与算法描述 ***----------------------------------------
**概念:数据 数据元素 数据对象
*1:逻辑结构：集合，线性结构，树形结构，图形结构
*2:存储结构：顺序存储结构，链式存储结构，索引存储结构，散列存储结构
*
**抽象数据类型
*原子类型 固定聚合类型 可变聚合类型
*
**算法特性
*确定性 可行性 有穷性 输入 输出 
**优秀算法的特性
*正确性 可读性 健壮性 高效率与低存储

***  线性表  ***--------------------------------------------------

***  栈和队列  ***------------------------------------------------

***  串  ***------------------------------------------------------
*1：了解串的概念
*2：掌握串的顺序存储及实现 
*3：了解串的链式存储
*4：理解串的模式匹配算法

*** 数组和广义表 ***----------------------------------------------
*1：掌握数组的存储原理
 //列序优先存储
*2：了解特殊矩阵的存储原理
 //对称矩阵，三角矩阵，对角矩阵 
 
 
*** 查找  ***
*顺序查找
*折半查找
*插值查找
 该查找是按照一定比例修改每次分割的值，这折半查找的基础上，修改mid的值
*索引顺序查找
 又称分块查找
*二叉排序树
*平衡二叉树
*B树
 一颗m阶的B树或者是一颗空树，或者是满足一下要求:
 1:树中的每个节点最多有m颗子树
 2:根节点中至少有两个子节点。唯一的例外是B树是一颗空树，根节点就是叶子节点
 3:除根节点外，节点中关键字的个数取值范围为[m/2]-1到到m-1(m/2向上取整)
 4:所有叶子节点都在同一层
 5:除根节点和叶子节点外，如果结点有k-1个关键字，那么这个节点就有k个子节点，
   关键字按递增序列排序。
   
***  哈希表  ***
*直接定址法
*数字分析法
*平方取中法
*折叠法
*除留余数法
*随机数法

**处理哈希冲突
*开放定址法
*再哈希法
*拉链法
*创建公共溢出区

*** 内部排序  ***
*交换排序
 1:冒泡排序 最好:O(n) 最坏:O(n2) 平均:O(n2)  空间:O(1)    稳定
 2:快速排序 最好:O(nlog2(n))  最坏:O(n2) 平均:O(nlog2(n)) 空间:O(nlog2(x)) 不稳定
*插入排序
 1:直接插入排序  最好:O(n) 最坏:O(n2) 平均:O(n2) 空间:O(1) 稳定
 2:折半插入排序  最好:O()
 3:希尔排序    平均O(n**1.3)  空间O(1)  不稳定
*选择排序
 1:简单选择排序 最好:O(n) 最坏:O(n2) 平均:O(n2) 不稳定
 3:堆排序  最好:O(nlog2(n)) 最坏:O(nlog2(n)) 平均:O(nlog2(n)) O(1) 不稳定
*归并排序 
*基数排序  