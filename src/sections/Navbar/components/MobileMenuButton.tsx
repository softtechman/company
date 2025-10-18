export type MobileMenuButtonProps = {
    isOpen: boolean;
    onClick: () => void;
  };
  
  export const MobileMenuButton = (props: MobileMenuButtonProps) => {
    return (
      <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] lg:hidden lg:min-h-0 lg:min-w-0">
        <button 
          onClick={props.onClick}
          className="text-gray-700 bg-transparent caret-transparent text-center p-0 hover:text-teal-600"
        >
          {props.isOpen ? (
            <div className="">
              <svg
                className="h-6 w-6 absolute top-0 right-0"
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <img
              src="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 w-6"
            />
          )}
        </button>
      </div>
    );
  };
  