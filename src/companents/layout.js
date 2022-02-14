import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto bg-gray-200 w-full  mx-auto px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
