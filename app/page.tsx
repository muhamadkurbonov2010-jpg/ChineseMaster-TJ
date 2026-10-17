export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Хуш омадед ба ChineseMaster TJ</h2>
      <p className="mt-4">Ин як скелети ибтидоӣ мебошад. Барои идома додан Supabase-ро пайваст кунед ва seed-ро иҷро кунед.</p>

      <section className="mt-6 p-4 bg-white border rounded">
        <h3 className="font-semibold">Қадамҳои дароз</h3>
        <ol className="list-decimal pl-5 mt-2">
          <li>Созмони Supabase ва танзим кардани env vars</li>
          <li>Запуски dev: <code>npm run dev</code></li>
          <li>Seed sample: <code>npm run seed:sample</code> (Талаб мекунад SERVICE_ROLE_KEY)</li>
        </ol>
      </section>
    </div>
  )
}
