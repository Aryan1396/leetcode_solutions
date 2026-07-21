# 🚀 Remove Duplicates from Sorted Array (Two Pointer Approach)

The **Remove Duplicates from Sorted Array** problem is a classic Two Pointer question. Since the array is already **sorted**, duplicate elements are placed next to each other, allowing us to remove them efficiently without using extra space.

---

## 📌 Problem Statement

Given a **sorted** integer array `nums`, remove the duplicates **in-place** such that each unique element appears only once.

Return the number of unique elements (`k`).

> The first `k` elements of the array should contain the unique values.

---

## 💻 Solution

```javascript
var removeDuplicates = function(nums) {
    let k = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[k - 1] != nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
```

---

# 🔍 How It Works

### 1. Initialize `k`

```javascript
let k = 1;
```

`k` represents the position where the next unique element should be placed.

Initially, the first element is always unique, so `k = 1`.

---

### 2. Traverse the Array

```javascript
for (let i = 0; i < nums.length; i++)
```

Visit every element one by one.

---

### 3. Compare Current Element

```javascript
if (nums[k - 1] != nums[i])
```

Compare the current element with the **last unique element**.

- If they are the same → duplicate → skip it.
- If they are different → unique → store it.

---

### 4. Store the Unique Element

```javascript
nums[k] = nums[i];
k++;
```

Place the unique value at index `k`, then move `k` to the next position.

---

## 📖 Dry Run

### Input

```javascript
nums = [1,1,2,2,3]
```

| `i` | `nums[i]` | Last Unique (`nums[k-1]`) | Action | Array | `k` |
|----:|----------:|--------------------------:|--------|-------|----:|
| 0 | 1 | 1 | Duplicate | `[1,1,2,2,3]` | 1 |
| 1 | 1 | 1 | Duplicate | `[1,1,2,2,3]` | 1 |
| 2 | 2 | 1 | Store | `[1,2,2,2,3]` | 2 |
| 3 | 2 | 2 | Duplicate | `[1,2,2,2,3]` | 2 |
| 4 | 3 | 2 | Store | `[1,2,3,2,3]` | 3 |

Return:

```javascript
k = 3
```

The first `k` elements are:

```javascript
[1,2,3]
```

---

## 🎯 Why This Works

Since the array is **sorted**, all duplicate values appear together.

Instead of creating a new array, we overwrite duplicate positions with the next unique element.

This allows us to solve the problem **in-place** using only one extra variable.

---

## ⏱️ Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time** | **O(n)** |
| **Space** | **O(1)** |

- **Time:** We traverse the array only once.
- **Space:** No extra array is used.

---

## 🧠 Key Concepts

- Uses the **Two Pointer** technique.
- `i` scans every element in the array.
- `k` tracks the position for the next unique element.
- Since the array is sorted, duplicates are easy to detect.
- The array is modified **in-place**, making the solution space efficient.

---

## ✅ Key Takeaways

- The array **must be sorted**.
- Compare each element with the last unique element.
- Store only unique values.
- Return `k`, the number of unique elements.
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`
