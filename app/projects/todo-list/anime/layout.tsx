export default function AnimeListLayout({
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
  