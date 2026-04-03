import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../supabase";
import ExpenseForm from "../pages/ExpenseForm";
import ExpenseList from "../pages/ExpenseList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { items } = useSelector((state) => state.expenses);

  const total = items.reduce((sum, item) => sum + item.amount, 0);
  const count = items.length;

  const categoryData = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = 0;
    acc[item.category] += item.amount;
    return acc;
  }, {});

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch({ type: "auth/logout" });
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
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

      <nav
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#10b981,#059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 18px rgba(16,185,129,0.3)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
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
              fontSize: "17px",
              fontWeight: "700",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            SpendWise
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px",
              padding: "6px 14px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#10b981,#6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              {user?.email?.[0]?.toUpperCase() || "U"}
            </div>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
              {user?.email || "User"}
            </span>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: "7px 16px",
              background: "rgba(248,113,113,0.12)",
              border: "1px solid rgba(248,113,113,0.25)",
              borderRadius: "999px",
              color: "#f87171",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#fff" }}>
            Welcome back 👋
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
            Here's what's happening with your money today.
          </p>
        </div>

        {/* 🔥 TOP CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)" }}>Total Balance</p>
            <p style={{ fontSize: "22px", color: "#fff" }}>Rs {total}</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)" }}>Transactions</p>
            <p style={{ fontSize: "22px", color: "#fff" }}>{count}</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)" }}>Top Category</p>
            <p style={{ fontSize: "22px", color: "#fff" }}>
              {Object.keys(categoryData)[0] || "None"}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)" }}>Categories</p>
            <p style={{ fontSize: "22px", color: "#fff" }}>
              {Object.keys(categoryData).length}
            </p>
          </div>
        </div>

        {/* 🔥 FORM + LIST */}
        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <ExpenseForm />
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.5rem",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
