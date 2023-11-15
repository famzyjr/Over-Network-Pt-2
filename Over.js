
// Assuming database is an object representing the database of user profiles
let database = {};

function createAccount(username, name) {
  // Check if username already exists in the database
  if (database.hasOwnProperty(username)) {
    console.log("Username already exists. Please choose a different username.");
    return false;
  }
  
  // If username is unique, create a new profile with the given username and name
  else {
    let newProfile = { username: username, name: name };
    // Add the new profile to the database
    database[username] = newProfile;
    // Log in the user by setting the current user to the new profile
    currentUser = newProfile;
    console.log("Account created successfully.");
    return true;
  }
}

// Example usage
createAccount("joe_shmoe", "Joe");
