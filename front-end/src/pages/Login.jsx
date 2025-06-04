import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Building2, Shield, Users, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (user) {
    navigate("/");
    return null;
  }

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    // Simulate loading time
    setTimeout(() => {
      const result = login(username, password);
      if (result.success) {
        navigate("/"); // Redirect về dashboard
      } else {
        setError(result.message);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  BlueMoon
                </h1>
                <p className="text-sm text-gray-600">Quản lý chung cư thông minh</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0362.456.428</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@bluemoon.vn</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Information */}
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Chào mừng đến với
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  BlueMoon Tower
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hệ thống quản lý chung cư hiện đại, tiện lợi và an toàn. 
                Quản lý căn hộ, thu phí dịch vụ và theo dõi thông tin một cách dễ dàng.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bảo mật cao</h3>
                  <p className="text-sm text-gray-600">Hệ thống bảo mật nhiều lớp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quản lý cư dân</h3>
                  <p className="text-sm text-gray-600">Theo dõi thông tin chi tiết</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Hỗ trợ</h3>
                  <p className="text-sm text-gray-600">Luôn sẵn sàng hỗ trợ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vị trí đắc địa</h3>
                  <p className="text-sm text-gray-600">Trung tâm thành phố</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Căn hộ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,200+</div>
                <div className="text-sm text-gray-600">Cư dân</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">35</div>
                <div className="text-sm text-gray-600">Tầng</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-1/2 p-8 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng nhập</h3>
                <p className="text-gray-600">Truy cập hệ thống quản lý BlueMoon</p>
              </div>

              <div className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tài khoản
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                    placeholder="Nhập tài khoản của bạn"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 pr-12"
                      placeholder="Nhập mật khẩu"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                  </label>
                  <Link to="/" className="text-sm text-blue-600 hover:text-blue-700">
                      Quên mật khẩu?
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang đăng nhập...</span>
                    </div>
                  ) : (
                    "Đăng nhập"
                  )}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Cần hỗ trợ? {" "}
                  <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                    Liên hệ quản lý
                  </Link>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold">BlueMoon Tower</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 BlueMoon. Tất cả quyền được bảo lưu.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}