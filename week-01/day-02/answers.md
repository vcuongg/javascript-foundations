
Phần 1: Primitive và Reference 
1.Primitive 
+ Khi được gán từ biến này sang biến khác sẽ copy giá trị
+ Primitive được so sánh theo giá trị
```
const a = 10;
const b = 10;
console.log(a === b); // true

```

- String : một chuỗi tổng hợp các kí tự
- Number : Số
- boolean : True và False
- null : xuất hiện khi người đọc khai báo biến null
- undefined : khi mà biến chưa được gán giá trị ( function không có return cũng là undefined)
- bigint : Dùng để biểu diễn số nguyên lớn hơn giới hạn an toàn của number.
<!-- const largeNumber = 9007199254740993n; -->
- symbol : Dùng để tạo giá trị duy nhất 
<!-- const idA = Symbol("id"); -->

2.Object, array và function là reference value.

+ Tất cả giá trị không phải primitive đểu là Object
+ Object khi được gán thì nó không tạo thành một Object mới mà sẽ cùng tham chiếu tới Object gốc
+ Object được so sánh theo reference
```
const userA = {
  name: "An",
};

const userB = {
  name: "An",
};

console.log(userA === userB); // false
```
-> Hai object có nội dung giống nhau nhưng được tạo riêng biệt

Phần 2: Shallow copy và deep copy

- Thông thường khi copy Object thì nó không copy object, nó chỉ copy reference.
1. Shallow copy bằng spread
```
const original = {
  name: "An",
  age: 20,
};

const copied = {
  ...original,
};
```

=> thì ta sẽ có 2 object riêng original và copied, khi ta thay đổi copied cũng ko ảnh hưởng original

2. Tại sao gọi là shallow copy => shallow nghĩa là nông, Khi copy chẳng hạn như dùng Spread thì chỉ tạo bản sao mới cho object ở cấp đầu tiên, còn những Object loòng bên trong vẫn dùng chung reference
```
const original = {
  name: "An",
  address: {
    city: "Hà Nội",
  },
};

const copied = {
  ...original,
};
```
=> Hai Object ở ngoài khác nhau nhưng phần addrtess vẫn là cùng một Object

3. Để giải quyết thì chúng ta có thể Copy Thủ công nested object nếu biết trước cấu trúc của object, có thể spread từng cấp
```
const original = {
  name: "An",
  address: {
    city: "Hà Nội"
  },
};

const copied = {
  ...original,
  address: {
    ...original.address
  }
}
```
=> Cách này phù hợp khi object không quá sâu và chúng ta biết rõ cấu trúc.

4. Shallow copy array
```
const original = [1,2,3];
const copied = [...original];

copied.push(4);

console.log(original); // [1, 2, 3]
console.log(copied);   // [1, 2, 3, 4]

const copied = original.slice();

const copied = Array.from(original);
//Cả ba đều tạo shallow copy.
```

5.Array chứa object vẫn gặp vấn đề shallow copy
```
const original = [
  {
    name: "An",
  },
];

const copied = [...original];
console.log(original[0] === copied[0]); // true
```
=> 2 mảng thì khác nhau nhưng phần tử bên trong thì lại là cùng một object
=> Nếu muốn tạo object mới cho từng phần tử:
```
const copied = original.map((user) => {
  return {
    ...user
  }
})
console.log(original[0] === copied[0]); // false
```

6. Deep copy
Deep copy tạo bản sao mới cho cả object cấp ngoài và tất cả object lồng bên trong.
Trong JavaScript hiện đại có thể dùng:
```
const copied = structuredClone(original);
```

Ví dụ: 
```
const original = {
  name: "An",
  address: {
    city: "Hà Nội",
  },
  hobbies: ["coding", "reading"],
};

const copied = structuredClone(original);

copied.address.city = "Đà Nẵng";
copied.hobbies.push("gaming");

console.log(original.address.city); // "Hà Nội"
console.log(original.hobbies);
// ["coding", "reading"]

console.log(copied.address.city); // "Đà Nẵng"
console.log(copied.hobbies);
// ["coding", "reading", "gaming"]
```

7.Giới hạn của structuredClone
- Xử lí được nhiều dữ liệu như Object, Array, Date, Map, Set, Circular reference. Nhưng không clone được function
```
const original = {
  sayHello() {
    console.log("Hello");
  },
};

structuredClone(original);
// DataCloneError
```
8. Cách dùng JSON để deep copy
Ví dụ:
```
const copied = JSON.parse(
  JSON.stringify(original),
);
```

Nó có thể làm mất hoặc thay đổi:
- undefined.
- Function.
- Symbol.
- Date.
- Map.
- Set.
- Circular reference.
- Một số giá trị đặc biệt khác.

9. Khi nào dùng loại copy nào?
Shallow copy
```const copied = {
  ...original,
};
```

Dùng khi:
- Chỉ cần thay đổi thuộc tính cấp đầu.
- Nested object không thay đổi.
- Muốn cập nhật state theo kiểu immutable.

Deep copy
```const copied = structuredClone(original);```

Dùng khi:
- Cần thay đổi dữ liệu lồng sâu.
- Không muốn bất kỳ nested object nào dùng chung reference.

=> Không nên deep copy mọi object theo thói quen, vì nó tốn thời gian và bộ nhớ hơn shallow copy.

Phần 3: Type coercion