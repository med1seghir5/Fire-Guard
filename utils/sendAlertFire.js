const sendEmail = require("./sendEmail");

const sendAlertFire = async ({ name, email }) => {
  // Include relevant information about the fire alert in the message
  locationUrl =""
  const message = `
    <p>Hello ${name},</p>
    <p>This is an alert for a fire incident in your area.</p>
    <p>For your safety, please take necessary precautions and stay informed about the situation.</p>
    <p>For more details, visit: <a href="${locationUrl}">Location</a></p>
    <p>Stay safe!</p>
  `;

  return sendEmail({
    to: email,
    subject: "Alert for a fire in your area !!",
    html: `<h2>Alert !!</h2> ${message}`,
  });
};
module.exports = sendAlertFire;
