import { MyPage } from "@/components/layouts/types";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

const Terms: MyPage = () => {
    return (
        <>
        <Head>
        <title>Fleet Leasing Australia | Terms and Conditions</title>
        </Head>
        <div className="flex flex-col items-center w-full bg-white">
            <div className="w-full max-w-[1280px] px-4 lg:px-0 py-8 lg:py-16">
                <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-12">Terms and Conditions</h1>
                
                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">1. General Information</h2>
                        <p className="text-[#4a5565]">
                            Any information or advice contained on this website is general in nature and has been prepared without taking into account your objectives, financial situation, or needs. Before acting on any information or advice on this website, you should consider its appropriateness to your circumstances and seek independent financial, legal, and taxation advice.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">2. Credit and Lending Products</h2>
                        <p className="text-[#4a5565]">
                            All applications for credit, leasing, or lending products are subject to Fleet Leasing Australia's standard credit approval criteria and/or the approval criteria of our product partners or lenders. Fees, charges, and terms and conditions apply.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">3. Accuracy of Information</h2>
                        <p className="text-[#4a5565]">
                            While every effort is made to ensure the accuracy and currency of information, Fleet Leasing Australia makes no representation or warranty as to the completeness, timeliness, or reliability of the information provided. Information may change without notice.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">4. Liability Disclaimer</h2>
                        <p className="text-[#4a5565]">
                            To the extent permitted by law, Fleet Leasing Australia and its related entities, directors, employees, and agents accept no liability for any loss or damage (whether direct, indirect, incidental, or consequential) arising out of or in connection with access to or use of this website or reliance on any information contained herein.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">5. Forward-Looking Statements</h2>
                        <p className="text-[#4a5565]">
                            This website may contain forward-looking statements, estimates, and projections. These statements are based on assumptions and are subject to risks and uncertainties. Actual results may differ materially. Fleet Leasing Australia does not guarantee that such statements will be achieved.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
                        <p className="text-[#4a5565]">
                            All content, branding, and materials on this website are the property of Fleet Leasing Australia unless otherwise stated. No content may be copied, reproduced, or distributed without prior written permission.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">7. Third-Party Links and Content</h2>
                        <p className="text-[#4a5565]">
                            This website may contain links to third-party sites for your convenience. Fleet Leasing Australia does not control and is not responsible for the content or accuracy of these external sites.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full border-none bg-white shadow-none mb-6 lg:mb-8">
                    <CardContent className="p-2 lg:p-4">
                        <h2 className="text-xl font-semibold mb-4">8. Amendments</h2>
                        <p className="text-[#4a5565] mb-6">
                            Fleet Leasing Australia reserves the right to amend these Terms and Conditions at any time without notice.
                        </p>
                    </CardContent>
                </Card>

                <p className="text-sm text-gray-500 text-center mt-4">Last updated on November 1, 2023</p>
            </div>
        </div>
         </>
    );
};

export default Terms;
Terms.Layout = "Default";