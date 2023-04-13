import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="part1-ab">
          <img src="/img2.jpg" width="100%" alt="" />
        </div>

        <div className="part1-ab ptb">
          <h3 className="head1">About Us</h3>
          <div className="line"></div>
          <p>
            The business is led by a group of professionals from different
            fields and backgrounds who have the functional and technological
            experience. We're here to help MSMEs overcome their accounting and
            enforcement issues under different laws of the country.
          </p>
          <p>
            As per our Research, we found out that Large Number of MSMEs are
            incurring Huge Losses and are struggling daily to fulfill their
            accounting and enforcements needs due to Constraints with respect to
            their Location, Lack of Fully Trained People to execute their
            Accounting Works, Cost Overruns to Fulfill all enforcement needs,
            and Poor Quality of Services provided by existing lot. To solve
            these Problems, our team is committed to develop creative and
            cost-effective real-time customized solutions catering to your
            needs.
          </p>
          <p>
            MBA from a world-famous B-School for Entrepreneurship, Chartered
            accountants with two and a half decades of experience in practice,
            Information Technology Specialist with ten years of experience in
            growth and solution design, Cost Accountant and foreign faculty for
            SAP ERP, make up the Board of Directors.
          </p>
        </div>
      </div>

      <div className="row1">
        <div className="">
          <div className="content-img">
            <h3>Problem & Dimensions</h3>
            <div className="line"></div>
            <p>
              More compliances, complicated rules, midnight amendments, and
              harsh penalties and fines which are auto calculated are now the
              issues in addition to the existing problems faced by various stake
              holders.
            </p>

            <div className="issues">
              <div className="issue1">
                <h4 className="head2">Customers’ common issues :</h4>
                <ul>
                  <li>Finding Reliable and Capable Accountant</li>
                  <li>Struggling to use Technology for filing Returns</li>
                  <li>
                    Poor, Incomplete and Incorrect work done by accountants
                  </li>
                  <li>Higher Fees Charged by Accountants</li>
                  <li>Delay in Returns and Compliances etc.</li>
                </ul>
              </div>
              <div className="issue1">
                <h4 className="head2">CAs common issues:</h4>
                <ul>
                  <li>
                    Last minute rush from Business Owners to complete their
                    Returns.
                  </li>
                  <li>Incomplete Books provided by Business Owners.</li>
                  <li>
                    Lack of Supporting Documents to corroborate their Revenues
                    and Expenditures Estimates making it Tough for Attestation.
                  </li>
                  <li>Irregular Work Load</li>
                  <li>
                    Non availability of staff with requisite skills and
                    knowledge etc.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p>
                Even other stakeholders in the economy like Financial
                Institutions, Government Departments etc. are suffering as a
                result of these problems.
              </p>
              <p>
                Now, our solution meets all of these stakeholders needs and can
                bring relief to them all. MSMEs can afford and rely on us with
                confidence and gets relief at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row2">
        <div>
          <h3>Innovative Solutions For Account Problems</h3>
          <div className="line"></div>
          <p>
            Our model is flexible enough to support individual needs and
            circumstances that you can outsource totally or partially:
          </p>
        </div>
        <div className="row">
          <div className="part1-ab">
            <img src="/img4.jpg" width="100%" alt="" />
          </div>

          <div className="part1-ab ptb">
            <p>
              In the current situation, a person will not able to justify the
              work because it needs a broad range of skills, including
              accounting, technology, law, patience in addition to sincerity and
              costs. People like this are hard to find and much harder to
              afford. MSMEs are unable to afford or retain talent.
            </p>
            <p>
              All of the above features are included in our solution at a low
              cost and with ease of use. Our online site, applications, new
              technology, and techniques combine to eliminate the movement of
              people and physical data, allowing for day-to-day operations at no
              expense. With our technologies and techniques, data capture is
              flawless and fast.
            </p>
            <p>
              A number of tests will be carried out, and deliveries will be made
              in a precisely planned shape and with precision. This would make
              life simpler for professionals, agencies, and business owners.
            </p>
            <p>
              We assign experts in your company domain compliances who operate
              from various locations and at various times.
            </p>
            <p>
              Owners eventually forget about keeping track, asking, worrying,
              perplexing, and losing. You will never have to bring bags
              containing files and directories, coupons, bills, or records since
              source documents can be checked instantly online.
            </p>
          </div>
        </div>
      </div>

      <div className="row3">
        <div className="row-st">
          {/* <div className="empty"></div> */}
          <div className="states">
            <div className="states1">
            <span className="span">2</span>
            <p className="para">States</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            <span className="span">65</span>
            <p className="para">Cities Served</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            <span className="span">250+</span>
            <p className="para">Satisfied Clients</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            <span className="span">20+</span>
            <p className="para">Types Of Buisness</p>
            </div>
          </div>
          <div className="states">
            <div className="states1">
            <span className="span">50+</span>
            <p className="para">Trained Employees</p>
            </div>
          </div>
          {/* <div className="empty"></div> */}

        </div>

      </div>
    </div>
  );
};

export default AboutUs;
