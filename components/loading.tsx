

import { Loader2 } from "lucide-react";


const Loading = () => {
  return (
    <section className=" py-44">
      <div className=" container">
      <Loader2 className="h-10 w-10 animate-spin text-zinc-500" />
      </div>
    </section>
  );
};

export default Loading;
