import './App.css'; // استيراد ملفات CSS للتنسيق
import Signature from './component/Signature/Signature'; // استيراد مكون التوقيع
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap

function App() {
  return (
    <div className="App">
      <Signature /> {/* استدعاء مكون Signature لعرضه في الصفحة */}
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
