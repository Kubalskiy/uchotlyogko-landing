export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        УчётЛёгко
      </h1>
      <p style={{ color: "#6b7280", fontSize: "1.125rem", maxWidth: 480 }}>
        Приложение в разработке. Скоро здесь появится полноценная бухгалтерия
        для вашего бизнеса.
      </p>
      <div
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          background: "#dcfce7",
          color: "#16a34a",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        ✓ Skeleton deployed — stack ready
      </div>
    </main>
  );
}
