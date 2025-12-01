import { MyPage } from "@/components/layouts/types";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy: MyPage = () => {
    return (
        <div className="flex flex-col items-center w-full bg-white">
            <div className="w-full max-w-[1280px] px-4 lg:px-0 py-8 lg:py-16">
                <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-12">Privacy Policy</h1>
                
                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">1. Overview</h2>
                        <p className="text-[#4a5565]">
                            At Fleet Leasing Australia, we respect your privacy and are committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">2. Why We Collect Your Information</h2>
                        <p className="text-[#4a5565]">
                            We collect personal information so we can provide and improve our products and services, manage relationships with clients and suppliers, and comply with legal and regulatory obligations.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">3. Information We Collect</h2>
                        <p className="text-[#4a5565]">
                            The personal information we collect may include your name, contact details, ABN, driver licence, financial details, employment details, and information related to your leasing or finance application.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">4. How We Collect Information</h2>
                        <p className="text-[#4a5565]">
                            We collect information directly from you when you complete online forms, call or email us, or engage with us via social media or third-party partners. We may also collect information from credit reporting bodies, brokers, or vehicle suppliers where authorised by you.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">5. How We Use Your Information</h2>
                        <p className="text-[#4a5565]">
                            Your information may be used to:<br />
                            • Assess eligibility for leasing or finance products<br />
                            • Provide vehicle sourcing and delivery services<br />
                            • Communicate offers, promotions, and updates relevant to your enquiry<br />
                            • Meet our legal and compliance obligations
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">6. Disclosure of Information</h2>
                        <p className="text-[#4a5565]">
                            We may share your information with:<br />
                            • Lenders, insurers, and credit reporting bodies<br />
                            • Vehicle manufacturers, dealers, and delivery partners<br />
                            • Professional advisers, auditors, and IT service providers<br />
                            • Government and regulatory authorities, where required by law
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">7. Data Security</h2>
                        <p className="text-[#4a5565]">
                            We take all reasonable steps to protect your personal information from misuse, loss, or unauthorised access. Information is stored securely using encrypted systems and access controls.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">8. Access and Correction</h2>
                        <p className="text-[#4a5565]">
                            You may request access to, or correction of, the personal information we hold about you by contacting us at: contact@fleetleasingaustralia.com.au
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">10. Website and Cookies</h2>
                        <p className="text-[#4a5565]">
                            We may collect non-personal information (e.g., IP address, browser type) to improve website functionality. Cookies help us enhance your user experience.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none mb-6 lg:mb-4">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">11. Updates to this Policy</h2>
                        <p className="text-[#4a5565]">
                            This Privacy Policy may be updated periodically. The latest version will always be available at fleetleasingaustralia.com.au/privacy-policy.
                        </p>
                    </CardContent>
                </Card>

                <p className="text-sm text-gray-500 text-center mt-4">Last updated on November 1, 2023</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
PrivacyPolicy.Layout = "Default";