import { useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button} from '@/components/ui/button';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSent(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Something went wrong');
      }

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setOpen(false);
      toast.success('Message sent! I will get back to you soon.');
    } catch (err: any) {
      setError(err?.message || 'Failed to send message');
      toast.error(err?.message || 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mb-24" id="contact" data-aos="fade-in" data-aos-delay="150">
      <h2 className="text-xl font-semibold text-[#F4F5E3] mb-8 tracking-tight">
        &lt; contact /&gt;
      </h2>
      <p data-aos="fade-in" data-aos-delay="180" className="text-[#D4D6A8] text-xs md:text-sm mb-8 max-w-xl leading-relaxed">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best
        to get back to you!
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            type="button"
            className="bg-[#8EA832]/10 text-xs md:text-sm hover:bg-[#8EA832]/15 transition-colors px-8 py-5"
          >
            Say Hello
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#0f1610] border border-[#374D37]/40 text-[#D4D6A8] text-xs md:text-sm">
          <DialogHeader className="gap-1">
            <DialogTitle className="text-base md:text-lg text-[#F4F5E3]">Get in touch</DialogTitle>
            <DialogDescription className="text-[11px] md:text-xs text-[#D4D6A8]/80">
              Send me a message and I’ll reply soon.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="flex flex-col gap-1">
              <span className="text-[11px] md:text-xs text-[#F4F5E3]">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="rounded-md bg-[#1B2B1B] border border-[#374D37]/50 px-3 py-2 text-xs md:text-sm text-[#F4F5E3] focus:outline-none focus:ring-2 focus:ring-[#8EA832]/60"
                placeholder="Your name"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[11px] md:text-xs text-[#F4F5E3]">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="rounded-md bg-[#1B2B1B] border border-[#374D37]/50 px-3 py-2 text-xs md:text-sm text-[#F4F5E3] focus:outline-none focus:ring-2 focus:ring-[#8EA832]/60"
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[11px] md:text-xs text-[#F4F5E3]">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="rounded-md bg-[#1B2B1B] border border-[#374D37]/50 px-3 py-2 text-xs md:text-sm text-[#F4F5E3] focus:outline-none focus:ring-2 focus:ring-[#8EA832]/60 resize-none"
                placeholder="What would you like to talk about?"
              />
            </label>

            {error && <p className="text-red-400 text-xs">{error}</p>}
            {sent && <p className="text-green-400 text-xs">Message sent!</p>}

            <DialogFooter className="pt-2">
              <DialogClose asChild>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md text-[#D4D6A8] text-xs md:text-sm hover:bg-[#233423] transition-colors"
                >
                  Cancel
                </button>
              </DialogClose>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 rounded-md bg-[#8EA832] text-[#0f1610] font-semibold text-xs md:text-sm hover:bg-[#7c942b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <Spinner className="text-[#0f1610]" />
                    Sending…
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
