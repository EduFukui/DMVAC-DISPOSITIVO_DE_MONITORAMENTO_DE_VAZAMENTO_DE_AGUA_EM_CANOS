function MetricCard({ title, value, unit, description, icon }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-800">
            {value}
            {unit && <span className="ml-1 text-lg font-medium">{unit}</span>}
          </p>
          {description && (
            <p className="mt-2 text-xs text-slate-500">{description}</p>
          )}
        </div>

        {icon && (
          <div className="rounded-xl bg-indigo-50 p-3 text-xl text-indigo-600">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export default MetricCard;
