Implement Email Notification System:

1.  **Modify `backend/server.js`**:
    *   Move `nodemailer` transporter configuration to a higher scope (or ensure it's initialized).
    *   Create a `sendEmailNotification` function that takes `bookingData` as input.
    *   Inside `sendEmailNotification`:
        *   Construct two HTML email bodies (one for Customer, one for Admin/Agent).
        *   Use `transporter.sendMail` to send both emails.
        *   Handle errors gracefully (log them, don't crash the request).
    *   In the `/api/forms/submit` route:
        *   Uncomment/Add the call to `sendEmailNotification(formData)`.
    *   Ensure environment variables `EMAIL_USER` and `EMAIL_PASS` are used.

2.  **Email Template Design**:
    *   **Customer**: Professional, welcoming, summarizes their trip details.
    *   **Agent**: Clear, urgent, detailed data for quick action.

3.  **Verification**:
    *   The user will need to ensure `.env` has the correct Gmail credentials (App Password, not regular password).
