import Head from "next/head";
import Footer from "components/blocks/footer";

export interface PageProps {
  title?: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}Luke&apos;s Next App</title>
      </Head>

      {children}

      <Footer />
    </>
  );
};

export default Page;
