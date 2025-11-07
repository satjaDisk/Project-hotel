// เมื่อคลิกปุ่ม "ดูห้องพัก" ให้เปลี่ยนหน้าไปยัง rooms.html
document.getElementById("exploreBtn").addEventListener("click", () => {
  window.location.href = "rooms.html";
});

// เมื่อ scroll ลง navbar จะเปลี่ยนสีพื้นหลัง
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "rgba(0,0,0,0.8)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
