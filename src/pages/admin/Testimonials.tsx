import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emptyItem = { client_name: "", company: "", role: "", content: "", rating: 5, avatar_url: "", featured: false };

const Testimonials = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyItem);
  const { toast } = useToast();

  const fetchItems = async () => {
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!form.client_name || !form.content) { toast({ title: "Nome e conteúdo obrigatórios", variant: "destructive" }); return; }

    if (editing) {
      await supabase.from("testimonials").update(form).eq("id", editing.id);
      toast({ title: "Depoimento atualizado" });
    } else {
      await supabase.from("testimonials").insert(form);
      toast({ title: "Depoimento adicionado" });
    }
    setShowForm(false);
    setEditing(null);
    setForm(emptyItem);
    fetchItems();
  };

  const handleEdit = (item: any) => {
    setEditing(item);
    setForm({ client_name: item.client_name, company: item.company || "", role: item.role || "", content: item.content, rating: item.rating, avatar_url: item.avatar_url || "", featured: item.featured });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("testimonials").delete().eq("id", id);
    toast({ title: "Depoimento excluído" });
    fetchItems();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Gerenciar Depoimentos</h3>
        <Button size="sm" onClick={() => { setEditing(null); setForm(emptyItem); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Adicionar
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-foreground">{editing ? "Editar" : "Novo"} Depoimento</h4>
            <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label>Nome do Cliente *</Label><Input value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Empresa</Label><Input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Cargo</Label><Input value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="bg-secondary" /></div>
            <div><Label>URL do Avatar</Label><Input value={form.avatar_url} onChange={e => setForm({ ...form, avatar_url: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Avaliação (1-5)</Label><Input type="number" min={1} max={5} value={form.rating} onChange={e => setForm({ ...form, rating: +e.target.value })} className="bg-secondary" /></div>
          </div>
          <div><Label>Depoimento *</Label><Textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="bg-secondary" rows={3} /></div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} />
            <Label>Destaque</Label>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave}>Salvar</Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {item.avatar_url ? (
                  <img src={item.avatar_url} alt={item.client_name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {item.client_name[0]}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{item.client_name}</p>
                  <p className="text-xs text-muted-foreground">{[item.role, item.company].filter(Boolean).join(" • ")}</p>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: item.rating }, (_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">"{item.content}"</p>
            {item.featured && <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Destaque</span>}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(item)}><Pencil className="w-3 h-3 mr-1" /> Editar</Button>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}><Trash2 className="w-3 h-3 mr-1" /> Excluir</Button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && !showForm && <p className="text-muted-foreground text-center py-8">Nenhum depoimento cadastrado.</p>}
    </div>
  );
};

export default Testimonials;
