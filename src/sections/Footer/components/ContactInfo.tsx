export const ContactInfo = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-center w-full">
      <h3 className="text-gray-800 text-xl font-semibold box-border caret-transparent leading-7">
        Contact us
      </h3>
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-4">
        <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3">
          <img
            src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-5.svg"
            alt="Icon"
            className="text-sky-500 box-border caret-transparent h-5 w-5"
          />
          <span className="text-gray-600 box-border caret-transparent block">
            <a
              href="tel://+91 6369366250"
              className="box-border caret-transparent"
            >
              +91 6369366250
            </a>
          </span>
        </div>
        <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3">
          <img
            src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-6.svg"
            alt="Icon"
            className="text-sky-500 box-border caret-transparent h-5 w-5"
          />
          <span className="text-gray-600 box-border caret-transparent block">
            <a
              href="https://wa.me/916369366250"
              className="box-border caret-transparent"
            >
              +91 6369366250
            </a>
          </span>
        </div>
        <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3">
          <img
            src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-7.svg"
            alt="Icon"
            className="text-sky-500 box-border caret-transparent h-5 w-5"
          />
          <span className="text-gray-600 box-border caret-transparent block">
            <a
              href="mailto://info@thecryptoape.com"
              className="box-border caret-transparent"
            >
              info@thecryptoape.com
            </a>
          </span>
        </div>
        <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3">
          <img
            src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-8.svg"
            alt="Icon"
            className="text-sky-500 box-border caret-transparent h-5 w-5"
          />
          <span className="text-gray-600 box-border caret-transparent block">
            <a
              href="https://t.me/Thecryptoape"
              className="box-border caret-transparent"
            >
              @Thecryptoape
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
