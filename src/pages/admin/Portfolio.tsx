import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emptyItem = { title: "", description: "", image_url: "", site_url: "", client_name: "", category: "", featured: false, display_order: 0 };

const Portfolio = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyItem);
  const { toast } = useToast();

  const fetchItems = async () => {
    const { data } = await supabase.from("portfolio_items").select("*").order("display_order");
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!form.title) { toast({ title: "Título obrigatório", variant: "destructive" }); return; }

    if (editing) {
      await supabase.from("portfolio_items").update(form).eq("id", editing.id);
      toast({ title: "Item atualizado" });
    } else {
      await supabase.from("portfolio_items").insert(form);
      toast({ title: "Item adicionado" });
    }
    setShowForm(false);
    setEditing(null);
    setForm(emptyItem);
    fetchItems();
  };

  const handleEdit = (item: any) => {
    setEditing(item);
    setForm({ title: item.title, description: item.description || "", image_url: item.image_url || "", site_url: item.site_url || "", client_name: item.client_name || "", category: item.category || "", featured: item.featured, display_order: item.display_order });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("portfolio_items").delete().eq("id", id);
    toast({ title: "Item excluído" });
    fetchItems();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Gerenciar Portfólio</h3>
        <Button size="sm" onClick={() => { setEditing(null); setForm(emptyItem); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Adicionar
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-foreground">{editing ? "Editar" : "Novo"} Item</h4>
            <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label>Título *</Label><Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Cliente</Label><Input value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} className="bg-secondary" /></div>
            <div><Label>URL da Imagem</Label><Input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} className="bg-secondary" /></div>
            <div><Label>URL do Site</Label><Input value={form.site_url} onChange={e => setForm({ ...form, site_url: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Categoria</Label><Input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="bg-secondary" /></div>
            <div><Label>Ordem</Label><Input type="number" value={form.display_order} onChange={e => setForm({ ...form, display_order: +e.target.value })} className="bg-secondary" /></div>
          </div>
          <div><Label>Descrição</Label><Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="bg-secondary" /></div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-card border border-border rounded-xl overflow-hidden group">
            {item.image_url && (
              <div className="h-40 overflow-hidden">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            )}
            <div className="p-4 space-y-2">
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              {item.client_name && <p className="text-sm text-muted-foreground">{item.client_name}</p>}
              {item.featured && <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Destaque</span>}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => handleEdit(item)}><Pencil className="w-3 h-3 mr-1" /> Editar</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}><Trash2 className="w-3 h-3 mr-1" /> Excluir</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && !showForm && <p className="text-muted-foreground text-center py-8">Nenhum item no portfólio.</p>}
    </div>
  );
};

export default Portfolio;
