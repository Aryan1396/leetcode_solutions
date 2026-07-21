# 🚀 Two Sum (Hash Map Approach)

The **Two Sum** problem is one of the most common coding interview questions. It introduces the concept of a **Hash Map (Object in JavaScript)**, which helps reduce the time complexity from **O(n²)** to **O(n)**.

---

## 📌 Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers whose sum equals the target.

### Example

```javascript
nums = [2, 7, 11, 15]
target = 9
```

Output:

```javascript
[0, 1]
```

Because:

```text
nums[0] + nums[1] = 2 + 7 = 9
```

---

## 💻 Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const track = {};

    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];

        if (track[element] !== undefined) {
            return [track[element], i];
        }

        track[nums[i]] = i;
    }

    return [];
};
```

---

# 🔍 How It Works

### 1. Create a Hash Map

```javascript
const track = {};
```

The object stores previously visited numbers as:

```text
Number → Index
```

Example:

```javascript
{
  2: 0,
  7: 1
}
```

---

### 2. Traverse the Array

```javascript
for (let i = 0; i < nums.length; i++)
```

Visit each element only **once**.

---

### 3. Find the Complement

```javascript
const element = target - nums[i];
```

Instead of searching for another number, calculate the number needed to reach the target.

**Formula**

```text
Complement = Target - Current Number
```

Example:

```text
Target = 9
Current = 2

Need = 9 - 2 = 7
```

---

### 4. Check if the Complement Exists

```javascript
if (track[element] !== undefined)
```

If the complement is already stored in the object, we've found the answer.

Return:

```javascript
return [track[element], i];
```

> We return **indices**, not the numbers themselves.

---

### 5. Store the Current Number

```javascript
track[nums[i]] = i;
```

Save the current number and its index for future lookups.

Example:

```javascript
track[7] = 1;
```

---

## 📖 Dry Run

Input:

```javascript
nums = [2,7,11,15]
target = 9
```

| Iteration | Current | Need | Track | Action |
|-----------|---------|------|-------|--------|
| 1 | 2 | 7 | `{}` | Store `2 → 0` |
| 2 | 7 | 2 | `{2:0}` | Found → Return `[0,1]` |

---

## ❓ Why `!== undefined`?

Instead of writing:

```javascript
if(track[element])
```

we use:

```javascript
if(track[element] !== undefined)
```

Because index `0` is a valid answer, but `0` is considered **false** in JavaScript.

---

## ⏱️ Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time** | **O(n)** |
| **Space** | **O(n)** |

---

## 🆚 Brute Force vs Hash Map

| Approach | Time | Space |
|----------|------|-------|
| Nested Loops | O(n²) | O(1) |
| Hash Map | O(n) | O(n) |

---

## ✅ Key Takeaways

- Use a **Hash Map** to store previously visited numbers.
- Calculate the **complement** using `target - currentNumber`.
- Check if the complement already exists before storing the current number.
- Store **Number → Index** pairs.
- Time complexity improves from **O(n²)** to **O(n)**.
- This pattern is widely used in interview problems involving Hash Maps.
