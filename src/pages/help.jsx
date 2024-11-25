import React from 'react';

const Help = () => {
  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '120px 20px 40px', // Adjusted for floating navbar
        fontFamily: `'Poppins', sans-serif`,
        lineHeight: '1.8',
        color: '#333',
        backgroundColor: '#f8f9fc',
      }}
    >
      {/* Page Header */}
      <header
        style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#3b78e7',
            marginBottom: '10px',
            textTransform: 'uppercase',
          }}
        >
          Help & Support Center
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#6c757d',
            maxWidth: '750px',
            margin: '0 auto',
          }}
        >
          We're here to assist you! Below, you'll find answers to common questions, troubleshooting tips, and information on account management. If you still need help, reach out to us!
        </p>
      </header>

      {/* FAQ Section */}
      <section
        style={{
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '600',
            color: '#1e3a8a',
            marginBottom: '20px',
            borderBottom: '3px solid #3b78e7',
            paddingBottom: '10px',
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Item 1 */}
        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            How do I start recording my calls?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            To begin recording calls, simply download and install the TapACall app on your device. After setting it up, the app will automatically record both incoming and outgoing calls based on your settings.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Is TapACall secure?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Absolutely! We utilize end-to-end encryption to ensure that your recordings are secure. Your privacy is a top priority for us, and we work hard to safeguard your data.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Can I delete my recordings?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Yes, you can delete your recordings at any time. Just go to your recordings page, select the ones you want to remove, and hit the delete button.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            How do I cancel my subscription?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            To cancel your subscription, simply go to the account settings and click on the 'Cancel Subscription' button. Follow the steps, and your subscription will be canceled. Note that partial refunds are not offered.
          </p>
        </div>

        {/* New FAQ Section */}
        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            How do I update my payment information?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            To update your payment details, go to your account settings and click on "Payment Methods". You can securely add or update your credit card or PayPal information.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            How do I contact customer support?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            You can reach our support team by emailing <strong>support@tapacall.com</strong> or calling our support number. You can also visit our <a href="/contact" style={{ color: '#007bff' }}>contact page</a> for live chat support.
          </p>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section
        style={{
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '600',
            color: '#e74c3c',
            marginBottom: '20px',
            borderBottom: '3px solid #e74c3c',
            paddingBottom: '10px',
          }}
        >
          Troubleshooting
        </h2>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            I can't hear the other person on the call.
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            If you're unable to hear the other person, make sure that your microphone and speaker are working correctly. Check the volume settings, and ensure that your internet connection is stable.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            The app is not recording my calls.
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Ensure that you have granted the necessary permissions to the app for both microphone access and storage. Check the settings to make sure recording is enabled. You may also try restarting the app.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            The app crashes when I open it.
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Try uninstalling and reinstalling the app. If the issue persists, check for app updates or contact support for further assistance.
          </p>
        </div>
      </section>

      {/* Account Recovery Section */}
      <section
        style={{
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: '600',
            color: '#28a745',
            marginBottom: '20px',
            borderBottom: '3px solid #28a745',
            paddingBottom: '10px',
          }}
        >
          Account Recovery
        </h2>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            How do I recover my account if I forget my password?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            My account is locked. What should I do?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
            }}
          >
            If your account is locked, please contact support. We may require some verification information to unlock your account.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Help;
