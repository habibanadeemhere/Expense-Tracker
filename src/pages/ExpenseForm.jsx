import React, { useState } from 'react'
import { addExpense } from '../redux/expenseSlice'
import { useDispatch, useSelector } from 'react-redux'

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount || !form.category || !form.date) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addExpense({
        user_id: user.id,
        ...form,
        amount: Number(form.amount),
      })
    );

    setForm({
      title: '',
      amount: '',
      category: '',
      date: '',
    });
  };

  return (
<form
  onSubmit={handleSubmit}
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "2rem",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    cursor: "crosshair",
  }}
>
  <style>{`
    .expense-input::placeholder { color: rgba(255,255,255,0.25); }
    .expense-input:focus {
      border-color: rgba(16,185,129,0.6) !important;
      box-shadow: 0 0 0 3px rgba(16,185,129,0.12) !important;
      outline: none;
    }
    .expense-input::-webkit-calendar-picker-indicator {
      filter: invert(1) opacity(0.4);
      cursor: pointer;
    }
  `}</style>

  <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"1.75rem"}}>
    <div style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 18px rgba(16,185,129,0.3)",flexShrink:0}}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>
    <div>
      <h2 style={{fontSize:"18px",fontWeight:"700",color:"#fff",letterSpacing:"-0.02em",margin:0}}>Add Expense</h2>
      <p style={{fontSize:"12px",color:"rgba(255,255,255,0.35)",margin:0}}>Track a new transaction</p>
    </div>
  </div>

  <div style={{marginBottom:"12px"}}>
    <label style={{display:"block",fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>Title</label>
    <div style={{position:"relative"}}>
      <input
        type="text"
        name="title"
        placeholder="e.g. Grocery run"
        value={form.title}
        onChange={handleChange}
        className="expense-input"
        style={{width:"100%",padding:"12px 16px 12px 42px",fontSize:"14px",color:"#fff",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",fontFamily:"inherit",boxSizing:"border-box",transition:"border-color 0.2s, box-shadow 0.2s"}}
      />
      <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"16px"}}>📝</span>
    </div>
  </div>

  <div style={{marginBottom:"12px"}}>
    <label style={{display:"block",fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>Amount</label>
    <div style={{position:"relative"}}>
      <input
        type="number"
        name="amount"
        placeholder="0.00"
        value={form.amount}
        onChange={handleChange}
        className="expense-input"
        style={{width:"100%",padding:"12px 16px 12px 42px",fontSize:"14px",color:"#fff",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",fontFamily:"inherit",boxSizing:"border-box",transition:"border-color 0.2s, box-shadow 0.2s"}}
      />
      <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"15px",color:"rgba(255,255,255,0.4)",fontWeight:"600"}}>$</span>
    </div>
  </div>

  <div style={{marginBottom:"12px"}}>
    <label style={{display:"block",fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>Category</label>
    <div style={{position:"relative"}}>
      <input
        type="text"
        name="category"
        placeholder="e.g. Food, Transport"
        value={form.category}
        onChange={handleChange}
        className="expense-input"
        style={{width:"100%",padding:"12px 16px 12px 42px",fontSize:"14px",color:"#fff",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",fontFamily:"inherit",boxSizing:"border-box",transition:"border-color 0.2s, box-shadow 0.2s"}}
      />
      <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"16px"}}>🏷️</span>
    </div>
  </div>

  <div style={{marginBottom:"1.5rem"}}>
    <label style={{display:"block",fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>Date</label>
    <div style={{position:"relative"}}>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="expense-input"
        style={{width:"100%",padding:"12px 16px 12px 42px",fontSize:"14px",color:form.date?"#fff":"rgba(255,255,255,0.25)",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",fontFamily:"inherit",boxSizing:"border-box",transition:"border-color 0.2s, box-shadow 0.2s",colorScheme:"dark"}}
      />
      <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",fontSize:"16px"}}>📅</span>
    </div>
  </div>

  <button
    type="submit"
    style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#10b981,#059669)",border:"none",borderRadius:"12px",color:"#fff",fontSize:"15px",fontWeight:"600",fontFamily:"inherit",cursor:"pointer",letterSpacing:"-0.01em",boxShadow:"0 8px 24px rgba(16,185,129,0.3)",transition:"opacity 0.2s, transform 0.1s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}}
    onMouseEnter={e=>e.currentTarget.style.opacity="0.88"}
    onMouseLeave={e=>e.currentTarget.style.opacity="1"}
    onMouseDown={e=>e.currentTarget.style.transform="scale(0.98)"}
    onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
    Add Expense
  </button>
</form>
  );
};

export default ExpenseForm;