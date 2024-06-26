import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Privacy = () => {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [pathname]);

  return (
    <div className="bg-zinc-100">
      <h1 className="lg:text-4xl text-2xl pt-5 pb-3 font-bold text-center">
        PRIVACY POLICY
      </h1>
      <div className="border-2 border-red-600 w-[15%] mx-auto mb-8"></div>
      <div className="lg:w-[75%] w-[90%] mx-auto">
        <div>
          <p className="text-lg font-semibold">1. Data Controller</p>
          <p>
            The data controller is England Insure - we are registered under
            the Data Protection Act & GDPR 2018 we have given all appropriate
            notifications to the Information Commissioner. In this Privacy
            Policy the terms "We", "Us" and "Our" refers to England Insure
            and "You" and "Your" refers to the individual(s) who wishes to use
            the website.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mt-4">2. Your Rights</p>
          <p>
            We are registered under the Data Protection Act & GDPR 2018 and
            therefore comply with the laws in the United Kingdom and take all
            reasonable steps to prevent any unauthorised access to your personal
            data.We have included changes to address the new standards
            introduced by the General Data Protection Regulation (GDPR 2018),
            including additional details about the information we collect and
            how we use that information. We've also explained your choices and
            the control you have over your information.You have the right to
            access the information we hold about you.You also have the right to
            request that we cease processing your personal data for marketing
            purposes at any time. If any of the information we hold is
            inaccurate we will promptly make any necessary amendments and
            confirm the change of data with you. You are also entitled to ask us
            to remove personal information from our records. If you wish to do
            these please write to the Data Protection Officer on
            Info@englandinsure.com. For data protection and security purposes
            please provide your full name, address and date of birth when
            contacting us. We reserve the right to amend or modify our privacy
            policy at any time in response to changes in permissible data
            protection and privacy legislation. We also reserve the right to
            transfer our rights under this Agreement at any time.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            3. Claims Handling, Administration and Renewal
          </p>
          <p>
            Any relevant information you submit with your application may be
            used for the purpose of administration, renewal and claims handling
            by the insurer, re-insurers, its agents and your intermediary. When
            assessing your application the insurers may undertake checks against
            publicly available information such as County Court Judgments,
            Electoral Register, bankruptcy or repossession information. Your
            information may also be shared with other insurers either directly
            or via those acting for the insurer such as Loss Adjusters or
            investigators.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">4. Credit Searches</p>
          <p>
            When considering your application or renewal, the insurer or credit
            provider may search files made available to them by Credit Reference
            Agencies. Once you authorised us to search in all comparison
            websites on your behalf based on the information provided by you
            after agreeing and following our websites links & forms for Car,
            Van, Home, Business quotes as well accident / claims details, they
            (comparison website providers, authorised brokers or underwriters)
            may keep a record of that search. The insurer or credit provider may
            also pass to Credit Reference Agency information they hold about you
            and your payment record with them. Credit Reference Agencies also
            share information with other organisations; permitting applications
            for financial products to be assessed or to assist the tracing of
            debtors and to prevent fraud.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            5. Market Research and Marketing
          </p>
          <p>
          England Insure Price Searcher, part of the England Insure, may use your
            information to keep you updated by post, telephone, email or other
            means of products and services which may be of interest to you. We
            may also contact you to conduct further market research. We may
            still contact you after your quotes expires. If you do not wish your
            information to be used for these purposes please notify us in
            writing.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mt-4">
            6. Overseas Transfer of Data
          </p>
          <p>
            We and other companies processing your data for the purposes
            mentioned above may occasionally need to undertake some of the
            processing in countries outside of the European Economic Area, they
            may not have laws to protect your personal data, however in all
            cases we will ensure that it is kept securely and only used for the
            given purpose. Details of the companies and countries involved can
            be provided upon your request.
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
            to your browser's 'help' facility for guidance on how to do this. 
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
          England Insure Price Searcher' part of England Insure have right to issue a
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

export default Privacy;
