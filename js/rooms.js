const modal = document.getElementById("roomModal");
const closeBtn = document.querySelector(".close");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const bookBtn = document.querySelector(".modal-content .btn");

const roomData = {
  deluxe: {
    title: "Deluxe Room",
    img: "../photo/Deluxe-room2.jpg",
    desc: "ห้องดีลักซ์สุดหรู พร้อมเตียงคิงไซส์และวิวสวนสวย เหมาะสำหรับคู่รักหรือผู้ที่ต้องการพักผ่อนแบบส่วนตัว"
  },
  suite: {
    title: "Suite Room",
    img: "../photo/Suite-room2.jpg",
    desc: "ห้องสวีทขนาดกว้างขวาง พร้อมห้องนั่งเล่นแยกส่วนและวิวเมืองหลวงจากระเบียงส่วนตัว"
  },
  villa: {
    title: "Pool Villa",
    img: "../photo/Villa-room2.jpg",
    desc: "พูลวิลล่าส่วนตัวพร้อมสระน้ำในห้อง และบริการบัตเลอร์ส่วนตัวเพื่อความสะดวกสบายสูงสุด"
  }
};


document.querySelectorAll(".room-card").forEach(card => {
  card.addEventListener("click", () => {
    const roomType = card.dataset.room;
    const data = roomData[roomType];

    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    bookBtn.onclick = () => {
      window.location.href = `booking.html?room=${roomType}`;
    };

    modal.style.display = "flex";
  });
});


closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
