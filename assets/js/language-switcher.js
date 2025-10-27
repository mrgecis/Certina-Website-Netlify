// Übersetzungen für alle Seiten
const translations = {
    en: {

        // Imprint Page English Translations
        imprint: {
            title: "Imprint",
            subtitle: "Legal information and contact details",
            company: {
                header: "Information according to § 5 TMG:",
                main_office: "Main Office",
                munich_office: "Munich Office",
                represented_by: "Represented by:",
                contact_info: "Contact Information",
                phone: "Phone:",
                fax: "Fax:",
                email: "Email:",
                register_entry: "Register Entry",
                register_text: "Entry in the Munich commercial register",
                registration_number: "Registration number:"
            },
            disclaimer: {
                title: "Disclaimer",
                liability_contents_title: "Liability for contents",
                liability_contents_p1: "As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG we are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.",
                liability_contents_p2: "Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of any such violations, we will remove the content in question immediately.",
                liability_links_title: "Liability for links",
                liability_links_p1: "Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites.",
                liability_links_p2: "The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.",
                copyright_title: "Copyright",
                copyright_p1: "The contents and works on these pages created by the site operators are subject to German copyright law. The duplication, editing, distribution and any kind of utilization outside the limits of copyright law require the written consent of the respective author or creator.",
                copyright_p2: "Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately."
            }
        },

        // Privacy Page Translations
        privacy_title: "Privacy Policy",
        privacy_subtitle: "Data protection and your privacy are important to us",
        privacy_intro: "Thank you for your interest in our website. The protection of your personal data is very important to us. In the following, you will find information on how we handle your data that is collected through your use of our website. The internet offer is aligned with the legal data protection requirements in Germany and the European Union (in particular the Federal Data Protection Act (\"BDSG\") and the EU General Data Protection Regulation (\"EU-DSGVO\").",
        
        privacy_responsible_title: "Responsible party and its data protection officer",
        privacy_responsible_intro: "The responsible party within the meaning of the EU-DSGVO and other national data protection laws of the Member States as well as other data protection provisions is:",
        privacy_responsible_company: "CERTINA GROUP",
        privacy_responsible_address: "Robert-Koch-Straße 5a<br>82031 Grünwald<br>Munich Commercial Register, HRB 132997<br><br><strong>Tel:</strong> +49 89 210896-0<br><strong>Fax:</strong> +49 89 210896-50<br><strong>Email:</strong> info@certina-group.com<br><br><strong>Managing Director:</strong> Dr. Hans Wehrmann",
        privacy_responsible_note: "If you have any questions regarding the processing of your personal data, you can contact our data protection officer, who will also be happy to help with requests for information, suggestions or complaints.",
        
        privacy_personal_data_title: "Personal data",
        privacy_personal_data_text: "Personal data is individual information about personal or factual circumstances of a specific or identifiable natural person. This includes, for example, your name, address, date of birth, e-mail address and payment data, but also your IP address. We describe below how we process your personal data.",
        
        privacy_website_visit_title: "Visit of our website and creation of so-called log files",
        privacy_website_description: "Description and scope of data processing:",
        privacy_website_intro: "When you visit our website, our system automatically collects data and information that your Internet browser transmits to us. The following data is collected and processed in this context:",
        privacy_website_list: "the current IP address of the Internet connection you are using;|if you visit our website via a link, the page from which you visit us;|the web pages you visit within our website;|the date and time of your visit;|the operating system you use, the browser name (e.g. Internet Explorer, Firefox, etc.) and the browser version;|the name of your Internet access provider;|the amount of data transferred.",
        privacy_website_necessity: "The collection of data for the provision of the website and the storage of the data in so-called log files is absolutely necessary for the operation of the website.",
        privacy_legal_basis: "Legal basis for data processing:",
        privacy_legal_basis_text: "The legal basis for the temporary storage of the data and the log files is Art. 6 para. 1 lit. f EU-DSGVO.",
        privacy_purpose: "Purpose of data processing:",
        privacy_purpose_text: "The temporary storage of the IP address by the system is necessary to enable delivery of the website to the user's computer. For this purpose, the user's IP address must remain stored for the duration of the session. The purpose of the storage in log files is to ensure the functionality and stability of the website. In addition, we use the data for statistical purposes, to optimize the website and to ensure the security of our information technology systems. These purposes are also our legitimate interest in data processing according to Art. 6 para. 1 lit. f EU-DSGVO.",
        privacy_duration: "Duration of storage:",
        privacy_duration_text: "The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected, unless contractual or legal obligations prevent deletion.",
        
        privacy_contact_title: "Contact form and e-mail contact",
        privacy_contact_description: "Description and scope of data processing:",
        privacy_contact_text1: "When you send a contact request via our contact form, the data entered in the input mask is transmitted to us and stored. For the processing of the data, your consent is obtained during the sending process and reference is made to this privacy policy.",
        privacy_contact_text2: "The provision of personal data by you is neither required by law nor by contract, nor is it necessary for the conclusion of a contract. You are not obliged to provide us with personal data. Failure to provide personal data, insofar as this is mandatory, means that it is not possible to contact you via the contact form or call you back.",
        privacy_contact_text3: "Alternatively, it is possible to contact us via the e-mail addresses provided. In this case, your personal data transmitted with the e-mail will be stored.",
        privacy_contact_text4: "Your data will not be passed on to third parties.",
        privacy_contact_legal: "The legal basis for the processing of data transmitted via the contact form and the legal basis for the processing of data transmitted in the course of sending an e-mail is Art. 6 (1) lit. f EU-DSGVO. Our legitimate interest is to respond to the contact request of the sender. If the contact is aimed at concluding a contract, the additional legal basis for the processing is Art. 6 (1) lit. b EU-DSGVO.",
        privacy_contact_purpose: "The processing of personal data from the input mask serves us solely to process the contact request. The other personal data processed during the submission process serve to prevent misuse of the contact form and to ensure the security of our information technology systems.",
        privacy_contact_duration: "The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected, unless contractual or legal obligations prevent deletion. For the personal data from the input mask of the contact form and those sent by e-mail, this is the case when the respective conversation with you has ended, unless contractual or legal obligations prevent deletion. The conversation is terminated when the circumstances indicate that the matter in question has been conclusively resolved.",
        
        privacy_no_obligation_title: "No obligation to provide personal data",
        privacy_no_obligation_text: "The conclusion of contracts with us is not dependent on you providing us with personal data in advance. As a customer, you are not under any legal or contractual obligation to provide us with your personal data; however, we may only be able to provide certain services to a limited extent or not at all if you do not provide the necessary data. If this should exceptionally be the case within the scope of the products offered by us, you will be informed of this separately.",
        
        privacy_automated_title: "Automated decision-making including profiling",
        privacy_automated_text: "No automated decision-making including profiling takes place.",
        
        privacy_transmission_title: "Transmission of personal data",
        privacy_transmission_text: "With the exception of the circumstances described in this data protection declaration, we will not pass on your data to third parties unless you have previously given your express consent to a transfer or the transfer is required or permitted by law. Excluded from this are service partners who are required to process the contractual relationship and who have been commissioned by us to process personal data in accordance with our instructions as part of a contract processing agreement. We will neither sell your data to third parties nor otherwise pass it on to third parties for advertising purposes.",
        
        privacy_cookies_title: "Use of cookies",
        privacy_cookies_intro1: "Our website uses cookies. Cookies are small text files that are stored locally in the cache of your Internet browser. The cookies allow the recognition of the Internet browser. Cookies allow us to improve the convenience and quality of our services by, for example, storing user preferences.",
        privacy_cookies_intro2: "In addition, cookies are used to personalize content and ads, to offer social media features, and to analyze traffic to our website. We also share information about your use of our website with our social media, advertising and analytics partners. Our partners may combine this information with other data that you have provided to them or that they have collected as part of your use of the Services.",
        privacy_cookies_intro3: "Cookies do not harm your computer and do not contain viruses.",
        privacy_cookies_settings_title: "Cookie Settings in Browsers",
        privacy_cookies_settings_text1: "It is also possible to use our website without cookies. You can deactivate the storage of cookies in your Internet browser, limit them to certain websites or set your Internet browser to notify you before a cookie is stored. You can delete the cookies from the hard drive of your computer at any time using the privacy functions of your Internet browser.",
        privacy_cookies_settings_text2: "The following links show you how to adjust the settings in popular browsers:",
        privacy_cookies_note: "<strong>Note:</strong> Blocking cookies may impair the functionality of this website.",
        privacy_cookies_legal1: "If personal data is processed using technically necessary cookies, the legal basis is Art. 6 (1) lit. f EU-DSGVO.",
        privacy_cookies_legal2: "Any use of cookies that is not strictly technically necessary constitutes data processing that is only permitted with your explicit and active consent. The legal basis is then Art. 6 para. 1 p. 1 lit. a DS-GVO. This applies in particular to the use of advertising, targeting or sharing cookies. In addition, we will only disclose your personal data processed by cookies to third parties if you have given your express consent to do so in accordance with Art. 6 (1) p. 1 lit. a DS-GVO.",
        privacy_cookies_purpose1: "The purpose of using technically necessary cookies is to simplify the use of websites for users. Some functions of our website cannot be offered without the use of cookies. For these, it is necessary that the browser is recognized even after a page change. In these purposes also lies our legitimate interest in the processing of personal data according to Art. 6 para. 1 lit. f EU-DSGVO.",
        privacy_cookies_purpose2: "We require cookies for the following applications: session handling (ensuring that the entries on the individual form pages are available until the end process).",
        privacy_cookies_purpose3: "The user data collected through technically necessary cookies are not used to create user profiles.",
        privacy_cookies_duration: "Cookies are stored on the user's computer and transmitted by it to our website. The described technically necessary cookies are usually deleted when your browser session expires. In addition, you can deactivate or restrict the transmission of cookies by changing the settings in your Internet browser. Cookies that have already been stored can be deleted at any time. This can also be done automatically.",
        
        privacy_analytics_title: "Google Analytics",
        privacy_analytics_text1: "We use Google Analytics, a web analytics service provided by Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (\"Google\")) on our website. Google Analytics uses cookies that are stored on your computer and thereby enable an analysis of your use of the website.",
        privacy_analytics_text2: "The information generated by these cookies, for example time, place and frequency of your website visit including your IP address, is transmitted to Google in the USA and stored there. We use Google Analytics with the addition \"_gat._anonymizeIp\" on our website. In this case, your IP address will already be shortened by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area and thereby anonymized.",
        privacy_analytics_text3: "Google will use this information for the purpose of evaluating your use of our website, compiling reports on website activity for us and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf.",
        privacy_analytics_optout_title: "Google Analytics Opt-out",
        privacy_analytics_optout_text: "Google offers a deactivation add-on for the most common browsers, which gives you more control over what data is collected by Google about the website you visit. The add-on tells the JavaScript (ga.js) of Google Analytics that no information about the website visit should be transmitted to Google Analytics.",
        privacy_analytics_optout_link: "Install Google Analytics Browser Add-on",
        privacy_analytics_deletion: "The data sent by us and linked to cookies, user IDs (e.g. user ID) or advertising IDs are automatically deleted after 38 months. Data whose retention period has been reached is automatically deleted once a month. For more information on terms of use and data protection, please visit Google's Privacy Policy.",
        
        privacy_wordpress_title: "WordPress",
        privacy_wordpress_text1: "We use the WordPress tool Stats on this website to statistically evaluate visitor access. The provider is Automattic Inc, 60 29th Street #343, San Francisco, CA 94110-4929, USA (\"WordPress\").",
        privacy_wordpress_text2: "WordPress uses cookies that are stored on your computer and allow an analysis of the use of the website. The information generated by the cookies about the use of our website is stored on servers in the USA. Your IP address is anonymized after processing and before storage.",
        privacy_wordpress_text3: "You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of our website may be limited.",
        privacy_wordpress_optout: "You can object to the collection and use of your data for the future by setting an opt-out cookie in your browser by clicking on this link: Quantcast Opt-out.",
        privacy_wordpress_note: "If you delete the cookies on your computer, you must set the opt-out cookie again.",
        
        privacy_security_title: "Data security",
        privacy_security_text1: "Within the website visit, we use the widespread TLS procedure (Transport Layer Security) in connection with the highest encryption level supported by your browser. As a rule, this is a 256-bit encryption. If your browser does not support 256-bit encryption, we use 128-bit v3 technology instead. You can tell whether an individual page of our website is encrypted by the closed key or lock symbol in the lower status bar or address bar of your browser.",
        privacy_security_text2: "We also use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction or against unauthorized access by third parties. Our security measures are continuously improved in line with technological developments.",
        
        privacy_rights_title: "Rights of the data subject",
        privacy_rights_intro: "If personal data is processed by you, you are a data subject within the meaning of the EU GDPR and you are entitled to the following rights vis-à-vis Certina Holding AG:",
        privacy_rights_information_title: "Right to information:",
        privacy_rights_information_text: "Pursuant to Article 15 of the EU Data Protection Regulation, you have the right to request information about your personal data processed by us; in particular, you can request information about the processing purposes, the category of personal data, the categories of recipients to whom your data has been or will be disclosed, the planned storage period, the existence of a right to rectification, erasure, restriction of processing or objection, the existence of a right of complaint, the origin of your data if it has not been collected by us, and the existence of automated decision-making, including profiling, and, if applicable, meaningful information about its details.",
        privacy_rights_rectification_title: "Right to rectification:",
        privacy_rights_rectification_text: "Pursuant to Art. 16 EU-DSGVO, you have the right to request the correction of inaccurate or incomplete personal data stored by us without undue delay.",
        privacy_rights_erasure_title: "Right to erasure:",
        privacy_rights_erasure_text: "Pursuant to Art. 17 EU-DSGVO, you have the right to request the erasure of your personal data stored by us, unless the processing is necessary for the exercise of the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest or for the assertion, exercise or defense of legal claims.",
        privacy_rights_restriction_title: "Right to restriction:",
        privacy_rights_restriction_text: "Pursuant to Art. 18 EU-DSGVO, you have the right to request the restriction of the processing of your personal data, insofar as the accuracy of the data is disputed by you, the processing is unlawful, but you object to its erasure and we no longer require the data, but you need it for the assertion, exercise or defense of legal claims or you have objected to the processing pursuant to Art. 21 EU-DSGVO.",
        privacy_rights_portability_title: "Right to data portability:",
        privacy_rights_portability_text: "Pursuant to Art. 20 EU-DSGVO, you have the right to receive your personal data that you have provided to us in a structured, common and machine-readable format or to request that it be transferred to another controller.",
        privacy_rights_complaint_title: "Right of complaint:",
        privacy_rights_complaint_text: "In accordance with Art. 77 EU-DSGVO, you have the right to complain to a supervisory authority. As a rule, you can contact the supervisory authority of your usual place of residence or workplace or our registered office for this purpose. In the present case, the competent supervisory authority is:",
        privacy_rights_complaint_authority: "<strong>The Bavarian State Commissioner for Data Protection (BayLfD)</strong><br>Wagmüllerstraße 18, 80538 Munich<br>P.O. Box 22 12 19, 80502 Munich<br>Tel.: 089 212672-0<br>Fax: 089 212672-50<br>Email: poststelle@datenschutz-bayern.de",
        privacy_rights_revocation_title: "Right of revocation:",
        privacy_rights_revocation_text: "You have the right to revoke your declaration of consent under data protection law at any time. The revocation of consent does not affect the lawfulness of the processing carried out on the basis of the consent until the revocation.",
        privacy_rights_objection_title: "Right to object:",
        privacy_rights_objection_text1: "You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is carried out on the basis of Article 6(1)(e) or (f) EU GDPR.",
        privacy_rights_objection_text2: "If the personal data concerning you is processed for the purpose of direct marketing, you have the right to object at any time to the processing of personal data concerning you for the purpose of such marketing.",
        
        privacy_changes_title: "Change of our data protection regulations",
        privacy_changes_text: "We reserve the right to adapt this privacy policy so that it always complies with the current legal requirements or to implement changes to our services in the privacy policy. For your renewed visit to our website, the current privacy policy will apply in each case.",
        privacy_status: "<strong>Status:</strong> May 2021",

        // Header Navigation
        nav_home: "Home",
        nav_portfolio: "Portfolio", 
        nav_team: "Team",
        nav_academy: "CERTINA Academy",
        nav_sustainability: "Sustainability",
        nav_career: "Career", // Diese Zeile hinzufügen
        
        // Team Page
        managing_partners: "Managing Partners",
        ma_team: "M&A and Corporate Development Team",
        team_hero_title: "Our Team",
        team_hero_subtitle: "Excellence through Expertise",
        team_hero_description: "Meet the experienced professionals who drive our success through strategic vision and operational excellence.",
        
// ADD THESE CAREER TRANSLATIONS TO THE EN SECTION
        career_hero_title: "Career",
        career_hero_subtitle: "Shape the Future with Us",
        career_hero_intro: "Be part of a dynamic team that drives operational excellence and sustainable growth across diverse industries. We're looking for passionate professionals who share our commitment to creating lasting value.",
        career_section_title: "Current Opportunities",
        career_no_jobs_heading: "No Open Positions Currently",
        career_no_jobs_text: "We're always interested in hearing from talented professionals. Please feel free to send us your application for future opportunities.",
        career_contact_heading: "Interested in Joining Us?",
        career_contact_text: "Even if there are no current openings that match your profile, we'd love to hear from you. Send your application to our HR team.",
        career_job_description: "Job Description",
        career_job_responsibilities: "Key Responsibilities",
        career_job_requirements: "Requirements",
        career_job_benefits: "What We Offer",
        career_apply_now: "Apply Now",
        career_close: "Close",

        // Sustainability Page
        sustainability_title: "Sustainability",
        sustainability_quote: "The ESG principles are the guiding principles of our daily actions.",
        sustainability_author: "András v. Kontz, Managing Partner Goods & Services",
        sustainability_values_title: "We Generate Values for Generations",
        sustainability_values_text1: "We believe that economic success and sustainability are not contradictory but complement each other positively. We are convinced that sustainable business models outperform in the long term.",
        sustainability_values_text2: "Since foundation, we mind our responsibility for employees, society, and the environment, and create sustainable value for generations to come.",
        esg_title: "Our ESG Principles",
        esg_subtitle: "Environmental, Social, and Governance considerations drive our approach to business",
        tab_environmental: "Environmental",
        tab_social: "Social", 
        tab_governance: "Governance",
        env_title: "Environmental Responsibility",
        env_intro: "We are committed to minimizing our environmental footprint across all operations. Our environmental initiatives focus on:",
        env_item1: "Reducing CO₂ emissions throughout our operations",
        env_item2: "Developing energy-efficient products and solutions",
        env_item3: "Implementing sustainable manufacturing processes",
        env_item4: "Advancing circular economy principles",
        env_item5: "Investing in renewable energy sources",
        env_conclusion: "All Certina Group companies are encouraged to set environmental goals and regularly measure their progress against concrete targets.",
        social_title: "Social Responsibility",
        social_intro: "Our commitment to social responsibility extends to our employees, communities, and society at large:",
        social_item1: "Fostering a diverse and inclusive workplace",
        social_item2: "Providing comprehensive training and development opportunities",
        social_item3: "Ensuring fair and equitable compensation",
        social_item4: "Supporting the communities where we operate",
        social_item5: "Upholding human rights throughout our value chain",
        social_conclusion: "We believe that investing in people creates long-term value for our business and society.",
        governance_title: "Governance",
        governance_intro: "Strong governance principles guide our decision-making and operations:",
        governance_item1: "Maintaining ethical business practices and transparency",
        governance_item2: "Implementing robust compliance programs",
        governance_item3: "Conducting regular risk assessments",
        governance_item4: "Ensuring responsible supply chain management",
        governance_item5: "Integrating ESG considerations into strategic planning",
        governance_conclusion: "Our governance framework ensures accountability and drives sustainable growth across all our operations.",
        portfolio_title: "Sustainability in Action",
        portfolio_subtitle: "Selected ESG achievements from our portfolio companies",
        rebhan_desc: "A leading manufacturer of innovative, high-quality plastic packaging with a focus on environmentally friendly products. REBHAN's Green Line is a sustainable approach to packaging based on the 5R principles: Reduce, Recycle, Reuse, Renew and Refill. The Colonna PET bottle saves 60% weight compared to a conventional bottle.",
        horn_desc: "Specializes in design, manufacture and assembly of melting furnaces and special machinery for glass production. HORN is the world's leading manufacturer of hybrid furnaces, which incorporate electrical energy in addition to fossil fuels and thus contribute significantly to reducing carbon dioxide emissions.",
        ust_desc: "Europe's leading manufacturer of high-quality hairdressing scissors. By switching production from traditional hot forging to the cold forging process used in the automotive industry, UST was able to significantly reduce energy requirements in production and save raw materials.",
        pruss_desc: "Since 1889, Pruss has been developing valves for various industries. Together with international research institutes, Pruss develops highly efficient turbine bypass valves for high-temperature CO₂ applications, enabling previously unused waste heat from industrial applications to be converted into electricity.",
        coi_desc: "A leading German provider in document and workflow management as well as document archiving. With its products, COI actively promotes the \"paperless office\" and enables remote work, significantly reducing paper consumption and commute-related emissions.",
        aft_desc: "Specializes in conveyor and automation technologies for the automotive and logistics industries. AFT is certified with ISO 50001:2018 (energy management system), continuously optimizing energy efficiency – including procurement and energy consumption throughout its operations.",
        downloads_title: "Downloads",
        downloads_subtitle: "Access our key documents and policies.",
        download_human_rights: "Declaration of Principles Human Rights",
        download_business_code: "Business Partner Code",
        download_whistleblower: "Whistleblower System",
        
        // Academy Page
        academy_hero_title: "CERTINA Academy",
        academy_hero_subtitle: "Empowering Knowledge and Strategic Growth",
        academy_hero_description: "An internal initiative aimed at building and promoting knowledge and competencies within the company through partnerships with experts across various sectors and industries.",
        
        academy_about_title: "Building Excellence Through Knowledge",
        academy_about_p1: "The CERTINA Academy is an internal initiative of the CERTINA GROUP aimed at building and promoting knowledge and competencies within the company. It brings together partners from various sectors and industries to support the employees and businesses of the CERTINA GROUP in different issues and projects.",
        academy_about_p2: "A key component of the Academy is the CERTINA Growth Partners, who share their knowledge through coaching and training or by directly contributing to projects, such as M&A transactions or operational turnaround measures, to support the strategic development of the group.",
        academy_about_p3: "Thus, the Academy contributes to the continuous education and development of all stakeholders and supports the management of the CERTINA GROUP in achieving its corporate goals.",
        
        academy_partners_title: "Our Growth Partners",
        academy_partners_subtitle: "Meet the experts who contribute their knowledge and expertise to our Academy",
        
        // Partner fields
        partner_finance_legal: "Finance and Legal",
        partner_ai_data: "Artificial Intelligence and Data Analytics",
        partner_communication: "Communication and Negotiation",
        partner_rd: "Research & Development",
        
        // Homepage - Hero Section
        hero_title: "The Sustainable Investor",
        hero_subtitle: "Operational · Visionary · Constant", 
        hero_text: "The CERTINA GROUP is a global investment holding company based in Germany, focusing on special situations and turnaround investments with a long-term entrepreneurial perspective.",
        hero_btn_criteria: "Investment Criteria",
        hero_btn_portfolio: "Portfolio",
        
        // Homepage - About Section
        about_title: "About the CERTINA GROUP",
        about_subtitle: "Long-term oriented industrial holding with a focus on special situations and sustainable value creation.",
        about_kpi_headline: "Our Impact in Numbers",
        about_longterm_partner: "Long-term Partner",
        about_longterm_text: "Our buy-and-build strategy focuses on sustainable growth and operational excellence, not on quick exits.",
        about_chart_subtitle: "Years our companies have been in our portfolio",
        about_quote_text: '"Our sweet spot is business units or subsidiaries of corporate groups with operational improvement potential, whose sale is of strategic value for the seller and the company."',
        about_special_situations: "Special Situations",
        about_special_situations_text: "We specialize in carve-outs, turnarounds, succession situations, and complex restructurings where we can create significant operational added value.",
        
        // KPI Cards
        kpi_experience: "Experience",
        kpi_years_industry: "Years in the industry",
        kpi_revenue: "Revenue", 
        kpi_annually: "Annually consolidated",
        kpi_companies: "Companies",
        kpi_portfolio_companies: "Portfolio companies",
        kpi_employees: "Employees",
        kpi_worldwide: "Worldwide",
        kpi_countries: "Countries",
        kpi_global_presence: "Global presence",
        kpi_continents: "Continents",
        kpi_worldwide_reach: "Worldwide reach",
        
        // Investment Criteria
        criteria_title: "Investment Criteria",
        criteria_subtitle: "We focus on companies with operational improvement potential and long-term growth prospects.",
        criteria_revenue: "Revenue",
        criteria_revenue_range: "Target range",
        criteria_revenue_value: "€ 50 - 500 million",
        criteria_situations: "Situations", 
        criteria_situations_type: "Special situations",
        criteria_situations_value: "Carve-outs/Spin-offs, Turnarounds, Restructuring, Succession",
        criteria_region: "Region",
        criteria_region_range: "Global presence",
        criteria_region_value: "Worldwide with focus on Europe",
        criteria_shareholdings: "Shareholdings",
        criteria_shareholdings_type: "Majority control",
        criteria_shareholdings_value: "Majority, ideally > 75%",
        criteria_equity: "Equity",
        criteria_equity_size: "Investment size", 
        criteria_equity_value: "Up to € 20 million per investment",
        criteria_profitability: "Profitability",
        criteria_profitability_focus: "Turnaround focus",
        criteria_profitability_value: "Loss-making up to approx. 5% EBITDA",
        
        // Industry Experience
        industry_title: "Our Industry Experience",
        industry_subtitle: "We have deep industry knowledge in key sectors such as manufacturing, technology, packaging, automotive, and consumer goods & services.",
        industry_industrials: "Industrials",
        industry_industrials_text: "Manufacturing excellence with sustainable processes and innovative technology solutions.",
        industry_packaging: "Packaging",
        industry_packaging_text: "Environmentally friendly packaging solutions focusing on circular economy and resource efficiency.",
        industry_automotive: "Automotive", 
        industry_automotive_text: "Future-oriented mobility components and systems for traditional and electric vehicles.",
        industry_goods: "Goods & Services",
        industry_goods_text: "Customer-centric solutions across various consumer and B2B market segments.",
        industry_software: "Software",
        industry_software_text: "Digital transformation tools and enterprise software solutions for Industry 4.0.",
        
        // Approach Section
        approach_title: "Our Approach",
        approach_subtitle: "We provide comprehensive support throughout the entire turnaround and restructuring process.",
        approach_restructuring: "Operational Restructuring",
        approach_restructuring_text: "We provide active portfolio support by combining management expertise, industry knowledge, and global networks.",
        approach_investment: "Long-term Investment",
        approach_investment_text: "With our buy, build, and hold approach, we invest in the future and prioritize the sustainable long-term development of our portfolio companies.",
        approach_repositioning: "Strategic Repositioning", 
        approach_repositioning_text: "We redefine business models, develop new market strategies, and identify growth opportunities to ensure long-term sustainability and value creation.",
        
        // News Section
        news_title: "News",
        news_subtitle: "Latest updates and developments from the Certina Group and our portfolio companies.",
        
        // Portfolio Page - ADD THESE LINES
        portfolio_hero_title: "Our Portfolio",
        portfolio_hero_subtitle: "Strategic Investments in Operational Excellence",
        portfolio_hero_description: "Discover our diverse portfolio of companies across various industries, where we create sustainable value through operational improvements and strategic guidance.",
        
        // Team Member Descriptions - ADD THESE AT THE END OF THE EN SECTION
        santamaria_description: "Giovanni Santamaria is Managing Partner at the CERTINA GROUP. He is responsible for the IT division as well as all investments in Italy. After holding various management positions at PwC, GE Capital and Autoscout24, where he held the position of CFO, Giovanni Santamaria has been part of the management team of CERTINA GROUP since 2004. During his professional career, he has been responsible for numerous corporate transactions in Italy, Germany, Norway, Sweden, Switzerland and the USA. Giovanni Santamaria holds a degree in Economics and Finance from the Università Cattolica Milan and an MBA from INSEAD.",
        
        brockmann_description: "Maik Brockmann is Managing Partner at CERTINA GROUP. Maik has gained experience with two investor groups since 1998 and has been part of over 30 transactions in the SME and carve-out sectors. From 1998 to 2006, he worked for Certina Holding AG in Munich and was responsible for the Operations division, and he was significantly involved in the transformation processes in the shareholdings within the Certina Group. From 2006-2010, Maik was Vice President Operations at the listed Arques Industries AG, where he was subsequently appointed to the Executive Board. In this role, he transformed Arques Industrie AG into Gigaset AG as Chairman of the Board of Management and Chief Sales Officer and became one of the youngest Tec DAX board members. Maik is currently responsible for the realignment of the companies as Managing Partner.",
        
        brungs_description: "Dr. Stefan Brungs is Managing Partner at the CERTINA GROUP and is responsible for the Automotive division. Stefan Brungs brings more than 30 years of relevant management experience to his work at the CERTINA GROUP, including 23 years in the VW Group. As a member of the board of directors at Bentley and Bugatti, he was responsible for sales and marketing and successfully expanded the brands' global presence and sales. Prior to joining CERTINA, he successfully led a KKR portfolio company in Switzerland as CEO. Stefan Brungs began his career at the Boston Consulting Group, where he worked for seven years. Stefan Brungs studied business administration at Goethe University in Frankfurt am Main and received his doctorate from Saarland University. He also holds an MBA from California State University, USA.",
        
        eiblmeier_description: "Tobias Eiblmeier is Head of M&A and Corporate Development at the CERTINA GROUP and is responsible for the group's national and international investment activities. Tobias has more than 10 years of experience in the private equity industry in the areas of M&A as well as turnaround and transformation management. Prior to joining the CERTINA GROUP, he worked for many years at a listed private equity company with a focus on special situations, where he was fully responsible for the global buy-side and sell-side activities. As an active investor, he has also supported numerous medium-sized companies from various industries in their transformation. Tobias holds a degree in Business Administration from the Munich University of Applied Sciences and a Master's degree from the Munich University of Applied Sciences.",
        
        schmidt_description: "Holger J. Schmidt is Managing Partner at the CERTINA GROUP. He is responsible for the Goods & Services division. Holger J. Schmidt has more than 25 years of management and restructuring experience in the retail and fashion industry. He has held management positions at HUGO BOSS, Toni Gard, ESCADA and Michael Kors. At Michael Kors, he successfully introduced and built up the brand in Germany. Before joining CERTINA GROUP in 2018, he was CEO of Giorgio Armani's European business for seven years.",
        
        kontz_description: "András v. Kontz is Managing Partner at the CERTINA GROUP and responsible for the Goods & Services division. András has many years of experience in the field of M&A and in the transformation of medium-sized companies. Before joining the CERTINA GROUP, he worked for international private equity companies and financiers with a focus on special situations. András v. Kontz holds a degree in International Management from ESCP Business School and a Master's degree from Cass Business School, London.",
        
        wehrmann_description: "Hans Wehrmann is the founder, chairman of the board and majority shareholder of the CERTINA GROUP. Hans began his professional career in restructuring at the Boston Consulting Group. In 1998, he made his first company acquisition, laying the foundation for the CERTINA GROUP. Since its foundation, he has carried out more than 65 successful transactions and turnarounds and built the CERTINA GROUP into a solid and sustainable industrial holding company with an international orientation. Hans Wehrmann holds a PhD in economics from the Université de Fribourg and an MBA from INSEAD.",
        
        wondra_description: "Wolfgang Wondra is Managing Partner at the CERTINA GROUP. He is responsible for the Packaging Solutions division. Wolfgang began his professional career at the BMW Group in the United States. After holding further management positions in investment banking and private equity, he joined the CERTINA GROUP in 2010. At CERTINA, he is responsible for packaging solutions, focusing mainly on packaging in the consumer goods sector. In addition, he has many years of experience in mechanical and plant engineering as well as in the paper industry. Wolfgang Wondra holds a degree in mechanical engineering from Munich University of Applied Sciences and an MBA from Wake Forest University, USA.",
        
        // Add Portfolio translations to the translations object
        portfolio: {
            hero: {
                subtitle: "Strategic Investments",
                title: "Our Portfolio",
                description: "Innovative companies across various industries, driving operational excellence and sustainable growth through strategic partnerships."
            },
            filter: {
                all: "All Companies",
                industrials: "Industrials",
                packaging: "Packaging",
                automotive: "Automotive",
                "goods-services": "Goods & Services",
                software: "Software"
            },
            stats: {
                companies: "Portfolio Companies",
                countries: "Countries",
                employees: "Employees",
                revenue: "Annual Revenue"
            },
            modal: {
                "acquisition-year": "Year of Acquisition",
                "annual-revenue": "Annual Revenue",
                fte: "FTE",
                countries: "Countries",
                headquarter: "Headquarter",
                seller: "Seller",
                website: "Website",
                "visit-website": "Visit Website"
            },
            companies: {
                // Individual company descriptions
                hannemann: "Hannemann is a premium German manufacturer of specialized industrial valves, primarily serving power plants and process industries such as oil & gas, petrochemicals, and steel production. The company is known for engineering custom valve solutions capable of operating at extreme temperatures and pressures. With decades of experience, Hannemann supports its clients with tailored products, maintenance services, and technical expertise, ensuring safe and efficient flow control in critical applications.",
                horn: "Horn Glass Industries AG is a global leader in designing and building glass melting furnaces and related technologies for the glass industry. Headquartered in Plößberg, Germany, Horn offers engineering, project management, and installation of furnace systems for flat glass, container glass, and specialty glass production. The company’s expertise covers the full project lifecycle—from feasibility studies and furnace construction to maintenance and modernization. Horn serves major glass manufacturers worldwide, supporting innovation in energy efficiency and process automation.",
                pruss: "Pruss, based in Hanover, Germany, specializes in manufacturing high-performance control valves for the energy and process industries. The company’s products are designed to control flow, quantity, and pressure in demanding applications such as power plants and chemical processing. Pruss is recognized for its engineering depth and the ability to deliver customized valve solutions to clients such as Siemens, Alstom, and Babcock. Its control valves are essential for the safe and efficient operation of large-scale industrial systems.",
                hermannkoch: "Hermann Koch, also known as HK Cosmetic Packaging, is a highly specialized producer of injection-molded plastic jars, sticks, and packaging systems for the cosmetics, pharmaceutical, and chemical industries. Located near Coburg, Germany, and with a heritage of more than 100 years, HK combines traditional craftsmanship with modern production technology. The company offers a wide variety of shapes, finishes, and decorations, delivering both standard and fully customized packaging solutions for international brands.",
                qualiform: "Qualiform is a renowned French manufacturer of high-quality plastic packaging for the cosmetics and pharmaceutical sectors. The company offers a broad range of standard bottles, jars, and custom packaging solutions, including advanced decoration techniques such as screen printing, hot stamping, and metallization. Based in Oyonnax, France’s “Plastics Valley,” Qualiform is known for its design capabilities, short lead times, and a strong focus on sustainability.",
                rebhan: "Rebhan FPS Kunststoff-Verpackungen GmbH is a German producer of blow-molded plastic bottles and packaging systems for cosmetics, pharmaceuticals, and household products. Located in Stockheim, Rebhan combines high-speed production with in-house design and tooling capabilities, enabling rapid development of both standard and custom packaging. As part of CERTINA’s Packaging Group, Rebhan works closely with HK Cosmetic Packaging and Trassl to offer clients complete packaging solutions.",
                trassl: "Trassl Polymer Solutions GmbH, based in Immenreuth, Germany, is a specialist in injection-molded and blow-molded plastic packaging components. The company’s range includes spray caps, wide-neck jars, canisters, and technical parts for the cosmetics, pharmaceutical, and chemical industries. Trassl supports rapid prototyping, tool making, and high-volume production, delivering both standard and tailored solutions.",
                aft: "AFT is a global specialist in conveyor and automation technology, primarily serving the automotive, hospital, and warehouse industries. The company designs, manufactures, and installs advanced material handling systems including electric monorail conveyors, pallet conveyors, and robotic picking solutions. With subsidiaries and production sites in the USA, Mexico, China, Korea, the UK, Belgium, and Poland, AFT supports OEMs and blue-chip clients worldwide. Known for its engineering excellence, AFT provides solutions for transporting unit weights from 50 kg up to 3,000 kg, covering diverse applications from automotive assembly lines to hospital logistics and automated warehouses. Its high-quality systems ensure efficient, reliable material flow and process automation for some of the world’s most demanding industries.",
                demm: "DEMM is a leading manufacturer of precision mechanical components such as gears, shafts, and bearings. With more than a century of engineering experience, DEMM serves the automotive, agricultural machinery, and industrial sectors from its historic plant in Porretta Terme, Italy. The company is renowned for its technical expertise and production flexibility, offering both standard and customized components for a range of applications. DEMM’s integrated manufacturing processes cover everything from forging to machining, heat treatment, and assembly, ensuring the highest standards of quality and durability.",
                enorise: "ENORISE specializes in software development and testing solutions for the mobility industry, focusing on next-generation electric and autonomous vehicles. Headquartered in Auburn Hills, USA, the company delivers advanced test bench systems and customized solutions that enable automotive manufacturers to develop, validate, and optimize powertrains and vehicle components for carbon-neutral mobility. ENORISE’s portfolio also includes engineering services and simulation technologies, supporting clients from concept to series production in their transition to sustainable mobility.",
                shieldtech: "Shieldtec Group designs and manufactures advanced thermal and acoustic shielding products, primarily for the automotive, aerospace, and industrial sectors. With sites in Switzerland (Sevelen) and the USA (Buford), the company develops solutions that reduce heat and noise in engines, exhaust systems, and industrial equipment. Shieldtec’s expertise includes high-temperature materials, lightweight construction, and customized engineering, enabling OEMs to meet stricter emissions and comfort standards.",
                pal: "PAL Wiping Systems, founded in 1922 and based in Prague, Czech Republic, develops and manufactures advanced wiper motors and systems for automotive and commercial vehicle manufacturers. PAL’s products are known for their reliability and quality, supplying major global OEMs with both standard and custom wiping solutions. The company operates modern production facilities, maintains a strong focus on innovation, and employs around 550 skilled workers.",
                qcision: "Qcision (formerly Feintool Technologie AG Lyss) is a Swiss technology leader in fineblanking and forming systems, delivering high-precision presses for automated, high-volume metalworking. The company’s machinery is used in the automotive, electronics, and consumer goods industries, where fine tolerance and repeatability are essential. Qcision also provides digitalization and automation solutions for Industry 4.0 production environments, helping clients to boost productivity and flexibility.",
                scv: "SCV is an Italian manufacturer of special-purpose all-wheel-drive vehicles for emergency services, police, military, and industrial customers. With more than 50 years of experience, SCV develops and builds robust vehicles designed for reliability in harsh conditions, supporting fire departments, disaster control units, and security agencies. The company offers a wide range of vehicles, from compact 4x4s to heavy-duty trucks, all engineered for challenging operations.",
                wegener: "Wegener+Stapel is a leading German manufacturer of plastic welding and processing machinery. The company combines the expertise of Wegener, known for its high-precision plastic welding equipment, with Stapel, a specialist in plastic sheet processing systems. Together, Wegener+Stapel offers a comprehensive portfolio of hot gas welding machines, extrusion welders, butt welding machines, and automatic sheet processing lines. Their equipment is used in industries such as automotive, construction, chemical processing, and plastics manufacturing. With a strong focus on innovation, quality, and customer support, Wegener+Stapel provides both standard machines and customized solutions, helping customers achieve efficient and reliable plastic joining and fabrication processes for a wide variety of applications.",
                isolite: "ISOLITE is a top supplier of high-temperature insulation and sealing solutions for automotive, aerospace, and industrial applications. Based in Ludwigshafen, Germany, ISOLITE develops innovative materials and systems that provide maximum heat retention with minimal space and weight requirements. Its products are used in exhaust, engine, and battery systems, helping customers to improve energy efficiency and reduce emissions. With production sites across Europe, North America, and Asia, ISOLITE combines global reach with strong engineering and customer support.",
                ust: "United Salon Technologies (UST), headquartered in Solingen, Germany, is a leading manufacturer of professional hairdressing tools and equipment. The company’s brands JAGUAR and TONDEO are well-known worldwide for their high-quality scissors, razors, brushes, and electrical devices. UST serves hairdressers in over 80 countries, combining traditional Solingen craftsmanship with cutting-edge design and production techniques.",
                vielfaltmenue: "VielfaltMenü GmbH is a German catering company specializing in healthy and sustainable meal services for schools, kindergartens, and public institutions. The company focuses on providing balanced, nutritious food with regional ingredients, offering a variety of menu options to accommodate different dietary needs and preferences. VielfaltMenü’s operations emphasize food safety, freshness, and educational value, helping children and young people to develop healthy eating habits.",
                coi: "COI GmbH is a German software company specializing in document and workflow management solutions. Established in 1988 and based in Erlangen, COI develops and implements digital archiving, electronic document management (DMS/ECM), and workflow automation systems for medium-sized and large enterprises. The platform supports secure, audit-proof handling of sensitive documents and business processes, helping organizations to increase efficiency, transparency, and compliance. COI’s customizable solutions are widely used in sectors such as healthcare, industry, and the public sector, supporting digital transformation and process optimization.",
                wps: "WPS (WPS Parking Solutions) is a leading Dutch company offering innovative, cloud-based parking management systems. Specializing in open, adaptive solutions, WPS develops software, payment, and analytics systems that seamlessly integrate with hardware. With offices in the Netherlands, Belgium, UK, Canada, and the USA, WPS provides customized solutions for cities, airports, hospitals, and commercial clients worldwide. The company is known for its user-friendly technology, flexible architecture, and a strong focus on digital transformation in the parking sector.",
                mobotix: "MOBOTIX AG is a pioneer in the development of intelligent video surveillance systems and network cameras. Founded in Germany and now a global player, MOBOTIX offers high-end IP cameras, video management software, and cloud-based security solutions for industries such as manufacturing, retail, public sector, and critical infrastructure. MOBOTIX is recognized for its decentralized technology approach, combining edge analytics, cybersecurity, and high image quality in robust, weatherproof designs. The company’s solutions are used in demanding environments worldwide to protect people, assets, and data."
            }
        }
    },
    
    de: {

          // Imprint Page German Translations
        imprint: {
            title: "Impressum",
            subtitle: "Rechtliche Informationen und Kontaktdaten",
            company: {
                header: "Angaben gemäß § 5 TMG:",
                main_office: "Hauptsitz",
                munich_office: "Büro München",
                represented_by: "Vertreten durch:",
                contact_info: "Kontaktinformationen",
                phone: "Telefon:",
                fax: "Fax:",
                email: "E-Mail:",
                register_entry: "Registereintrag",
                register_text: "Eintrag im Handelsregister München",
                registration_number: "Registernummer:"
            },
            disclaimer: {
                title: "Haftungsausschluss",
                liability_contents_title: "Haftung für Inhalte",
                liability_contents_p1: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
                liability_contents_p2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
                liability_links_title: "Haftung für Links",
                liability_links_p1: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
                liability_links_p2: "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
                copyright_title: "Urheberrecht",
                copyright_p1: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
                copyright_p2: "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
            }
        },

        // Privacy Page German Translations
        privacy_title: "Datenschutzerklärung",
        privacy_subtitle: "Datenschutz und Ihre Privatsphäre sind uns wichtig",
        privacy_intro: "Vielen Dank für Ihr Interesse an unserer Webseite. Der Schutz Ihrer personenbezogenen Daten liegt uns sehr am Herzen. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten, die durch Ihre Nutzung unserer Webseite erhoben werden. Das Internetangebot ist nach den gesetzlichen Datenschutzbestimmungen in Deutschland und der Europäischen Union (insbesondere Bundesdatenschutzgesetz (\"BDSG\") und EU-Datenschutz-Grundverordnung (\"EU-DSGVO\") ausgerichtet.",
        
        privacy_responsible_title: "Verantwortliche Stelle und Datenschutzbeauftragter",
        privacy_responsible_intro: "Verantwortliche Stelle im Sinne der EU-DSGVO und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:",
        privacy_responsible_company: "CERTINA GROUP",
        privacy_responsible_address: "Robert-Koch-Straße 5a<br>82031 Grünwald<br>Handelsregister München, HRB 132997<br><br><strong>Tel:</strong> +49 89 210896-0<br><strong>Fax:</strong> +49 89 210896-50<br><strong>E-Mail:</strong> info@certina-group.com<br><br><strong>Geschäftsführer:</strong> Dr. Hans Wehrmann",
        privacy_responsible_note: "Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich an unseren Datenschutzbeauftragten wenden, der Ihnen auch bei Auskunftsersuchen, Anregungen oder Beschwerden gerne weiterhilft.",
        
        privacy_personal_data_title: "Personenbezogene Daten",
        privacy_personal_data_text: "Personenbezogene Daten sind Einzelangaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Hierunter fallen z.B. Ihr Name, Ihre Anschrift, Ihr Geburtsdatum, Ihre E-Mail-Adresse und Zahlungsdaten, aber auch Ihre IP-Adresse. Nachfolgend beschreiben wir, wie wir Ihre personenbezogenen Daten verarbeiten.",
        
        privacy_website_visit_title: "Besuch unserer Webseite und Erstellung sogenannter Logfiles",
        privacy_website_description: "Beschreibung und Umfang der Datenverarbeitung:",
        privacy_website_intro: "Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen, die Ihr Internetbrowser an uns übermittelt. Folgende Daten werden hierbei erhoben und verarbeitet:",
        privacy_website_list: "die aktuelle IP-Adresse der von Ihnen genutzten Internetverbindung;|sofern Sie über einen Link auf unsere Webseite gelangen, die Seite, von der aus Sie uns besuchen;|die Webseiten, die Sie innerhalb unseres Internetauftritts besuchen;|Datum und Uhrzeit Ihres Besuchs;|das von Ihnen verwendete Betriebssystem, der Browsername (z.B. Internet Explorer, Firefox etc.) und die Browserversion;|der Name Ihres Internetproviders;|die übertragene Datenmenge.",
        privacy_website_necessity: "Die Erhebung der Daten zur Bereitstellung der Webseite und die Speicherung der Daten in sogenannten Logfiles ist für den Betrieb der Internetseite zwingend erforderlich.",
        privacy_legal_basis: "Rechtsgrundlage für die Datenverarbeitung:",
        privacy_legal_basis_text: "Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f EU-DSGVO.",
        privacy_purpose: "Zweck der Datenverarbeitung:",
        privacy_purpose_text: "Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Webseite an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Der Zweck der Speicherung in Logfiles liegt darin, die Funktionsfähigkeit und Stabilität der Webseite zu gewährleisten. Zudem nutzen wir die Daten zu statistischen Zwecken, zur Optimierung der Webseite und zur Gewährleistung der Sicherheit unserer informationstechnischen Systeme. In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f EU-DSGVO.",
        privacy_duration: "Dauer der Speicherung:",
        privacy_duration_text: "Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, es sei denn, vertragliche oder gesetzliche Verpflichtungen stehen einer Löschung entgegen.",
        
        privacy_contact_title: "Kontaktformular und E-Mail-Kontakt",
        privacy_contact_description: "Beschreibung und Umfang der Datenverarbeitung:",
        privacy_contact_text1: "Wenn Sie uns über unser Kontaktformular eine Kontaktanfrage zusenden, werden die in der Eingabemaske eingegebenen Daten an uns übermittelt und gespeichert. Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen.",
        privacy_contact_text2: "Die Bereitstellung personenbezogener Daten durch Sie ist weder gesetzlich noch vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind nicht verpflichtet, uns personenbezogene Daten zur Verfügung zu stellen. Das Nichtbereitstellen personenbezogener Daten, soweit diese verpflichtend sind, führt dazu, dass eine Kontaktaufnahme über das Kontaktformular oder ein Rückruf nicht möglich ist.",
        privacy_contact_text3: "Alternativ ist eine Kontaktaufnahme über die bereitgestellten E-Mail-Adressen möglich. In diesem Fall werden Ihre mit der E-Mail übermittelten personenbezogenen Daten gespeichert.",
        privacy_contact_text4: "Ihre Daten werden nicht an Dritte weitergegeben.",
        privacy_contact_legal: "Rechtsgrundlage für die Verarbeitung der über das Kontaktformular übermittelten Daten und Rechtsgrundlage für die Verarbeitung der im Zuge einer E-Mail-Übersendung übermittelten Daten ist Art. 6 Abs. 1 lit. f EU-DSGVO. Unser berechtigtes Interesse liegt darin, auf die Kontaktanfrage des Absenders zu antworten. Zielt der Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b EU-DSGVO.",
        privacy_contact_purpose: "Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen.",
        privacy_contact_duration: "Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, es sei denn, vertragliche oder gesetzliche Verpflichtungen stehen einer Löschung entgegen. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Unterhaltung mit Ihnen beendet ist, es sei denn, vertragliche oder gesetzliche Verpflichtungen stehen einer Löschung entgegen. Beendet ist die Unterhaltung dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.",
        
        privacy_no_obligation_title: "Keine Verpflichtung zur Bereitstellung personenbezogener Daten",
        privacy_no_obligation_text: "Der Abschluss von Verträgen mit uns ist nicht davon abhängig, dass Sie uns vorab personenbezogene Daten zur Verfügung stellen. Als Kunde unterliegen Sie keiner gesetzlichen oder vertraglichen Verpflichtung, uns Ihre personenbezogenen Daten zur Verfügung zu stellen; allerdings können wir bestimmte Leistungen möglicherweise nur eingeschränkt oder gar nicht erbringen, wenn Sie die erforderlichen Daten nicht zur Verfügung stellen. Sollte dies ausnahmsweise im Rahmen der von uns angebotenen Produkte der Fall sein, werden Sie hierüber gesondert informiert.",
        
        privacy_automated_title: "Automatisierte Entscheidungsfindung einschließlich Profiling",
        privacy_automated_text: "Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
        
        privacy_transmission_title: "Übermittlung personenbezogener Daten",
        privacy_transmission_text: "Mit Ausnahme der in dieser Datenschutzerklärung beschriebenen Umstände geben wir Ihre Daten nicht an Dritte weiter, es sei denn, Sie haben zuvor Ihre ausdrückliche Einwilligung zu einer Weitergabe erteilt oder die Weitergabe ist gesetzlich vorgeschrieben oder gestattet. Ausgenommen hiervon sind Servicepartner, die zur Abwicklung des Vertragsverhältnisses erforderlich sind und die von uns zur Verarbeitung personenbezogener Daten nach unseren Weisungen im Rahmen einer Auftragsverarbeitung beauftragt wurden. Wir werden Ihre Daten weder an Dritte verkaufen noch auf andere Weise an Dritte zu Werbezwecken weitergeben.",
        
        privacy_cookies_title: "Verwendung von Cookies",
        privacy_cookies_intro1: "Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um kleine Textdateien, die lokal im Zwischenspeicher Ihres Internet-Browsers gespeichert werden. Die Cookies ermöglichen die Wiedererkennung des Internet-Browsers. Cookies ermöglichen es uns, die Benutzerfreundlichkeit und Qualität unserer Dienste zu verbessern, indem beispielsweise Benutzerpräferenzen gespeichert werden.",
        privacy_cookies_intro2: "Darüber hinaus werden Cookies verwendet, um Inhalte und Anzeigen zu personalisieren, Social-Media-Funktionen anzubieten und den Traffic auf unserer Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Nutzung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.",
        privacy_cookies_intro3: "Cookies richten keinen Schaden an Ihrem Computer an und enthalten keine Viren.",
        privacy_cookies_settings_title: "Cookie-Einstellungen in Browsern",
        privacy_cookies_settings_text1: "Es ist auch möglich, unsere Webseite ohne Cookies zu nutzen. Sie können die Speicherung der Cookies in Ihrem Internet-Browser deaktivieren, auf bestimmte Webseiten beschränken oder Ihren Internet-Browser so einstellen, dass Sie benachrichtigt werden, bevor ein Cookie gespeichert wird. Sie können die Cookies jederzeit über die Datenschutzfunktionen Ihres Internet-Browsers von der Festplatte Ihres Computers löschen.",
        privacy_cookies_settings_text2: "Die folgenden Links zeigen Ihnen, wie Sie die Einstellungen in gängigen Browsern anpassen:",
        privacy_cookies_note: "<strong>Hinweis:</strong> Das Blockieren von Cookies kann die Funktionalität dieser Website beeinträchtigen.",
        privacy_cookies_legal1: "Soweit personenbezogene Daten durch technisch notwendige Cookies verarbeitet werden, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f EU-DSGVO.",
        privacy_cookies_legal2: "Jede Verwendung von Cookies, die nicht strikt technisch notwendig ist, stellt eine Datenverarbeitung dar, die nur mit Ihrer ausdrücklichen und aktiven Einwilligung zulässig ist. Rechtsgrundlage ist dann Art. 6 Abs. 1 S. 1 lit. a DS-GVO. Dies gilt insbesondere für den Einsatz von Werbe-, Targeting- oder Sharing-Cookies. Darüber hinaus geben wir Ihre durch Cookies verarbeiteten personenbezogenen Daten nur dann an Dritte weiter, wenn Sie hierin ausdrücklich nach Art. 6 Abs. 1 S. 1 lit. a DS-GVO eingewilligt haben.",
        privacy_cookies_purpose1: "Der Zweck der Verwendung technisch notwendiger Cookies liegt darin, die Nutzung von Webseiten für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird. In diesen Zwecken liegt auch unser berechtigtes Interesse an der Verarbeitung der personenbezogenen Daten nach Art. 6 Abs. 1 lit. f EU-DSGVO.",
        privacy_cookies_purpose2: "Wir benötigen Cookies für folgende Anwendungen: Sitzungsbehandlung (Gewährleistung, dass die Eingaben auf den einzelnen Formularseiten bis zum Endprozess zur Verfügung stehen).",
        privacy_cookies_purpose3: "Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur Erstellung von Nutzerprofilen verwendet.",
        privacy_cookies_duration: "Cookies werden auf dem Rechner des Nutzers gespeichert und von diesem an unsere Seite übermittelt. Die beschriebenen technisch notwendigen Cookies werden in der Regel gelöscht, wenn Ihre Browser-Sitzung beendet wird. Zudem können Sie die Übermittlung von Cookies deaktivieren oder einschränken, indem Sie die Einstellungen in Ihrem Internet-Browser ändern. Bereits gespeicherte Cookies können jederzeit gelöscht werden. Dies kann auch automatisiert erfolgen.",
        
        privacy_analytics_title: "Google Analytics",
        privacy_analytics_text1: "Wir setzen auf unserer Website Google Analytics ein, einen Webanalysedienst der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (\"Google\")). Google Analytics verwendet Cookies, die auf Ihrem Computer gespeichert werden und dadurch eine Analyse Ihrer Nutzung der Website ermöglichen.",
        privacy_analytics_text2: "Die durch diese Cookies erzeugten Informationen, beispielsweise Zeit, Ort und Häufigkeit Ihres Webseiten-Besuchs einschließlich Ihrer IP-Adresse, werden an Google in den USA übertragen und dort gespeichert. Wir verwenden Google Analytics mit der Erweiterung \"_gat._anonymizeIp\" auf unserer Website. In diesem Fall wird Ihre IP-Adresse von Google bereits innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt und dadurch anonymisiert.",
        privacy_analytics_text3: "Google wird diese Informationen zum Zweck der Auswertung Ihrer Nutzung unserer Website, zur Zusammenstellung von Reports über die Webseitenaktivität für uns und zur Erbringung weiterer mit der Webseitennutzung und der Internetnutzung verbundener Dienstleistungen verwenden. Google kann diese Informationen auch an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.",
        privacy_analytics_optout_title: "Google Analytics Opt-out",
        privacy_analytics_optout_text: "Google bietet für die gängigsten Browser ein Deaktivierungs-Add-on an, mit dem Sie mehr Kontrolle darüber haben, welche Daten von Google zu der von Ihnen aufgerufenen Website erfasst werden. Das Add-on teilt dem JavaScript (ga.js) von Google Analytics mit, dass keine Informationen zum Website-Besuch an Google Analytics übermittelt werden sollen.",
        privacy_analytics_optout_link: "Google Analytics Browser-Add-on installieren",
        privacy_analytics_deletion: "Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 38 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat. Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter Google's Datenschutzbestimmungen.",
        
        privacy_wordpress_title: "WordPress",
        privacy_wordpress_text1: "Wir nutzen auf dieser Website das WordPress-Tool Stats zur statistischen Auswertung der Besucherzugriffe. Anbieter ist die Automattic Inc, 60 29th Street #343, San Francisco, CA 94110-4929, USA (\"WordPress\").",
        privacy_wordpress_text2: "WordPress verwendet Cookies, die auf Ihrem Computer gespeichert werden und eine Analyse der Benutzung der Website erlauben. Die durch die Cookies generierten Informationen über die Benutzung unserer Website werden auf Servern in den USA gespeichert. Ihre IP-Adresse wird nach der Verarbeitung und vor der Speicherung anonymisiert.",
        privacy_wordpress_text3: "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.",
        privacy_wordpress_optout: "Sie können der Erhebung und Nutzung Ihrer Daten für die Zukunft widersprechen, indem Sie mit einem Klick auf diesen Link ein Opt-Out-Cookie in Ihrem Browser setzen: Quantcast Opt-out.",
        privacy_wordpress_note: "Wenn Sie die Cookies auf Ihrem Computer löschen, müssen Sie das Opt-Out-Cookie erneut setzen.",
        
        privacy_security_title: "Datensicherheit",
        privacy_security_text1: "Innerhalb des Webseitenbesuchs verwenden wir das verbreitete TLS-Verfahren (Transport Layer Security) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine 256-Bit-Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3-Technologie zurück. Ob eine einzelne Seite unseres Internetauftritts verschlüsselt übertragen wird, erkennen Sie an dem geschlossenen Schlüssel- bzw. Schloss-Symbol in der unteren Statusleiste oder Adressleiste Ihres Browsers.",
        privacy_security_text2: "Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.",
        
        privacy_rights_title: "Rechte des Betroffenen",
        privacy_rights_intro: "Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. EU-DSGVO und es stehen Ihnen folgende Rechte gegenüber der Certina Holding AG zu:",
        privacy_rights_information_title: "Auskunftsrecht:",
        privacy_rights_information_text: "Nach Art. 15 EU-Datenschutzgrundverordnung haben Sie das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen; insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen.",
        privacy_rights_rectification_title: "Recht auf Berichtigung:",
        privacy_rights_rectification_text: "Nach Art. 16 EU-DSGVO haben Sie das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.",
        privacy_rights_erasure_title: "Recht auf Löschung:",
        privacy_rights_erasure_text: "Nach Art. 17 EU-DSGVO haben Sie das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.",
        privacy_rights_restriction_title: "Recht auf Einschränkung:",
        privacy_rights_restriction_text: "Nach Art. 18 EU-DSGVO haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie Widerspruch nach Art. 21 EU-DSGVO eingelegt haben.",
        privacy_rights_portability_title: "Recht auf Datenübertragbarkeit:",
        privacy_rights_portability_text: "Nach Art. 20 EU-DSGVO haben Sie das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.",
        privacy_rights_complaint_title: "Beschwerderecht:",
        privacy_rights_complaint_text: "Nach Art. 77 EU-DSGVO haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden. Im vorliegenden Fall ist die zuständige Aufsichtsbehörde:",
        privacy_rights_complaint_authority: "<strong>Der Bayerische Landesbeauftragte für den Datenschutz (BayLfD)</strong><br>Wagmüllerstraße 18, 80538 München<br>Postfach 22 12 19, 80502 München<br>Tel.: 089 212672-0<br>Fax: 089 212672-50<br>E-Mail: poststelle@datenschutz-bayern.de",
        privacy_rights_revocation_title: "Widerrufsrecht:",
        privacy_rights_revocation_text: "Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.",
        privacy_rights_objection_title: "Widerspruchsrecht:",
        privacy_rights_objection_text1: "Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f EU-DSGVO erfolgt, Widerspruch einzulegen.",
        privacy_rights_objection_text2: "Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen.",
        
        privacy_changes_title: "Änderung unserer Datenschutzbestimmungen",
        privacy_changes_text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch unserer Website gilt dann die jeweils aktuelle Datenschutzerklärung.",
        privacy_status: "<strong>Stand:</strong> Mai 2021",

        // Header Navigation
        nav_home: "Startseite",
        nav_portfolio: "Portfolio",
        nav_team: "Team", 
        nav_academy: "CERTINA Academy",
        nav_sustainability: "Nachhaltigkeit",
        nav_career: "Karriere",
        
        // Team Page - ADD THESE MISSING TRANSLATIONS
        managing_partners: "Managing Partners",
        ma_team: "M&A und Corporate Development Team",
        team_hero_title: "Unser Team",
        team_hero_subtitle: "Exzellenz durch Expertise",
        team_hero_description: "Lernen Sie die erfahrenen Fachkräfte kennen, die unseren Erfolg durch strategische Vision und operative Exzellenz vorantreiben.",
        
        // ADD THESE CAREER TRANSLATIONS TO THE DE SECTION  
        career_hero_title: "Karriere",
        career_hero_subtitle: "Gestalten Sie die Zukunft mit uns",
        career_hero_intro: "Werden Sie Teil eines dynamischen Teams, das operative Exzellenz und nachhaltiges Wachstum in verschiedenen Branchen vorantreibt. Wir suchen leidenschaftliche Fachkräfte, die unser Engagement für nachhaltige Wertschöpfung teilen.",
        career_section_title: "Aktuelle Stellenausschreibungen",
        career_no_jobs_heading: "Derzeit keine offenen Stellen",
        career_no_jobs_text: "Wir sind immer an talentierten Fachkräften interessiert. Senden Sie uns gerne Ihre Bewerbung für zukünftige Möglichkeiten.",
        career_contact_heading: "Interesse an Karriere bei uns?",
        career_contact_text: "Auch wenn derzeit keine passenden Stellen verfügbar sind, würden wir uns über Ihre Bewerbung freuen. Senden Sie Ihre Unterlagen an unser HR-Team.",
        career_job_description: "Stellenbeschreibung",
        career_job_responsibilities: "Hauptaufgaben",
        career_job_requirements: "Anforderungen",
        career_job_benefits: "Was wir bieten",
        career_apply_now: "Jetzt bewerben",
        career_close: "Schließen",
        career_view_details: "Details ansehen",

        // Sustainability Page
        sustainability_title: "Nachhaltigkeit",
        sustainability_quote: "Die ESG-Prinzipien sind die Leitprinzipien unseres täglichen Handelns.",
        sustainability_author: "András v. Kontz, Managing Partner Goods & Services",
        sustainability_values_title: "Wir schaffen Werte für Generationen",
        sustainability_values_text1: "Wir glauben, dass wirtschaftlicher Erfolg und Nachhaltigkeit sich nicht widersprechen, sondern sich positiv ergänzen. Wir sind überzeugt, dass nachhaltige Geschäftsmodelle langfristig besser abschneiden.",
        sustainability_values_text2: "Seit der Gründung achten wir auf unsere Verantwortung gegenüber Mitarbeitern, Gesellschaft und Umwelt und schaffen nachhaltigen Wert für kommende Generationen.",
        esg_title: "Unsere ESG-Prinzipien",
        esg_subtitle: "Umwelt-, Sozial- und Governance-Überlegungen bestimmen unseren Geschäftsansatz",
        tab_environmental: "Umwelt",
        tab_social: "Soziales",
        tab_governance: "Unternehmensführung",
        env_title: "Umweltverantwortung",
        env_intro: "Wir verpflichten uns, unseren ökologischen Fußabdruck in allen Bereichen zu minimieren. Unsere Umweltinitiativen konzentrieren sich auf:",
        env_item1: "Reduzierung der CO₂-Emissionen in unseren Betrieben",
        env_item2: "Entwicklung energieeffizienter Produkte und Lösungen",
        env_item3: "Implementierung nachhaltiger Herstellungsprozesse",
        env_item4: "Förderung der Prinzipien der Kreislaufwirtschaft",
        env_item5: "Investitionen in erneuerbare Energiequellen",
        env_conclusion: "Alle Unternehmen der Certina Group werden ermutigt, Umweltziele zu setzen und ihre Fortschritte regelmäßig anhand konkreter Ziele zu messen.",
        social_title: "Soziale Verantwortung",
        social_intro: "Unser Engagement für soziale Verantwortung erstreckt sich auf unsere Mitarbeiter, Gemeinden und die Gesellschaft insgesamt:",
        social_item1: "Förderung eines vielfältigen und inklusiven Arbeitsplatzes",
        social_item2: "Bereitstellung umfassender Ausbildungs- und Entwicklungsmöglichkeiten",
        social_item3: "Gewährleistung fairer und gerechter Vergütung",
        social_item4: "Unterstützung der Gemeinden, in denen wir tätig sind",
        social_item5: "Wahrung der Menschenrechte in unserer gesamten Wertschöpfungskette",
        social_conclusion: "Wir glauben, dass Investitionen in Menschen langfristig Wert für unser Unternehmen und die Gesellschaft schaffen.",
        governance_title: "Unternehmensführung",
        governance_intro: "Starke Governance-Prinzipien leiten unsere Entscheidungsfindung und unseren Betrieb:",
        governance_item1: "Aufrechterhaltung ethischer Geschäftspraktiken und Transparenz",
        governance_item2: "Implementierung robuster Compliance-Programme",
        governance_item3: "Durchführung regelmäßiger Risikobewertungen",
        governance_item4: "Gewährleistung verantwortlicher Lieferkettenführung",
        governance_item5: "Integration von ESG-Überlegungen in die strategische Planung",
        governance_conclusion: "Unser Governance-Rahmen gewährleistet Rechenschaftspflicht und treibt nachhaltiges Wachstum in allen unseren Betrieben voran.",
        portfolio_title: "Nachhaltigkeit in Aktion",
        portfolio_subtitle: "Ausgewählte ESG-Erfolge unserer Portfoliounternehmen",
        rebhan_desc: "Ein führender Hersteller innovativer, hochwertiger Kunststoffverpackungen mit Fokus auf umweltfreundliche Produkte. REBHANs Green Line ist ein nachhaltiger Verpackungsansatz basierend auf den 5R-Prinzipien: Reduce, Recycle, Reuse, Renew und Refill. Die Colonna PET-Flasche spart 60% Gewicht im Vergleich zu einer herkömmlichen Flasche.",
        horn_desc: "Spezialisiert auf Design, Herstellung und Montage von Schmelzöfen und Spezialmaschinen für die Glasproduktion. HORN ist der weltweit führende Hersteller von Hybridöfen, die neben fossilen Brennstoffen auch elektrische Energie einsetzen und damit erheblich zur Reduzierung von Kohlendioxidemissionen beitragen.",
        ust_desc: "Europas führender Hersteller hochwertiger Friseurscheren. Durch die Umstellung der Produktion vom traditionellen Warmschmieden auf das in der Automobilindustrie verwendete Kaltschmiedeverfahren konnte UST den Energiebedarf in der Produktion erheblich reduzieren und Rohstoffe einsparen.",
        pruss_desc: "Seit 1889 entwickelt Pruss Ventile für verschiedene Industrien. Zusammen mit internationalen Forschungsinstituten entwickelt Pruss hocheffiziente Turbinen-Bypass-Ventile für Hochtemperatur-CO₂-Anwendungen, die es ermöglichen, bisher ungenutzte Abwärme aus industriellen Anwendungen in Strom umzuwandeln.",
        coi_desc: "Ein führender deutscher Anbieter im Bereich Dokumenten- und Workflow-Management sowie Dokumentenarchivierung. Mit seinen Produkten fördert COI aktiv das 'papierlose Büro' und ermöglicht Fernarbeit, wodurch der Papierverbrauch und pendlerbedingte Emissionen erheblich reduziert werden.",
        aft_desc: "Spezialisiert auf Förder- und Automatisierungstechnologien für die Automobil- und Logistikindustrie. AFT ist nach ISO 50001:2018 (Energiemanagementsystem) zertifiziert und optimiert kontinuierlich die Energieeffizienz – einschließlich Beschaffung und Energieverbrauch in allen Betrieben.",
        downloads_title: "Downloads",
        downloads_subtitle: "Zugang zu unseren wichtigsten Dokumenten und Richtlinien.",
        download_human_rights: "Grundsatzerklärung Menschenrechte",
        download_business_code: "Geschäftspartner-Kodex",
        download_whistleblower: "Hinweisgebersystem",
        
        // Academy Page
        academy_hero_title: "CERTINA Academy",
        academy_hero_subtitle: "Wissen fördern und strategisches Wachstum stärken",
        academy_hero_description: "Eine interne Initiative zur Förderung von Wissen und Kompetenzen im Unternehmen durch Partnerschaften mit Experten aus verschiedenen Bereichen und Branchen.",
        
        academy_about_title: "Wissen bündeln. Wachstum ermöglichen.",
        academy_about_p1: "Die CERTINA Academy ist eine interne Initiative der CERTINA GROUP zur Förderung von Wissen und Kompetenzen im Unternehmen. Sie bringt Partner aus verschiedenen Bereichen und Branchen zusammen, um die Mitarbeiter und Unternehmen der CERTINA GROUP bei verschiedenen Themen und Projekten zu unterstützen.",
        academy_about_p2: "Ein wichtiger Bestandteil der Academy sind die CERTINA Growth Partner, die ihr Wissen durch Coaching und Training teilen oder direkt zu Projekten wie M&A-Transaktionen oder operativen Turnaround-Maßnahmen beitragen, um die strategische Entwicklung der Gruppe zu unterstützen.",
        academy_about_p3: "So trägt die Academy zur kontinuierlichen Bildung und Entwicklung aller Stakeholder bei und unterstützt das Management der CERTINA GROUP bei der Erreichung ihrer Unternehmensziele.",
        
        academy_partners_title: "Unsere Growth Partner",
        academy_partners_subtitle: "Lernen Sie die Experten kennen, die ihr Wissen und ihre Expertise zu unserer Academy beitragen",
        
        // Partner fields
        partner_finance_legal: "Finanzen und Recht",
        partner_ai_data: "Künstliche Intelligenz und Datenanalyse",
        partner_communication: "Kommunikation und Verhandlung",
        partner_rd: "Forschung & Entwicklung",
        
        // Homepage - Hero Section
        hero_title: "Der nachhaltige Investor",
        hero_subtitle: "Operativ · Visionär · Konstant",
        hero_text: "Die CERTINA GROUP ist eine globale Investment Holding mit Sitz in Deutschland, spezialisiert auf Sondersituationen und Turnaround-Investments mit langfristiger unternehmerischer Perspektive.",
        hero_btn_criteria: "Investmentkriterien",
        hero_btn_portfolio: "Portfolio",
        
        // Homepage - About Section
        about_title: "Über die CERTINA GROUP",
        about_subtitle: "Langfristig orientierte industrielle Beteiligungsgesellschaft mit Fokus auf Sondersituationen und nachhaltiger Wertschöpfung.",
        about_kpi_headline: "Unsere Gruppe in Zahlen",
        about_longterm_partner: "Langfristiger Partner",
        about_longterm_text: "Unsere Buy-and-Build-Strategie konzentriert sich auf nachhaltiges Wachstum und operative Exzellenz, nicht auf schnelle Exits.",
        about_chart_subtitle: "Jahre unserer Unternehmen in unserem Portfolio",
        about_quote_text: '"Unser Sweet Spot sind Geschäftsbereiche oder Tochtergesellschaften von Unternehmensgruppen mit operativem Verbesserungspotenzial, deren Verkauf für den Verkäufer und das Unternehmen von strategischem Wert ist."',
        about_special_situations: "Sondersituationen",
        about_special_situations_text: "Wir spezialisieren uns auf Carve-outs, Turnarounds, Nachfolgesituationen und komplexe Restrukturierungen, bei denen wir signifikanten operativen Mehrwert schaffen können.",
        
        // KPI Cards
        kpi_experience: "Erfahrung",
        kpi_years_industry: "Jahre in der Branche",
        kpi_revenue: "Umsatz",
        kpi_annually: "Jährlich konsolidiert",
        kpi_companies: "Unternehmen", 
        kpi_portfolio_companies: "Portfolio-Unternehmen",
        kpi_employees: "Mitarbeiter",
        kpi_worldwide: "Weltweit",
        kpi_countries: "Länder",
        kpi_global_presence: "Globale Präsenz",
        kpi_continents: "Kontinente",
        kpi_worldwide_reach: "Weltweite Reichweite",
        
        // Investment Criteria
        criteria_title: "Investmentkriterien",
        criteria_subtitle: "Wir konzentrieren uns auf Unternehmen mit operativem Verbesserungspotenzial und langfristigen Wachstumsaussichten.",
        criteria_revenue: "Umsatz",
        criteria_revenue_range: "Zielbereich",
        criteria_revenue_value: "€ 50 - 500 Millionen",
        criteria_situations: "Situationen",
        criteria_situations_type: "Sondersituationen", 
        criteria_situations_value: "Carve-outs/Spin-offs, Turnarounds, Restrukturierungen, Nachfolge",
        criteria_region: "Region",
        criteria_region_range: "Globale Präsenz",
        criteria_region_value: "Weltweit mit Fokus auf Europa",
        criteria_shareholdings: "Beteiligungen",
        criteria_shareholdings_type: "Mehrheitsbeteiligung",
        criteria_shareholdings_value: "Mehrheit, idealerweise > 75%",
        criteria_equity: "Eigenkapital",
        criteria_equity_size: "Investitionsvolumen",
        criteria_equity_value: "Bis zu € 20 Millionen pro Investition",
        criteria_profitability: "Rentabilität",
        criteria_profitability_focus: "Turnaround-Fokus",
        criteria_profitability_value: "Verlustbringend bis ca. 5% EBITDA",
        
        // Industry Experience
        industry_title: "Unsere Branchenerfahrung",
        industry_subtitle: "Wir verfügen über fundiertes Branchenwissen in Schlüsselsektoren wie Fertigung, Technologie, Verpackung, Automobil und Konsumgüter & Dienstleistungen.",
        industry_industrials: "Industrie-     unternehmen",
        industry_industrials_text: "Fertigungsexzellenz mit nachhaltigen Prozessen und innovativen Technologielösungen.",
        industry_packaging: "Verpackungs-   lösungen",
        industry_packaging_text: "Umweltfreundliche Verpackungslösungen mit Fokus auf Kreislaufwirtschaft und Ressourceneffizienz.",
        industry_automotive: "Automobil &   Mobilität",
        industry_automotive_text: "Zukunftsorientierte Mobilitätskomponenten und -systeme für traditionelle und elektrische Fahrzeuge.",
        industry_goods: "Güter &       Dienstleistungen",
        industry_goods_text: "Kundenzentrierte Lösungen für verschiedene Konsumenten- und B2B-Marktsegmente.",
        industry_software: "Software &    Technologie ",
        industry_software_text: "Digitale Transformationstools und Unternehmenssoftware-    lösungen für Industrie 4.0.",
        
        // Approach Section
        approach_title: "Unser Ansatz",
        approach_subtitle: "Wir bieten umfassende Unterstützung während des gesamten Turnaround- und Restrukturierungsprozesses.",
        approach_restructuring: "Operative Restrukturierung",
        approach_restructuring_text: "Wir bieten aktive Portfolio-Unterstützung durch die Kombination von Management-Expertise, Branchenwissen und globalen Netzwerken.",
        approach_investment: "Langfristige Investition",
        approach_investment_text: "Mit unserem Buy, Build and Hold-Ansatz investieren wir in die Zukunft und priorisieren die nachhaltige langfristige Entwicklung unserer Portfoliounternehmen.",
        approach_repositioning: "Strategische Neupositionierung",
        approach_repositioning_text: "Wir definieren Geschäftsmodelle neu, entwickeln neue Marktstrategien und identifizieren Wachstumschancen, um langfristige Nachhaltigkeit und Wertschöpfung zu gewährleisten.",
        
        // News Section
        news_title: "News",
        news_subtitle: "Neueste Updates und Entwicklungen der Certina Group und unserer Portfoliounternehmen.",
        
        // Portfolio Page - ADD THESE LINES
        portfolio_hero_title: "Unser Portfolio",
        portfolio_hero_subtitle: "Strategische Investitionen in operative Exzellenz",
        portfolio_hero_description: "Entdecken Sie unser vielfältiges Portfolio von Unternehmen aus verschiedenen Branchen, in denen wir durch operative Verbesserungen und strategische Führung nachhaltigen Wert schaffen.",
        
        // Team Member Descriptions - ADD THESE AT THE END OF THE DE SECTION
        santamaria_description: "Giovanni Santamaria ist Managing Partner der CERTINA GROUP. Er ist verantwortlich für den IT-Bereich sowie alle Investitionen in Italien. Nach verschiedenen Führungspositionen bei PwC, GE Capital und Autoscout24, wo er die Position des CFO innehatte, ist Giovanni Santamaria seit 2004 Teil des Managementteams der CERTINA GROUP. Während seiner beruflichen Laufbahn war er für zahlreiche Unternehmenstransaktionen in Italien, Deutschland, Norwegen, Schweden, der Schweiz und den USA verantwortlich. Giovanni Santamaria hat einen Abschluss in Wirtschafts- und Finanzwissenschaften der Università Cattolica Mailand und einen MBA von INSEAD.",
        
        brockmann_description: "Maik Brockmann ist Managing Partner der CERTINA GROUP. Maik hat seit 1998 Erfahrungen bei zwei Investorengruppen gesammelt und war an über 30 Transaktionen im Mittelstands- und Carve-out-Bereich beteiligt. Von 1998 bis 2006 arbeitete er für die Certina Holding AG in München und war für den Bereich Operations verantwortlich, dabei war er maßgeblich an den Transformationsprozessen in den Beteiligungen innerhalb der Certina Gruppe beteiligt. Von 2006-2010 war Maik Vice President Operations bei der börsennotierten Arques Industries AG, wo er anschließend in den Vorstand berufen wurde. In dieser Funktion transformierte er die Arques Industrie AG zur Gigaset AG als Vorstandsvorsitzender und Chief Sales Officer und wurde zu einem der jüngsten TecDAX-Vorstandsmitglieder. Maik ist derzeit als Managing Partner für die Neuausrichtung der Unternehmen verantwortlich.",
        
        brungs_description: "Dr. Stefan Brungs ist Managing Partner der CERTINA GROUP und verantwortlich für den Bereich Automotive. Stefan Brungs bringt mehr als 30 Jahre relevante Managementerfahrung in seine Arbeit bei der CERTINA GROUP ein, davon 23 Jahre im VW-Konzern. Als Mitglied des Aufsichtsrats bei Bentley und Bugatti war er für Vertrieb und Marketing verantwortlich und erweiterte erfolgreich die globale Präsenz und den Absatz der Marken. Vor seinem Eintritt bei CERTINA führte er erfolgreich ein KKR-Portfoliounternehmen in der Schweiz als CEO. Stefan Brungs begann seine Laufbahn bei der Boston Consulting Group, wo er sieben Jahre arbeitete. Stefan Brungs studierte Betriebswirtschaftslehre an der Goethe-Universität in Frankfurt am Main und promovierte an der Universität des Saarlandes. Er hat außerdem einen MBA der California State University, USA.",
        
        eiblmeier_description: "Tobias Eiblmeier ist Head of M&A and Corporate Development der CERTINA GROUP und verantwortlich für die nationalen und internationalen Investitionsaktivitäten der Gruppe. Tobias verfügt über mehr als 10 Jahre Erfahrung in der Private-Equity-Branche in den Bereichen M&A sowie Turnaround- und Transformationsmanagement. Vor seinem Eintritt in die CERTINA GROUP arbeitete er viele Jahre bei einer börsennotierten Private-Equity-Gesellschaft mit Fokus auf Sondersituationen, wo er die globalen Buy-Side- und Sell-Side-Aktivitäten vollverantwortlich betreute. Als aktiver Investor hat er außerdem zahlreiche mittelständische Unternehmen verschiedener Branchen bei ihrer Transformation unterstützt. Tobias hat einen Abschluss in Betriebswirtschaftslehre von der Hochschule München und einen Master-Abschluss von der Hochschule München.",
        
        schmidt_description: "Holger J. Schmidt ist Managing Partner der CERTINA GROUP. Er ist verantwortlich für den Bereich Goods & Services. Holger J. Schmidt verfügt über mehr als 25 Jahre Management- und Restrukturierungserfahrung in der Einzelhandels- und Modebranche. Er hatte Führungspositionen bei HUGO BOSS, Toni Gard, ESCADA und Michael Kors inne. Bei Michael Kors führte er die Marke erfolgreich in Deutschland ein und baute sie auf. Bevor er 2018 zur CERTINA GROUP kam, war er sieben Jahre lang CEO des europäischen Geschäfts von Giorgio Armani.",
        
        kontz_description: "András v. Kontz ist Managing Partner der CERTINA GROUP und verantwortlich für den Bereich Goods & Services. András verfügt über langjährige Erfahrung im Bereich M&A und in der Transformation mittelständischer Unternehmen. Bevor er zur CERTINA GROUP kam, arbeitete er für internationale Private-Equity-Gesellschaften und Finanziers mit Fokus auf Sondersituationen. András v. Kontz hat einen Abschluss in International Management von der ESCP Business School und einen Master-Abschluss von der Cass Business School, London.",
        
        wehrmann_description: "Hans Wehrmann ist Gründer, Vorstandsvorsitzender und Mehrheitsaktionär der CERTINA GROUP. Hans begann seine berufliche Laufbahn in der Restrukturierung bei der Boston Consulting Group. 1998 tätigte er seine erste Unternehmensübernahme und legte damit den Grundstein für die CERTINA GROUP. Seit der Gründung hat er mehr als 65 erfolgreiche Transaktionen und Turnarounds durchgeführt und die CERTINA GROUP zu einer soliden und nachhaltigen Industriebeteiligungsgesellschaft mit internationaler Ausrichtung aufgebaut. Hans Wehrmann hat einen Doktortitel in Wirtschaftswissenschaften der Université de Fribourg und einen MBA von INSEAD.",
        
        wondra_description: "Wolfgang Wondra ist Managing Partner der CERTINA GROUP. Er ist verantwortlich für den Bereich Packaging Solutions. Wolfgang begann seine berufliche Laufbahn bei der BMW Group in den Vereinigten Staaten. Nach weiteren Führungspositionen im Investment Banking und Private Equity kam er 2010 zur CERTINA GROUP. Bei CERTINA ist er für Verpackungslösungen zuständig und konzentriert sich hauptsächlich auf Verpackungen im Konsumgüterbereich. Darüber hinaus verfügt er über langjährige Erfahrung im Maschinen- und Anlagenbau sowie in der Papierindustrie. Wolfgang Wondra hat einen Abschluss in Maschinenbau von der Hochschule München und einen MBA von der Wake Forest University, USA.",
        
        // Add Portfolio translations to the translations object
        portfolio: {
            hero: {
                subtitle: "Strategische Investitionen",
                title: "Unser Portfolio",
                description: "Innovative Unternehmen aus verschiedenen Branchen, die operative Exzellenz und nachhaltiges Wachstum durch strategische Partnerschaften vorantreiben."
            },
            filter: {
                all: "Alle Unternehmen",
                industrials: "Industrie",
                packaging: "Verpackung",
                automotive: "Automotive",
                "goods-services": "Waren & Dienstleistungen",
                software: "Software"
            },
            stats: {
                companies: "Portfolio-Unternehmen",
                countries: "Länder",
                employees: "Mitarbeiter",
                revenue: "Jahresumsatz"
            },
            modal: {
                "acquisition-year": "Jahr der Akquisition",
                "annual-revenue": "Jahresumsatz",
                fte: "FTE",
                countries: "Länder",
                headquarter: "Hauptsitz",
                seller: "Verkäufer",
                website: "Website",
                "visit-website": "Website besuchen"
            },
            companies: {
                // Individuelle Unternehmensbeschreibungen
                hannemann: "Hannemann ist ein Premiumhersteller spezialisierter Industriearmaturen aus Deutschland, der hauptsächlich Kraftwerke und Prozessindustrien wie Öl & Gas, Petrochemie und Stahlproduktion bedient. Das Unternehmen ist bekannt für die Entwicklung maßgeschneiderter Ventillösungen, die bei extremen Temperaturen und Drücken arbeiten können. Mit jahrzehntelanger Erfahrung unterstützt Hannemann seine Kunden mit maßgeschneiderten Produkten, Wartungsdienstleistungen und technischem Fachwissen und gewährleistet sichere und effiziente Durchflussregelung in kritischen Anwendungen.",
                horn: "Horn Glass Industries AG ist ein globaler Marktführer im Design und Bau von Glasschmelzöfen und verwandten Technologien für die Glasindustrie. Mit Hauptsitz in Plößberg, Deutschland, bietet Horn Engineering, Projektmanagement und Installation von Ofensystemen für Flachglas-, Behälterglas- und Spezialglas-Produktion. Die Expertise des Unternehmens umfasst den gesamten Projektlebenszyklus – von Machbarkeitsstudien und Ofenbau bis hin zu Wartung und Modernisierung. Horn bedient große Glashersteller weltweit und unterstützt Innovationen in Energieeffizienz und Prozessautomatisierung.",
                pruss: "Pruss mit Sitz in Hannover, Deutschland, spezialisiert sich auf die Herstellung von Hochleistungs-Regelventilen für die Energie- und Prozessindustrie. Die Produkte des Unternehmens sind darauf ausgelegt, Durchfluss, Menge und Druck in anspruchsvollen Anwendungen wie Kraftwerken und chemischer Verarbeitung zu steuern. Pruss ist anerkannt für seine ingenieurtechnische Tiefe und die Fähigkeit, maßgeschneiderte Ventillösungen für Kunden wie Siemens, Alstom und Babcock zu liefern. Seine Regelventile sind unverzichtbar für den sicheren und effizienten Betrieb großtechnischer Industrieanlagen.",
                hermannkoch: "Hermann Koch, auch bekannt als HK Cosmetic Packaging, ist ein hochspezialisierter Hersteller von spritzgegossenen Kunststoffgläsern, -sticks und Verpackungssystemen für die Kosmetik-, Pharma- und Chemieindustrie. Mit Sitz in der Nähe von Coburg, Deutschland, und einem Erbe von mehr als 100 Jahren verbindet HK traditionelle Handwerkskunst mit moderner Produktionstechnologie. Das Unternehmen bietet eine große Vielfalt an Formen, Oberflächen und Dekorationen und liefert sowohl Standard- als auch vollständig angepasste Verpackungslösungen für internationale Marken.",
                qualiform: "Qualiform ist ein renommierter französischer Hersteller hochwertiger Kunststoffverpackungen für die Kosmetik- und Pharmaindustrie. Das Unternehmen bietet eine breite Palette von Standardflaschen, -gläsern und maßgeschneiderten Verpackungslösungen, einschließlich fortschrittlicher Dekorationstechniken wie Siebdruck, Heißprägung und Metallisierung. Mit Sitz in Oyonnax, Frankreichs 'Kunststoff-Tal', ist Qualiform bekannt für seine Designfähigkeiten, kurze Lieferzeiten und einen starken Fokus auf Nachhaltigkeit.",
                rebhan: "Rebhan FPS Kunststoff-Verpackungen GmbH ist ein deutscher Hersteller von blasgeformten Kunststoffflaschen und Verpackungssystemen für Kosmetik, Pharmazie und Haushaltsprodukte. Mit Sitz in Stockheim kombiniert Rebhan Hochgeschwindigkeitsproduktion mit internen Design- und Werkzeugbau-Fähigkeiten, was eine schnelle Entwicklung sowohl von Standard- als auch von maßgeschneiderten Verpackungen ermöglicht. Als Teil der CERTINA Packaging Group arbeitet Rebhan eng mit HK Cosmetic Packaging und Trassl zusammen, um Kunden komplette Verpackungslösungen anzubieten.",
                trassl: "Trassl Polymer Solutions GmbH mit Sitz in Immenreuth, Deutschland, ist ein Spezialist für spritzgegossene und blasgeformte Kunststoffverpackungskomponenten. Das Sortiment des Unternehmens umfasst Sprühkappen, Weithalsgläser, Kanister und technische Teile für die Kosmetik-, Pharma- und Chemieindustrie. Trassl unterstützt Rapid Prototyping, Werkzeugbau und Großserienproduktion und liefert sowohl Standard- als auch maßgeschneiderte Lösungen.",
                aft: "AFT ist ein globaler Spezialist für Förder- und Automatisierungstechnik, der hauptsächlich die Automobil-, Krankenhaus- und Lagerindustrie bedient. Das Unternehmen entwirft, produziert und installiert fortschrittliche Materialflusssysteme einschließlich elektrischer Einschienenförderer, Palettenförderer und robotergestützter Kommissionierlösungen. Mit Tochtergesellschaften und Produktionsstätten in den USA, Mexiko, China, Korea, Großbritannien, Belgien und Polen unterstützt AFT OEMs und Blue-Chip-Kunden weltweit. Bekannt für seine ingenieurtechnische Exzellenz bietet AFT Lösungen für den Transport von Stückgewichten von 50 kg bis zu 3.000 kg und deckt vielfältige Anwendungen von Automobilmontagelinien bis hin zur Krankenhauslogistik und automatisierten Lagern ab. Seine hochwertigen Systeme gewährleisten effizienten, zuverlässigen Materialfluss und Prozessautomatisierung für einige der anspruchsvollsten Industrien der Welt.",
                demm: "DEMM ist ein führender Hersteller von Präzisions-Maschinenbaukomponenten wie Zahnrädern, Wellen und Lagern. Mit mehr als einem Jahrhundert ingenieurtechnischer Erfahrung bedient DEMM die Automobil-, Landmaschinen- und Industriesektoren von seinem historischen Werk in Porretta Terme, Italien. Das Unternehmen ist bekannt für sein technisches Fachwissen und seine Produktionsflexibilität und bietet sowohl Standard- als auch maßgeschneiderte Komponenten für eine Vielzahl von Anwendungen. DEMMs integrierte Fertigungsprozesse decken alles von der Schmiedearbeit bis zur Bearbeitung, Wärmebehandlung und Montage ab und gewährleisten höchste Qualitäts- und Haltbarkeitsstandards.",
                enorise: "ENORISE spezialisiert sich auf Softwareentwicklung und Testlösungen für die Mobilitätsindustrie mit Fokus auf elektrische und autonome Fahrzeuge der nächsten Generation. Mit Hauptsitz in Auburn Hills, USA, liefert das Unternehmen fortschrittliche Prüfstandsysteme und maßgeschneiderte Lösungen, die es Automobilherstellern ermöglichen, Antriebsstränge und Fahrzeugkomponenten für klimaneutrale Mobilität zu entwickeln, zu validieren und zu optimieren. ENORISEs Portfolio umfasst auch Engineering-Dienstleistungen und Simulationstechnologien, die Kunden von der Konzeption bis zur Serienproduktion in ihrem Übergang zu nachhaltiger Mobilität unterstützen.",
                shieldtech: "Shieldtec Group entwirft und produziert fortschrittliche thermische und akustische Abschirmprodukte, hauptsächlich für die Automobil-, Luft- und Raumfahrt- sowie Industriesektoren. Mit Standorten in der Schweiz (Sevelen) und den USA (Buford) entwickelt das Unternehmen Lösungen, die Hitze und Lärm in Motoren, Abgassystemen und Industrieanlagen reduzieren. Shieldtecs Expertise umfasst Hochtemperaturmaterialien, Leichtbau und maßgeschneidertes Engineering, was OEMs ermöglicht, strengere Emissions- und Komfortstandards zu erfüllen.",
                pal: "PAL Wiping Systems, 1922 gegründet und mit Sitz in Prag, Tschechische Republik, entwickelt und produziert fortschrittliche Wischermotoren und -systeme für Automobil- und Nutzfahrzeughersteller. PALs Produkte sind bekannt für ihre Zuverlässigkeit und Qualität und beliefern große globale OEMs mit sowohl Standard- als auch maßgeschneiderten Wischlösungen. Das Unternehmen betreibt moderne Produktionsanlagen, legt einen starken Fokus auf Innovation und beschäftigt rund 550 qualifizierte Mitarbeiter.",
                qcision: "Qcision (ehemals Feintool Technologie AG Lyss) ist ein Schweizer Technologieführer in Feinschneid- und Umformsystemen, der hochpräzise Pressen für automatisierte, großvolumige Metallbearbeitung liefert. Die Maschinen des Unternehmens werden in der Automobil-, Elektronik- und Konsumgüterindustrie eingesetzt, wo Feintoleranz und Wiederholbarkeit unerlässlich sind. Qcision bietet auch Digitalisierungs- und Automatisierungslösungen für Industrie 4.0-Produktionsumgebungen und hilft Kunden dabei, Produktivität und Flexibilität zu steigern.",
                scv: "SCV ist ein italienischer Hersteller von Spezialfahrzeugen mit Allradantrieb für Rettungsdienste, Polizei, Militär und Industriekunden. Mit mehr als 50 Jahren Erfahrung entwickelt und baut SCV robuste Fahrzeuge, die auf Zuverlässigkeit unter harten Bedingungen ausgelegt sind und Feuerwehren, Katastrophenschutzeinheiten und Sicherheitsbehörden unterstützen. Das Unternehmen bietet eine breite Palette von Fahrzeugen, von kompakten 4x4s bis hin zu schweren Lastwagen, alle für anspruchsvolle Einsätze konstruiert.",
                wegener: "Wegener+Stapel ist ein führender deutscher Hersteller von Kunststoffschweiss- und -verarbeitungsmaschinen. Das Unternehmen kombiniert die Expertise von Wegener, bekannt für seine hochpräzisen Kunststoffschweissgeräte, mit Stapel, einem Spezialisten für Kunststoffplatten-Verarbeitungssysteme. Zusammen bietet Wegener+Stapel ein umfassendes Portfolio von Heissgasschweissmaschinen, Extrusionsschweissgeräten, Stumpfschweissmaschinen und automatischen Plattenverarbeitungslinien. Ihre Ausrüstung wird in Industrien wie Automobil, Bauwesen, Chemiebearbeitung und Kunststoffherstellung eingesetzt. Mit einem starken Fokus auf Innovation, Qualität und Kundensupport bietet Wegener+Stapel sowohl Standardmaschinen als auch maßgeschneiderte Lösungen und hilft Kunden dabei, effiziente und zuverlässige Kunststoffverbindungs- und Fertigungsprozesse für eine Vielzahl von Anwendungen zu erreichen.",
                isolite: "ISOLITE ist ein Top-Lieferant von Hochtemperatur-Isolierungs- und Dichtungslösungen für Automobil-, Luft- und Raumfahrt- sowie Industrieanwendungen. Mit Sitz in Ludwigshafen, Deutschland, entwickelt ISOLITE innovative Materialien und Systeme, die maximale Wärmespeicherung bei minimalen Platz- und Gewichtsanforderungen bieten. Seine Produkte werden in Abgas-, Motor- und Batteriesystemen eingesetzt und helfen Kunden dabei, Energieeffizienz zu verbessern und Emissionen zu reduzieren. Mit Produktionsstätten in Europa, Nordamerika und Asien kombiniert ISOLITE globale Reichweite mit starkem Engineering und Kundensupport.",
                ust: "United Salon Technologies (UST) mit Hauptsitz in Solingen, Deutschland, ist ein führender Hersteller professioneller Friseurwerkzeuge und -geräte. Die Marken JAGUAR und TONDEO des Unternehmens sind weltweit bekannt für ihre hochwertigen Scheren, Rasiermesser, Bürsten und elektrischen Geräte. UST bedient Friseure in über 80 Ländern und kombiniert traditionelle Solinger Handwerkskunst mit modernster Design- und Produktionstechnik.",
                vielfaltmenue: "VielfaltMenü GmbH ist ein deutsches Catering-Unternehmen, das sich auf gesunde und nachhaltige Mahlzeitendienste für Schulen, Kindergärten und öffentliche Einrichtungen spezialisiert hat. Das Unternehmen konzentriert sich darauf, ausgewogene, nahrhafte Speisen mit regionalen Zutaten anzubieten und bietet eine Vielzahl von Menüoptionen, um verschiedene Ernährungsbedürfnisse und -vorlieben zu berücksichtigen. VielfaltMenüs Betrieb betont Lebensmittelsicherheit, Frische und Bildungswert und hilft Kindern und Jugendlichen dabei, gesunde Essgewohnheiten zu entwickeln.",
                coi: "COI GmbH ist ein deutsches Software-Unternehmen, das sich auf Dokumenten- und Workflow-Management-Lösungen spezialisiert hat. 1988 gegründet und mit Sitz in Erlangen entwickelt und implementiert COI digitale Archivierung, elektronisches Dokumentenmanagement (DMS/ECM) und Workflow-Automatisierungssysteme für mittelständische und große Unternehmen. Die Plattform unterstützt sichere, revisionssichere Handhabung sensibler Dokumente und Geschäftsprozesse und hilft Organisationen dabei, Effizienz, Transparenz und Compliance zu steigern. COIs anpassbare Lösungen werden weit verbreitet in Sektoren wie Gesundheitswesen, Industrie und öffentlichem Sektor eingesetzt und unterstützen digitale Transformation und Prozessoptimierung.",
                wps: "WPS (WPS Parking Solutions) ist ein führendes niederländisches Unternehmen, das innovative, cloudbasierte Parkraum-Management-Systeme anbietet. Spezialisiert auf offene, adaptive Lösungen entwickelt WPS Software-, Zahlungs- und Analysesysteme, die nahtlos mit Hardware integriert werden. Mit Büros in den Niederlanden, Belgien, Großbritannien, Kanada und den USA bietet WPS maßgeschneiderte Lösungen für Städte, Flughäfen, Krankenhäuser und Geschäftskunden weltweit. Das Unternehmen ist bekannt für seine benutzerfreundliche Technologie, flexible Architektur und einen starken Fokus auf digitale Transformation im Parkbereich.",
                mobotix: "MOBOTIX AG ist ein Pionier in der Entwicklung intelligenter Videoüberwachungssysteme und Netzwerkkameras. In Deutschland gegründet und heute ein globaler Player bietet MOBOTIX High-End-IP-Kameras, Videomanagement-Software und cloudbasierte Sicherheitslösungen für Industrien wie Fertigung, Einzelhandel, öffentlicher Sektor und kritische Infrastruktur. MOBOTIX ist anerkannt für seinen dezentralen Technologieansatz, der Edge-Analytics, Cybersicherheit und hohe Bildqualität in robusten, wetterfesten Designs kombiniert. Die Lösungen des Unternehmens werden in anspruchsvollen Umgebungen weltweit eingesetzt, um Menschen, Vermögenswerte und Daten zu schützen."
            }
        }
    }
};

// Make translations globally available
window.translations = translations;

function toggleLanguageMenu() {
    console.log('Language button clicked!');
    const switcher = document.querySelector('.language-switcher');
    const isOpen = switcher.classList.contains('open');
    
    // Wenn wir das Menü öffnen, aktualisieren wir den aktiven Status
    if (!isOpen) {
        updateActiveLanguageOption();
    }
    
    if (isOpen) {
        switcher.classList.remove('open');
        console.log('Menu closed');
    } else {
        switcher.classList.add('open');
        console.log('Menu opened');
    }
}

function updateActiveLanguageOption() {
    const currentLang = document.getElementById('current-lang').textContent.toLowerCase();
    // Alle Optionen deaktivieren
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });
    // Aktuelle Option aktivieren
    const currentOption = document.querySelector(`.language-option[onclick*="selectLanguage('${currentLang.toLowerCase()}')"]`);
    if (currentOption) {
        currentOption.classList.add('active');
        console.log('Active option set to:', currentLang);
    }
}

function selectLanguage(lang) {
    console.log('Language selected:', lang);
    
    const currentLang = document.getElementById('current-lang');
    const switcher = document.querySelector('.language-switcher');
    const options = document.querySelectorAll('.language-option');
    
    // Remove active class from all options
    options.forEach(option => option.classList.remove('active'));
    
    // Add active class to the clicked option
    const selectedOption = document.querySelector(`.language-option[onclick*="selectLanguage('${lang}')"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
        console.log('Option marked as active:', lang);
    }
    
    // Update button text
    currentLang.textContent = lang.toUpperCase();
    
    // Speichere die ausgewählte Sprache im localStorage
    localStorage.setItem('selectedLanguage', lang);
    console.log('Language saved to localStorage:', lang);
    
    // Übersetze die Seite
    translatePage(lang);
    
    // Close menu with animation
    switcher.classList.remove('open');
    
    // Visual feedback
    const btn = switcher.querySelector('.language-btn');
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    // Event für andere Scripts auslösen
    const languageChangeEvent = new CustomEvent('languageChanged', {
        detail: { language: lang }
    });
    document.dispatchEvent(languageChangeEvent);
    
    updateContent();
    closeLanguageMenu();
    
    console.log('Language changed to:', lang);
}

function translatePage(lang) {
    console.log('Translating page to:', lang);
    
    if (!translations[lang]) {
        console.error('Language not found:', lang);
        return;
    }
    
    const t = translations[lang];
    
    // Existing data-translate translations
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        } else {
            console.warn('Translation key not found:', key);
        }
    });
    
    // ADD THIS - Support for data-lang-key attributes (Portfolio page)
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const keys = key.split('.');
        
        let translation = t;
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            element.textContent = translation;
            console.log('Translated:', key, '→', translation);
        } else {
            console.warn('Translation key not found:', key);
        }
    });
    
    // Trigger custom event for Portfolio page
    const languageChangeEvent = new CustomEvent('languageChanged', {
        detail: { language: lang }
    });
    document.dispatchEvent(languageChangeEvent);
    
    // HIER EINFÜGEN - Übersetze alle Elemente mit data-lang-key Attribut (für Portfolio-Seite)
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const keys = key.split('.');
        
        let translation = t;
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            element.textContent = translation;
            console.log('Translated:', key, '→', translation);
        } else {
            console.warn('Translation key not found:', key);
        }
    });
    
    // NEUE DIREKTE TEXTÜBERSETZUNG FÜR SUSTAINABILITY TEXTE
    // Diese spezielle Suche findet die Absätze ohne auf Klassen zu vertrauen
    document.querySelectorAll('p').forEach(paragraph => {
        const text = paragraph.textContent.trim();
        
        // Economic success paragraph - sehr spezifische Suche
        if (text.includes('economic success') || text.includes('positively') || 
            text.includes('outperform in the long term') ||
            text.includes('wirtschaftlicher Erfolg') || text.includes('ergänzen') ||
            text.includes('besser abschneiden')) {
            paragraph.textContent = t.sustainability_values_text1;
            console.log('Economic success paragraph translated directly');
        }
        
        // Foundation paragraph - sehr spezifische Suche
        else if (text.includes('Since foundation') || text.includes('mind our responsibility') || 
                text.includes('for generations to come') ||
                text.includes('Seit der Gründung') || text.includes('achten wir auf') ||
                text.includes('kommende Generationen')) {
            paragraph.textContent = t.sustainability_values_text2;
            console.log('Foundation paragraph translated directly');
        }
    });
    
    // Spezielle Übersetzungen für spezifische IDs/Klassen
    const specialTranslations = {
        // Sustainability Page spezifische Übersetzungen
        '.sustainability-hero h1': 'sustainability_title',
        '.quote': 'sustainability_quote', 
        '.quote-author span': 'sustainability_author',
        '.section-title': function(element) {
            const text = element.textContent.trim();
            if (text.includes('Generate Values') || text.includes('Werte für Generationen')) {
                return 'sustainability_values_title';
            } else if (text.includes('ESG Principles') || text.includes('ESG-Prinzipien')) {
                return 'esg_title';
            } else if (text.includes('Sustainability in Action') || text.includes('Nachhaltigkeit in Aktion')) {
                return 'portfolio_title';
            } else if (text.includes('Downloads')) {
                return 'downloads_title';
            }
            return null;
        },
        '.section-subtitle': function(element) {
            const text = element.textContent.trim();
            if (text.includes('Environmental, Social') || text.includes('Umwelt-, Sozial-')) {
                return 'esg_subtitle';
            } else if (text.includes('Selected ESG achievements') || text.includes('Ausgewählte ESG-Erfolge')) {
                return 'portfolio_subtitle';
            } else if (text.includes('Access our key documents') || text.includes('Zugang zu unseren')) {
                return 'downloads_subtitle';
            }
            return null;
        },
        // Academy Page spezifische Übersetzungen
        '.academy-hero h1': 'academy_hero_title',
        '.academy-hero h2': 'academy_hero_subtitle', 
        '.academy-hero p': 'academy_hero_description',
        '.about-text h3': 'academy_about_title',
        '.about-text p:nth-of-type(1)': 'academy_about_p1',
        '.about-text p:nth-of-type(2)': 'academy_about_p2',
        '.about-text p:nth-of-type(3)': 'academy_about_p3',
        '.partners-section .section-title': 'academy_partners_title',
        '.partners-section .section-subtitle': 'academy_partners_subtitle',
        
        // Partner fields
        '.partner-field[data-partner="finance_legal"]': 'partner_finance_legal',
        '.partner-field[data-partner="ai_data"]': 'partner_ai_data',
        '.partner-field[data-partner="communication"]': 'partner_communication',
        '.partner-field[data-partner="rd"]': 'partner_rd',
        
        // Homepage - Navigation
        '.nav-links a:nth-child(1)': 'nav_home',
        '.nav-links a:nth-child(2)': 'nav_portfolio',
        '.nav-links a:nth-child(3)': 'nav_team',
        '.nav-links a:nth-child(4)': 'nav_academy',
        '.nav-links a:nth-child(5)': 'nav_sustainability',
        
        // Homepage - Hero Section
        '.hero h1': 'hero_title',
        '.hero h2': 'hero_subtitle',
        '.hero p': 'hero_text',
        '.hero .btn-primary': 'hero_btn_criteria',
        '.hero .btn-outline': 'hero_btn_portfolio',
        
        // Homepage - About Section
        '#about .section-title': 'about_title',
        '#about .section-subtitle': 'about_subtitle',
        '#about .kpi-header': function(element, t) {
            // Handle the "Our Impact in Numbers" with bold part
            element.innerHTML = `${t.about_kpi_headline} <span class="kpi-header-bold">${t.about_kpi_headline.split(' ').slice(-2).join(' ')}</span>`;
        },
        
        // Homepage - Investment Criteria
        '#investment-criteria .section-title': 'criteria_title',
        '#investment-criteria .section-subtitle': 'criteria_subtitle',
        
        // Homepage - Industry Experience
        '#industry-experience .section-title': 'industry_title',
        '#industry-experience .section-subtitle': 'industry_subtitle',
        
        // Homepage - Approach Section
        '#approach .section-title': 'approach_title',
        '#approach .section-subtitle': 'approach_subtitle',
        
        // Homepage - News Section
        '#news .section-title': 'news_title',
        '#news .section-subtitle': 'news_subtitle'
    };
    
    // Wende spezielle Übersetzungen an
    Object.entries(specialTranslations).forEach(([selector, keyOrFunction]) => {
        document.querySelectorAll(selector).forEach(element => {
            let key = keyOrFunction;
            if (typeof keyOrFunction === 'function') {
                key = keyOrFunction(element);
            }
            if (key && t[key]) {
                element.textContent = t[key];
            }
        });
    });
    
    // Tab Übersetzungen
    const tabMappings = {
        'Environmental': 'tab_environmental',
        'Umwelt': 'tab_environmental',
        'Social': 'tab_social', 
        'Soziales': 'tab_social',
        'Governance': 'tab_governance',
        'Unternehmensführung': 'tab_governance'
    };
    
    document.querySelectorAll('.tab-header').forEach(tab => {
        const text = tab.textContent.trim();
        const key = tabMappings[text];
        if (key && t[key]) {
            tab.textContent = t[key];
        }
    });
    
    // Übersetze Tab-Inhalte
    translateTabContent(lang);
    
    // Übersetze Portfolio-Beschreibungen
    translatePortfolioDescriptions(lang);
    
    // Übersetze Download-Links
    translateDownloadLinks(lang);
    
    // Academy-specific translations
    translateAcademyPartners(lang);
    
    // Homepage-specific translations
    translateHomepageContent(lang);
    
    // Team-specific translations
    translateTeamContent(lang);
    
    // ADD THIS LINE - Career-specific translations
    translateCareerContent(lang);
    
    // Portfolio Page specific translations - ADD THIS SECTION
    const portfolioHeroTitle = document.querySelector('.portfolio-hero h1');
    const portfolioHeroSubtitle = document.querySelector('.portfolio-hero h2');
    const portfolioHeroDescription = document.querySelector('.portfolio-hero p');
    
    if (portfolioHeroTitle) portfolioHeroTitle.textContent = t.portfolio_hero_title;
    if (portfolioHeroSubtitle) portfolioHeroSubtitle.textContent = t.portfolio_hero_subtitle;
    if (portfolioHeroDescription) portfolioHeroDescription.textContent = t.portfolio_hero_description;
    
    console.log('Page translation completed');
}

function translateTabContent(lang) {
    const t = translations[lang];
    
    // Environmental Tab
    const envContent = document.getElementById('environmental');
    if (envContent) {
        const envTitle = envContent.querySelector('h4');
        const envParagraphs = envContent.querySelectorAll('p');
        const envList = envContent.querySelectorAll('li');
        
        if (envTitle) envTitle.textContent = t.env_title;
        if (envParagraphs[0]) envParagraphs[0].textContent = t.env_intro;
        if (envParagraphs[1]) envParagraphs[1].textContent = t.env_conclusion;
        
        if (envList.length >= 5) {
            envList[0].textContent = t.env_item1;
            envList[1].textContent = t.env_item2;
            envList[2].textContent = t.env_item3;
            envList[3].textContent = t.env_item4;
            envList[4].textContent = t.env_item5;
        }
    }
    
    // Social Tab
    const socialContent = document.getElementById('social');
    if (socialContent) {
        const socialTitle = socialContent.querySelector('h4');
        const socialParagraphs = socialContent.querySelectorAll('p');
        const socialList = socialContent.querySelectorAll('li');
        
        if (socialTitle) socialTitle.textContent = t.social_title;
        if (socialParagraphs[0]) socialParagraphs[0].textContent = t.social_intro;
        if (socialParagraphs[1]) socialParagraphs[1].textContent = t.social_conclusion;
        
        if (socialList.length >= 5) {
            socialList[0].textContent = t.social_item1;
            socialList[1].textContent = t.social_item2;
            socialList[2].textContent = t.social_item3;
            socialList[3].textContent = t.social_item4;
            socialList[4].textContent = t.social_item5;
        }
    }
    
    // Governance Tab
    const govContent = document.getElementById('governance');
    if (govContent) {
        const govTitle = govContent.querySelector('h4');
        const govParagraphs = govContent.querySelectorAll('p');
        const govList = govContent.querySelectorAll('li');
        
        if (govTitle) govTitle.textContent = t.governance_title;
        if (govParagraphs[0]) govParagraphs[0].textContent = t.governance_intro;
        if (govParagraphs[1]) govParagraphs[1].textContent = t.governance_conclusion;
        
        if (govList.length >= 5) {
            govList[0].textContent = t.governance_item1;
            govList[1].textContent = t.governance_item2;
            govList[2].textContent = t.governance_item3;
            govList[3].textContent = t.governance_item4;
            govList[4].textContent = t.governance_item5;
        }
    }
}

function translatePortfolioDescriptions(lang) {
    const t = translations[lang];
    
    const portfolioMappings = {
        'REBHAN': 'rebhan_desc',
        'HORN': 'horn_desc',
        'UST': 'ust_desc',
        'Pruss': 'pruss_desc',
        'COI': 'coi_desc',
        'AFT': 'aft_desc'
    };
    
    document.querySelectorAll('.example-card').forEach(card => {
        const companyName = card.querySelector('.example-company')?.textContent.trim();
        const description = card.querySelector('.example-description');
        
        if (companyName && description && portfolioMappings[companyName]) {
            const key = portfolioMappings[companyName];
            if (t[key]) {
                description.textContent = t[key];
            }
        }
    });
}

function translateDownloadLinks(lang) {
    const t = translations[lang];
    
    document.querySelectorAll('.download-item').forEach(item => {
        const text = item.querySelector('.download-text');
        if (!text) return;
        
        const currentText = text.textContent.trim();
        
        if (currentText.includes('Declaration') || currentText.includes('Grundsatzerklärung')) {
            text.textContent = t.download_human_rights;
        } else if (currentText.includes('Business Partner') || currentText.includes('Geschäftspartner')) {
            text.textContent = t.download_business_code;
        } else if (currentText.includes('Whistleblower') || currentText.includes('Hinweisgebersystem')) {
            text.textContent = t.download_whistleblower;
        }
    });
}

// New function for Academy partner field translations
function translateAcademyPartners(lang) {
    const t = translations[lang];
    
    // Partner field mappings
    const partnerFieldMappings = {
        'Finance and Legal': 'partner_finance_legal',
        'Finanzen und Recht': 'partner_finance_legal',
        'Artificial Intelligence and Data Analytics': 'partner_ai_data',
        'Künstliche Intelligenz und Datenanalyse': 'partner_ai_data',
        'Communication and Negotiation': 'partner_communication',
        'Kommunikation und Verhandlung': 'partner_communication',
        'Research & Development': 'partner_rd',
        'Forschung & Entwicklung': 'partner_rd'
    };
    
    // Translate partner fields
    document.querySelectorAll('.partner-field').forEach(field => {
        const currentText = field.textContent.trim();
        
        // Find matching translation key
        let translationKey = null;
        for (const [text, key] of Object.entries(partnerFieldMappings)) {
            if (currentText === text || currentText.includes(text)) {
                translationKey = key;
                break;
            }
        }
        
        if (translationKey && t[translationKey]) {
            field.textContent = t[translationKey];
        }
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const switcher = document.querySelector('.language-switcher');
    if (switcher && !switcher.contains(event.target)) {
        switcher.classList.remove('open');
    }
});

// Close menu with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const switcher = document.querySelector('.language-switcher');
        if (switcher) {
            switcher.classList.remove('open');
        }
    }
});

// Initializer - wird ausgeführt, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', function() {
    // Warte kurz, damit der Header geladen ist
    setTimeout(() => {
        // Gespeicherte Sprache laden
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        console.log('Saved language found:', savedLanguage);
        
        // Sprache beim Start setzen
        const currentLang = document.getElementById('current-lang');
        if (currentLang) {
            currentLang.textContent = savedLanguage.toUpperCase();
            // Seite übersetzen
            translatePage(savedLanguage);
            // Aktiven Status aktualisieren
            updateActiveLanguageOption();
        }
    }, 500); // 500ms Verzögerung um sicherzustellen, dass Header geladen ist
});

// New function for Homepage-specific content translations
function translateHomepageContent(lang) {
    const t = translations[lang];
    
    // KPI Cards translation
    const kpiCards = document.querySelectorAll('#about .kpi-card');
    if (kpiCards.length >= 4) {
        // Experience card
        const experienceTitle = kpiCards[0].querySelector('.kpi-title');
        const experienceSubtitle = kpiCards[0].querySelector('.kpi-subtitle');
        if (experienceTitle) experienceTitle.textContent = t.about_experience_title;
        if (experienceSubtitle) experienceSubtitle.textContent = t.about_experience_subtitle;
        
        // Revenue card
        const revenueTitle = kpiCards[1].querySelector('.kpi-title');
        const revenueSubtitle = kpiCards[1].querySelector('.kpi-subtitle');
        if (revenueTitle) revenueTitle.textContent = t.about_revenue_title;
        if (revenueSubtitle) revenueSubtitle.textContent = t.about_revenue_subtitle;
        
        // Companies card
        const companiesTitle = kpiCards[2].querySelector('.kpi-title');
        const companiesSubtitle = kpiCards[2].querySelector('.kpi-subtitle');
        if (companiesTitle) companiesTitle.textContent = t.about_companies_title;
        if (companiesSubtitle) companiesSubtitle.textContent = t.about_companies_subtitle;
        
        // Employees card
        const employeesTitle = kpiCards[3].querySelector('.kpi-title');
        const employeesSubtitle = kpiCards[3].querySelector('.kpi-subtitle');
        if (employeesTitle) employeesTitle.textContent = t.about_employees_title;
        if (employeesSubtitle) employeesSubtitle.textContent = t.about_employees_subtitle;
    }
    
    // Additional KPI Cards (Countries and Continents)
    if (kpiCards.length >= 6) {
        // Countries card
        const countriesTitle = kpiCards[4].querySelector('.kpi-title');
        const countriesSubtitle = kpiCards[4].querySelector('.kpi-subtitle');
        if (countriesTitle) countriesTitle.textContent = t.about_countries_title;
        if (countriesSubtitle) countriesSubtitle.textContent = t.about_countries_subtitle;
        
        // Continents card
        const continentsTitle = kpiCards[5].querySelector('.kpi-title');
        const continentsSubtitle = kpiCards[5].querySelector('.kpi-subtitle');
        if (continentsTitle) continentsTitle.textContent = t.about_continents_title;
        if (continentsSubtitle) continentsSubtitle.textContent = t.about_continents_subtitle;
    }
    
    // Signature boxes (Long-term Partner & Special Situations)
    const signatureBoxes = document.querySelectorAll('#about .signature-box, #about .special-situationen-box');
    signatureBoxes.forEach(box => {
        const titleEl = box.querySelector('.signature-title');
        const textEl = box.querySelector('.signature-text');
        
        if (titleEl && textEl) {
            const titleText = titleEl.textContent.trim();
            if (titleText.includes('Partner') || titleText.includes('Long-term')) {
                titleEl.textContent = t.about_longterm_title;
                textEl.textContent = t.about_longterm_text;
            } else if (titleText.includes('Special') || titleText.includes('Sonder')) {
                titleEl.textContent = t.about_special_title;
                textEl.textContent = t.about_special_text;
            }
        }
    });
    
    // Chart subtitle
    const chartSubtitle = document.querySelector('#about .chart-subtitle');
    if (chartSubtitle) chartSubtitle.textContent = t.about_chart_subtitle;
    
    // Quote text
    const quoteText = document.querySelector('#about blockquote');
    if (quoteText) quoteText.textContent = t.about_quote_text;
    
    // Investment criteria cards
    const criteriaCards = document.querySelectorAll('#investment-criteria .criteria-card');
    const criteriaMapping = [
        { titleKey: 'criteria_revenue_title', valueKey: 'criteria_revenue_value' },
        { titleKey: 'criteria_situations_title', valueKey: 'criteria_situations_value' },
        { titleKey: 'criteria_region_title', valueKey: 'criteria_region_value' },
        { titleKey: 'criteria_shareholdings_title', valueKey: 'criteria_shareholdings_value' },
        { titleKey: 'criteria_equity_title', valueKey: 'criteria_equity_value' },
        { titleKey: 'criteria_profitability_title', valueKey: 'criteria_profitability_value' }
    ];
    
    criteriaCards.forEach((card, index) => {
        if (criteriaMapping[index]) {
            const titleEl = card.querySelector('.criteria-title, h3');
            const valueEl = card.querySelector('.criteria-value, .criteria-subtitle, p');
            
            if (titleEl && t[criteriaMapping[index].titleKey]) {
                titleEl.textContent = t[criteriaMapping[index].titleKey];
            }
            if (valueEl && t[criteriaMapping[index].valueKey]) {
                valueEl.textContent = t[criteriaMapping[index].valueKey];
            }
        }
    });
    
    // Industry items
    const industryItems = document.querySelectorAll('#industry-experience .industry-item');
    const industryMapping = [
        { titleKey: 'industry_industrials', textKey: 'industry_industrials_text' },
        { titleKey: 'industry_packaging', textKey: 'industry_packaging_text' },
        { titleKey: 'industry_automotive', textKey: 'industry_automotive_text' },
        { titleKey: 'industry_goods', textKey: 'industry_goods_text' },
        { titleKey: 'industry_software', textKey: 'industry_software_text' }
    ];
    
    industryItems.forEach((item, index) => {
        if (industryMapping[index]) {
            const titleEl = item.querySelector('.industry-title, h3');
            const textEl = item.querySelector('.industry-description, .industry-text, p');
            
            if (titleEl && t[industryMapping[index].titleKey]) {
                titleEl.textContent = t[industryMapping[index].titleKey];
            }
            if (textEl && t[industryMapping[index].textKey]) {
                textEl.textContent = t[industryMapping[index].textKey];
            }
        }
    });
    
    // Service cards (Approach section)
    const serviceCards = document.querySelectorAll('#approach .service-card');
    const serviceMapping = [
        { titleKey: 'approach_restructuring', textKey: 'approach_restructuring_text' },
        { titleKey: 'approach_investment', textKey: 'approach_investment_text' },
        { titleKey: 'approach_repositioning', textKey: 'approach_repositioning_text' }
    ];
    
    serviceCards.forEach((card, index) => {
        if (serviceMapping[index]) {
            const titleEl = card.querySelector('.service-title, h3');
            const textEl = card.querySelector('.service-description, .service-text, p');
            
            if (titleEl && t[serviceMapping[index].titleKey]) {
                titleEl.textContent = t[serviceMapping[index].titleKey];
            }
            if (textEl && t[serviceMapping[index].textKey]) {
                textEl.textContent = t[serviceMapping[index].textKey];
            }
        }
    });
    
    // Orbital labels (Carve-outs, Turnarounds, etc.)
    const orbitalLabels = document.querySelectorAll('.orbital-label');
    const orbitalMapping = ['carve_outs', 'turnarounds', 'succession', 'restructuring'];
    orbitalLabels.forEach((label, index) => {
        if (orbitalMapping[index] && t[orbitalMapping[index]]) {
            label.textContent = t[orbitalMapping[index]];
        }
    });
    
    // News loading message
    const newsMessage = document.querySelector('#news-container .news-message');
    if (newsMessage && newsMessage.textContent.includes('Loading')) {
        newsMessage.textContent = t.news_loading;
    }
    
    console.log('Homepage content translated to:', lang);
}

// New function for Team page translations
function translateTeamContent(lang) {
    const t = translations[lang];
    
    // Team hero section
    const teamHeroTitle = document.querySelector('.team-hero h1');
    const teamHeroSubtitle = document.querySelector('.team-hero h2');
    const teamHeroDescription = document.querySelector('.team-hero p');
    
    if (teamHeroTitle) teamHeroTitle.textContent = t.team_hero_title;
    if (teamHeroSubtitle) teamHeroSubtitle.textContent = t.team_hero_subtitle;
    if (teamHeroDescription) teamHeroDescription.textContent = t.team_hero_description;
    
    // Department headers - ERWEITERTE VERSION
    document.querySelectorAll('.department-title').forEach(title => {
        const category = title.closest('.department-header')?.getAttribute('data-category');
        if (category === 'managing-partner' || category === 'managing-partners') {
            title.textContent = t.managing_partners;
        } else if (category === 'ma') {
            title.textContent = t.ma_team;
        }
    });
    
    // ALTERNATIVE: Falls data-category nicht funktioniert, suche nach Text-Inhalt
    document.querySelectorAll('.department-title').forEach(title => {
        const currentText = title.textContent.trim();
        if (currentText.includes('Managing Partners') || currentText.includes('Managing Partner')) {
            title.textContent = t.managing_partners;
        }
    });
    
    // ZUSÄTZLICHE SELEKTOR-VARIANTEN für verschiedene HTML-Strukturen
    const managingPartnersHeaders = document.querySelectorAll('h2, h3, .section-title, .team-section-title');
    managingPartnersHeaders.forEach(header => {
        const text = header.textContent.trim();
        if (text.includes('Managing Partners') || text.includes('Managing Partner')) {
            header.textContent = t.managing_partners;
        }
    });
    
    console.log('Team content translated to:', lang);
}

// Add this function after the existing translateTeamContent function
function translateCareerContent(lang) {
    const t = translations[lang];
    
    // Career hero section - be more specific with selectors
    const careerHeroTitle = document.querySelector('.career-hero h1');
    const careerHeroSubtitle = document.querySelector('.career-hero h2');
    const careerHeroIntro = document.querySelector('.career-hero .hero-intro'); // More specific selector
    
    if (careerHeroTitle) careerHeroTitle.textContent = t.career_hero_title;
    if (careerHeroSubtitle) careerHeroSubtitle.textContent = t.career_hero_subtitle;
    if (careerHeroIntro) careerHeroIntro.textContent = t.career_hero_intro;
    
    // Job listings section title
    const jobSectionTitle = document.querySelector('.job-listings h2, .job-section h2');
    if (jobSectionTitle) jobSectionTitle.textContent = t.career_section_title;
    
    // No jobs message
    const noJobsHeading = document.querySelector('.no-jobs h3');
    const noJobsText = document.querySelector('.no-jobs p');
    if (noJobsHeading) noJobsHeading.textContent = t.career_no_jobs_heading;
    if (noJobsText) noJobsText.textContent = t.career_no_jobs_text;
    
    // Career contact section
    const contactHeading = document.querySelector('.career-contact h3');
    const contactText = document.querySelector('.career-contact p');
    if (contactHeading) contactHeading.textContent = t.career_contact_heading;
    if (contactText) contactText.textContent = t.career_contact_text;
    
    // Modal content labels
    const modalDescription = document.querySelector('#modal-job-description-label');
    const modalResponsibilities = document.querySelector('#modal-job-responsibilities-label');
    const modalRequirements = document.querySelector('#modal-job-requirements-label');
    const modalBenefits = document.querySelector('#modal-job-benefits-label');
    
    if (modalDescription) modalDescription.textContent = t.career_job_description;
    if (modalResponsibilities) modalResponsibilities.textContent = t.career_job_responsibilities;
    if (modalRequirements) modalRequirements.textContent = t.career_job_requirements;
    if (modalBenefits) modalBenefits.textContent = t.career_job_benefits;
    
    console.log('Career content translated to:', lang);
}