export default function TodoListLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="">
          {children}
      </section>
    );
  }
  