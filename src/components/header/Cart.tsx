import { Fragment, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { BsXLg, BsTrash, BsPlus, BsDash } from "react-icons/bs";
import Image from "next/image";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [cartItem, setCartItem] = useState(true);
  return (
    <Fragment>
      <LuShoppingBag
        className="w-8 h-8 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="absolute h-screen w-full top-0 left-0 flex">
          <div
            className="h-full opacity-[0.3] w-2/3 bg-black cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`h-full w-1/3 bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-[5s] ease-in-out text-black ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="custom-scrollbar">
              <div className="pt-6 pb-4 mx-6 border-b border-black flex justify-between items-center fixed top-0 right-0 left-0 bg-white">
                <h1 className="text-2xl">Votre panier</h1>
                <BsXLg
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="mt-[6rem] px-4">
                {!cartItem ? (
                  <p>Votre panier est vide</p>
                ) : (
                  <div className="mx-6">
                    <div className="flex gap-4">
                      <div className="w-40 h-[12rem] flex justify-center items-center bg-gray-100">
                        <Image
                          src="/pull.png"
                          alt=""
                          width={100}
                          height={110}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p>T-shirt Basic</p>
                        <small className="text-slate-400">Large</small>
                        <p>$71.95</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h1>Quantité</h1>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-40 hover:border-black">
                          <BsDash className="w-6 h-6 cursor-pointer" />
                          <p>1</p>
                          <BsPlus className="w-6 h-6 cursor-pointer" />
                        </div>
                        <div>
                          <BsTrash className="w-6 h-6 cursor-pointer p-2 rounded-full border border-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
