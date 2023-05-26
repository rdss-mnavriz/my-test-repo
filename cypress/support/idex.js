// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "s_cc";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "true";

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})