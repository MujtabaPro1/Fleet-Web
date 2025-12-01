import React, { PropsWithChildren } from "react";
import NavigationBarSection from "../header/header";
import SiteFooterSection from "../footer/footer";
import { figtree } from '../../styles/fonts/fonts';
import { useRouter } from "next/router";




const Default = ({ children }: PropsWithChildren) => {

	const router = useRouter();
	let language = router.locale;
	return (
		<>
			<div className={`${figtree.className} ${figtree.variable}`}>
				<NavigationBarSection />
				<main>{children}</main>
				<SiteFooterSection />
			</div>
		</>
	);
};
export default Default;