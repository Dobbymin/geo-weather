import { Button } from "@/shared";
import { Settings, Star } from "lucide-react";

export const HeaderActionButtons = () => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='ghost'
        size='icon'
        className='size-10 rounded-full text-muted-foreground transition-all active:scale-95'
      >
        <Star size={20} />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        className='size-10 rounded-full text-muted-foreground transition-all active:scale-95'
      >
        <Settings size={20} />
      </Button>
    </div>
  );
};
