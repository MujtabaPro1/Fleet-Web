import React, { PropsWithChildren } from "react";
import { figtree } from '../../styles/fonts/fonts';
import { useRouter } from "next/router";

const WithoutHeaderFooter = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	let language = router.locale;
	return (
		<>
			<div className={`${figtree.className}`}>
				<main>{children}</main>
			</div>
		</>
	);
};
export default WithoutHeaderFooter;