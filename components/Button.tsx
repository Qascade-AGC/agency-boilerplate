type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`}
      type="button"
    >
      {children}
    </button>
  )
}
