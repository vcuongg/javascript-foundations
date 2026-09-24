function countOccurrences(arr) {
  const result = {};
  for (const item of arr) {
    result[item] = (result[item] ?? 0) + 1;
  }

  return result;
}

const result = countOccurrences([
  "react",
  "node",
  "react",
  "js",
  "node",
  "react",
]);

console.log(result);

function unique(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
// làm sử dụng set thì tôi chưa biết

const newarr = unique([1, 2, 2, 3, 1, 4]);
console.log(newarr);

function groupBy(arr, key) {
  const result = {};
  for (const item of arr) {
    const groupName = item[key];
    if (result[groupName] === undefined) {
      result[groupName] = [];
    }
    result[groupName].push(item);
  }
  return result;
}

const groupby = groupBy(
  [
    { name: "An", role: "frontend" },
    { name: "Bình", role: "backend" },
    { name: "Chi", role: "frontend" },
    { name: "Chi", role: "designer" },
  ],
  "role",
);

console.log(groupby);

function calculateTotal(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  const sum = arr.reduce(
    (total, item) => item.price * item.quantity + total,
    0,
  );
  return sum;
}

const total = calculateTotal([
  { price: 100000, quantity: 2 },
  { price: 50000, quantity: 3 },
]);
console.log(total);

const users = [
  { name: "An", email: "an@example.com" },
  { name: "Bình", email: "binh@example.com" },
  { name: "Chi", email: "chi@example.com" },
];

function findUserByEmail(users, email) {
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return null;
  }
  return user;
}

const user = findUserByEmail(users, "an@example.com");
console.log(user);
