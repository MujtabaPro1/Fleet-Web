import React, { PropsWithChildren } from "react";
import Footer from "../footer/footer";
import { figtree } from '../../styles/fonts/fonts';
const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <div className={`${figtree.className}`}>
        <Footer />
        {props.children}
      </div>
    </>
  );
};
export default AdminLayout;