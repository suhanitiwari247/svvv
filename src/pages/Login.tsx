import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Logging in:", { email, password });
    navigate("/dashboard"); // redirect after login
  };

  return (
    <
    
        
    div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md p-8 bg-gray-800 text-white shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center">{t("loginTitle") || "Login"}</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm mb-1">{t("email") || "Email"}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">{t("password") || "Password"}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            {t("login") || "Login"}
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          {t("noAccount") || "Don't have an account?"}{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            {t("signup") || "Sign Up"}
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
