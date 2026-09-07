const auth0Client = await auth0.createAuth0Client({
  domain: "dev-fjph8ocq277vhnpf.us.auth0.com",
  clientId: "5UFeiM57b1aPOXfuA8oclA7GVSXw58Id",
  authorizationParams: {
    redirect_uri: window.location.origin
  }
});

if (window.location.search.includes("code=")) {
  await auth0Client.handleRedirectCallback();
  window.history.replaceState({}, document.title, "/");
}

document.getElementById("login").addEventListener("click", async () => {
  await auth0Client.loginWithRedirect();
});
