import TopGap from "../../components/Shared/TopGap/TopGap"

const PrivacyPolicyPage = () => {
  return (
    <section className="pt-5">
      <TopGap></TopGap>
      <div className="main_container  py-5 md:py-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
        
        <div className="">
          <p className="mb-4">
            Wintec CNC Machining Services, a company based in Shenzhen, China, has over 10 years of experience in CNC machining. We are committed to protecting the privacy of our customers and website visitors. This Privacy Policy outlines how we collect, use, store, and protect data associated with the Surface Finishing Services, Materials Machined, and CNC machining services we provide, including CNC turning, CNC milling, complex mill turning, and 5-axis machining processes. By engaging with our services or visiting our website, you agree to the terms described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            In order to provide our services effectively, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Contact Information:</strong> Name, company name, email address, phone number, and mailing address.</li>
            <li><strong>Business Information:</strong> For corporate clients, we collect business names, industry types, and shipping addresses.</li>
            <li><strong>Project-Specific Information:</strong> Part specifications, drawings, and other relevant information.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use your personal information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your requests and inquiries</li>
            <li>Provide CNC machining services</li>
            <li>Communicate with you about your projects</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Protect Your Information</h2>
          <p className="mb-4">
            We are committed to ensuring the security of your personal and business information. We employ a variety of security measures, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Data Encryption:</strong> Sensitive data is encrypted both during transmission (via SSL encryption) and at rest, to prevent unauthorized access.</li>
            <li><strong>Access Controls:</strong> Only authorized personnel within Wintec and our third-party service providers have access to your personal data, based on the principle of least privilege.</li>
            <li><strong>Secure Payment Processing:</strong> We use third-party payment processors that are PCI-DSS compliant to ensure secure payment transactions.</li>
            <li><strong>Data Storage:</strong> We store your information securely and only retain it for as long as necessary to provide our services, fulfill contractual obligations, or comply with legal requirements.</li>
          </ul>
          <p className="mb-4">
            While we take reasonable steps to protect your data, no system can be completely secure. We do not guarantee absolute security but continue to strive for the best possible protection of your information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <p className="mb-4">
            We do not sell, rent, or trade your personal or business information to third parties. However, we may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist in performing services on our behalf, such as payment processors, delivery companies, IT service providers, and technical consultants.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your data if required to do so by law, such as in response to a subpoena, court order, or government investigation.</li>
            <li><strong>Business Transactions:</strong> If Wintec undergoes a merger, acquisition, or sale of assets, your information may be transferred to the new owner as part of that transaction, subject to applicable data protection laws.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our business practices, legal obligations, or technological advancements. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:
          </p>
          <address className="mb-4">
            <p><strong>Wintec CNC Machining Services</strong></p>
            <p>1st Floor, Building 7, Houhai Industrial Park, Loucun Community, Guangming New District, Shenzhen, China 518106</p>
            <p>Email:  wintec@gmail.com
            </p>
            <p>Phone:  0755-86372308
            </p>
          </address>

          <p className="mb-4">
          By using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyPage
