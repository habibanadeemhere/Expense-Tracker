import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExpenses, deleteExpense } from '../redux/expenseSlice'
import { useEffect } from 'react'


const ExpenseList = () => {
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.expenses);
    const user = useSelector((state) => state.auth.user);

 useEffect(() => {
    if (user) {
        dispatch(fetchExpenses(user.id));
    }
 }, [dispatch, user]);


  return (
 <div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "2rem",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
  }}
>
  <style>{`
    .expense-row { transition: background 0.2s; border-radius: 12px; }
    .expense-row:hover { background: rgba(255,255,255,0.04); }
    .delete-btn { transition: color 0.2s, background 0.2s; }
    .delete-btn:hover { color: #f87171 !important; background: rgba(248,113,113,0.12) !important; }
  `}</style>

  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.75rem"}}>
    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
      <div style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 18px rgba(16,185,129,0.3)",flexShrink:0}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      </div>
      <div>
        <h2 style={{fontSize:"18px",fontWeight:"700",color:"#fff",letterSpacing:"-0.02em",margin:0}}>Expenses</h2>
        <p style={{fontSize:"12px",color:"rgba(255,255,255,0.35)",margin:0}}>{items.length} transaction{items.length !== 1 ? "s" : ""}</p>
      </div>
    </div>

    {items.length > 0 && (
      <div style={{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:"999px",padding:"5px 14px"}}>
        <span style={{fontSize:"13px",fontWeight:"600",color:"#10b981"}}>
          Total: ${items.reduce((sum, e) => sum + Number(e.amount), 0).toFixed(2)}
        </span>
      </div>
    )}
  </div>

  {items.length === 0 ? (
    <div style={{textAlign:"center",padding:"2.5rem 0"}}>
      <div style={{fontSize:"40px",marginBottom:"12px"}}>💸</div>
      <p style={{fontSize:"14px",color:"rgba(255,255,255,0.3)",margin:0}}>No expenses yet</p>
      <p style={{fontSize:"12px",color:"rgba(255,255,255,0.2)",marginTop:"4px"}}>Add your first transaction above</p>
    </div>
  ) : (
    <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
      {items.map((exp) => (
        <div
          key={exp.id}
          className="expense-row"
          style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 10px",borderBottom:"1px solid rgba(255,255,255,0.05)"}}
        >
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <div style={{width:"38px",height:"38px",borderRadius:"10px",flexShrink:0,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>
              {exp.category?.toLowerCase().includes("food")        ? "🛒"
               : exp.category?.toLowerCase().includes("transport") ? "🚗"
               : exp.category?.toLowerCase().includes("entertain") ? "🎬"
               : exp.category?.toLowerCase().includes("health")    ? "💊"
               : exp.category?.toLowerCase().includes("shopping")  ? "🛍️"
               : "💳"}
            </div>
            <div>
              <p style={{fontSize:"14px",fontWeight:"600",color:"#fff",margin:0,marginBottom:"2px"}}>{exp.title}</p>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{fontSize:"11px",color:"rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.07)",padding:"2px 8px",borderRadius:"999px"}}>{exp.category}</span>
                <span style={{fontSize:"11px",color:"rgba(255,255,255,0.3)"}}>{exp.date}</span>
              </div>
            </div>
          </div>

          <div style={{textAlign:"right",flexShrink:0}}>
            <p style={{fontSize:"15px",fontWeight:"700",color:"#f87171",margin:0,marginBottom:"6px"}}>-${exp.amount}</p>
            <button
              onClick={() => dispatch(deleteExpense(exp.id))}
              className="delete-btn"
              style={{fontSize:"11px",fontWeight:"500",color:"rgba(248,113,113,0.6)",background:"rgba(248,113,113,0.08)",border:"1px solid rgba(248,113,113,0.15)",borderRadius:"6px",padding:"3px 10px",fontFamily:"inherit",cursor:"pointer"}}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  )
}

export default ExpenseList