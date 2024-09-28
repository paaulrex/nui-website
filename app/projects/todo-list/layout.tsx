export default function TodoListLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="project-sect">
          {children}
      </section>
    );
  }
  