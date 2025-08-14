let users = [
  {
    user_name: "john doe",
    user_age: "21",
    user_gender: "Male",
    user_address: "Washington DC",
    user_phone: "09936478894",
    user_birth: "10/19/2003",
    user_email: "jlmm101903@gmail.com",
  },
  {
    user_name: "jane doe",
    user_age: "19",
    user_gender: "Female",
    user_address: "Washington DC",
    user_phone: "09303309856",
    user_birth: "06/29/2003",
    user_email: "janedoe19@gmail.com",
  },
];

function renderUsers() {
  let usersdisplay = "";
  for (i = 0; i < users.length; i++) {
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
    renderUsers();
  }
}
function removeUser(removeindex){
    users.splice(removeUser, 1);
    renderUsers();
}
