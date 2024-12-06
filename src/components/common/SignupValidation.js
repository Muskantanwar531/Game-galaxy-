function validateSignupForm(values) {
    let errors = {};
  
    // Check if name is empty
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
  
    // Check if email is empty and matches pattern
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    // Check if password is empty and matches pattern
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(values.password)) {
      errors.password = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
    }
  
    return errors;
  }
  
  export default validateSignupForm;
  