
-- Remove the admin-only insert policy since we want public submissions
DROP POLICY "Admins can insert contacts" ON public.contacts;
