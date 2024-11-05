import React, { useState } from 'react';
import Title from '../Title'; // استيراد مكون Title

export default function Signature() {
  const [name, setName] = useState(""); // تعريف حالة للاسم
  const [data, setData] = useState(""); // تعريف حالة للبيانات

  // دالة لتحديث حالة الاسم بناءً على إدخال المستخدم
  function handleNameChange(e) {
    setName(e.target.value);
  }

  // دالة لتحديث حالة البيانات بناءً على إدخال المستخدم
  function handleDataChange(e) {
    setData(e.target.value);
  }

  // تعريف أنماط الإدخال
  const inputStyle = {
    border: "none",
    borderBottom: "3px dotted",
    marginRight: "10px"
  };
    document.title = "A simple to use Hook useState application"; // تغيير عنوان الصفحة
    document.body.style.background = "#eee"; // تغيير خلفية الصفحة

  return (
    <div className='container text-center mt-5'>
      <Title text={name} /> {/* عرض الاسم المدخل */}
      <Title text={!data ? "DoB" : data} className="main-title mb-5" /> {/* عرض البيانات أو النص الافتراضي "DoB" */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, velit ratione minus enim quia vero harum perspiciatis optio delectus incidunt, autem quae nemo praesentium eaque! Sed excepturi quod commodi pariatur eaque similique voluptas maiores ipsa non quas id nulla debitis, cum error iste dolor ea reprehenderit rerum aperiam, officiis minima.
      </p>

      <input 
        type='date' 
        value={data} 
        style={inputStyle} 
        onChange={handleDataChange} // تحديث البيانات عند الإدخال
      />
      <input 
        type='text' 
        value={name} 
        style={inputStyle} 
        onChange={handleNameChange} // تحديث الاسم عند الإدخال
      />
    </div>
  )
}
