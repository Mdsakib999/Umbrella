import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Condition = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="bg-zinc-100">
      <h1 className="lg:text-4xl text-2xl pt-5 pb-3 font-bold text-center">
        TERMS & CONDTIONS
      </h1>
      <div className="border-2 border-red-600 w-[15%] mx-auto mb-8"></div>
      <div className="lg:w-[75%] w-[90%] mx-auto">
        <p className="font-bold text-lg">
          Sort Insurance Trading Under Sort Services Ltd (Company Number:
          12894301).
        </p>
        <p className="font-bold text-lg mt-4 mb-5">
          We Can Assist You With Finding Quotations For Van Insurance, Fleet
          Insurance Including Courier Delivery Or Any Other Business Use. You
          Are Strongly Advised To Understand The Following Terms Below
          Thoroughly Before Accepting Our Services.
        </p>

        <div>
          <p className="text-lg font-semibold">1. Introduction</p>
          <p>
            <span className="font-bold mr-2">1.1</span>
            This website doesn't generate any quotes itself like other
            comparison sites as we are not authorised to do so and all access to
            use of this Website is subject to these terms and conditions (“Terms
            of Use”). By accessing and using this Website you agree to be bound
            by these Terms of Use. If you do not agree to these Terms of Use,
            you are not permitted to access and use this Website and you should
            immediately cease accessing and using this Website.
          </p>
          <p>
            <span className="font-bold mr-2">1.2</span>
            If you breach any provision of these Terms of Use then your right to
            access and use this Website will immediately cease.
          </p>
          <p>
            <span className="font-bold mr-2">1.3</span>
            This Website is intended for use by UK residents only, aged 18 years
            and over. You should note that this Website (including products,
            price references and product descriptions) is frequently updated.
            Products may be withdrawn at any time, without notice.
          </p>
          <p>
            <span className="font-bold mr-2">1.4</span>
            We may amend these Terms of Use at any time and so we recommend that
            you refer to these Terms of Use each time you use this Website. The
            amended Terms of Use will be effective from the date they are posted
            on this Website. Your continued use of this Website will constitute
            your acceptance of the amended Terms of Use.
          </p>
          <p>
            <span className="font-bold mr-2">1.5</span>
            Sort Services Ltd is not the insurer but provides consultancy
            service and services of clerical nature.
          </p>
          <p>
            <span className="font-bold mr-2">1.6</span>
            Sort Services Ltd does not give any advice or make any personal
            recommendations as to the suitability of any policy to individual or
            business client’s circumstances. We may describe policy features,
            but it is the client’s decision to buy.
          </p>
          <p>
            <span className="font-bold mr-2">1.7</span>
            Sort Services Ltd is an independent price searching company (not
            associated with any insurer or underwriter), a 3rd Party who works
            on customer’s behalf only up to searching the quotations.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">2. Privacy Policy</p>
          <p>
            <span className="font-bold mr-2">2.1</span>
            We take your privacy seriously. Please visit our{" "}
            <Link className="text-red-500" to="/privacy">
              Privacy Policy
            </Link>{" "}
            to find out how we use the information that you provide to us. Your
            use of this Website is at all times subject to the provisions of our
            Privacy Policy.
          </p>
          <p>
            <span className="font-bold mr-2">2.2</span>
            We take your privacy seriously. Please visit our{" "}
            <Link className="text-red-500" to="/privacy">
              Privacy Policy
            </Link>{" "}
            to find out how we use the information that you provide to us. Your
            use of this Website is at all times subject to the provisions of our
            Privacy Policy.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">3. General</p>
          <p>
            <span className="font-bold mr-2">3.1</span>
            If any provision of these terms and conditions are held by any
            competent authority to be invalid or unenforceable in whole or in
            part, the validity of the other provisions of this agreement and the
            remainder of the provision in question will not be affected. English
            law will apply to this agreement and the parties agree to submit to
            the non-exclusive jurisdiction of the English courts. Save as
            expressly provided elsewhere these terms and conditions shall apply
            only between us and you and no other person shall be entitled to
            benefit from them
          </p>
          <p>
            <span className="font-bold mr-2">3.2 No Advice</span>
            Sort Services Ltd does not offer financial, investment or other
            advice. Nothing on this Website constitutes financial, investment or
            other advice by us in relation to any product.
          </p>
          <p>
            <span className="font-bold mr-2">
              3.7 FSMA Regulatory and PCI DSS Compliance Information:
            </span>
            As stated in clause 2 and 3 above, as a professional firm we do not
            perform any of the above regulatory activities, therefore according
            to The Financial Services & Markets Act 2000 (FSMA) we are not
            required to be authorised and regulated by FCA and PRA. In terms of
            handling personal and sensitive data and payment information we are
            registered with ICO as per Data Protection Act 2018 & GDPR compliant
            and made our declarations to the information commissioner. As a
            merchant we provide information to Squareup International Limited to
            be compliant with (PCI DSS) Payment Card Industry Data Security
            Standards.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">4.Third party products</p>
          <p>
            <span className="font-bold mr-2">4.1</span>
            You can apply for a number of products via this Website. These
            products are not provided by us but are instead provided by third
            parties over whom we do not have control. It is your responsibility
            to satisfy yourself that you wish to obtain any product before doing
            so. Before making a decision to purchase a product, you should
            consult the relevant product documents.
          </p>
          <p>
            <span className="font-bold mr-2">4.2</span>
            All product prices are quoted in UK pounds(£).
          </p>
          <p>
            <span className="font-bold mr-2">4.3</span>
            We are not responsible or liable for any loss or damage you or any
            third party may suffer or incur in connection with any product you
            obtain after using this Website or for any acts, omissions, errors
            or defaults of any third party in connection with that product.
          </p>
          <p>
            <span className="font-bold mr-2">4.4</span>
            This Website contains statements regarding the terms of the
            products, including features and inclusions. Some of these
            statements are generalised in order to give you a summary of the
            products being compared. However, not all products are the same and
            you should confirm the exact terms of any product that you intend to
            purchase prior to purchasing that product. The product information
            supplied on the website is available only to UK residents.
          </p>
          <p>
            <span className="font-bold mr-2">4.5</span>
            By submitting your personal details through this Website, you are
            able to make an offer to obtain a product from a third party
            provider. That offer may be accepted or rejected. The contract for
            the product will only be concluded once your offer has been accepted
            by the relevant third party provider. If your offer is accepted then
            the product will be provided to you, subject to the third party
            provider’s terms and conditions. You will receive written
            confirmation if your offer has been accepted.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">5. Duty of Disclosure</p>
          <p>
            <span className="font-bold mr-2">5.1</span>
            All quotations are given on the basis of "Utmost good faith.
          </p>
          <p>
            <span className="font-bold mr-2">5.2</span>
            You must act with utmost good faith toward all the questions and
            provide honest and accurate information at all times. This
            obligation applies at the time of applying for the policy and
            continues throughout the duration of the policy.
          </p>
          <p>
            <span className="font-bold mr-2">5.3</span>
            We must be presented with a fair and complete statement of the
            nature of any risk submitted to them. If you do not provide complete
            and accurate information, containing all material facts and
            circumstances, then your policy may not be valid in the event of a
            claim or a higher premium may be payable.
          </p>
          <p>
            <span className="font-bold mr-2">5.4</span>A circumstance is
            material if it would influence the judgment of a prudent the company
            in calculating the premium or assessing whether the risk would be
            accepted or rejected. Accordingly, you must provide all the facts
            material within such a submission and update this information where
            relevant between initial enquiry and attachment of any cover and
            during the term of any policy. This applies equally to new orders,
            adjustments, renewals, extensions of cover, endorsements and claims.
          </p>
          <p>
            <span className="font-bold mr-2">5.5</span>
            Please note that your obligation to provide material information to
            the quotation firm is an overriding obligation. Where quotation firm
            do not request specific information within a proposal form or
            questionnaire, this does not mean that such information is not
            material. If you are in doubt as to whether information is material,
            please call us.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            7.The Sort Services Ltd service and how we are paid
          </p>
          <p>
            <span className="font-bold mr-2">7.1</span>
            We provide a service on this Website which enables you to research
            and compare car quotes, Van quotes, Home quotes and Accident
            management all of which are provided by third parties. We are not
            the insurer and do not provide consultancy services and services of
            intermediary nature. Please be aware we do not offer any advice or
            recommendation as to the suitability of any policy to individual or
            business client’s circumstances. We simply search the market for the
            cheapest rate on a non-advice basis. We may describe policy
            features, but it is your (client’s) sole decision to buy.
          </p>
          <p>
            <span className="font-bold mr-2">7.2</span>
            Your responsibility to provide accurate details and if your insurer
            provides any unfair terms the following terms and conditions are
            applicable for all customers (specially who consumes Quote service):
            if you agree with insurer’s/broker’s terms and conditions as stated
            on their website. You pay Sort Services Ltd a separate service fee
            for price searching work. If the insurer accepts the payment from
            your bank card, this fee is non-refundable. We do not take any
            commission from the insurer and our services are limited to price
            searching. If the payment does not go through due to incorrect or
            false information provided to us by you, such as but not limited to
            undeclared accidents, penalties & NCB, we reserve the right to
            charge for our service from the amount that you would pay to Sort
            Services Ltd, even if we do not manage to find you quotes with the
            correct information given to us afterwards. If any similar quotation
            that is generated through our work is bought, the charges for our
            work may apply depending on circumstances. If the insurer imposes
            any unfair terms to cancel your policy, depending on the time of
            cover we may deduct only £50 of the service charge you have paid us
            and refund you the rest although according to our full terms we are
            not obliged to do this. Sort Services Ltd is a service providing
            company, not the insurer or broker. In terms of legality and data
            accuracy any information entered on the insurer’s website has been
            recorded and insurer/broker sends you this via email link or post.
            It is your responsibility to check your policy documents, statement
            of facts and staying updated with your Insurer requirements from
            time to time. As an independent price searching company we do not
            monitor or administrate any policy.
          </p>
          <p>
            <span className="font-bold mr-2">7.3</span>
            We do not conduct activities as a broker or agent for any specific
            company. Coherence to Consumer Rights Act 2015 and The General Data
            Protection Regulation (GDPR) . The client (yourself) is appointing
            or authorising us to carry out price searching work on your behalf
            to find you quotation or renewal comparison from the available
            market (based on the accuracy of the information you have submitted
            to us). Sort Services Ltd does not make any personal recommendations
            or suggestions or give any financial advice to the suitability of
            any products to our clients (yourself) as we are not FCA regulated.
          </p>
          <p>
            <span className="font-bold mr-2">7.4</span>
            Some of the insurers do not like 3rd party involvement in quotation
            searching on customer’s behalf therefore, we strongly recommend you
            to double check with the insurer before going ahead with the policy
            yourself whether they accept it or not following the quotations
            links sent by email to you. However, if your policy gets cancelled
            anytime within 3 months of receiving the quotations links from us we
            may search for you again for free or we will issue full refund of
            our service charge if any occurrence or mistakes made by us during
            the searching process (subject to mutual convenience and reliable
            fact). After receiving quotations links in the email, if you find
            any details incorrect or inappropriate please amend it with the
            insurer immediately before going ahead further and if premium
            increases due to that amendment, we will adjust the difference with
            our service charge or search for you again with free of charge
            (Subject to price comparison sites algorithm).
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            7. How secure is the information I give to you?
          </p>
          <p>
            Your personal and sensitive data are covered by the Data Protection
            Act & GDPR 2018.The payment site services enhanced encryption
            techniques, which ensures that all of your confidential data (such
            as credit card number, name, address and other information) cannot
            be intercepted, unscrambled, copied or seized when being transmitted
            from yourself to our server.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            8. Your electronic information
          </p>
          <p>
            If you choose to communicate with us electronically, we may collect
            your electronic identifier e.g. Internet Protocol (IP) address or
            telephone number supplied by your service provider.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">9. E-mail Links</p>
          <p>
            On our website we may use e-mail links as a source of communication
            to contact you directly. We use the information provided in your
            e-mail to respond to your questions or comments. We may also store
            your comments for future reference and to help improve our service
            were possible.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">10. Web Links</p>
          <p>
            Our website may contain web links to other third party websites. If
            you click on any one of these web links, you will be entering
            another site for a third party company. We are not responsible for
            third party websites and by entering these websites our Terms and
            condition and privacy policy will not be valid on their sites. It is
            your responsibility to read the privacy statements of these linked
            sites and their terms and conditions as they may substantially
            differ from ours.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            11. Use of the website communication alertness
          </p>
          <p>
            You agree that your use of our website will not affect the integrity
            or security of the website or cause unreasonable inconvenience to
            our company. Please be aware that communications over the internet,
            such as emails are not secure unless they have been encrypted. If
            you decide to correspond using this method then it is important that
            you are made aware that any memorandum or information may route
            through a number of countries before being delivered to us as this
            is the nature of the World Wide Web/Internet. We cannot accept
            responsibility for any unauthorised access or loss of personal
            information that is beyond our control, which you have communicated
            to us via this method without appropriate encryption.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">12. Anti-Spam Policy</p>
          <p>
            Spam is unsolicited e-mail, often of a commercial nature and sent
            indiscriminately to multiple mailing lists, individuals, or news
            groups. Spam is commonly known as "junk e-mail." As defined by H.R.
            3113 and reported by the Subcommittee on Telecommunications, Trade,
            and Consumer Protection, unsolicited e-mail refers to any electronic
            message that advertises a product or service for profit is sent for
            other commercial purposes is sent to a recipient with whom the
            originator does not have an existing business relationship with. The
            originator can also invite the recipient to the transmission
            contains forged headers, invalid or non-existent domain name or
            other means of deceptive addressing. Also in the opinion of the
            recipient the transmission and reception of the message appears to
            give an unreliable benefit to the sender, then we identify this as
            spam.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">13. Use of Cookies</p>
          <p>
            {" "}
            A cookie identifies your computer to a server which enables
            information to be stored on the hard drive of your computer. Cookies
            allow a computer to be identified as indistinguishable to one that
            has accessed another website or visited a site previously. Cookies
            do not harm your computer system and is widely used. Every so often
            we may use and serve cookies, action tags or pixel tags. Any
            information that is collected via cookies, actions and pixel tags is
            completely anonymous. We use cookies, action tags or pixel tags for
            various purposes such as collating anonymous aggregated information
            that is used to manage and plan enhancements to our services. Also
            to assess the effectiveness of our promotional marketing on third
            party website, as we are continually looking to improve and
            implement certain practices and technologies in order that we may
            improve your service experience.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            14. How can I stop cookies and what effect will this have?
          </p>
          <p>
            To stop cookies from being installed on your computer you can
            configure your browser not to accept them or opt-out. Please refer
            to your browser's 'help' facility for guidance on how to do this. If
            cookies are already on your system, you can delete them - For
            further information on cookies please visit:{" "}
            <Link
              className="text-blue-600"
              to="allaboutcookies.org/manage-cookies/.Please"
            >
              http://www.allaboutcookies.org/manage-cookies/.Please
            </Link>{" "}
            be aware that deleting certain cookies may bring difficulties when
            traversing around sites.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">15. Legal Disclaimer</p>
          <p>
            The Government, Regulatory body or Law Agencies have the right to
            contact us to disclose personal information that we hold on you. In
            such circumstances in order to comply by law and with legal
            processes we will have to disclose the required information in good
            faith (and by law) that such action is necessary.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mt-4">
            16. Termination of Your Rights
          </p>
          <p className="pb-10">
            Sort Price Searcher' part of Sort Services Ltd have right to issue a
            warning, temporary suspension, or an indefinite suspension and
            termination of your rights to use our website If you inconsistently
            are in breach of our terms and conditions. Also if you violate or
            attempt to violate any rights of any other user(s) of this website
            or third parties. Termination will also take place if you are
            engaged in any fraudulent activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Condition;
