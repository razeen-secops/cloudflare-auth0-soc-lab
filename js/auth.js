const auth0Client = await auth0.createAuth0Client({
  domain: "dev-fjph8ocq277vhnpf.us.auth0.com",
  clientId: "5UFeiM57b1aPOXfuA8oclA7GVSXw58Id",
  authorizationParams: {
    redirect_uri: window.location.origin + "/login.html"
  }
});

// Handle Auth0 redirect
if (window.location.search.includes("code=")) {
  await auth0Client.handleRedirectCallback();
  window.history.replaceState({}, document.title, "/login.html");
  alert("Login successful!");
}

document.getElementById("login").addEventListener("click", async () => {
  await auth0Client.loginWithRedirect();
});
