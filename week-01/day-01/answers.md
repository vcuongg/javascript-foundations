1. Khác nhau giữa let, const và var là gì? 

- Let khai báo những biến có thể thay đổi được, có block scope
- const khai báo những biến cố định, không thể gán lại biến, có block scope
- var cũng là khai báo những biến có thể thay đổi được nhưng không được dùng nhiều vì được hoist với giá trị ban đầu undefined, Có function scope

2.Primitive value và reference value khác nhau như thế nào

- Primitive value là những giá trị như number, boolean, v.v có thể gán, thay đổi mà không ảnh hưởng nhau
- Referece value thì khác, như Object là một reference value, nếu 2 instance cùng trỏ về 1 object thì 1 instance thay đổi thì instance còn lại cũng thay đổi

3.Kết quả của typeof null là gì?
Kết quả của typeof null là object

4.== và === khác nhau thế nào?
- == thì chỉ so sánh giá trị, nó sẽ tự động ép kiểu của biến 
- === thì nó so sánh từ kiểu của biến, giá trị

5.Hoisting là gì? 
- Hoisting là javascript đẩy những biến khai báo lên trước để thực thi 
chắc chắn : 1

6.Scope gồm những loại gì
global scope, function scope, block scope và module scope, lexical scope

7. Closure là gì? Cho một ví dụ thực tế.
function bên trong tiếp tục truy cập lexical environment nơi nó được tạo ra, kể cả khi function bên ngoài đã kết thúc.
chắc chắn : 0

8.map, filter và reduce khác nhau thế nào?
- map dùng để duyệt qua từng phần tử trong mảng và trả về một mảng mới
- filter cũng dùng để duyệt qua từng phần tử trong mảng và cũng trả về mảng mới nhưng chỉ những phần tử phù hợp với điều kiện 
-  reduce cũng duyệt qua từng phần tử trong mảng nhưng nó chỉ trả về accumulator
chắc chắn : 1

9. Code bất đồng bộ khác code đồng bộ thế nào?
Code đồng bộ được thực thi lần lượt trên call stack. Lệnh phía sau phải chờ lệnh phía trước hoàn thành.

Với tác vụ bất đồng bộ, JavaScript có thể bắt đầu tác vụ rồi tiếp tục chạy phần code khác. Khi tác vụ hoàn thành, callback hoặc Promise handler sẽ được lên lịch để xử lý sau.

chắc chắn : 0

10. Khi một function không có return, nó trả về gì?
Khi một function không có return, nó sẽ trả về undefined

