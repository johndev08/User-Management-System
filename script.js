// Default users that should always be present
const defaultUsers = [
  {
    user_name: "JohnDoe",
    user_age: "29",
    user_gender: "Male",
    user_address: "Washington DC",
    user_phone: "0993-647-8894",
    user_birth: "2003-10-19",
    user_email: "johndoe29@gmail.com",
  },
  {
    user_name: "JaneDoe",
    user_age: "24",
    user_gender: "Female",
    user_address: "Washington DC",
    user_phone: "0930-330-9856",
    user_birth: "2003-06-29",
    user_email: "janedoe25@gmail.com",
  },
];

function loadUsers() {
  const savedUsers = JSON.parse(localStorage.getItem("userinfo")) || [];

  if (savedUsers.length === 0) {
    return [...defaultUsers];
  }

  const hasDefaultUsers = savedUsers.some(
    (user) =>
      user.user_email === "johndoe29@gmail.com" ||
      user.user_email === "janedoe25@gmail.com"
  );

  if (!hasDefaultUsers) {
    return [...defaultUsers, ...savedUsers];
  }

  return savedUsers;
}

let users = loadUsers();

function renderUsers() {
  let usersdisplay = "";
  if (users.length === 0) {
    document.querySelector(".userSection").innerHTML = "Note: User is empty";
  } else {
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
            <div style='display:flex;'>
                <div style='width: 10%;'>
                    <img src="user.png">
                </div>
                <div style='width: 90% ;'>
                    <div style='display:flex;justify-content:space-between;'>
                        <span style='width:70%;padding:2px;'>${user_name}</span>
                        <span style='width:20%;padding:2px;'>${user_gender}</span>
                        <span style='width:10%;padding:2px;'>${user_age}</span>
                    </div>
                    <div style='display:flex;justify-content:space-between;'>
                        <span style='width:60%;padding:2px;'>${user_address}</span>
                        <span style='width:40%;padding:2px;'>${user_phone}</span>
                    </div>
                </div>  
            </div>
            <div style='display:flex'>
                <span style='width:25%;padding:2px;'>${user_birth}</span>  
                <span style='width:50%;padding:2px;'>${user_email}</span> 
                <button class='detailsbtn' popovertarget='userdetails-${i}'>Details</button>
            </div>
        </div>
        
        <div id='userdetails-${i}' popover>
            <button onclick='removeUser(${i})'>Delete</button>
        </div>
        `;
      usersdisplay += userElement;
    }
    document.querySelector(".userSection").innerHTML = usersdisplay;
  }
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
    if (gender) gender.checked = false; 
    address.value = "";
    phone.value = "";
    birth.value = "";
    email.value = "";

    // Save to localStorage and update display
    try {
      localStorage.setItem("userinfo", JSON.stringify(users));
      console.log("Successfully saved");
      renderUsers();
      Swal.fire({
        title: "Successfully saved!",
        icon: "success",
      });
    } catch (error) {
      console.error("Failed to save.", error);
    }
  }
}

function removeUser(removeindex) {
  if (removeindex < 2) {
    Swal.fire({
      title: "Cannot Delete",
      text: "Default users cannot be deleted!",
      icon: "warning",
    });
    return;
  }

  users.splice(removeindex, 1);
  localStorage.setItem("userinfo", JSON.stringify(users));
  Swal.fire({
    title: "Good job!",
    text: "User deleted successfully!",
    icon: "success",
  });
  renderUsers();
}
