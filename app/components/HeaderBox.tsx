const HeaderBox = ({
  type = 'title',
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  // HeaderBoxProps declared in /types/index.d.ts
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-bankGradient">&nbsp;{user}</span> // &nbsp is an empty space character
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
