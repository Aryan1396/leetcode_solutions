<div align="center">

# 🚀 LeetCode Solutions

### A collection of my LeetCode solutions with optimized approaches, explanations, and clean code.

![GitHub Repo stars](https://img.shields.io/github/stars/Aryan1396/leetcode_solutions?style=social)
![GitHub forks](https://img.shields.io/github/forks/Aryan1396/leetcode_solutions?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/Aryan1396/leetcode_solutions)
![GitHub repo size](https://img.shields.io/github/repo-size/Aryan1396/leetcode_solutions)

</div>

---

# 📖 About

This repository contains my solutions to **LeetCode** problems as part of my daily Data Structures and Algorithms practice.

The goal of this repository is to:

- Improve problem-solving skills
- Strengthen DSA fundamentals
- Prepare for Software Engineering interviews
- Learn optimized approaches and clean coding practices

Every solution is written with readability and efficiency in mind.

---

# 💻 Languages Used

- JavaScript (Primary)
- More languages may be added in the future.

---

# 📚 Topics Covered

✔ Arrays

✔ Strings

✔ Hash Maps

✔ Two Pointers

✔ Sliding Window

✔ Binary Search

✔ Sorting

✔ Stack

✔ Queue

✔ Linked List

✔ Trees

✔ Binary Search Trees

✔ Heap / Priority Queue

✔ Recursion

✔ Backtracking

✔ Dynamic Programming

✔ Greedy Algorithms

✔ Graphs

✔ Breadth First Search (BFS)

✔ Depth First Search (DFS)

✔ Bit Manipulation

✔ Math

---

# 📂 Repository Structure

```
leetcode_solutions/

├── Arrays/
├── Strings/
├── LinkedList/
├── Trees/
├── Graph/
├── DynamicProgramming/
├── Stack/
├── Queue/
├── BinarySearch/
├── SlidingWindow/
└── README.md
```

---

# 📌 Solution Format

Each solution generally contains:

- Problem Name
- LeetCode Problem Number
- Approach
- Optimized Code
- Time Complexity
- Space Complexity

Example:

```
Two Sum

Approach:
Hash Map

Time Complexity:
O(n)

Space Complexity:
O(n)
```

---

# 🧠 Example

### Two Sum

**Approach**

Store previously visited numbers in a Hash Map.

For each number:

- Calculate the complement.
- Check whether the complement already exists.
- If yes, return the indices.

```javascript
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};
```

**Time Complexity:** `O(n)`

**Space Complexity:** `O(n)`

---

# 🎯 Goals

- Solve 300+ LeetCode Problems
- Cover all major DSA topics
- Learn multiple approaches
- Write optimized solutions
- Prepare for Product-Based Companies
- Strengthen interview skills

---

# 📈 Progress

| Difficulty | Status |
|------------|--------|
| 🟢 Easy | ✅ In Progress |
| 🟡 Medium | ✅ In Progress |
| 🔴 Hard | 🚀 Coming Soon |

---

# 🏆 Why This Repository?

- Clean and readable solutions
- Interview-focused implementations
- Optimized algorithms
- Regularly updated
- Beginner-friendly explanations

---

# 🤝 Contributions

Suggestions and improvements are always welcome.

Feel free to:

- Open an Issue
- Submit a Pull Request
- Share a better approach

---

# ⭐ Support

If you find this repository useful,

please consider giving it a ⭐ on GitHub.

It motivates me to continue solving and sharing more problems.

---

<div align="center">

### Happy Coding! 🚀

**Keep Learning • Keep Building • Keep Solving**

</div>
