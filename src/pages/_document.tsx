import Document, { Html, Main, NextScript, Head } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Fleet Leasing Australia - Find Your Perfect Vehicle | Quality Fleet Management Solutions</title>
          <meta name="description" content="Fleet Leasing Australia - Your trusted source for quality vehicles and fleet management solutions" />
          <meta name="keywords" content="fleet management, vehicles, cars, trucks, fleet plan, automotive" />
          <meta name="author" content="Fleet Leasing Australia" />
          <meta name="robots" content="index, follow" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fleetplan.com/" />
          <meta property="og:title" content="Fleet Plan - Quality Vehicles & Fleet Management" />
          <meta property="og:description" content="Find the perfect vehicle for your needs with Fleet Plan's extensive selection and expert fleet management solutions." />
          <meta property="og:image" content="https://fleetplan.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://fleetplan.com/" />
          <meta property="twitter:title" content="Fleet Plan - Quality Vehicles & Fleet Management" />
          <meta property="twitter:description" content="Find the perfect vehicle for your needs with Fleet Plan's extensive selection and expert fleet management solutions." />
          <meta property="twitter:image" content="https://fleetplan.com/twitter-image.jpg" />
          
          {/* Google Tag Manager */}
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start'):
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K8QVGNHB');` }}/>
          {/* End Google Tag Manager */}
          
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-GGTMG9HJ02"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GGTMG9HJ02');
          `}}/>
          {/* End Google Analytics */}
          
          {/* Google Search Console Verification */}
          <meta name="google-site-verification" content="umV_-T_lsdAWUgkzMp61jWgZybFb6TNOYNT6WPvFUdY" />
          {/* End Google Search Console Verification */}
          
          {/* Font preloading for better performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8QVGNHB"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;