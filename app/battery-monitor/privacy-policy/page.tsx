import type { Metadata } from "next";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy – Neuron Battery Monitor",
  description:
    "Privacy Policy for Neuron – Battery Monitor by Neuron Innovations.",
};

export default function BatteryMonitorPrivacyPolicy() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.brand}>
          <span className={styles.brandName}>
            Neuron Innovations
          </span>

          <span className={styles.brandProduct}>
            Neuron – Battery Monitor
          </span>
        </div>

        <LanguageSwitcher currentLanguage="en"/>
      </div>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          LEGAL · PRIVACY
        </p>

        <h1 className={styles.title}>
          Privacy Policy
        </h1>

        <p className={styles.subtitle}>
          Information about how Neuron – Battery
          Monitor handles device and battery-related
          data.
        </p>
      </section>

      <div className={styles.metaGrid}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>
            App
          </span>

          <span className={styles.metaValue}>
            Neuron – Battery Monitor
          </span>
        </div>

        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>
            Developer
          </span>

          <span className={styles.metaValue}>
            Maria Kishor Eugin
          </span>
        </div>

        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>
            Effective Date
          </span>

          <span className={styles.metaValue}>
            October 30, 2025
          </span>
        </div>
      </div>

      <article className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>

          <p>
            This Privacy Policy describes how Neuron
            Innovations (“we”, “our”, “us”) handles
            information when you use the mobile
            application Neuron – Battery Monitor (“the
            App”). We operate the App and are responsible
            for its processing of any user data. You are
            advised to read this policy carefully before
            using the App.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. What Information We Collect</h2>

          <h3>2.1 Device & Battery-Related Data</h3>

          <ul>
            <li>
              The App collects battery status information
              (such as power level, charging state,
              battery health, voltage, temperature) from
              your device’s operating system.
            </li>

            <li>
              This information is processed entirely on
              your device and is not transmitted, stored
              or shared externally.
            </li>
          </ul>

          <h3>2.2 No Personal Identifiers</h3>

          <ul>
            <li>
              We do not collect personally identifiable
              information (name, email, phone number,
              device identifier, location) unless you
              voluntarily provide it (which this App does
              not ask).
            </li>

            <li>
              We do not use analytics or tracking
              services that collect personal data or user
              behaviour.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>

          <ul>
            <li>
              Since data remains local on your device, we
              use the battery-related information solely
              to display current device battery conditions
              and statistics.
            </li>

            <li>
              There is no sharing of data with third
              parties.
            </li>

            <li>There is no sale of your data.</li>

            <li>
              We do not feature personalized advertising
              or marketing, and no consent is required for
              that.
            </li>

            <li>
              If you uninstall the App, all collected data
              (which is local only) is removed from your
              device in accordance with device behaviour.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Permissions & Third-Party Code</h2>

          <ul>
            <li>
              The App may request system permissions (for
              example to access battery status). These are
              used only for the core function of
              monitoring battery status and do not result
              in data being collected or sent off device.
            </li>

            <li>
              We do not embed third-party SDKs that
              collect personal data.
            </li>

            <li>
              If future versions include crash-reporting
              or analytics SDKs, this policy will be
              updated accordingly and you will be
              informed.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Your Rights</h2>

          <ul>
            <li>
              You may uninstall the App at any time, which
              terminates any processing.
            </li>

            <li>
              You may revoke any permissions at any time
              via your device settings.
            </li>

            <li>
              If you believe we have collected personal
              data (which we have not), you may contact us
              at the details below to request deletion or
              access.
            </li>

            <li>
              Please note: As the App does not collect or
              transmit personal data, many typical rights
              (such as portability or objection) are not
              applicable, but you still may contact us.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Consent & Withdrawal</h2>

          <ul>
            <li>
              By installing or using the App, you consent
              to this Privacy Policy and to any data
              processing described herein.
            </li>

            <li>
              If you withdraw consent (for example by
              uninstalling the App or revoking
              permissions), our processing stops.
            </li>

            <li>
              If you continue using the App after changes
              to this policy, you consent to those
              changes.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Data Minimisation & Security</h2>

          <ul>
            <li>
              We adhere to the principle of collecting
              only what is necessary for the core function
              (battery monitoring).
            </li>

            <li>
              We do not collect data beyond that purpose,
              and no hidden collection occurs.
            </li>

            <li>
              Since no data leaves your device, the risk
              of unauthorized access or transmission is
              effectively mitigated.
            </li>

            <li>
              We do not sell or share your personal or
              device data with any third parties.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Updates to This Policy</h2>

          <ul>
            <li>
              We may update this Privacy Policy from time
              to time (due to new features, regulations
              or legal obligations).
            </li>

            <li>
              We will update the “Effective Date” at the
              top of the policy when we do so.
            </li>

            <li>
              We will publish the new version at the same
              URL and highlight any major changes within
              the App if needed.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Contact Us</h2>

          <p>
            If you have any questions, requests or
            feedback about this Privacy Policy, please
            contact:
          </p>

          <div className={styles.contactBox}>
            <a
              className={styles.link}
              href="mailto:neuroninnovations@gmail.com"
            >
              neuroninnovations@gmail.com
            </a>

            <p>
              <em>
                We aim to respond within 10 calendar
                days.
              </em>
            </p>
          </div>
        </section>
      </article>

      <footer className={styles.footer}>
        © 2025 Neuron Innovations. All rights reserved.
      </footer>
    </main>
  );
}