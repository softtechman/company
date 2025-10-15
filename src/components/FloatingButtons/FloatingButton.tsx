export type FloatingButtonProps = {
  variant: string;
  href: string;
  iconSrc: string;
  showLabel?: boolean;
  label?: string;
};

export const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <div className={`relative box-border caret-transparent ${props.variant}`}>
      <a
        href={props.href}
        className={`absolute text-white items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-12 w-12 overflow-hidden rounded-full right-0 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] ${props.variant === "top-[-90px]" ? "bg-[linear-gradient(to_right_bottom,rgb(16,185,129),rgb(5,150,105),rgb(4,120,87))]" : props.variant === "top-[-30px]" ? "bg-[linear-gradient(to_right_bottom,rgb(59,130,246),rgb(37,99,235),rgb(29,78,216))]" : props.variant === "top-[30px]" ? "bg-[linear-gradient(to_right_bottom,rgb(99,102,241),rgb(79,70,229),rgb(67,56,202))]" : "bg-[linear-gradient(to_right_bottom,rgb(244,63,94),rgb(225,29,72),rgb(190,18,60))]"}`}
      >
        <div className="items-center box-border caret-transparent flex shrink-0 h-12 justify-center w-12">
          <img
            src={props.iconSrc}
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
        </div>
        {props.showLabel && (
          <span className="text-xs box-border caret-transparent block leading-4 text-nowrap ml-2">
            {props.label}
          </span>
        )}
      </a>
    </div>
  );
};
