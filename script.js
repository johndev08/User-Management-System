let users = JSON.parse(localStorage.getItem("userinfo")) || [];

function renderUsers() {
  let usersdisplay = "";
  for (let i = 0; i < users.length; i++) {
    let userIndex = users[i];
    const {
      user_name,
      user_age,
      user_gender,
      user_address,
      user_phone,
      user_birth,
      user_email,
    } = userIndex;
    let userElement = `
        <div style='border:1px solid'>
            <div>${user_name},${user_age},${user_gender},${user_address},${user_phone},${user_birth},${user_email} <button onclick='removeUser("${i}")'>Delete</button></div>
        </div>`;
    usersdisplay += userElement;
  }
  document.querySelector(".userSection").innerHTML = usersdisplay;
}
renderUsers();

function save() {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let gender = document.querySelector('input[name="gender"]:checked');
  let address = document.getElementById("address");
  let phone = document.getElementById("phone");
  let birth = document.getElementById("birth");
  let email = document.getElementById("email");

  if (name.value === "") {
    alert("please fill the name.");
  } else if (age.value === "") {
    alert("please fill the age.");
  } else if (!gender) {
    alert("please select a gender.");
  } else if (address.value === "") {
    alert("please fill the address.");
  } else if (phone.value === "") {
    alert("please fill the phone number.");
  } else if (birth.value === "") {
    alert("please fill the birthday.");
  } else if (email.value === "") {
    alert("please fill the email.");
  } else {
    users.push({
      user_name: name.value,
      user_age: age.value,
      user_gender: gender.value,
      user_address: address.value,
      user_phone: phone.value,
      user_birth: birth.value,
      user_email: email.value,
    });

    try {
      localStorage.setItem("userinfo", JSON.stringify(users));
      console.log("successfully saved");
      renderUsers();
    } catch (error) {
      console.error("failed to save.", error);
    }
  }
}
function removeUser(removeindex) {
  users.splice(removeindex, 1);
  renderUsers();
}
