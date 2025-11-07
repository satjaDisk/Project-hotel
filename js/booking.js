document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    roomType: document.getElementById("roomType").value
  };

  const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData)
  });

  const data = await res.json();
  alert(data.message);
});
