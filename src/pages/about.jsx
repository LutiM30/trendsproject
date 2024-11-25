import React from 'react';

const About = () => {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '120px 20px 40px', // Top padding adjusted for the navbar
        fontFamily: `'Poppins', sans-serif`,
        lineHeight: '1.8',
        color: '#333',
      }}
    >
      {/* Page Header */}
      <header
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#1a1a1a',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#0078d7',
            marginBottom: '10px',
          }}
        >
          About TapACall
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          Your go-to platform for seamless, secure, and high-quality call recording solutions.
        </p>
      </header>

      {/* Intro Section */}
      <section
        style={{
          marginBottom: '30px',
          backgroundColor: '#f5faff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#0078d7',
            marginBottom: '10px',
          }}
        >
          Who We Are
        </h2>
        <p style={{ fontSize: '1rem' }}>
          At TapACall, we strive to simplify your communication needs. Our platform is designed to
          provide a seamless, secure, and efficient way to record, store, and manage your phone
          conversations.
        </p>
      </section>

      {/* Mission Section */}
      <section
        style={{
          marginBottom: '30px',
          backgroundColor: '#fff7f3',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ff6f61',
            marginBottom: '10px',
          }}
        >
          Our Mission
        </h2>
        <p style={{ fontSize: '1rem' }}>
          Our mission is to empower individuals and businesses by providing reliable tools to
          preserve and revisit crucial conversations, ensuring no detail is ever lost.
        </p>
      </section>

      {/* Key Features */}
      <section
        style={{
          marginBottom: '30px',
          backgroundColor: '#e9fcef',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#28a745',
            marginBottom: '10px',
          }}
        >
          Why Choose TapACall?
        </h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#333' }}>
          <li>Record both incoming and outgoing calls effortlessly.</li>
          <li>Enjoy high-quality audio playback with clarity.</li>
          <li>Secure cloud storage to keep your recordings safe.</li>
          <li>Compliance with global privacy regulations.</li>
          <li>Intuitive design for seamless user experience.</li>
        </ul>
      </section>

      {/* Privacy Commitment */}
      <section
        style={{
          marginBottom: '30px',
          backgroundColor: '#faf5ff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#6f42c1',
            marginBottom: '10px',
          }}
        >
          Your Privacy Matters
        </h2>
        <p style={{ fontSize: '1rem' }}>
          We prioritize your privacy above all. Our platform employs advanced encryption and adheres
          to strict privacy standards to safeguard your recordings.
        </p>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1a1a1a' }}>
          Start Recording Like Never Before
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#555',
            marginBottom: '20px',
          }}
        >
          Join thousands of satisfied users and make your communication truly effortless.
        </p>
        <a
          href="/signup"
          style={{
            display: 'inline-block',
            backgroundColor: '#0078d7',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: '0 4px 6px rgba(0, 120, 215, 0.3)',
          }}
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
};

export default About;
