import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Trash2, Eye, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const statusColors: Record<string, string> = {
  novo: "bg-green-500/20 text-green-400",
  "em andamento": "bg-yellow-500/20 text-yellow-400",
  concluído: "bg-blue-500/20 text-blue-400",
  arquivado: "bg-muted text-muted-foreground",
};

const Contacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<any | null>(null);
  const { toast } = useToast();

  const fetchContacts = async () => {
    setLoading(true);
    const { data } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    setContacts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchContacts(); }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("contacts").update({ status }).eq("id", id);
    toast({ title: "Status atualizado" });
    fetchContacts();
  };

  const deleteContact = async (id: string) => {
    await supabase.from("contacts").delete().eq("id", id);
    toast({ title: "Contato excluído" });
    setSelectedContact(null);
    fetchContacts();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Gerenciar Contatos</h3>
        <Button variant="outline" size="sm" onClick={fetchContacts}>
          <RefreshCw className="w-4 h-4 mr-2" /> Atualizar
        </Button>
      </div>

      {/* Detail modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelectedContact(null)}>
          <div className="bg-card border border-border rounded-xl p-6 max-w-md w-full space-y-4" onClick={e => e.stopPropagation()}>
            <h4 className="text-lg font-bold text-foreground">{selectedContact.name}</h4>
            {selectedContact.email && <p className="text-sm text-muted-foreground">📧 {selectedContact.email}</p>}
            {selectedContact.phone && <p className="text-sm text-muted-foreground">📱 {selectedContact.phone}</p>}
            {selectedContact.plan && <p className="text-sm"><span className="text-primary font-medium">Plano:</span> {selectedContact.plan}</p>}
            {selectedContact.message && (
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Mensagem:</p>
                <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-lg">{selectedContact.message}</p>
              </div>
            )}
            <div className="flex gap-2 flex-wrap">
              {["novo", "em andamento", "concluído", "arquivado"].map(s => (
                <Button key={s} size="sm" variant={selectedContact.status === s ? "default" : "outline"} onClick={() => updateStatus(selectedContact.id, s)}>
                  {s}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="destructive" size="sm" onClick={() => deleteContact(selectedContact.id)}>
                <Trash2 className="w-4 h-4 mr-1" /> Excluir
              </Button>
              <Button variant="outline" size="sm" onClick={() => setSelectedContact(null)}>Fechar</Button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-muted-foreground">Carregando...</p>
      ) : contacts.length === 0 ? (
        <p className="text-muted-foreground">Nenhum contato encontrado.</p>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left p-3 text-muted-foreground font-medium">Nome</th>
                  <th className="text-left p-3 text-muted-foreground font-medium hidden sm:table-cell">Email</th>
                  <th className="text-left p-3 text-muted-foreground font-medium hidden md:table-cell">Plano</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(c => (
                  <tr key={c.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="p-3 text-foreground font-medium">{c.name}</td>
                    <td className="p-3 text-muted-foreground hidden sm:table-cell">{c.email || "-"}</td>
                    <td className="p-3 hidden md:table-cell">
                      {c.plan ? <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{c.plan}</span> : "-"}
                    </td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[c.status] || ""}`}>{c.status}</span>
                    </td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedContact(c)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
