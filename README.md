# أصالة التراث المصري

مشروع متجر عربي فاخر لعرض منتجات الصدف الطبيعي، مع صفحة عميل وقائمة أدمن تساعدك في إدارة المنتجات والطلبات.

## المميزات
- صفحة عميل أنيقة RTL
- عرض المنتجات بالصورة والسعر
- نموذج طلب يفتح واتساب مباشرة
- صفحة أدمن بها كلمة مرور
- إضافة / تعديل / حذف المنتجات
- عرض الطلبات في لوحة الأدمن
- دعم Firebase إذا رغبت في مزامنة البيانات عبر الأجهزة
- دعم localStorage كنسخة احتياطية إذا لم يتم تفعيل Firebase

## الملفات الأساسية
- `index.html` — صفحة العميل
- `admin.html` — صفحة الأدمن
- `firebase-config.js` — إعدادات Firebase

## خطوات التشغيل السريعة
1. افتح `firebase-config.js` واملأ بيانات Firebase من لوحة Firebase.
2. افتح `admin.html` في المتصفح.
3. استخدم كلمة المرور: `asala2026`
4. من لوحة الأدمن أضف أو عدّل المنتجات.
5. استخدم `index.html` كصفحة العميل للعرض. 

## ملاحظات مهمة
- إذا لم يتم إدخال بيانات Firebase، سيعمل المشروع عبر `localStorage` على نفس الجهاز فقط.
- لتزامن البيانات عبر أكثر من جهاز، أضف بيانات Firebase بشكل صحيح.

## إنشاء Firebase
1. افتح: https://console.firebase.google.com
2. أنشئ مشروع جديد باسم `asala-turath`
3. شغّل Firestore Database في وضع test mode
4. انسخ بيانات التهيئة إلى `firebase-config.js`

## مثال قالب Firebase
```js
window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd"
};
```

## النشر على Netlify
1. ارفع الملفات إلى Netlify
2. اختر `index.html` كصفحة رئيسية للعميل
3. يمكن أيضاً رفع `admin.html` بشكل منفصل في رابط `/admin.html`

## التواصل
رقم الواتساب: `96551118069`
