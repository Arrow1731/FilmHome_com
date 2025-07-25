// Components/Footer.js
import React from "react";
import FooterImg from "../assets/footer_img.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_img flex justify-between items-center px-[80px] text-[#fff]">
          <div>
            <h3 className="text-[48px] font-Manrope font-bold">Start your free trial today!</h3>
            <p className="text-[18px] font-Manrope font-regular text-[#808080]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
          </div>
          <div>
            <button className="bg-[#E50000] py-[18px] px-[24px] rounded-[10px] text-[18px] font-Manrope font-semibold"><a href="#">Start Free Trial</a></button>
          </div>
        </div>
      </div>


      {/* FOOTER */}

      <div className="bg-[#000] w-full h-[505px] py-[100px] my-[150px]">

        <div className="container flex justify-between items-center text-[#fff] footer_links_ddd">
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Home</p>
            <ul>
              <a href="#">
                <li>Categories</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Movies</p>
            <ul>
              <a href="#">
                <li>Gernes</li>
              </a>
              <a href="#">
                <li>Trending</li>
              </a>
              <a href="#">
                <li>New Release</li>
              </a>
              <a href="#">
                <li>Popular</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Series</p>
            <ul>
              <a href="#">
                <li>Gernes</li>
              </a>
              <a href="#">
                <li>Trending</li>
              </a>
              <a href="#">
                <li>New Release</li>
              </a>
              <a href="#">
                <li>Popular</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Anime</p>
            <ul>
              <a href="#">
                <li>Gernes</li>
              </a>
              <a href="#">
                <li>Trending</li>
              </a>
              <a href="#">
                <li>New Release</li>
              </a>
              <a href="#">
                <li>Popular</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Support</p>
            <ul>
              <a href="#">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Subscription</p>
            <ul>
              <a href="#">
                <li>Plans</li>
              </a>
              <a href="#">
                <li>Features</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-Manrope font-semibold">Connect With Us</p>
            <ul>
              <a href="#">
                <li>SAlom</li>
              </a>
              <a href="#">
                <li>SAlom</li>
              </a>
              <a href="#">
                <li>SAlom</li>
              </a>
            </ul>
          </div>
        </div>

        <hr className="container mt-[100px] text-[#808080]" />

        <div className="container flex justify-between items-center text-[#808080] text-[18px] font-Manrope font-regular mt-[24px]">
          <p>@2023 streamvib, All Rights Reserved</p>

          <div className="flex gap-[40px]">
          <a href="#">Terms of Use</a>|
          <a href="#">Privacy Policy</a>|
          <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
