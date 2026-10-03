function StatusBadge({ ativo, ativoTexto, inativoTexto }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ${
        ativo
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {ativo ? ativoTexto : inativoTexto}
    </span>
  );
}

export default StatusBadge;
