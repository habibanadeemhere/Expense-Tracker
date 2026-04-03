import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signUp, googleLogin } from "../redux/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (isLogin) {
      dispatch(login({ email, password }));
    } else {
      dispatch(signUp({ email, password }));
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
        fontFamily: "'Inter', sans-serif",
        cursor: "crosshair",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex items-center gap-16">
      
        <div className="hidden lg:flex flex-col flex-1 gap-6 ">
         
          <div>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: "1.15",
                marginBottom: "12px",
              }}
            >
              Take control of your{" "}
              <span style={{ color: "#10b981" }}>money.</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Track expenses, set budgets, and reach your financial goals — all
              in one place.
            </p>
          </div>

    
          <div style={{ position: "relative", height: "320px" }}>
      
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                backdropFilter: "blur(16px)",
                width: "220px",
                animation: "floatA 4s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Total Saved
              </p>
              <p
                style={{
                  color: "#10b981",
                  fontSize: "28px",
                  fontWeight: "700",
                  letterSpacing: "-0.03em",
                }}
              >
                $4,280
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "8px",
                }}
              >
                <span
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    color: "#10b981",
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "20px",
                    fontWeight: "600",
                  }}
                >
                  ↑ 12.4%
                </span>
                <span
                  style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}
                >
                  this month
                </span>
              </div>
            </div>

            {/* Card 2 — floats slightly delayed */}
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "0",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                backdropFilter: "blur(16px)",
                width: "200px",
                animation: "floatB 5s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Food & Drinks
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "700",
                  letterSpacing: "-0.03em",
                }}
              >
                $340
              </p>
              <div
                style={{
                  marginTop: "10px",
                  height: "4px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: "65%",
                    height: "100%",
                    background: "linear-gradient(90deg,#10b981,#059669)",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "11px",
                  marginTop: "6px",
                }}
              >
                65% of budget
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "20px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "20px 24px",
                backdropFilter: "blur(16px)",
                width: "260px",
                animation: "floatC 6s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Monthly Breakdown
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {[
                  { label: "Housing", pct: 40, color: "#6366f1" },
                  { label: "Food", pct: 25, color: "#10b981" },
                  { label: "Transport", pct: 15, color: "#f59e0b" },
                  { label: "Shopping", pct: 20, color: "#ec4899" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "12px",
                        width: "70px",
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "4px",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: `${item.pct}%`,
                          height: "100%",
                          background: item.color,
                          borderRadius: "4px",
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "11px",
                        width: "30px",
                        textAlign: "right",
                      }}
                    >
                      {item.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

      
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: "14px",
                padding: "14px 18px",
                backdropFilter: "blur(16px)",
                animation: "floatA 3.5s ease-in-out infinite reverse",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "11px",
                  marginBottom: "4px",
                }}
              >
                Goal Progress
              </p>
              <p style={{ color: "#fff", fontSize: "16px", fontWeight: "700" }}>
                Emergency Fund
              </p>
              <p
                style={{
                  color: "#10b981",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginTop: "2px",
                }}
              >
                $3,200 / $5,000
              </p>
            </div>
          </div>

     
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "12px",
              letterSpacing: "0.05em",
            }}
          >
            ✦ TRUSTED BY 50,000+ USERS WORLDWIDE
          </p>
        </div>


        <div style={{ width: "100%", maxWidth: "400px", flexShrink: 0 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "2.5rem",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
   
            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg,#10b981,#059669)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                SpendWise
              </span>
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
                marginBottom: "6px",
                letterSpacing: "-0.03em",
              }}
            >
              {isLogin ? "Login" : "Signup"}
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "2rem",
              }}
            >
              {isLogin
                ? "Welcome back!"
                : "Track your spending, reach your goals."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  fontSize: "14px",
                  color: "#fff",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  outline: "none",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(16,185,129,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  fontSize: "14px",
                  color: "#fff",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  outline: "none",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(16,185,129,0.6)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "linear-gradient(135deg,#10b981,#059669)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 8px 24px rgba(16,185,129,0.3)",
                  transition: "opacity 0.2s, transform 0.1s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
                onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
              >
                {loading ? "Loading..." : isLogin ? "Login" : "Signup"}
              </button>
            </form>

            {error && (
              <p
                style={{
                  color: "#f87171",
                  fontSize: "12px",
                  marginTop: "12px",
                  background: "rgba(248,113,113,0.1)",
                  padding: "8px 14px",
                  borderRadius: "8px",
                }}
              >
                {error}
              </p>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                margin: "1.5rem 0",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <span
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}
              >
                or
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
            </div>

            <button
              onClick={() => dispatch(googleLogin())}
              style={{
                width: "100%",
                padding: "13px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "1.5rem",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                cursor: "pointer",
              }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span style={{ color: "#10b981", fontWeight: "600" }}>
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Float animations */}
      <style>{`
    @keyframes floatA {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes floatB {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes floatC {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    input::placeholder { color: rgba(255,255,255,0.25) !important; }
  `}</style>
    </div>
  );
};

export default Auth;
