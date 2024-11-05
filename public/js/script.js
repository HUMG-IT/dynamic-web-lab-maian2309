// Form lưu tên
document.getElementById('nameForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị nhập từ trường input có id là 'name'
    const name = document.getElementById('name').value;

    // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
    const response = await fetch('/api/v1/submit', {
        method: 'POST',  // Sử dụng phương thức POST để gửi dữ liệu
        headers: {
            'Content-Type': 'application/json',  // Định nghĩa kiểu nội dung gửi là JSON
        },
        body: JSON.stringify({ name: name }),  // Chuyển đổi đối tượng { name: name } thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'nameResponse'
    document.getElementById('nameResponse').textContent = `${data.message}. Danh sách tên: ${data.names.join(', ')}`;
});

// Form tính BMI
document.getElementById('bmiForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị chiều cao, cân nặng nhập từ form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Tính BMI và hiển thị kết quả tạm thời trên client
    const localBMI = weight / (height * height);
    let localClassification = '';
    
    // Phân loại BMI tạm thời
    if (localBMI < 18.5) localClassification = 'Gầy';
    else if (localBMI < 24.9) localClassification = 'Bình thường';
    else if (localBMI < 29.9) localClassification = 'Thừa cân';
    else localClassification = 'Béo phì';

    // Hiển thị kết quả BMI tạm thời trên client
    document.getElementById('bmiResult').textContent = `BMI tạm tính của bạn là: ${localBMI.toFixed(2)}, Phân loại: ${localClassification}`;

    // Gửi yêu cầu POST đến server với dữ liệu JSON
    const response = await fetch('/api/v1/bmi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height, weight }),
    });

    // Nhận phản hồi từ server và hiển thị kết quả chính thức từ server
    const data = await response.json();
    document.getElementById('bmiResult').textContent = `BMI chính thức của bạn là: ${data.bmi}, Phân loại: ${data.classification}`;
});
