import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import { siteContact } from '../../lib/siteContact';

export const metadata = {
  title: 'Privacy Policy | Raiide Media',
  description: 'Learn how Raiide Media collects, uses, and protects your personal information. Read our privacy policy for complete details.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Privacy Policy"
        content="Learn how we collect, use, and protect your personal information."
      ></BreadCumb>
      <section className="pt-120 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="agk-content-box style-one">
                <h3 className="mb-20">Privacy Notice</h3>
                <p>
                  We collect contact information you submit through our forms to respond to inquiries
                  and provide services. We do not sell personal data to third parties.
                </p>
                <p>
                  We may use analytics and cookies to improve website performance and user
                  experience. You can disable cookies in your browser settings at any time.
                </p>
                <p className="mb-0">
                  For privacy requests or data removal, contact{' '}
                  <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
