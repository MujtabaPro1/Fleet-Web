import { useRouter } from "next/router";
export default function GetLang() {
    const router = useRouter();
	let language = router.locale;
    return language;
}