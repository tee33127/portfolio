export default function FooterHeading({ text }: { text: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight" style={{ marginBottom: "20px" }}>
      {text}
    </h2>
  );
}
