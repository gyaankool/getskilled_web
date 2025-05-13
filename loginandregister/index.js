document.querySelector(".close-btn").addEventListener("click", function () {
    window.history.back();
});

// Handle OTP functionality
document.addEventListener("DOMContentLoaded", function () {
    // OTP send button click handler
    const sendOTPBtn = document.getElementById("send-otp-btn");
    const phoneForm = document.getElementById("phone-form");
    const otpForm = document.getElementById("otp-form");

    if (sendOTPBtn) {
        sendOTPBtn.addEventListener("click", function () {
            // Hide phone form and show OTP verification form
            phoneForm.style.display = "none";
            otpForm.style.display = "block";

            // Focus on first OTP input
            document.getElementById("otp-1").focus();
        });
    }

    // Edit link handler to go back to phone input
    const editLink = document.querySelector(".edit-link");
    if (editLink) {
        editLink.addEventListener("click", function (e) {
            e.preventDefault();
            otpForm.style.display = "none";
            phoneForm.style.display = "block";
        });
    }

    // OTP input auto-focus next input
    const otpInputs = document.querySelectorAll(".otp-input");
    otpInputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            if (this.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", function (e) {
            // On backspace, go to previous input if current is empty
            if (e.key === "Backspace" && this.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    // Handle resend OTP link
    const resendLink = document.querySelector(".resend-link");
    if (resendLink) {
        resendLink.addEventListener("click", function (e) {
            e.preventDefault();
            alert("OTP resent!");
        });
    }
});
