export default function Card({ icon, title, description, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl text-center ${className}`}>
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-700 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
