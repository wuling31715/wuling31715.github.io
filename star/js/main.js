function repeat_password () {        
  var password = document.getElementById("password").value;
  document.getElementById("password2").value = password;        
}

function delete_equipment(eid) {
  var input_value = document.getElementById("input_value").value = eid;
  document.getElementById("submit_button").click();  
}

function project_action (action) {
  var input_value = document.getElementById("input_value").value = action;
  document.getElementById("submit_button").click();
}

function delete_project (pid) {
  var input_value = document.getElementById("input_value").value = pid;
  document.getElementById("submit_button").click();
}