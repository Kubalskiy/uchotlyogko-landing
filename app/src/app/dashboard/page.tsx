// Dashboard skeleton — authentication + real data will be added in DIG-3
export default function DashboardPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
        Дашборд
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {["Доходы", "Расходы", "Остаток", "Отчёты"].map((title) => (
          <div
            key={title}
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{title}</p>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginTop: "0.5rem",
                color: "#111827",
              }}
            >
              —
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
