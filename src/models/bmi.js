/**
 * Hàm calculateBMI
 * 
 * Hàm này nhận vào cân nặng (kg) và chiều cao (cm), sau đó tính toán chỉ số BMI
 * và trả về chỉ số BMI với hai chữ số sau dấu phẩy.
 * 
 * @param {number} weight - Cân nặng (kg)
 * @param {number} height - Chiều cao (cm)
 * @returns {number} Chỉ số BMI với hai chữ số sau dấu phẩy
 */
function calculateBMI(weight, height) {
    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (weight <= 0 || height <= 0) {
        throw new Error("Cân nặng và chiều cao phải lớn hơn 0.");
    }
    
    // Chuyển chiều cao từ cm sang mét và tính chỉ số BMI
    const bmi = weight / ((height / 100) ** 2);
    return parseFloat(bmi.toFixed(2)); // Giới hạn kết quả ở hai chữ số thập phân
}

/**
 * Hàm classifyBMI
 * 
 * Hàm này nhận vào chỉ số BMI và phân loại theo các ngưỡng:
 * - BMI < 18.5: "Gầy"
 * - 18.5 <= BMI < 24.9: "Bình thường"
 * - 25 <= BMI < 29.9: "Thừa cân"
 * - BMI >= 30: "Béo phì"
 * 
 * @param {number} bmi - Chỉ số BMI cần phân loại
 * @returns {string} Phân loại chỉ số BMI
 */
function classifyBMI(bmi) {
    if (bmi < 18.5) return "Gầy";
    if (bmi >= 18.5 && bmi < 24.9) return "Bình thường";
    if (bmi >= 25 && bmi < 29.9) return "Thừa cân";
    return "Béo phì";
}

// Xuất các hàm calculateBMI và classifyBMI
module.exports = { calculateBMI, classifyBMI };
