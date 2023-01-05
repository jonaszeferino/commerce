import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Oms Commerce Tools</h1>
      <br />
      <Link href="/commerce">
        <a>Estoque Commerce</a>
      </Link>
      <br />
      <Link href="/oms">
        <a>Reservas OMS</a>
      </Link>
    </div>
  );
}
