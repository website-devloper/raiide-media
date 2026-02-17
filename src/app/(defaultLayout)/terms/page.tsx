import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import { siteContact } from '../../lib/siteContact';

export const metadata = {
  title: 'Terms & Conditions | Raiide Media',
  description: 'Read the terms and conditions that govern the use of Raiide Media website and services. Learn about our policies and agreements.',
};

const page = () => {
  return (
    <div>
      <BreadCumb
        Title="Terms & Conditions"
        content="Review the terms that govern use of our website and services."
      ></BreadCumb>
      <section className="pt-120 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="agk-content-box style-one">
                <h3 className="mb-20">Terms Of Service</h3>
                <p>
                  By accessing this website, you agree to use it in compliance with applicable laws
                  and these terms. All content, visuals, and media are property of Raiide Media or
                  licensed to us and may not be reused without permission.
                </p>
                <p>
                  Project timelines, scope, and deliverables are defined per signed agreement.
                  Payments, revisions, and ownership transfer are handled according to client contract
                  terms. We reserve the right to update these terms at any time.
                </p>
                <p className="mb-0">
                  For questions regarding these terms, contact us at{' '}
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
