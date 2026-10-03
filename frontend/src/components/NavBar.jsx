import {
  FaChartBar,
  FaCog,
  FaDatabase,
  FaInfoCircle,
  FaQuestionCircle,
  FaSignOutAlt,
  FaThLarge,
  FaTint,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { to: "/home", label: "Dashboard", icon: FaThLarge },
  { to: "/monitoramento", label: "Monitoramento", icon: FaTint },
  { to: "/relatorios", label: "Relatórios", icon: FaChartBar },
  { to: "/sobre", label: "Sobre o projeto", icon: FaInfoCircle },
  { to: "/ajuda", label: "Ajuda", icon: FaQuestionCircle },
];

function NavBar() {
  const navigate = useNavigate();

  function sair() {
    navigate("/");
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-indigo-700 px-5 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-700">
            <FaTint />
          </div>

          <div>
            <h1 className="text-lg font-extrabold text-white md:text-xl">
              DMVAC
            </h1>
            <p className="hidden text-xs text-indigo-100 sm:block">
              Monitoramento de água
            </p>
          </div>
        </div>

        <button
          type="button"
          title="Perfil"
          className="rounded-full p-1 text-white transition hover:bg-indigo-600"
        >
          <FaUserCircle className="text-3xl" />
        </button>
      </header>

      <aside className="fixed bottom-0 left-0 top-16 z-40 flex w-16 flex-col items-center bg-indigo-200 py-3 shadow-lg">
        <nav className="flex flex-col items-center gap-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              title={label}
              className={({ isActive }) =>
                `flex h-11 w-11 items-center justify-center rounded-xl transition ${
                  isActive
                    ? "bg-indigo-700 text-white shadow"
                    : "text-indigo-900 hover:bg-indigo-300"
                }`
              }
            >
              <Icon size={20} />
            </NavLink>
          ))}
        </nav>

        <div className="flex-1" />

        <NavLink
          to="/configuracoes"
          title="Configurações"
          className={({ isActive }) =>
            `mb-2 flex h-11 w-11 items-center justify-center rounded-xl transition ${
              isActive
                ? "bg-indigo-700 text-white"
                : "text-indigo-900 hover:bg-indigo-300"
            }`
          }
        >
          <FaCog size={20} />
        </NavLink>

        <button
          type="button"
          title="Sair"
          onClick={sair}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-red-700 transition hover:bg-red-500 hover:text-white"
        >
          <FaSignOutAlt size={20} />
        </button>
      </aside>
    </>
  );
}

export default NavBar;
