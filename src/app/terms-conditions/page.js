import TopGap from "../../components/Shared/TopGap/TopGap";

const TermsAndConditions = () => {
  return (
    <section className="pt-5">
      <TopGap />
      <div className="main_container py-5 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Terms and Conditions
        </h1>
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Welcome to Wintec!</h2>
            <p>
              By accessing, browsing, or using this website (the &quot;Site&quot;) or any services provided by Wintec, you (User,Customer, or You) agree to comply with and be bound by these Terms and Conditions (Terms). Please read these Terms carefully before using the Site or purchasing any products. If you do not agree to these Terms, please refrain from using the Site or purchasing any products.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Acceptance of Terms</h2>
            <p>
              By accessing or using the Site or our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you are accessing the Site or services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Changes to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms at any time without prior notice. Any changes will take effect immediately upon posting on the Site. It is your responsibility to review these Terms regularly for updates. Continued use of the Site following any changes constitutes your acceptance of those changes.
            </p>
          </div>

          {/* Use of the Site */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Use of the Site</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old to use the Site or purchase products. By using the Site, you represent and warrant that you meet this eligibility requirement.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> You agree not to:
                <ul className="list-decimal list-inside ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights.</li>
                  <li>Engage in fraudulent activities or actions that could harm Wintec&quot;s reputation.</li>
                  <li>Interfere with the Site&quot;s operation or attempt to gain unauthorized access to our systems.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Intellectual Property</h2>
            <p>
              All content on the Site, including text, images, logos, graphics, designs, and software, is the exclusive property of Wintec and protected under applicable intellectual property laws. You may not use, copy, or distribute any content without prior written consent from Wintec.
            </p>
            <p>
              The name Wintec and related trademarks are the property of Wintec. Use of these trademarks without express permission is strictly prohibited.
            </p>
          </div>

          {/* Privacy and Data Protection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Site, you consent to the collection and use of your data as described in our Privacy Policy.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Wintec shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or purchase of products. This includes, but is not limited to, loss of profits, data, or use, whether arising in contract or tort.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Wintec, its affiliates, officers, directors, employees, and agents from any claims, losses, damages, liabilities, or expenses (including legal fees) arising out of your use of the Site, violation of these Terms, or infringement of any third-party rights.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the People’s Republic of China, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of [Guangming New District, Shenzhen, China].
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
            <p>
              If you have any questions regarding these Terms, feel free to reach out:
            </p>
            <ul>
              <li>
                <strong>Address:</strong> 1st Floor, Building 7, Houhai Industrial Park, Loucun Community, Guangming New District, Shenzhen, China
              </li>
              <li>
                <strong>Email:</strong> wintec@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 0755-86372308
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
