import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "SPELL ON YOU",
          href: "https://us.louisvuitton.com/eng-us/products/spell-on-you-nvprod3170150v",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-spell-on-you--LP0212_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "https://static-buyma-jp.akamaized.net/imgdata/item/200612/0055386828/266774856/428.jpg",
        },
        {
          name: "EASY POUCH ON STRAP",
          href: "https://us.louisvuitton.com/eng-us/products/easy-pouch-on-strap-epi-nvprod3410203v#M81239",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-easy-pouch-on-strap--M81239_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "https://buyma-global-prod-img.s3.amazonaws.com/img/upload/product_image/359c591f-0c75-4436-9fec-196893ab3b16/8fe9810c-693c-4540-a374-ebbdb878f293.png",
        },
        {
          name: "LV VOLT UPSIDE DOWN  ",
          href: "https://us.louisvuitton.com/eng-us/products/lv-volt-upside-down-play-large-bracelet-yellow-gold-nvprod3440248v#Q05433",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-upside-down-play-large-bracelet-yellow-gold--Q05433_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "RUN 55 SNEAKER ",
          href: "https://us.louisvuitton.com/eng-us/products/run-55-sneaker-nvprod3230236v#1A9H67",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-run-55-sneaker--AM4U1AMI54_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "TAMBOUR SLIM MONOGRAM 33",
          href: "https://us.louisvuitton.com/eng-us/products/tambour-slim-monogram-33-nvprod1160069v#QBBB56",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-tambour-slim-monogram-33--QBBB56_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "FÉLICIE POCHETTE",
          href: "https://us.louisvuitton.com/eng-us/products/bi-colored-pochette-felice-nvprod2450152v#M80482",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-f%C3%A9licie-pochette--M80482_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "MONOGRAM FLOWER CREWNECK",
          href: "https://us.louisvuitton.com/eng-us/products/monogram-flower-crewneck-nvprod3210104v#1A9GJ7",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-flower-crewneck--HMN14WJS5901_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "MESSENGER VOYAGE",
          href: "https://us.louisvuitton.com/eng-us/products/messenger-voyage-lv-aerogram-nvprod3430042v#M59329",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-messenger-voyage--M59329_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "OBERKAMPF ANKLE BOOT",
          href: "https://us.louisvuitton.com/eng-us/products/oberkampf-ankle-boot-nvprod3130262v#1A9ICT",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-oberkampf-ankle-boot--BM2Q1PPC02_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "MONOGRAM MESH BASEBALL CAP",
          href: "https://us.louisvuitton.com/eng-us/products/monogram-mesh-baseball-cap-nvprod3290004v#M77114",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-aerogram-cotton-cap--M77124_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "LV INSTINCT BRACELET",
          href: "#",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-instinct-bracelet--M00508_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "LV ACE ROUND SUNGLASSES",
          href: "https://us.louisvuitton.com/eng-us/products/lv-ace-round-sunglasses-nvprod3300002v#Z1590U",
          imageSrc:
            "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-ace-round-sunglasses--Z1590U_PM2_Front%20view.png?wid=456&hei=456",
          imageAlt:
            "LV ACE ROUND SUNGLASSES",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/home3" },
    { name: "Stores", href: "/home2" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            
                          </div>
                        ))}
                      </div>
                      {/* {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))} */}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.href}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-row space-x-8 m-8 justify-center items-center">
                <a
                  className=" hover:bg-slate-500 rounded-full"
                  href="https://www.instagram.com/louisvuitton/"
                >
                  <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
                </a>
                <a
                  className=" hover:bg-slate-500 rounded-full"
                  href="https://www.facebook.com/LouisVuitton/"
                >
                  <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" />
                </a>
                <a
                  className=" hover:bg-slate-500 rounded-full"
                  href="https://www.carousell.sg/p/join-telegram-group-louis-vuitton-nano-speedy-1136448469/"
                >
                  <img src="https://img.icons8.com/ios/50/000000/twitter-circled--v1.png" />{" "}
                </a>
              </div>
              <div>
                <div className="flex m-auto block space-x-3">
                  <div className=" border border-gray-300 min-w-38 rounded bg-slate-200  hover:bg-slate-400">
                    <a
                      className="flex flex-row items-center justify-center"
                      href="https://play.google.com/store/apps/details?id=com.vuitton.android&hl=ru&gl=US"
                    >
                      <img src="https://img.icons8.com/color/48/000000/google-play.png" />
                      Google Play Store
                    </a>
                  </div>
                  <div className=" border border-gray-300 min-w-38 rounded bg-slate-200  hover:bg-slate-400">
                    <a
                      className="flex flex-row items-center justify-center"
                      href="https://apps.apple.com/us/app/louis-vuitton/id709101942"
                    >
                      <img src="https://img.icons8.com/ios-filled/50/000000/apple-app-store--v1.png" />
                      Apple Store
                    </a>
                  </div>
                </div>
                <p className="text-gray-800 text-1xl mx-4 my-8">
                  &copy; Louis Vitton
                </p>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-grey-200">
        <p className="bg-gray-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Online Shop
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-16 w-auto"
                    src="https://e7.pngegg.com/pngimages/175/15/png-clipart-louis-vuitton-logo-icons-logos-emojis-iconic-brands.png"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex hidden">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600  text-indigo-600"
                                  : "border-transparent  text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3  gap-y-10 gap-x-8 text-sm">
                                      {/* {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
