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
        TERMS & CONDITIONS
      </h1>
      <div className="border-2 border-red-600 w-[15%] mx-auto mb-8"></div>
      <div className="lg:w-[75%] w-[90%] mx-auto">
        <p className="font-bold text-lg">
        Best Insurance Trading Under  England Insure.
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
            England Insure is not the insurer but provides consultancy
            service and services of clerical nature.
          </p>
          <p>
            <span className="font-bold mr-2">1.6</span>
            England Insure does not give any advice or make any personal
            recommendations as to the suitability of any policy to individual or
            business client’s circumstances. We may describe policy features,
            but it is the client’s decision to buy.
          </p>
          <p>
            <span className="font-bold mr-2">1.7</span>
            England Insure is an independent price searching company (not
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
            England Insure does not offer financial, investment or other
            advice. Nothing on this Website constitutes financial, investment or
            other advice by us in relation to any product.
          </p>

          <p>
            <span className="font-bold mr-2">A</span>
            Accepting deposits or arranging cover <br />
Under Section 19 of FSMA provides that a person may not carry on a regulated activity in the UK unless he is authorised or exempt. The ''Regulated Activities'' are specified in the FSMA Act 2000, Order 2001(RAO) - FCA Handbook
          </p>
          <p>
            <span className="font-bold mr-2">B</span>
            Effecting or carrying out contracts of insurance as principal.
          </p>

          

          <p>
            <span className="font-bold mr-2">
            3.3 No Advice
            </span>
            England Insure does not offer financial, investment or other advice. Nothing on this Website constitutes financial, investment or other advice by us in relation to any product.
          </p>

          <p>
            <span className="font-bold mr-2">
            3.4
            </span>
            In terms of any other financial services our activities do not include the following- <br />
            Issuing e-money <br />
            dealing in investments <br />
            arranging deals in investments <br />
            operating a multilateral trading facility <br />
            managing investments <br />
            safeguarding and administering investments <br />
            establishing collective investment schemes <br />
            establishing stakeholder pension schemes <br />
            providing basic advice on stakeholder products <br />
            advising on investments <br />
            advising on home finance activities <br />
            Lloyd's market activities <br />
            entering funeral plan contracts <br />
            entering into a home finance activity <br />
            administering a home finance activity <br />
            entering into a home finance activity <br />
            administering a home finance activity
             <br />
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
          <p>
            <span className="font-bold mr-2">4.6</span>
            Our website may contain hyperlinks to other websites as part of our service. Links are provided for convenience only and inclusion of any links should not be taken to imply ratification of the third party website. These websites are owned and operated by third parties and therefore we accept no liability for any statements, information, products or services that are published on or may be accessible through them.
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
          6. Use of the website
          </p>
          <p className="pb-10">
          By using this website you agree that you will not do anything that affects the reliability or security of the website or causes unreasonable inconvenience to other users or ourselves. You are only permitted to use our website for personal use and if you are a UK resident. Unauthorised use includes commercial use, which is strictly prohibited and we reserve the rights to take further action such as legal action.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            7.The England Insure service and how we are paid
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
            on their website. You pay England Insure a separate service fee
            for price searching work. If the insurer accepts the payment from
            your bank card, this fee is non-refundable. We do not take any
            commission from the insurer and our services are limited to price
            searching. If the payment does not go through due to incorrect or
            false information provided to us by you, such as but not limited to
            undeclared accidents, penalties & NCB, we reserve the right to
            charge for our service from the amount that you would pay to England Insure, even if we do not manage to find you quotes with the
            correct information given to us afterwards. If any similar quotation
            that is generated through our work is bought, the charges for our
            work may apply depending on circumstances. If the insurer imposes
            any unfair terms to cancel your policy, depending on the time of
            cover we may deduct only £50 of the service charge you have paid us
            and refund you the rest although according to our full terms we are
            not obliged to do this. England Insure is a service providing
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
            to us). England Insure does not make any personal recommendations
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
          8. Permitted use
          </p>
          <p>
            <span className="font-bold mr-2">8.1</span>
            You are only permitted to use this Website for personal use, subject to your compliance with these Terms of Use. Commercial use of this Website is strictly prohibited
          </p>
          <p>
            <span className="font-bold mr-2">8.2</span>
            You are not permitted to do anything that may affect the security of this Website or any information or material stored within it.
          </p>
          <p>
            <span className="font-bold mr-2">8.3</span>
            You agree not to: (A) use any automated tool (such as a spider, robot or aggregation tool) to access, copy or extract such information; (B) copy or disclose to any person, any Website content, other than as expressly permitted by these Terms of Use; (C) use any method or process (including data scraping, collection or accumulation tool, robot, spider or scripted responses) for the purpose of obtaining, processing, copying, replicating, distributing, reconfiguring, republishing, viewing, assessing, analysing, modifying or repackaging any Website content; (D) use any method or process to consolidate or combine any Website content with any other content, data, information, images or material; (E) reverse engineer, disassemble or otherwise attempt to construct or identify this Website’s source code, formulas or processes; (F) use systematic, repetitive or any other methods which are designed to obtain a large number of quotes, comparisons, rankings or other pricing and related information from this Website; (G) use, obtain or attempt to obtain from this Website, information in order to identify or discover pricing, underwriting, rating and related business methodology or systems; or (H) post, distribute or send any ‘spamming material’ or any other form of bulk communication.

          </p>
          <p>
            <span className="font-bold mr-2">8.4</span>
            You are not permitted to use this Website in any unlawful or fraudulent manner.
          </p>
          <p>
            <span className="font-bold mr-2">8.5</span>
            You agree that if you provide any information on this Website, that information will be true, accurate and complete.
          </p>
          <p>
            <span className="font-bold mr-2">8.6</span>
            This Website is intended to be used for quotation search, but England Insure is not able to bind any third-party provider or ensure that any third-party provider sells any product to you. Accordingly, nothing on this Website amounts to an offer by us or any third-party provider to: (a) sell any product to you; or (b) enter into any contract with you.

          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">9. Intellectual property rights</p>
          <p>
            <span className="font-bold mr-2">9.1</span>
            The word or mark “England Insure” however represented, all associated logos and symbols, and any combinations with another word or mark, are the trademarks of England Insure or one of its group companies.
          </p>
          <p>
            <span className="font-bold mr-2">9.2</span>
            All intellectual property rights in any material or content contained in or accessible via this Website is either owned by England Insure or has been licensed to us for use by us.
          </p>
          <p>
            <span className="font-bold mr-2">9.3</span>
            You will only make fair use of the trademarks on this Website and will not use them: (A) as part of your own marks; (B) in a manner which is likely to cause confusion or damage to the reputation of England Insure; or (C) to identify or imply endorsement or otherwise of products or services to which they do not relate.
          </p>
          <p>
            <span className="font-bold mr-2">9.4</span>
            Except as set out elsewhere in these Terms of Use, none of the intellectual property rights belonging to England Insure or our licensors in and relating to this Website (including any content or material displayed on this Website) may be used, copied, published or distributed by you without our prior written consent.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">10. Web Links</p>
          <p>
            <span className="font-bold mr-2">10.1</span>
            This Website, content and services are supplied to you on a strictly “as is” basis and we make no warranties, express or implied, regarding their satisfactory quality, fitness for a particular purpose, reliability, timeliness, accuracy, completeness, security or that they are free from error.
          </p>
          <p>
            <span className="font-bold mr-2">10.2</span>
            We try to ensure that the information displayed on this Website is accurate, however your access to this Website and any action you carry out on the basis of information you obtain from this Website is carried out entirely at your own risk and we accept no liability for any losses that you may suffer as a result.
          </p>
          <p>
            <span className="font-bold mr-2">10.3</span>
            We do not give any warranty that the Website is free from viruses or anything else which may have a harmful effect on any technology.
          </p>
          <p>
            <span className="font-bold mr-2">10.4</span>
            We aim to provide uninterrupted access to this Website but we give no warranty as to the uninterrupted availability of this Website. We reserve the right to suspend, restrict or terminate your access to this Website at any time.
          </p>
          <p>
            <span className="font-bold mr-2">10.5</span>
            We will not be liable for any loss of use, profits or data or any indirect, special or consequential damages or losses, whether such losses or damages arise in contract, negligence or tort, or otherwise in relation to: (A) your use of, reliance upon or inability to use this Website or content; (B) the deletion with or without notice or cause of any of your data or information stored on this Website; (C) any loss of your content or communications resulting from delays, non-deliveries, missed deliveries, service interruptions or a failure, suspension or withdrawal of all or part of this Website at any time; (D) the removal from this Website of any content or communications sent or posted by you on or via this Website; (E) any circumstance that is outside of our reasonable control; and (F) any loss or damage that is not directly caused by us or which we could not reasonably expect at the time we entered into our agreement with you.
          </p>
          <p>
            <span className="font-bold mr-2">10.6</span>
            Nothing in these Terms of Use is intended to exclude or limit our liability for death or personal injury, our fraud or any other liability which we may not by law exclude or limit.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          11. Indemnity
          </p>
          <p>
          You agree to indemnify us, our directors, employees, agents, and contractors for any loss suffered, or any costs that may be incurred arising from your breach of these Terms of Use or your use of this Website.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">12. Financial Services Compensation Scheme (FSCS)</p>
          <p>
          Your insurer or service provider would normally be covered by Financial Services Compensation Scheme (FSCS). You may be entitled to the scheme if your insurer can not meet their obligations. Any amount paid to your insurer would be covered by FSCS; this depends on the type of business and the circumstances of the claim. 
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">13. Definition of Quotes</p>
          <p>
          Although we can not tailor or trim any information unless your circumstances changes and with the service that we provide we do not act as a broker, agent or third party for any particular insurer at any one time, although we work as an independent Price Searcher. We have provided you with links to comparison websites, and other various companies, to find you the best possible deals. In any case if would like us to manually fill out any form on your behalf according to your individual specification and circumstances, we can work on finding you quotes, as long as you authorise us and provide us with accurate information. With the given information we will manually search into a variety of prospects to find covers. Usually this is a more challenging premium which in turn will save you money and time. We cannot make any alterations to the quotes / policy. The quotes do not include any charges from insurer or broker that may arise later on if you instruct any amendment or alteration to the policy after setting up. Such amendments might be a change of car or change of address for example. When we provide you with quotes we always process your data and payment information according to the Data Protection Act & GDPR 2018.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          14. Price delivery
          </p>
          <p>
          Predominantly, you will receive quotes within maximum 8 business hours by text (sms) to the mobile number or the email you had given us. You will then be contacted by a telephone call to discuss your quote further; this will give you the opportunity to learn more about the policy features and give you the chance to make any queries that you may have about the quotes. The price we deliver is completely reliant on the availability of the third party sites and on the overall performance of the World Wide Web. We might not be able to provide quotes to you in certain circumstances. You will be advised accordingly if this is the case. We will contact you via telephone, SMS or email when a quote is ready for you.

 
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">15. Your obligations</p>
          <p>
          It is your responsibility to answer all questions on the relevant form to the best of your knowledge and authenticity. If you are not sure of any answers, then you should disclose any information you think might be important. If the answers are incorrect, your application may be rejected or additional premiums could be payable, which the insurer reserves the right to collect. Upon purchasing a policy it is your responsibility to check and if necessary amend any details with any broker or insurer who you decide to purchase your policy from. If you fail to do this, this may invalidate the policy. It is solely your responsibility to read the Terms and Conditions of your product that you are purchasing from your service provider. The details should be accessible to you via the third party web link. It is important you understand the Terms and Conditions agreed with us only relate to this website.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          16. Terms of risk
          </p>
          <p className="pb-10">
          All providers specialise in dealing with different levels of risks and they do not quote on risks that fall outside their target customers. The more "high risk" or "non-standard" your risk is categorised by them, the fewer quotes you will receive. At times it might not be possible for you obtain a quote at all over the internet.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            17. Claims & Underwriting Exchange Register
          </p>
          <p className="pb-10">
          Insurers pass information to the Claims and Underwriting Exchange Register run by Database Services Limited (IDS Ltd), the Hunter Database run by MCL Software Ltd and the Motor Insuring Anti-Fraud and Theft Register run by the Association of British Insurers (ABI) to help the insurer check the information provided and also to prevent fraudulent claims. When application for cover is submitted the insurer dealing with your request for Insuring may search these Registers and any other relevant registers. Under the terms and conditions of your policy, you must tell the insurer about any incident (such as an accident or theft) regardless of blame and whether a claim has been made or not. When you tell the insurer about an incident, the insurer will pass this information to the Registers and to any other relevant agents/bodies.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            18. Motor Insuring Database
          </p>
          <p className="pb-10">
          Your motor Insuring policy details will be added to the Motor Insuring Database (MID) run by the Motor Insurers' Information Centre (MIIC). This can sometimes take up to 7 days to get your policy details updated on the MID. You can also check information about your own vehicle at www.askmid.com. MID data may be used by the DVLA and DVLNI for the purpose of Electronic Vehicle Licensing. Police may also use MID data for the purposes of investigating whether a driver's use of the vehicle is likely to be covered by a motor Insuring policy and/or for preventing and detecting crime. If you are involved in an accident (in the UK or abroad) other UK insurers, the Motor Insurers' Bureau and MIIC may search the MID to obtain relevant car Insuring policy information. Persons pursuing a claim in respect of a road traffic accident (including citizens of other countries) may also obtain relevant information which is held on the MID.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          19. Events of accidents and Claims and Underwriting Exchange (CUE)
          </p>
          <p className="pb-10">
          Any driver/policy holder who has had any accidents (fault or non-fault) or claims (whether claim made or not, or just notified) in the last 5 years must disclose this information at application stage. Failing to do so could invalidate your policy, where cancellation fees may apply. You also have the risk of your current premium increasing. Insurers or brokers have accessibility to check with CUE for the history of any accidents or claims recorded within the CUE database. The Claims and Underwriting Exchange (CUE) is a central database of motor, home and personal injury/industrial illness incidents reported to companies, which may or may not affect your application/policy.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          20. Motor convictions, fixed penalty or disqualification and Driver and Vehicle Licensing Agency (DVLA)
          </p>
          <p className="pb-10">
          Any driver who has had any motor convictions, fixed penalties or disqualifications in the last 5 years must disclose this information at application stage. Failing to do so could invalidate your policy, where cancellation fees may apply. You also have the risk of your current premium increasing. Insurers or brokers may also check with DVLA for the history of any motor convictions, fixed penalties or disqualifications recorded within the DVLA database. The Driver and Vehicle Licensing Agency (DVLA) is the organisation of the UK Government responsible for maintaining a database of drivers and a database of vehicles in Great Britain.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          21. No claims bonus (NCB) / No claims discount (NCD)
          </p>
          <p className="pb-10">
          Proof of No Claims Bonus (NCB) may be required if you take out a policy were a NCB has been applied. It is solely your responsibility to provide the proof of NCB. This proof should be either a renewal notice or letter from your previous cover provider, which shows the main driver as the policy holder (yourself) and the NCB declaration. A policy schedule is not the correct form of proof and may be rejected. The NCB can only be used on one policy at a time, and must have been used on a policy within the last 24 months.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          21. No claims bonus (NCB) / No claims discount (NCD)
          </p>
          <p className="pb-10">
          Proof of No Claims Bonus (NCB) may be required if you take out a policy were a NCB has been applied. It is solely your responsibility to provide the proof of NCB. This proof should be either a renewal notice or letter from your previous cover provider, which shows the main driver as the policy holder (yourself) and the NCB declaration. A policy schedule is not the correct form of proof and may be rejected. The NCB can only be used on one policy at a time, and must have been used on a policy within the last 24 months.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          22. UK residents only
          </p>
          <p className="pb-10">
          The products and services described on this website are only available to residents of the United Kingdom insuring within Great Britain, Northern Ireland and the Isle of Man (excluding the Channel Islands). By using our services, you confirm that all applicants on your policy are UK residents only. If any of the policy holders have a change to residential status then it is your responsibility to immediately notify the cover provider.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          23. Intellectual property
          </p>
          <p className="pb-10">
          The copyright material contained in this website and any brands and trademarks included belongs to us or our licensors. You may download, copy or store the content and other downloadable items displayed on the website subject to the condition that the material may only be used for personal purposes. Copying or storing the contents of the website for commercial use is highly prohibited. You must not use such information or copyright material unless you have obtained written permission from us or the owner to do so.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          24. Responsibility for content
          </p>
          <p className="pb-10">
          The Information provided on this website is on an "as is" either end basis and make no representations or warranties of any kind in respect of the contents and disclaim all such representations and warranties. Furthermore, we make no representations or warranties about the completeness, suitability, or accuracy for any purpose of the information and related graphics published in this website. The information contained in this site may contain technical inaccuracies or typographical errors. Howsoever, all our liability arising for any such errors or inaccuracies is expressly excluded to the fullest extent permitted by law. We make no warranty that the website or any linked website is free from viruses, mal ware or other malicious computer problems. You are responsible for ensuring that you use the appropriate Antivirus software. Neither we nor any of our employees or other representatives will be liable for loss or damage arising out of or in connection with the use of this site. This is an inclusive limitation of liability that applies to all damages of any kind, including (without limitation) compensatory, direct, indirect or consequential damages, loss of or damage of property, loss of income, profit or data in claims of third parties. None of the exclusions and limitations under the clause are intended to limit any rights You may have as a consumer under local law or other statutory rights which may not be excluded or in any way to exclude or limit our liability to you for death or personal injury resulting from our negligence or that of our employees or agents.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          25. What will you have to pay us for our services?
          </p>
          <p className="pb-10">
          Details of any fees or charges for amendments related to your policy can be found in your policy documentation from your insurer. Any such fees are payable directly to your cover provider. Any other fees will be discussed or advised of before proceeding with the policy. We provide the non-obligatory quotes for free however, if you decide to go ahead further by using the quotations or its reference, then you will be liable for a separate service charge. When we provide you with quotes our variable service charge is always included with it and you pay us this service charges after you happily sorted out your needs with your provider. However, you will be paying us for searching the quotes for you. If you give us any false or inaccurate information, it may result in cancellation of your policy and our service charge will not be refunded. We do not share the service charge with any of your product or service provider also this is not linked with your policy. However, if you are not satisfied with our standard service or due to any sorts of error (including clerical & typing) you suffered from any inconveniances, we re-imburse the difference or in some cases we refund the full amount of our service charges (subject to eligibility).
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          26. Indication and level of our administration and service charges
          </p>
          <p className="pb-10">
          It is a requirement from Trading Standards that we make you aware of our level of charges therefore, the quotes you receive by SMS or email it reflects with the following text- (Included All Charges) with the total prices. Our service charges are calculated on an hourly charge basis, Senior Service Providing Officer or Management per hour on a time basis of £200 for work done and £150 per hour for all other fee earners. Administrative charges include all letters and e-mails sent out by us and all telephone calls made and received by us will be charged at £25 and £20. If all or part of any bill rendered by this company remains unpaid we may be able to charge interest and our charges are subject to annual review.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          27. Complaints procedure
          </p>
          <p className="pb-10">
          If you have a complaint about our service or your policy, please contact us first by phone and if after talking to us you are still not happy please write to our Service Quality & Assessment Manager at the address shown below. If you prefer to communicate via email or fax we are happy to correspond with you using these methods as well. You may contact us on 0330 113 2448 between 9am to 5pm Monday to Friday, not including Bank Holidays. We will attempt to resolve your complaint within 48 hours. If this does not happen we will discuss the next step with you. If you wish to write please address your letter to: Complaints Dept Of England Insure. Please include details of your name and address, a contact telephone number, your policy or quote number and details of why you are unhappy. If there is insufficient information then we contact you either via telephone or email to ask for further information. Depending on the nature of the complaint it may take up to two weeks for a resolution. During this time you may receive a final response or a letter explaining why we are not yet in a position to resolve your complaint and when we will be contacting you again and if it is found that, due to any sorts of error made from our end (including clerical & typing) you have suffered from any inconveniances, we re-imburse the difference or we refund the full amount of our service charges (subject to eligibility).
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          28. Fraud
          </p>
          <p className="pb-10">
          It is fraudulent if you or anyone acting on your behalf misrepresents or deliberately fails to disclose information or facts at any time whether at application stage or during the term of the policy or at renewal of the policy that would materially impact either the terms and conditions or the issue or renewal decision itself. This also includes were the insurer has been provided with any information or documents which misrepresents or conceals the truth or are stolen. If fraud is suspected then the insurers have the right to cancel or void your policy and any other related policies at any time. The insurers may seek to recover any costs they have incurred and may not return any premium.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          29. Termination
          </p>
          <p className="pb-2">
          We have in our sole discretion the right to issue a warning, temporary suspension, or an indefinite suspension and termination of Your rights to use the website if you:
          </p>
          <p>
            <span className="font-semibold mr-2">29.1</span>
            Breach these terms and conditions and act inconsistently.
          </p>
          <p>
            <span className="font-semibold mr-2">29.2</span>
            At any time violate or attempt to violate any rights of other user of the website or third parties.
          </p>
          <p>
            <span className="font-semibold mr-2">29.3</span>
            Are involved in any fraudulent activity.
          </p>
          <p>
            <span className="font-semibold mr-2">29.4</span>
            Threaten or abuse employees of England Insure either verbally, physically or in any other form.
          </p>
          <p>
            <span className="font-semibold mr-2">29.5</span>
            We reserve the right to refuse any price search works / quotations within our discretion.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
          30. Governing law
          </p>
          <p className="pb-2">
          We have in our sole discretion the right to issue a warning, temporary suspension, or an indefinite suspension and termination of Your rights to use the website if you:
          </p>
          <p>
            <span className="font-bold mr-2">30.1</span>
            These Terms of Use and your access to and use of this Website is governed by and will be interpreted in accordance with the laws of the UK.
          </p>
          <p className="pb-16">
            <span className="font-bold mr-2 pb-12 ">30.2</span>
            Each of you and us submits to the non-exclusive jurisdiction of the courts of the UK in connection with these Terms of Use and your access to and use of this Website.
          </p>
          
        </div>

      </div>
    </div>
  );
};

export default Condition;
