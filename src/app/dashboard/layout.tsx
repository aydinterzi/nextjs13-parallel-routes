export default function Layout({
  children,
  views,
  audience,
}: {
  children: React.ReactNode;
  views: React.ReactNode;
  audience: React.ReactNode;
}) {
  return (
    <>
      <h2 className="bg-blue-500">Dashboard layout</h2>
      {children}
      <div>{views}</div>
      <div>{audience}</div>
    </>
  );
}
