import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  const redirect = useNavigate();
  return (
    <div className="sub-container">
      <Button onClick={() => redirect("/")}>Home</Button>
      <Button onClick={() => redirect("/sport")}>Sport</Button>
      <Button onClick={() => redirect("/finance")}>Finance</Button>
      <Button onClick={() => redirect("/technology")}>Technology</Button>
      <Button onClick={() => redirect("/automotive")}>Automotive</Button>
    </div>
  );
};

export default SubNavbar;
