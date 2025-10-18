export type DropdownButtonProps = {
    label: string;
    iconSrc: string;
    dropdownContent?: React.ReactNode;
  };
  
  export const DropdownButton = (props: DropdownButtonProps) => {
    return (
      <div className="relative group">
        <button className="text-base items-center bg-transparent caret-transparent inline-flex leading-6 text-center px-2 py-0 border-t-0 border-b-[3px] border-x-0 border-solid border-transparent hover:border-sky-500 group-hover:border-sky-500">
          {props.label}
          <img
            src={props.iconSrc}
            alt="Icon"
            className="font-bold box-border caret-transparent h-8 w-8 ml-1 transition-transform group-hover:rotate-180"
          />
        </button>
        {props.dropdownContent && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {props.dropdownContent}
          </div>
        )}
      </div>
    );
  };
  