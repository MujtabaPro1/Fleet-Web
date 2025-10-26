import AdminLayout from "./AdminLayout";
import Default from "./default";
import WithoutHeaderFooter from "./withoutHeaderFooter";

export const Layouts = {
  Default: Default,
  Admin: AdminLayout,
  WithoutHeaderFooter:WithoutHeaderFooter
};
export type LayoutKeys = keyof typeof Layouts; 

//export default Layouts; 
