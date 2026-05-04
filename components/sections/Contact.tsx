import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-24" id="contact" data-aos="fade-in" data-aos-delay="150">
      <h2 className="text-xl font-semibold text-[#F4F5E3] mb-8 tracking-tight">
        &lt; contact /&gt;
      </h2>
      <p data-aos="fade-in" data-aos-delay="180" className="text-[#D4D6A8] text-xs md:text-sm mb-8 max-w-xl leading-relaxed">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            type="button"
            className="bg-[#8EA832]/10 text-xs md:text-sm hover:bg-[#8EA832]/15 transition-colors px-8 py-5"
          >
            Get Contact Info
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#0f1610] border border-[#374D37]/40 text-[#D4D6A8] text-xs md:text-sm">
          <DialogHeader className="gap-1">
            <DialogTitle className="text-base md:text-lg text-[#F4F5E3]">Contact Information</DialogTitle>
            <DialogDescription className="text-[11px] md:text-xs text-[#D4D6A8]/80">
              Here's how you can reach me
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-[#8EA832] w-5"></i>
              <div>
                <p className="text-[#F4F5E3] font-medium">Email</p>
                <p className="text-[#D4D6A8]">janneiljanzen.go@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="fas fa-phone text-[#8EA832] w-5"></i>
              <div>
                <p className="text-[#F4F5E3] font-medium">Phone</p>
                <p className="text-[#D4D6A8]">+63962-742-1313</p>
                <p className="text-[#D4D6A8]">+63976-247-7125</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="fab fa-github text-[#8EA832] w-5"></i>
              <div>
                <p className="text-[#F4F5E3] font-medium">GitHub</p>
                <a 
                  href="https://github.com/janzengo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8EA832] hover:underline"
                >
                  github.com/janzengo
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="fas fa-globe text-[#8EA832] w-5"></i>
              <div>
                <p className="text-[#F4F5E3] font-medium">Website</p>
                <a 
                  href="https://janzen.is-a.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8EA832] hover:underline"
                >
                  janzen.is-a.dev
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
