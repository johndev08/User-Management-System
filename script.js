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
        <div class='divelement'>
            ${user_name},${user_age},${user_gender},${user_address},${user_phone},${user_birth},${user_email} <button onclick='removeUser("${i}")'>Delete</button>
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
  let swaltext = `<button style='border:none; background-color: transparent; color: #ffffff' popovertarget="adduser" >OK</button>`;

  if (name.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Name!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (age.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Age!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (!gender) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You forgot to select a Gender!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (address.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Address!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (phone.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Phone Number!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (birth.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Birthday!",
      confirmButtonText: swaltext,
    });
    return;
  } else if (email.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the Email!",
      confirmButtonText: swaltext,
    });
    return;
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

    name.value = "";
    age.value = "";
    gender.value = "";
    address.value = "";
    phone.value = "";
    birth.value = "";
    email.value = "";
    save();
    try {
      localStorage.setItem("userinfo", JSON.stringify(users));
      console.log("successfully saved");
      renderUsers();
      Swal.fire({
        title: "successfully saved!",
        icon: "success",
      });
    } catch (error) {
      console.error("failed to save.", error);
    }
  }
}
function removeUser(removeindex) {
  users.splice(removeindex, 1);
  renderUsers();
}
