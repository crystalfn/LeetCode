/**
 * Decription:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example:
 * nums1 = [1,3],nums2 = [2],
 * The median is 2.0
 */

/**
 * made by myself
 * 把两个数组结合为一个数组并排序
 * 找到排好序的数组的中位数
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort(function(n1, n2) {
        return n1 - n2;
    })
    let len = nums.length;
    if(len % 2 === 1) return nums[parseInt(len / 2)];
    else return (nums[len / 2] + nums[len / 2 - 1])/2;
};

/**
 * made by myself
 * 根据给定的两个数组的长度判断中位数是一个数还是两个数的平均值
 * 给两个数组分别分配一个指针，边移动边比较，找到与中位数有关的数
 * 最后返回中位数
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0; j = 0;
    let m = nums1.length, n = nums2.length;
    let k = 0, arr = [];

    // 移动指针，将数值排序存入临时数组，直至获取的数值包含与中位数相关的数值
    while(i < m || j < n) {
        if(i < m && j < n) {
            if(nums1[i] <= nums2[j]) {
                arr.push(nums1[i])
                i++;
            } else {
                arr.push(nums2[j])
                j++;
            }
        } else if(i < m) {
            arr.push(nums1[i])
            i++;
        } else {
            arr.push(nums2[j])
            j++;
        }
        
        // 判断是否已取到与中位数相关的数值，没有取到就继续取，取到了就进行下一步
        if(k < parseInt((m + n) / 2)) k++;
        else {
            // 判断数组总长度是奇数还是偶数，返回中位数
            if((m + n) % 2 === 1) return arr[k];
            else return (arr[k] + arr[k -1]) / 2;
        }
    }
};