import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box" onClick={() => navigate("/signup/student-signup")}>
        학생으로 회원가입
      </div>
      <div className="box" onClick={() => navigate("/signup/teacher-signup")}>
        선생님으로 회원가입
      </div>
    </div>
  );
}

export default Signup;
