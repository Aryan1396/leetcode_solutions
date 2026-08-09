
var intersect = function (nums1, nums2) {
    // Sort both arrays
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    // Array to store the result
    const result = [];

    // Two pointers to iterate through both arrays
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            // If elements are equal, add to the result array
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            // If nums1's element is smaller, move pointer i
            i++;
        } else {
            // If nums2's element is smaller, move pointer j
            j++;
        }
    }

    return result;
};
