import { FloatingButton } from "@/components/FloatingButtons/FloatingButton";

export const FloatingButtons = () => {
  return (
    <div className="fixed box-border caret-transparent z-50 right-0 top-2/4">
      <FloatingButton
        variant="top-[-90px]"
        href="https://web.whatsapp.com/send?phone=916369366250"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-15.svg"
      />
      <FloatingButton
        variant="top-[-30px]"
        href="https://telegram.me/Thecryptoape/"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-16.svg"
      />
      <FloatingButton
        variant="top-[30px]"
        href="tel://+916369366250"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-17.svg"
      />
      <FloatingButton
        variant="top-[90px]"
        href="mailto://info@thecryptoape.com"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-18.svg"
        showLabel={true}
        label="Email Us"
      />
    </div>
  );
};
