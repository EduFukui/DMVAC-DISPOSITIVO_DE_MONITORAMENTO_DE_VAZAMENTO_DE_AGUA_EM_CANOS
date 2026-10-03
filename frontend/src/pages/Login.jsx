import { useNavigate } from "react-router-dom";
import { FaTint } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  function entrar(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-slate-400 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-700 text-3xl text-white">
          <FaTint />
        </div>

        <h1 className="mt-5 text-center text-3xl font-extrabold text-slate-800">
          DMVAC
        </h1>

        <p className="mt-1 text-center text-sm text-slate-500">
          Sistema de monitoramento de vazamentos de água
        </p>

        <form onSubmit={entrar} className="mt-8 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-700 py-3 font-bold text-white transition hover:bg-indigo-800"
          >
            Entrar no sistema
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Interface de demonstração do projeto DMVAC.
        </p>
      </div>
    </main>
  );
}

export default Login;
