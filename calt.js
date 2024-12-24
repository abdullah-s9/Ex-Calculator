function calculateSum() {
    // جلب قيم الرقمين من حقول الإدخال
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    // حساب المجموع
    var sum = num1 + num2;
  
    // عرض النتيجة
    document.getElementById("result").textContent = "المجموع: " + sum;
  }