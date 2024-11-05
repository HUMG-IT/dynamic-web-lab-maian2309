// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js
/**
 * Module xử lý yêu cầu tính chỉ số BMI từ client và trả lời với chỉ số BMI cùng phân loại.
 * 
 * Các chức năng chính:
 * - Nhận chiều cao và cân nặng từ client thông qua `req.body.height` và `req.body.weight`.
 * - Tính toán chỉ số BMI bằng cách sử dụng hàm `calculateBMI`.
 * - Phân loại chỉ số BMI bằng cách sử dụng hàm `classifyBMI`.
 * - Trả về phản hồi JSON chứa chỉ số BMI và phân loại.
 */

const { calculateBMI, classifyBMI } = require('../models/bmi');

/**
 * Hàm `getBMI`
 * 
 * Hàm này xử lý yêu cầu POST từ client chứa chiều cao và cân nặng, tính toán chỉ số BMI và phân loại,
 * sau đó trả về chỉ số BMI và phân loại dưới dạng JSON.
 * 
 * @function getBMI
 * @param {Object} req - Đối tượng request từ client, chứa chiều cao và cân nặng trong `req.body`.
 * @param {Object} res - Đối tượng response để gửi phản hồi JSON về cho client.
 * 
 * @example
 * // Yêu cầu từ client:
 * // POST /bmi
 * // Body: { "height": 1.75, "weight": 70 }
 * 
 * // Phản hồi:
 * // {
 * //   "bmi": "22.86",
 * //   "classification": "Bình thường"
 * // }
 */
const getBMI = (req, res) => {
    const { height, weight } = req.body; // Lấy chiều cao và cân nặng từ yêu cầu của client

    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (!height || !weight || height <= 0 || weight <= 0) {
        return res.status(400).json({ message: 'Chiều cao và cân nặng phải lớn hơn 0.' });
    }

    // Tính toán chỉ số BMI và phân loại
    const bmi = calculateBMI(height, weight);
    const classification = classifyBMI(bmi);

    // Trả về JSON với chỉ số BMI và phân loại
    res.json({ bmi: bmi.toFixed(2), classification });
};

module.exports = { getBMI };
