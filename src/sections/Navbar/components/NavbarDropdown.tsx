export type NavbarDropdownProps = {
  label: string;
  iconSrc: string;
  variant?: string;
};

export const NavbarDropdown = (props: NavbarDropdownProps) => {
  return (
    <div
      className={`relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] ${props.variant || ""}`}
    >
      <button className="text-base items-center bg-transparent caret-transparent inline-flex leading-6 text-center px-2 py-0 border-t-0 border-b-[3px] border-x-0 border-solid border-transparent hover:border-sky-500">
        {props.label}
        <img
          src={props.iconSrc}
          alt="Icon"
          className="font-bold box-border caret-transparent h-8 w-8 ml-1"
        />
      </button>
    </div>
  );
};
