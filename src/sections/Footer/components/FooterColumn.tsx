export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent text-center w-full md:w-6/12">
      <h3 className="text-gray-800 text-xl font-semibold box-border caret-transparent leading-7 text-left">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent list-none text-left mt-4 pl-0">
        {props.links.map((link, index) => (
          <li
            key={index}
            className={`box-border caret-transparent ${index > 0 ? "mt-2" : ""}`}
          >
            <a
              href={link.href}
              className="text-gray-600 text-sm box-border caret-transparent leading-5 hover:text-sky-500"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
