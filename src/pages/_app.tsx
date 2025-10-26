import '@/styles/globals.css'
import '@/styles/icons/icons.css'

import { MyAppProps } from "../components/layouts/types";
import { Layouts } from "../components/layouts/Layouts";
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default appWithTranslation(App); 