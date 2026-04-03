import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { supabase } from './supabase'
import { login, signUp, googleLogin } from './redux/authSlice'
import { useEffect } from 'react'
import Auth from './components/Auth'
import Dashboard from './pages/Dashboard'


function App() {
 const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (data?.session?.user) {
        dispatch({
          type: "auth/login/fulfilled", 
          payload: { user: data.session.user },
        });
      }
    };

    getUser();
     const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          dispatch({
            type: "auth/login/fulfilled",
            payload: { user: session.user },
          });
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [dispatch]);

    return <>{user ? <Dashboard /> : <Auth />}</>;

  return (
    <>
    <Auth />
    </>
  )
}

export default App
