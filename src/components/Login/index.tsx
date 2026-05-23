const Login = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Kirish</h2>
      <input placeholder="Login" className="w-full p-3 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition" />
      <input placeholder="Parol" className="w-full p-3 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition" />
      <button className="w-full p-3 bg-blue-600 rounded cursor-pointer">Kirish</button>
    </div>
  );
};
export default Login;