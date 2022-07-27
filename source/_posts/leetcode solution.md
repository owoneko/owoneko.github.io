---
title: Leetcode 题解
date: 2022-07-27 11:56:16
categories:
-Programming
tags: 
-Leetcode
---

题目：
628. 三个数的最大乘积
解题思路：
首先降序排列，然后讨论首位与末位的正负情况，最后取乘积较大的相邻位(可能为首位或末位)与另一位相乘即可。
代码：
int cmp (const void * a , const void * b){
return * (int *) b > * (int *) a;
}
int maximumProduct(int* nums, int numsSize){
qsort(nums , numsSize , sizeof(int) , cmp);
if (nums[numsSize-1] < 0 & nums[0] > 0 & nums[numsSize-2] * nums[numsSize-1] > nums[2] * nums[1])
return nums[numsSize-2] * nums[numsSize-1] * nums[0];
else
return nums[2] * nums[1] * nums[0];
}
链接：
https://leetcode.cn/problems/maximum-product-of-three-numbers/solution/by-hardcore-svvansonuit-6imu/