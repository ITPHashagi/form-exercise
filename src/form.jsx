import { useState } from "react";

export default function Form() {
  const [student, setStudent] = useState({
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  });
  const [studentList, setStudentList] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setStudentList([...studentList, student]);
    e.preventDefault();
    console.log("Student data submitted:", student);
    setStudent({
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    });
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="bg-gray-800 text-center text-white text-2xl p-5 font-bold rounded-md shadow-lg mb-6">
        Thông tin sinh viên
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="maSV" className="text-gray-700 font-semibold mb-2">
            Mã SV:
          </label>
          <input
            type="text"
            id="maSV"
            name="maSV"
            value={student.maSV}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="hoTen" className="text-gray-700 font-semibold mb-2">
            Họ tên:
          </label>
          <input
            type="text"
            id="hoTen"
            name="hoTen"
            value={student.hoTen}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="soDienThoai"
            className="text-gray-700 font-semibold mb-2"
          >
            Số điện thoại:
          </label>
          <input
            type="tel"
            id="soDienThoai"
            name="soDienThoai"
            value={student.soDienThoai}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-52 bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            Thêm sinh viên
          </button>
        </div>
      </form>

      {/* Danh sách sinh viên được in */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Danh sách sinh viên</h2>
      <table className="w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">Mã SV</th>
            <th className="py-2 px-4 border-b">Họ tên</th>
            <th className="py-2 px-4 border-b">Số điện thoại</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{student.maSV}</td>
              <td className="py-2 px-4 border-b text-center">
                {student.hoTen}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {student.soDienThoai}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {student.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
