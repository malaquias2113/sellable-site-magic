import { ReactNode, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import {
  Crown, LayoutDashboard, Users, Briefcase, MessageSquare,
  LogOut, Menu, X, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Contatos", icon: Users, path: "/admin/contacts" },
  { label: "Portfólio", icon: Briefcase, path: "/admin/portfolio" },
  { label: "Depoimentos", icon: MessageSquare, path: "/admin/testimonials" },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Crown className="w-8 h-8 text-primary animate-pulse" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-center p-4">
        <div>
          <Crown className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Acesso Negado</h2>
          <p className="text-muted-foreground mb-4">Você não tem permissão de administrador.</p>
          <Button onClick={() => signOut()} variant="outline">Sair</Button>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border
        transform transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">King's</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map(({ label, icon: Icon, path }) => {
            const active = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => { navigate(path); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
                {active && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <header className="border-b border-border p-4 flex items-center gap-4 bg-card/50">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold text-foreground">
            {navItems.find(i => i.path === location.pathname)?.label || "Admin"}
          </h2>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
