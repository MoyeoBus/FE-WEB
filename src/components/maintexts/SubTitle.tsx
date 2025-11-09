type SubTitleProps = {
  subTitle: string;
};

const SubTitle = ({ subTitle }: SubTitleProps) => {
  return <h3 className="typo-h3 text-grayscale">{subTitle}</h3>;
};

export default SubTitle;
