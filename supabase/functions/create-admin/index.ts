import { createClient } from "https://esm.sh/@supabase/supabase-js@2.87.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Create admin user
    const { data: user, error: userError } = await supabaseAdmin.auth.admin.createUser({
      email: "justinodosreis1104@gmail.com",
      password: "admin 131",
      email_confirm: true,
    });

    if (userError && !userError.message.includes("already been registered")) {
      throw userError;
    }

    let userId = user?.user?.id;

    // If user already exists, find them
    if (!userId) {
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existing = existingUsers?.users?.find(u => u.email === "justinodosreis1104@gmail.com");
      userId = existing?.id;
    }

    if (!userId) {
      throw new Error("Could not find or create user");
    }

    // Assign admin role
    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });

    if (roleError) throw roleError;

    return new Response(
      JSON.stringify({ success: true, message: "Admin user created and role assigned" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
