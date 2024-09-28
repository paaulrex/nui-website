export default function ProjectsLayout({
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
  