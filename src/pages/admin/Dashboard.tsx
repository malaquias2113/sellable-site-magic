import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users, Briefcase, MessageSquare, TrendingUp } from "lucide-react";

interface Stats {
  contacts: number;
  portfolio: number;
  testimonials: number;
  newContacts: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ contacts: 0, portfolio: 0, testimonials: 0, newContacts: 0 });
  const [recentContacts, setRecentContacts] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const [contacts, portfolio, testimonials, recent] = await Promise.all([
        supabase.from("contacts").select("*", { count: "exact", head: true }),
        supabase.from("portfolio_items").select("*", { count: "exact", head: true }),
        supabase.from("testimonials").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*").eq("status", "novo").order("created_at", { ascending: false }).limit(5),
      ]);

      setStats({
        contacts: contacts.count || 0,
        portfolio: portfolio.count || 0,
        testimonials: testimonials.count || 0,
        newContacts: recent.data?.length || 0,
      });
      setRecentContacts(recent.data || []);
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Total Contatos", value: stats.contacts, icon: Users, color: "text-blue-400" },
    { label: "Novos Contatos", value: stats.newContacts, icon: TrendingUp, color: "text-green-400" },
    { label: "Portfólio", value: stats.portfolio, icon: Briefcase, color: "text-primary" },
    { label: "Depoimentos", value: stats.testimonials, icon: MessageSquare, color: "text-purple-400" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ label, value, icon: Icon, color }, i) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-6 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
              </div>
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Contatos Recentes</h3>
        {recentContacts.length === 0 ? (
          <p className="text-muted-foreground text-sm">Nenhum contato novo.</p>
        ) : (
          <div className="space-y-3">
            {recentContacts.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.email || c.phone}</p>
                </div>
                <div className="text-right">
                  {c.plan && <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{c.plan}</span>}
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(c.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
