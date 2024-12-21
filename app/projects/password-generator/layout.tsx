export default function PassGenLayout({
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
  