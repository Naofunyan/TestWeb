// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
  const tabSanPham = document.getElementById("tabSanPham");
  const tabPhuSP = document.getElementById("tabPhuSP");

  tabSanPham.addEventListener("mouseover", function() {
    tabPhuSP.style.display = "block";

    tabPhuSP.addEventListener("mouseover", function() {
      tabPhuSP.style.display = "block";
    });

    tabSanPham.addEventListener("mouseout", function() {
      tabPhuSP.style.display = "none";
    });
  });
});