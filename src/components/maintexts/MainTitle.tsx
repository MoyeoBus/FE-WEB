type MainTitleProps = {
  title: string;
};

const MainTitle = ({ title }: MainTitleProps) => {
  return <h1 className="typo-h1">{title}</h1>;
};

export default MainTitle;
