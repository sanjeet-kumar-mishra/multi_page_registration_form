function validateFileSize(input, errorplace) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const fileSize = file.size / 1024 / 1024; // in MB
    if (fileSize > 4) {
      errorplace.textContent = "File size should be below 4MB";
      input.value = ""; // clear the input field
    } else {
      errorplace.textContent = "";
    }
  }
}

