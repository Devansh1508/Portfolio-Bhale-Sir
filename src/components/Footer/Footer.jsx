import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="w-[100vw] flex mt-10 flex-col items-center justify-center">
      <div className="flex gap-10 mt-10 text-white">
        <FacebookIcon fontSize="large" sx={{ cursor: 'pointer' }}/>
        <InstagramIcon fontSize="large" sx={{ cursor: 'pointer' }}/>
        <LinkedInIcon fontSize="large" sx={{ cursor: 'pointer' }}/>
      </div>
      <div className="text-white font-[josefin] mt-5 text-xl p-10">© 2024 All Rights Reserved</div>
    </div>
  );
};

export default Footer;
