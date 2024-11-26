import React from "react";

const Terms = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Page Header */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "6rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "#555", fontSize: "1rem" }}>
          Effective Date: April 1, 2024
        </p>
      </header>

      {/* Table of Contents */}
      <nav style={{ marginBottom: "30px" }}>
        <ul
          style={{
            listStyleType: "decimal",
            paddingLeft: "20px",
            color: "#007bff",
          }}
        >
          <li>
            <a
              href="#agreement"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Agreement
            </a>
          </li>
          <li>
            <a
              href="#account-eligibility"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Account Eligibility
            </a>
          </li>
          <li>
            <a
              href="#account-access"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Account Access
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#cancellation"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Cancellation
            </a>
          </li>
        </ul>
      </nav>

      {/* Terms Sections */}
      <section id="agreement" style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          1. Agreement
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          These Terms are a legal agreement between you and the company. By
          using the Services, you agree to be bound by these Terms, represent
          that you have the authority to enter into them, and ensure compliance
          with all applicable laws.
        </p>
      </section>

      <section id="account-eligibility" style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          2. Account Eligibility
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          You must be at least 18 years old to create an account. If you are
          under 18, you may use our Services only with the permission of a
          parent or legal guardian.
        </p>
      </section>

      <section id="account-access" style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          3. Account Access
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          You must provide your own internet connection and ensure the security
          of your account credentials. Any unauthorized access must be reported
          immediately.
        </p>
      </section>

      <section id="privacy" style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          4. Privacy
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your information.
        </p>
      </section>

      <section id="cancellation" style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          5. Cancellation
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          You may cancel your subscription at any time. However, refunds will
          not be provided for partial billing periods.
        </p>
      </section>
    </div>
  );
};

export default Terms;
