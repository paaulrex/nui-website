export default function CalculatorLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="w-full">
          {children}
      </section>
    );
  }
  